// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qdC38SH7rFBhXqdNxrMg6s
// Component: xwLZ21nXT6w
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
import IconLink from "../../IconLink"; // plasmic-import: PBO8Xbfg9YM/component
import TextInput from "../../TextInput"; // plasmic-import: F3Uq7-gd30Nf/component
import Button from "../../Button"; // plasmic-import: gbWfkKLp2SyH/component

import { useScreenVariants as useScreenVariantsooOxwLr9Dwj0 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ooOxwLr9DWJ0/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_copy_of_simple_light_landing_page_primary_copy.module.css"; // plasmic-import: qdC38SH7rFBhXqdNxrMg6s/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: xwLZ21nXT6w/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: rsZ1hCY2EFSt/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: YTgqKmRdtBpi/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3MqUTQNKZ6Uj/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: haktYpYbhi-v/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: BMb4TJ5Ve46G/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: Bqo85UNJaftS/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: nfClJLAZ6QL-/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsooOxwLr9Dwj0()
  });

  return (
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
      <div className={classNames(projectcss.all, sty.freeBox__oaeCq)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___81Kdr)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sN8D7)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink___11Xkv)}
            icon={
              <LogoIcon
                className={classNames(projectcss.all, sty.svg__npgC)}
                role={"img"}
              />
            }
          />

          <div className={classNames(projectcss.all, sty.freeBox___8CVdh)}>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___0HzRf
              )}
              href={"#" as const}
            >
              {"Terms"}
            </a>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ffIzq
              )}
            >
              {" ?? "}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___5Pa7P
              )}
              href={"#" as const}
            >
              {"Privacy"}
            </a>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__whirK)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0CjE7)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__w82B8
              )}
            >
              {"Products"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bqxTs
              )}
              href={"#" as const}
            >
              {"Web Studio"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__arpv8
              )}
              href={"#" as const}
            >
              {"DynamicBox Flex"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__dAh6H
              )}
              href={"#" as const}
            >
              {"Programming Forms"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wdhKj
              )}
              href={"#" as const}
            >
              {"Integrations"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__py739
              )}
              href={"#" as const}
            >
              {"Command-line"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__v0U6J)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Ilao
              )}
            >
              {"Resources"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__o4KXv
              )}
              href={"#" as const}
            >
              {"Documentation"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__wn2Lf
              )}
              href={"#" as const}
            >
              {"Tutorials & Guides"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xld6X
              )}
              href={"#" as const}
            >
              {"Blog"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__vshKz
              )}
              href={"#" as const}
            >
              {"Support Center"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__ih0Fy
              )}
              href={"#" as const}
            >
              {"Partners"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__tNuVy)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nkcur
              )}
            >
              {"Company"}
            </div>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__hg2KM
              )}
              href={"#" as const}
            >
              {"Home"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__v72M5
              )}
              href={"#" as const}
            >
              {"About us"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bnm3J
              )}
              href={"#" as const}
            >
              {"Company values"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__bc6PS
              )}
              href={"#" as const}
            >
              {"Pricing"}
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__xQAdW
              )}
              href={"#" as const}
            >
              {"Privacy policy"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xQ8BS)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gLCll
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__epWwm
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              endIcon={
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"clear" as const}
                  size={"compact" as const}
                  startIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__k4J1Q)}
                      role={"img"}
                    />
                  }
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__vzzcJ)}
                    role={"img"}
                  />
                </Button>
              }
              fontSize={"small" as const}
              placeholder={"Your email" as const}
              showEndIcon={true}
            />
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__sojvz)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__saoWk)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__qsoz5)}>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ceHtr
            )}
            href={"https://cruip.com/" as const}
          >
            {"Designed by Cruip. "}
          </a>

          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__gZxMl
            )}
            href={"https://www.plasmic.app/" as const}
          >
            {"Built in Plasmic. "}
          </a>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wmBvS
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__l1JbR)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__wiML)}
            icon={
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__w0FGn)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__uilQw)}
            icon={
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg___3Tr5D)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__xbJym)}
            icon={
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg__uvVna)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button"],
  textInput: ["textInput", "textbox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
