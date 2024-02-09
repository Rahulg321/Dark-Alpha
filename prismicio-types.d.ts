// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSliceSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContactHeroSlice
  | ContactFormSectionSlice
  | TeamIndexSlice
  | HeroSliceSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HomepageDocument | PageDocument;

/**
 * Primary content in *ContactFormSection → Primary*
 */
export interface ContactFormSectionSliceDefaultPrimary {
  /**
   * Heading field in *ContactFormSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *ContactFormSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Primary content in *ContactFormSection → Items*
 */
export interface ContactFormSectionSliceDefaultItem {
  /**
   * Contact Person Name field in *ContactFormSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.items[].contact_person_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_person_name: prismic.KeyTextField;

  /**
   * Contact Person Position field in *ContactFormSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.items[].contact_person_position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_person_position: prismic.KeyTextField;

  /**
   * Contact Person Email field in *ContactFormSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_section.items[].contact_person_email
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_person_email: prismic.KeyTextField;
}

/**
 * Default variation for ContactFormSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSectionSliceDefaultPrimary>,
  Simplify<ContactFormSectionSliceDefaultItem>
>;

/**
 * Slice variation for *ContactFormSection*
 */
type ContactFormSectionSliceVariation = ContactFormSectionSliceDefault;

/**
 * ContactFormSection Shared Slice
 *
 * - **API ID**: `contact_form_section`
 * - **Description**: ContactFormSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSectionSlice = prismic.SharedSlice<
  "contact_form_section",
  ContactFormSectionSliceVariation
>;

/**
 * Primary content in *ContactHero → Primary*
 */
export interface ContactHeroSliceDefaultPrimary {
  /**
   * Heading field in *ContactHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *ContactHero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Background Image field in *ContactHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_hero.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for ContactHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactHero*
 */
type ContactHeroSliceVariation = ContactHeroSliceDefault;

/**
 * ContactHero Shared Slice
 *
 * - **API ID**: `contact_hero`
 * - **Description**: ContactHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactHeroSlice = prismic.SharedSlice<
  "contact_hero",
  ContactHeroSliceVariation
>;

/**
 * Primary content in *HeroSlice → Primary*
 */
export interface HeroSliceSliceDefaultPrimary {
  /**
   * Heading field in *HeroSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *HeroSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * Background Image field in *HeroSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_slice.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Default variation for HeroSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeroSlice*
 */
type HeroSliceSliceVariation = HeroSliceSliceDefault;

/**
 * HeroSlice Shared Slice
 *
 * - **API ID**: `hero_slice`
 * - **Description**: HeroSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSlice = prismic.SharedSlice<
  "hero_slice",
  HeroSliceSliceVariation
>;

/**
 * Primary content in *TeamIndex → Items*
 */
export interface TeamIndexSliceDefaultItem {
  /**
   * Member Image field in *TeamIndex → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_index.items[].member_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  member_image: prismic.ImageField<never>;

  /**
   * Member Name field in *TeamIndex → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_index.items[].member_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_name: prismic.KeyTextField;

  /**
   * Member Position field in *TeamIndex → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_index.items[].member_position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  member_position: prismic.KeyTextField;
}

/**
 * Default variation for TeamIndex Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamIndexSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TeamIndexSliceDefaultItem>
>;

/**
 * Slice variation for *TeamIndex*
 */
type TeamIndexSliceVariation = TeamIndexSliceDefault;

/**
 * TeamIndex Shared Slice
 *
 * - **API ID**: `team_index`
 * - **Description**: TeamIndex
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamIndexSlice = prismic.SharedSlice<
  "team_index",
  TeamIndexSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactFormSectionSlice,
      ContactFormSectionSliceDefaultPrimary,
      ContactFormSectionSliceDefaultItem,
      ContactFormSectionSliceVariation,
      ContactFormSectionSliceDefault,
      ContactHeroSlice,
      ContactHeroSliceDefaultPrimary,
      ContactHeroSliceVariation,
      ContactHeroSliceDefault,
      HeroSliceSlice,
      HeroSliceSliceDefaultPrimary,
      HeroSliceSliceVariation,
      HeroSliceSliceDefault,
      TeamIndexSlice,
      TeamIndexSliceDefaultItem,
      TeamIndexSliceVariation,
      TeamIndexSliceDefault,
    };
  }
}
