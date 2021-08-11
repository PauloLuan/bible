const baseUrl = ''

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Cifras Católicas. Todos os direitos reservados.`,
  author: {
    name: 'Paulo Luan',
    github: 'https://github.com/pauloluan',
    linkedin: 'https://linkedin.com/in/pauloluan',
    email: 'pauloluan.inova@gmail.com'
  },
  youtube: '',
  seo: {
    title: 'Cifras Católicas',
    titleTemplate: '%s - Cifras Católicas',
    description:
      'Cifras católicas e tablaturas de músicas para violão, guitarra e baixo. Possui vídeo-aulas e professores. Cifras de músicas com tablaturas, desenhos de acordes e variação de tom de violão, guitarra e muitos outros instrumentos.',
    siteUrl: `${baseUrl}`,
    twitter: {
      handle: '@cifras-catolicas',
      site: '@cifras-catolicas',
      cardType: 'summary_large_image'
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${baseUrl}`,
      title: 'Cifras Católicas',
      description:
        'Cifras católicas e tablaturas de músicas para violão, guitarra e baixo. Possui vídeo-aulas e professores. Cifras de músicas com tablaturas, desenhos de acordes e variação de tom de violão, guitarra e muitos outros instrumentos.',
      site_name:
        'Cifras Católicas: tablaturas e cifras de músicas para violão, guitarra e baixo. Possui vídeo-aulas e professores. Cifras de músicas com tablaturas, desenhos de acordes e variação de tom de violão, guitarra e muitos outros instrumentos.',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1240,
          height: 480,
          alt: 'Cifras Católicas: tablaturas e cifras de músicas para violão, guitarra e baixo. Possui vídeo-aulas e professores. Cifras de músicas com tablaturas, desenhos de acordes e variação de tom de violão, guitarra e muitos outros instrumentos.'
        },
        {
          url: `${baseUrl}/twitter-og-image.png`,
          width: 1012,
          height: 506,
          alt: 'Cifras Católicas: tablaturas e cifras de músicas para violão, guitarra e baixo. Possui vídeo-aulas e professores. Cifras de músicas com tablaturas, desenhos de acordes e variação de tom de violão, guitarra e muitos outros instrumentos.'
        }
      ]
    }
  }
}

export default siteConfig
