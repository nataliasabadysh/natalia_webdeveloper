import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  /* background-color: #000; */
  padding: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
  padding: 5px 10px;
  color: white;
  font-size: 20px;
  text-align: center;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;
