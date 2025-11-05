import React, { useState, type FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  selectIsCheckoutOpen,
  selectCurrentStep,
  selectDelivery,
  selectPayment,
  selectOrderId,
  setDeliveryData,
  setPaymentData,
  setOrderId,
  setCurrentStep,
  closeCheckout,
  resetCheckout,
  type DeliveryData,
  type PaymentData,
} from '../../store/checkoutSlice';
import { selectCartItems, selectCartTotal, clearCart } from '../../store/cartSlice';
import * as S from './styles';

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsCheckoutOpen);
  const currentStep = useAppSelector(selectCurrentStep);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const deliveryData = useAppSelector(selectDelivery);
  const paymentData = useAppSelector(selectPayment);
  const orderId = useAppSelector(selectOrderId);

  // Delivery form state
  const [receiver, setReceiver] = useState(deliveryData?.receiver || '');
  const [address, setAddress] = useState(deliveryData?.address.description || '');
  const [city, setCity] = useState(deliveryData?.address.city || '');
  const [zipCode, setZipCode] = useState(deliveryData?.address.zipCode || '');
  const [number, setNumber] = useState(deliveryData?.address.number?.toString() || '');
  const [complement, setComplement] = useState(deliveryData?.address.complement || '');

  // Payment form state
  const [cardName, setCardName] = useState(paymentData?.card.name || '');
  const [cardNumber, setCardNumber] = useState(paymentData?.card.number || '');
  const [cardCode, setCardCode] = useState(paymentData?.card.code?.toString() || '');
  const [cardMonth, setCardMonth] = useState(paymentData?.card.expires.month?.toString() || '');
  const [cardYear, setCardYear] = useState(paymentData?.card.expires.year?.toString() || '');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeCheckout());
  };

  const handleDeliverySubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!receiver || !address || !city || !zipCode || !number) {
      setError('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const delivery: DeliveryData = {
      receiver,
      address: {
        description: address,
        city,
        zipCode,
        number: parseInt(number),
        complement: complement || undefined,
      },
    };

    dispatch(setDeliveryData(delivery));
    dispatch(setCurrentStep('payment'));
  };

  const handlePaymentSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!cardName || !cardNumber || !cardCode || !cardMonth || !cardYear) {
      setError('Por favor, preencha todos os campos do cartão');
      setIsSubmitting(false);
      return;
    }

    const payment: PaymentData = {
      card: {
        name: cardName,
        number: cardNumber,
        code: parseInt(cardCode),
        expires: {
          month: parseInt(cardMonth),
          year: parseInt(cardYear),
        },
      },
    };

    dispatch(setPaymentData(payment));

    // Prepare checkout data
    const checkoutData = {
      products: cartItems.map((item: any) => ({
        id: item.id,
        price: item.preco,
      })),
      delivery: deliveryData,
      payment,
    };

    try {
      const response = await fetch('https://api-ebac.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
      });

      if (!response.ok) {
        throw new Error('Erro ao processar pagamento');
      }

      const data = await response.json();
      dispatch(setOrderId(data.orderId));
      dispatch(setCurrentStep('confirmation'));
      dispatch(clearCart());
    } catch (err) {
      setError('Erro ao finalizar pedido. Tente novamente.');
      console.error('Checkout error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToDelivery = () => {
    dispatch(setCurrentStep('delivery'));
  };

  const handleFinish = () => {
    dispatch(resetCheckout());
    dispatch(closeCheckout());
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <S.Overlay onClick={handleClose}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        {currentStep === 'delivery' && (
          <>
            <S.Title>Entrega</S.Title>
            <S.Form onSubmit={handleDeliverySubmit}>
              <S.InputGroup>
                <S.Label htmlFor="receiver">Quem irá receber</S.Label>
                <S.Input
                  id="receiver"
                  type="text"
                  value={receiver}
                  onChange={(e) => setReceiver(e.target.value)}
                  placeholder="Nome completo"
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="address">Endereço</S.Label>
                <S.Input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rua, avenida, etc"
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="city">Cidade</S.Label>
                <S.Input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Cidade"
                  required
                />
              </S.InputGroup>

              <S.Row>
                <S.InputGroup>
                  <S.Label htmlFor="zipCode">CEP</S.Label>
                  <S.Input
                    id="zipCode"
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="00000-000"
                    maxLength={9}
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="number">Número</S.Label>
                  <S.Input
                    id="number"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="123"
                    required
                  />
                </S.InputGroup>
              </S.Row>

              <S.InputGroup>
                <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
                <S.Input
                  id="complement"
                  type="text"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  placeholder="Apto, bloco, etc"
                />
              </S.InputGroup>

              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

              <S.Button type="submit">Continuar com o pagamento</S.Button>
              <S.BackButton type="button" onClick={handleClose}>
                Voltar para o carrinho
              </S.BackButton>
            </S.Form>
          </>
        )}

        {currentStep === 'payment' && (
          <>
            <S.Title>Pagamento - Valor a pagar R$ {formatPrice(cartTotal)}</S.Title>
            <S.Form onSubmit={handlePaymentSubmit}>
              <S.InputGroup>
                <S.Label htmlFor="cardName">Nome no cartão</S.Label>
                <S.Input
                  id="cardName"
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value.toUpperCase())}
                  placeholder="NOME COMPLETO"
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                <S.Input
                  id="cardNumber"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="0000 0000 0000 0000"
                  maxLength={16}
                  required
                />
              </S.InputGroup>

              <S.InputGroup>
                <S.Label htmlFor="cardCode">CVV</S.Label>
                <S.Input
                  id="cardCode"
                  type="text"
                  value={cardCode}
                  onChange={(e) => setCardCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="123"
                  maxLength={3}
                  required
                />
              </S.InputGroup>

              <S.Row>
                <S.InputGroup>
                  <S.Label htmlFor="cardMonth">Mês de vencimento</S.Label>
                  <S.Input
                    id="cardMonth"
                    type="number"
                    value={cardMonth}
                    onChange={(e) => setCardMonth(e.target.value)}
                    placeholder="MM"
                    min="1"
                    max="12"
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="cardYear">Ano de vencimento</S.Label>
                  <S.Input
                    id="cardYear"
                    type="number"
                    value={cardYear}
                    onChange={(e) => setCardYear(e.target.value)}
                    placeholder="AAAA"
                    min="2025"
                    required
                  />
                </S.InputGroup>
              </S.Row>

              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

              <S.Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processando...' : 'Finalizar pagamento'}
              </S.Button>
              <S.BackButton type="button" onClick={handleBackToDelivery}>
                Voltar para a edição de endereço
              </S.BackButton>
            </S.Form>
          </>
        )}

        {currentStep === 'confirmation' && orderId && (
          <>
            <S.Title>Pedido realizado - {orderId}</S.Title>
            <S.ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </S.ConfirmationText>
            <S.Button onClick={handleFinish}>Concluir</S.Button>
          </>
        )}
      </S.Sidebar>
    </S.Overlay>
  );
};

export default Checkout;
