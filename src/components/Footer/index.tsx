import { Container, Logo, Social, SocialIcon, Texto } from './styles'
import logo from '../../assets/logo_efood.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const Footer = () => (
  <Container>
    <Logo src={logo} alt="efood" />
    <Social>
      <SocialIcon src={instagram} alt="Instagram" />
      <SocialIcon src={facebook} alt="Facebook" />
      <SocialIcon src={twitter} alt="Twitter" />
    </Social>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
    </Texto>
  </Container>
)

export default Footer