import DefaultPageStyled from "./DefaultPageStyled";

interface DefaultPageProps {
  children: React.ReactNode;
}

function DefaultPage({children}: DefaultPageProps) {
  return <DefaultPageStyled>{children}</DefaultPageStyled>;
}

export default DefaultPage;
