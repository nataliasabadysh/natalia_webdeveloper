import { ViewCard } from './ViewCard';
import { Container, Section, Element } from './Tech.styles';

const content = {
  about:
    'Hi, I am Natalia software engineer for 6 years , Hi, Iam Natalia  software engineer for 6 years',
  tech_skills: {
    title: 'TECH STACK',
    p: 'we create immersive and interactive digital experiences that are both easy to use and a joy to engage with.',
    list: [
      {
        title: 'JavaScript',
        button: ['export'],
        items: null,
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#FFCC4A',
        url: 'https://nataliasabadysh.gitbook.io/js/',
      },
      {
        title: 'python',
        button: ['beginner'],
        items: null,
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#87ADCD',
        url: 'https://nataliasabadysh.gitbook.io/python/',
      },
      // {
      //   title: 'sql',
      //   button: ['beginner'],
      //   desc: 'Frontend / backend ',
      //   years: '+ 6 years',
      //   color: '#15182D',
      // },
      // {
      //   title: 'Ui/Ux lover',
      //   button: ['beginner'],
      //   items: null,
      //   desc: 'Frontend / backend ',
      //   years: '+ 6 years',
      //   color: '#',
      // },
      {
        title: 'TypeScript',
        button: null,
        items: ['libraries', 'tools', 'pet projects', 'valontues'],
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#TypeScript',
        url: 'https://nataliasabadysh.gitbook.io/web-developing/typescript/typescript-core',
      },
      {
        title: 'React',
        button: null,
        items: ['libraries', 'tools', 'pet projects', 'valontues'],
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#557EE4',
        url: 'https://nataliasabadysh.gitbook.io/web-developing/typescript/typescript-core',
      },
      {
        title: 'GraphQL',
        button: null,
        items: ['libraries', 'tools', 'pet projects', 'valontues'],
        desc: 'Frontend / backend ',
        years: '+ 6 years',
        color: '#CC46A2',
        url: 'https://nataliasabadysh.gitbook.io/graphql/',
      },
    ],
  },
};

function Tech() {
  return (
    <Section>
      <div>
        <h2 className="section_title">tech stack:</h2>
      </div>

      <Container>
        {content.tech_skills.list.map((item, index) => (
          <Element key={index}>
            <ViewCard name={item.title} color={item.color} url={item.url} />
          </Element>
        ))}
      </Container>
    </Section>
  );
}

export default Tech;
