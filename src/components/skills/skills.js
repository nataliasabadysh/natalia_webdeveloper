const skill_list = [
  'next.js',
  'tailwind css',
  'figma',
  'javaScript',
  'web design',
  'Gatsby.js',
  'strapi',
  'firebase',
  'generative AI',
  'wireframing',
  'SEO',
  'framer motion',
  'sanity',
];

export default function Skills() {
  const list = skill_list.map((skill, index) => (
    <li className="tag_list" key={index}>
      {skill}
    </li>
  ));

  return <ul>{list}</ul>;
}
