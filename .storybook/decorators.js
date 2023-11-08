// import '../src/app/globals.css';

const withStyles = StoryFn => {
  <>
    <StoryFn />
    {/* {...styles} */}
  </>;
};

export const globalDecorators = [withStyles];
