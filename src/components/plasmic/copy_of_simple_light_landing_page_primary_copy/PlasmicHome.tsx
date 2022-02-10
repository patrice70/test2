// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qdC38SH7rFBhXqdNxrMg6s
// Component: VPMbiZvVmKz
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: _Kq8bQMEVKz/component
import Section from "../../Section"; // plasmic-import: u6nSHazBZ_Pg/component
import Button from "../../Button"; // plasmic-import: gbWfkKLp2SyH/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: W36se4VEj1V/component
import Testimonial from "../../Testimonial"; // plasmic-import: shghiv6B7ej2/component
import HomeCta from "../../HomeCta"; // plasmic-import: XvRvpzfphTo/component
import Footer from "../../Footer"; // plasmic-import: xwLZ21nXT6w/component

import { useScreenVariants as useScreenVariantsooOxwLr9Dwj0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ooOxwLr9DWJ0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_copy_of_simple_light_landing_page_primary_copy.module.css"; // plasmic-import: qdC38SH7rFBhXqdNxrMg6s/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: VPMbiZvVmKz/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: haktYpYbhi-v/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: xpYOfjqFrEsE/icon
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: xDTcWfjiCEhH/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: ERZ6wQ5BAa3U/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: fDRPxDTnpO7Z/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: boRZYuSzxOYq/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: Y-BCsUF2QiRj/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: nMe4kN3kOndk/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: DdKAKu-VqPw_/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: IN3AjIZA8SqX/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: eOanJybJOm-E/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: Zeexsc0DNGyh/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: kNcMVA8lSwCH/icon
import heroImageR4FfriNnzc0H from "./images/heroImage.png"; // plasmic-import: r4FfriNNZC0h/picture
import simpleProject5O4AlPbdTKc6 from "./images/simpleProject.png"; // plasmic-import: 5o4ALPbdTKc6/picture

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof Section>;
  test?: p.Flex<"div">;
  solutions?: p.Flex<typeof Section>;
  columns?: p.Flex<"div">;
  howItWorks?: p.Flex<typeof Section>;
  validation?: p.Flex<typeof Section>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsooOxwLr9Dwj0()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jhixo)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lt5Zc)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__y77Bc)}>
                  <div
                    data-plasmic-name={"test"}
                    data-plasmic-override={overrides.test}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.test
                    )}
                  >
                    {"aaa"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8YkWr
                    )}
                  >
                    {"wonderful"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hRoU
                  )}
                >
                  {
                    "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__trcyM)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__hLqyh)}
                  color={"blue" as const}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__kIaNl)}
                      role={"img"}
                    />
                  }
                  showEndIcon={true}
                >
                  {"Start free trial"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button___8SZib)}
                >
                  {"Learn more"}
                </Button>
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__mx7A)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__gSeGc)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  src={{
                    src: heroImageR4FfriNnzc0H,
                    fullWidth: 1536,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Explore the solutions"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__ocecc)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___5Meex)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lqAe7
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__thHgB
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__yGQm8
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg___1YuIn)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__pKgdT
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg___1CpbO)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___0ZAx5
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__gqaff)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column__hN0Hk)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__weUbI)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  src={{
                    src: simpleProject5O4AlPbdTKc6,
                    fullWidth: 1000,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            color={"halfDark" as const}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"How Simple works"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dLwSi)}
            >
              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__mOxO5)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SwapIcon
                    className={classNames(projectcss.all, sty.svg__kIGcQ)}
                    role={"img"}
                  />
                }
                title={"Initial Contact"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__ly6YX)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SlotIcon
                    className={classNames(projectcss.all, sty.svg__jlwK)}
                    role={"img"}
                  />
                }
                title={"Discovery Session"}
              />

              <FeatureCard
                className={classNames(
                  "__wab_instance",
                  sty.featureCard___0ETtq
                )}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <CycleIcon
                    className={classNames(projectcss.all, sty.svg__wdEb)}
                    role={"img"}
                  />
                }
                title={"Contracting"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__qo5Nx)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <HammerIcon
                    className={classNames(projectcss.all, sty.svg___9GwN8)}
                    role={"img"}
                  />
                }
                title={"Fast Prototyping"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__mIqeR)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <PencilIcon
                    className={classNames(projectcss.all, sty.svg__ry6Cy)}
                    role={"img"}
                  />
                }
                title={"Design Phase"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__x6XAn)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <LightningIcon
                    className={classNames(projectcss.all, sty.svg__tb5Qy)}
                    role={"img"}
                  />
                }
                title={"Develop & Launch"}
              />
            </p.Stack>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__c3TgN)} />
            ) : null}
          </Section>

          <Section
            data-plasmic-name={"validation"}
            data-plasmic-override={overrides.validation}
            className={classNames("__wab_instance", sty.validation)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
            }
            title={"Trusted by over 20,000 companies all over the world"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lgHs3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__k21Et)}
              >
                <FacebookLogoIcon
                  className={classNames(projectcss.all, sty.svg__e7Ff6)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(projectcss.all, sty.svg__ewU68)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(projectcss.all, sty.svg___2On1R)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(projectcss.all, sty.svg__wdcZr)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(projectcss.all, sty.svg__d149K)}
                  role={"img"}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "test",
    "solutions",
    "columns",
    "howItWorks",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection", "test"],
  test: ["test"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  howItWorks: ["howItWorks"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  test: "div";
  solutions: typeof Section;
  columns: "div";
  howItWorks: typeof Section;
  validation: typeof Section;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    test: makeNodeComponent("test"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    howItWorks: makeNodeComponent("howItWorks"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
