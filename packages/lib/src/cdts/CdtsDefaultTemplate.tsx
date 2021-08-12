import { PropsWithChildren, useEffect } from "react";
import CdtsTop, { CdtsTopProps } from "./CdtsTop";
import CdtsPreFooter, { CdtsPreFooterProps } from "./CdtsPreFooter";
import CdtsFooter, { CdtsFooterProps } from "./CdtsFooter";
import CdtsRefFooter, { CdtsRefFooterProps } from "./CdtsRefFooter";
import CdtsRefTop, { CdtsRefTopProps } from "./CdtsRefTop";

import Main from "../components/Main";

export type CdtsDefaultTemplateProps = {
  title?: string;
} & Omit<CdtsRefTopProps, "isApplication"> &
  CdtsTopProps &
  CdtsPreFooterProps &
  Omit<CdtsFooterProps, "showFooter"> &
  CdtsRefFooterProps;

export default function CdtsDefaultTemplate({
  children,
  title,
  ...props
}: PropsWithChildren<CdtsDefaultTemplateProps>) {
  useEffect(() => {
    document.title = (title ? `${title} - ` : "") + "Canada.ca";
  });

  return (
    <>
      <CdtsRefTop {...props} isApplication={false} />
      <CdtsTop {...props} />
      <Main>
        {children}
        <CdtsPreFooter {...props} />
      </Main>
      <CdtsFooter {...props} showFooter={true} />
      <CdtsRefFooter {...props} />
    </>
  );
}
