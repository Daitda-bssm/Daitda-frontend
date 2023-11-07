import styled, { CSSProperties } from "styled-components";
4;
import { FlexibleImgProps } from "@/type/ui/FlexibleImgAttribute.type";

const FlexibleImgContainer = ({
  children,
  width,
  height,
}: FlexibleImgProps) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default FlexibleImgContainer;

const Container = styled.div<FlexibleImgProps>`
  position: relative;

  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
`;
