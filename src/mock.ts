/**
 * DADOS DO SITE — nutri-unicamp
 *
 * Substitua os placeholders abaixo pelos dados reais do grupo.
 * Cada objeto representa um item que aparece no site.
 */

export const PROJECT_NAME = 'Mise En Lab';

// ==========================================
// MEMBROS DO GRUPO
// Substitua com os dados reais de cada integrante
// ==========================================
export const membros = [
    {
      id: 1,
      nome: 'Gabriella Lunai',
      papel: '---',
      bio: '',
      // URL da foto — placeholders estáveis (picsum); substitua pelas fotos reais do grupo
      avatar: 'https://acullen-portfolio.eddl.tru.ca/wp-content/themes/koji/assets/images/default-fallback-image.png',
      lattes: '#',  // Link para o Lattes / LinkedIn
    },
    {
      id: 2,
      nome: 'Giovanna Nicida',
      papel: '---',
      bio: '',
      avatar: 'https://acullen-portfolio.eddl.tru.ca/wp-content/themes/koji/assets/images/default-fallback-image.png',
      lattes: '#',
    },
    {
      id: 3,
      nome: 'Julia Sodre',
      papel: '---',
      bio: '',
      avatar: 'https://acullen-portfolio.eddl.tru.ca/wp-content/themes/koji/assets/images/default-fallback-image.png',
      lattes: '#',
    },
    {
      id: 4,
      nome: 'Maria Rose Matos',
      papel: '---',
      bio: '',
      avatar: 'https://acullen-portfolio.eddl.tru.ca/wp-content/themes/koji/assets/images/default-fallback-image.png',
      lattes: '#',
    },
    {
      id: 5,
      nome: 'Sophia Mendes',
      papel: '---',
      bio: '',
      avatar: 'https://acullen-portfolio.eddl.tru.ca/wp-content/themes/koji/assets/images/default-fallback-image.png',
      lattes: '#',
    },
  ];
  
  // ==========================================
  // TRABALHOS E PESQUISAS
  // Adicione um objeto por trabalho/pesquisa publicado
  // ==========================================
  export const trabalhos = [
    {
      id: 1,
      titulo: '[Título do Trabalho / Pesquisa 1]',
      descricao: '[Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases]',
      categoria: 'Nutrição Clínica', // Exemplos: Nutrição Clínica, Saúde Pública, Gastronomia, Técnica Dietética
      autores: ['[Membro 1]', '[Membro 2]'],
      data: '[Mês/Ano]',
      destaque: true,           // true = aparece em destaque na Home
      link: '#',                // URL do trabalho completo ou PDF
      cor: 'sage',              // sage | earth | clay — cor do card
    },
    {
      id: 2,
      titulo: '[Título do Trabalho / Pesquisa 2]',
      descricao: '[Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases]',
      categoria: 'Gastronomia',
      autores: ['[Membro 3]'],
      data: '[Mês/Ano]',
      destaque: true,
      link: '#',
      cor: 'earth',
    },
    {
      id: 3,
      titulo: '[Título do Trabalho / Pesquisa 3]',
      descricao: '[Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases]',
      categoria: 'Saúde Pública',
      autores: ['[Membro 1]', '[Membro 4]'],
      data: '[Mês/Ano]',
      destaque: false,
      link: '#',
      cor: 'clay',
    },
    {
      id: 4,
      titulo: '[Título do Trabalho / Pesquisa 4]',
      descricao: '[Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases]',
      categoria: 'Técnica Dietética',
      autores: ['[Membro 2]', '[Membro 5]'],
      data: '[Mês/Ano]',
      destaque: false,
      link: '#',
      cor: 'sage',
    },
    {
      id: 5,
      titulo: '[Título do Trabalho / Pesquisa 5]',
      descricao: '[Resumo do trabalho — explique o objetivo, metodologia e principais conclusões em 2 a 3 frases]',
      categoria: 'Nutrição Clínica',
      autores: ['[Membro 3]', '[Membro 4]', '[Membro 5]'],
      data: '[Mês/Ano]',
      destaque: false,
      link: '#',
      cor: 'earth',
    },
  ];
  
  // ==========================================
  // CATEGORIAS DE TRABALHOS
  // Para filtro na página de Trabalhos
  // ==========================================
  export const categorias = [
    'Todos',
    'Nutrição Clínica',
    'Saúde Pública',
    'Gastronomia',
    'Técnica Dietética',
  ];
  
  // ==========================================
  // ESTATÍSTICAS — SOBRE / HOME
  // ==========================================
  export const stats = [
    { valor: '4', label: 'Membros' },
    { valor: '2', label: 'Trabalhos Publicados' },
    { valor: '3', label: 'Semestres Ativos' },
    { valor: '8', label: 'Disciplinas' },
  ];