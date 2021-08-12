import { PropsWithChildren } from "react";
import { Story, Meta } from "@storybook/react";
import {
  CdtsAppSecMenuTemplate,
  CdtsAppSecMenuTemplateProps,
  CdtsAppTemplate,
  CdtsAppTemplateProps,
  LanguagePlacement,
  useLanguage,
} from "cdts-react";
export default {
  title: "CDTS/Application Templates",
  component: CdtsAppTemplate,
} as Meta;

const Template: Story<PropsWithChildren<CdtsAppTemplateProps>> = (
  args: CdtsAppTemplateProps
) => {
  const { currentLanguage } = useLanguage({
    placement: LanguagePlacement.QUERYSTRING,
  });

  const appName = [
    {
      href: "#" as const,
      text:
        currentLanguage === "fr"
          ? "SGDC & BOEW pour React"
          : "CDTS & WET For React",
    },
  ];

  return <CdtsAppTemplate {...args} appName={appName} />;
};

export const DefaultPage = Template.bind({});
DefaultPage.args = {};

const SectionMenuTemplate: Story<any> = (args: CdtsAppSecMenuTemplateProps) => (
  <CdtsAppSecMenuTemplate {...args} />
);
export const SectionMenu = SectionMenuTemplate.bind({});
SectionMenu.args = {
  title: "Section menu",
  sections: [
    {
      sectionName: "[Topic - Local navigation]",
      menuLinks: [
        {
          href: "./sectionmenu-en.html",
          text: "Section menu",
          subLinks: [
            {
              subhref: "#11a",
              subtext: "Link 1.1 a)",
            },
            {
              subhref: "#11b",
              subtext: "Link 1.1 b)",
            },
            {
              subhref: "#11c",
              subtext: "Opens in a new window",
              newWindow: true,
            },
            {
              subhref: "#11d",
              subtext: "Link 1.1 d)",
            },
          ],
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Opens in a new window",
          newWindow: true,
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
    {
      sectionName: "Opens in a new window",
      sectionLink: "#",
      newWindow: true,
      menuLinks: [
        {
          href: "#",
          text: "Link 1",
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Link 3",
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
    {
      // Rinse and repeat
      sectionName: "Section name 3",
      menuLinks: [
        {
          href: "#",
          text: "Link 1",
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Link 3",
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
    {
      // Rinse and repeat
      sectionName: "Section name ... 27",
      menuLinks: [
        {
          href: "#",
          text: "Link 1",
        },
        {
          href: "#",
          text: "Link 2",
        },
        {
          href: "#",
          text: "Link 3",
        },
        {
          href: "#",
          text: "Link 4",
        },
      ],
    },
  ],
};

export const AllSettings = Template.bind({});
AllSettings.args = {
  menuPath:
    "https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_28/cdts/ajax/appmenu-en.html",
  appSettings: [{ href: "#" }],
  signOut: [{ href: "#" }],
  customSearch: "test",
  dateModified: "2017-08-01",
  showFeatures: false,
  breadcrumbs: [
    {
      title: "My application",
      href:
        "https://open.canada.ca/en/apps?_ga=2.158588857.2050402716.1501624806-1491110290.1492697601",
    },
    {
      title: "First section",
      href: "#",
    },
    {
      title: "Service A",
      href: "#",
    },
  ],
};

export const Settings = Template.bind({});
Settings.args = {
  appSettings: [{ href: "#" }],
  dateModified: "2019-03-08",
};

export const SignIn = Template.bind({});
SignIn.args = {
  signIn: [{ href: "#" }],
  dateModified: "2019-03-08",
};

export const SignOut = Template.bind({});
SignOut.args = {
  signOut: [{ href: "#" }],
  dateModified: "2019-03-08",
};

export const Search = Template.bind({});
Search.args = {
  customSearch: "test",
  dateModified: "2019-03-08",
};

export const CustomMenu = Template.bind({});
CustomMenu.args = {
  menuLinks: [
    { href: "#", text: "Custom 1" },
    { href: "#", text: "Custom 2" },
    {
      text: "Custom 3",
      href: "#",
      subLinks: [
        {
          subtext: "Sub 1",
          subhref: "#",
        },
        {
          subtext: "Sub 2",
          subhref: "#",
        },
      ],
    },
  ],
  appSettings: [{ href: "#" }],
  signOut: [{ href: "#" }],
  customSearch: "test",
  dateModified: "2017-08-01",
  showFeatures: false,
  breadcrumbs: [
    {
      title: "My application",
      href:
        "https://open.canada.ca/en/apps?_ga=2.158588857.2050402716.1501624806-1491110290.1492697601",
    },
    {
      title: "First section",
      href: "#",
    },
    {
      title: "Service A",
      href: "#",
    },
  ],
};

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  breadcrumbs: [
    {
      title: "My application",
      href:
        "https://open.canada.ca/en/apps?_ga=2.158588857.2050402716.1501624806-1491110290.1492697601",
    },
    {
      title: "First section",
      href: "#",
    },
    {
      title: "Service A",
      href: "#",
    },
  ],
  dateModified: "2019-03-08",
};
