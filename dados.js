let dados = [
    {
        titulo: "Ubuntu",
        descricao: "O Ubuntu é uma das distribuições Linux mais populares, especialmente entre iniciantes, devido à sua facilidade de uso e grande comunidade. Ele oferece suporte a longo prazo (LTS) e uma ampla gama de softwares disponíveis. Além disso, o Ubuntu é uma excelente escolha tanto para uso em desktop quanto em servidores. Com um foco em atualizações regulares e a introdução de novas tecnologias, o Ubuntu se destaca pela sua estabilidade e vasta documentação, o que facilita a vida de novos usuários. No entanto, alguns podem considerá-lo sobrecarregado com software desnecessário.",
        link: "https://ubuntu.com/",
        imagem: "ubuntu-logo.png",
        dataLancamento: "2004",
        requisitos: "1 GB RAM, 10 GB de espaço em disco",
        foco: "desktop, servidor, desenvolvimento",
        gerenciadorPacotes: "apt",
        ambienteDesktopPadrao: "GNOME",
        caracteristicas: "Snap, Flatpak, Unity (versões anteriores), Cosmic, Ubuntu Pro",
        pros: "Grande comunidade, ampla variedade de software, fácil de usar, suporte a longo prazo",
        contras: "Pode ser considerado bloatware por alguns usuários, atualizações podem ser intrusivas"
    },
    {
        titulo: "Fedora",
        descricao: "O Fedora é conhecido por seu foco em inovação e por sempre trazer as últimas tecnologias, sendo uma ótima escolha para desenvolvedores. Ele utiliza tecnologias como Wayland e Btrfs por padrão, e é um excelente ambiente para quem busca uma plataforma moderna e robusta. Sua comunidade é bastante ativa, e o Fedora tem uma postura firme em relação ao uso de software livre. No entanto, as atualizações frequentes podem ser um desafio para iniciantes, pois podem causar instabilidades ocasionais. Ainda assim, é uma excelente escolha para quem quer estar na vanguarda da tecnologia Linux.",
        link: "https://getfedora.org/",
        imagem: "fedora-logo.png",
        dataLancamento: "2003",
        requisitos: "2 GB RAM, 20 GB de espaço em disco",
        foco: "desktop, desenvolvimento, servidor",
        gerenciadorPacotes: "dnf",
        ambienteDesktopPadrao: "GNOME",
        caracteristicas: "Wayland, Btrfs, SELinux, Silverblue",
        pros: "Inovação constante, comunidade ativa, ótimo para desenvolvimento, estabilidade",
        contras: "Curva de aprendizado um pouco mais íngreme para iniciantes, atualizações frequentes podem causar instabilidades"
    },
    {
        titulo: "Debian",
        descricao: "O Debian é conhecido por ser uma das distribuições Linux mais estáveis e confiáveis, com uma história longa e respeitável. Ele é amplamente utilizado em servidores, mas também pode ser utilizado como sistema desktop. Famoso por sua filosofia de software livre, o Debian oferece uma base sólida para muitas outras distribuições, como o Ubuntu. Para iniciantes, a interface e a configuração inicial podem parecer um pouco mais difíceis, e as atualizações são menos frequentes em comparação com outras distribuições, focando mais em estabilidade do que em ter os pacotes mais recentes.",
        link: "https://www.debian.org/",
        imagem: "debian-logo.png",
        dataLancamento: "1993",
        requisitos: "1 GB RAM, 10 GB de espaço em disco",
        foco: "servidor, desktop",
        gerenciadorPacotes: "apt",
        ambienteDesktopPadrao: "GNOME",
        pros: "Estabilidade, grande variedade de pacotes, comunidade ativa, base para muitas outras distros",
        contras: "Interface menos amigável para iniciantes, atualizações podem ser mais lentas"
    },
    {
        titulo: "Arch Linux",
        descricao: "O Arch Linux é uma distribuição projetada para usuários que querem ter controle total sobre seu sistema. É altamente personalizável, mas também exige que o usuário faça a instalação e configuração manualmente, o que pode ser intimidante para iniciantes. No entanto, para aqueles que têm paciência e desejo de aprender, o Arch oferece uma experiência poderosa, com a capacidade de criar um sistema operacional sob medida. Ele segue um modelo de atualização contínua (rolling release), garantindo que você sempre tenha as últimas versões de softwares. É uma excelente escolha para desenvolvedores e entusiastas de Linux.",
        link: "https://archlinux.org/",
        imagem: "arch-logo.png",
        dataLancamento: "2002",
        requisitos: "512 MB RAM, 8 GB de espaço em disco",
        foco: "personalização, desenvolvimento",
        gerenciadorPacotes: "pacman",
        ambienteDesktopPadrao: "Xfce",
        pros: "Grande flexibilidade, comunidade ativa, sempre atualizado",
        contras: "Curva de aprendizado íngreme, instalação complexa"
    },
    {
        titulo: "Manjaro",
        descricao: "Baseado no Arch Linux, o Manjaro visa trazer os benefícios dessa poderosa distribuição para um público mais amplo, oferecendo uma instalação fácil e uma experiência mais amigável. Com o Manjaro, você obtém o melhor do Arch Linux, mas com ferramentas que facilitam a instalação e o gerenciamento de pacotes. Ele é ideal para usuários que querem a flexibilidade e personalização do Arch, mas sem o esforço envolvido na instalação manual. Manjaro também oferece várias edições com diferentes ambientes de desktop, permitindo que os usuários escolham a interface que mais se adequa ao seu estilo.",
        link: "https://manjaro.org/",
        imagem: "manjaro-logo.png",
        dataLancamento: "2011",
        requisitos: "1 GB RAM, 20 GB de espaço em disco",
        foco: "desktop, iniciantes",
        gerenciadorPacotes: "pacman",
        ambienteDesktopPadrao: "XFCE",
        pros: "Fácil de instalar, baseado em Arch Linux, comunidade ativa",
        contras: "Menos personalizável que o Arch Linux puro"
    },
    {
        titulo: "Linux Mint",
        descricao: "O Linux Mint é uma das distribuições mais recomendadas para quem está migrando do Windows, graças ao seu ambiente de desktop intuitivo e familiar. Baseado no Ubuntu, ele herda sua estabilidade e grande variedade de softwares, mas com um foco maior em simplicidade e usabilidade. O Cinnamon, o ambiente desktop padrão, é moderno e elegante, tornando o Linux Mint uma excelente escolha para iniciantes que buscam uma experiência tranquila e sem complicações. Embora o Linux Mint seja altamente estável, ele pode ficar um pouco desatualizado em relação ao Ubuntu devido à sua política de atualizações mais conservadora.",
        link: "https://linuxmint.com/",
        imagem: "linuxmint-logo.png",
        dataLancamento: "2006",
        requisitos: "512 MB RAM, 10 GB de espaço em disco",
        foco: "desktop, iniciantes",
        gerenciadorPacotes: "apt",
        ambienteDesktopPadrao: "Cinnamon",
        pros: "Fácil de usar, interface elegante, grande variedade de ambientes de desktop",
        contras: "Pode se tornar um pouco desatualizado em relação ao Ubuntu"
    },
    {
        titulo: "OpenSUSE",
        descricao: "O OpenSUSE é uma distribuição que se destaca por suas ferramentas robustas de configuração e uma comunidade bastante ativa. Com o YaST, um dos gerenciadores de sistema mais completos do Linux, o OpenSUSE permite que os usuários configurem praticamente tudo com facilidade. Ele é altamente adequado para desenvolvedores e profissionais que procuram um ambiente de trabalho estável, mas também oferece flexibilidade para o uso em desktops. O OpenSUSE tem duas versões principais: Leap, para quem quer estabilidade, e Tumbleweed, para quem quer as últimas atualizações de software. No entanto, pode ser mais pesado que outras distribuições.",
        link: "https://opensuse.org/",
        imagem: "opensuse-logo.png",
        dataLancamento: "2005",
        requisitos: "1 GB RAM, 20 GB de espaço em disco",
        foco: "desktop, servidor, desenvolvimento",
        gerenciadorPacotes: "zypper",
        ambienteDesktopPadrao: "KDE Plasma",
        pros: "Grande comunidade, YaST (ferramenta de configuração poderosa), suporte a longo prazo",
        contras: "Pode ser um pouco mais pesado que outras distribuições"
    },
    {
        titulo: "Kali Linux",
        descricao: "O Kali Linux é uma distribuição voltada para segurança cibernética, sendo amplamente utilizada por profissionais de segurança, hackers éticos e entusiastas de testes de penetração. Ele vem pré-instalado com uma grande variedade de ferramentas específicas para análise forense, engenharia reversa e testes de penetração, como o Metasploit, Nmap e Wireshark. Embora seja uma excelente ferramenta para profissionais da área, o Kali não é recomendado como sistema operacional principal para uso diário, pois não é otimizado para isso e pode ser instável para atividades comuns de desktop.",
        link: "https://www.kali.org/",
        imagem: "kali-logo.png",
        dataLancamento: "2013",
        requisitos: "2 GB RAM, 20 GB de espaço em disco",
        foco: "segurança, hacking",
        gerenciadorPacotes: "apt",
        ambienteDesktopPadrao: "GNOME",
        caracteristicas: "Ampla variedade de ferramentas de segurança",
        pros: "Ampla variedade de ferramentas de segurança, comunidade ativa, documentação extensa",
        contras: "Não é recomendado para uso diário, pode ser instável para tarefas não relacionadas à segurança"
    },
    {
        titulo: "Pop!_OS",
        descricao: "Desenvolvido pela System76, o Pop!_OS é uma distribuição baseada no Ubuntu, com um foco especial em otimizar o desempenho e fornecer uma experiência de uso fluida em desktops e laptops. Ele é especialmente recomendado para quem possui hardware System76, pois oferece integração e suporte nativo para esses dispositivos. Com uma interface gráfica moderna e uma abordagem que valoriza a produtividade, o Pop!_OS também é muito popular entre desenvolvedores e criadores de conteúdo. Embora ofereça um ótimo desempenho, sua biblioteca de softwares pode ser um pouco mais limitada em comparação com outras distribuições mais populares.",
        link: "https://pop.system76.com/",
        imagem: "pop-os-logo.png",
        dataLancamento: "2017",
        requisitos: "2 GB RAM, 20 GB de espaço em disco",
        foco: "desktop, desempenho",
        gerenciadorPacotes: "apt",
        ambienteDesktopPadrao: "GNOME",
        caracteristicas: "Desempenho otimizado, integração com hardware System76",
        pros: "Desempenho otimizado, integração com hardware System76, interface elegante",
        contras: "Menor variedade de software em comparação com distribuições mais populares"
    }
];