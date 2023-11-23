import React from "react";
import styled from "styled-components";

import { Row } from "@/style/ui";

import { GithubIcon, NotionIcon, VelogIcon } from "@/style/icon";
import { fonts } from "@/style/theme";
import { DirectSNSLinkAttribute } from "@/type/components/DirectSNSLinkAttribute.type";
import Link from "next/link";

const DirectSNSUrl = ({
  githubLink,
  notionLink,
  velogLink,
}: DirectSNSLinkAttribute) => {
  return (
    <Container>
      {githubLink && (
        <Link target="_blank" href={githubLink}>
          <Row gap={0.5}>
            <GithubIcon width={1.5} height={1.5} />
            Github
          </Row>
        </Link>
      )}
      {notionLink && (
        <Link target="_blank" href={notionLink}>
          <Row gap={0.5}>
            <NotionIcon width={1.5} height={1.5} />
            Notion
          </Row>
        </Link>
      )}

      {velogLink && (
        <Link target="_blank" href={velogLink}>
          <Row gap={0.5}>
            <VelogIcon width={1.5} height={1.5} />
            Velog
          </Row>
        </Link>
      )}
    </Container>
  );
};

export default DirectSNSUrl;

const Container = styled.div`
  display: flex;

  margin-top: 4rem;
  gap: 2rem;
  ${fonts.Footnote}
`;
