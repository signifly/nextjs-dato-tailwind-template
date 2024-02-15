import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BooleanType: { input: any; output: any }
  CustomData: { input: any; output: any }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  FloatType: { input: any; output: any }
  IntType: { input: any; output: any }
  ItemId: { input: any; output: any }
  JsonField: { input: any; output: any }
  MetaTagAttributes: { input: any; output: any }
  UploadId: { input: any; output: any }
}

export type AuthorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
  picture?: InputMaybe<FileFilter>
}

export enum AuthorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Author (author) */
export type AuthorRecord = RecordInterface & {
  __typename?: 'AuthorRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  name?: Maybe<Scalars['String']['output']>
  picture?: Maybe<FileField>
}

/** Record of type Author (author) */
export type AuthorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Banner Section (banner_section) */
export type BannerSectionRecord = RecordInterface & {
  __typename?: 'BannerSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  text: Scalars['String']['output']
}

/** Block of type Banner Section (banner_section) */
export type BannerSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

export type ButtonModelLinkToField =
  | AuthorRecord
  | CustomPageRecord
  | HomePageRecord
  | PostRecord
  | ProductRecord

/** Block of type Button (button) */
export type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  externalLink?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  linkTo?: Maybe<ButtonModelLinkToField>
  size: Scalars['String']['output']
  useExternalLink?: Maybe<Scalars['BooleanType']['output']>
  variant: Scalars['String']['output']
}

/** Block of type Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ButtonRecordListListNonNullMultiLocaleField = {
  __typename?: 'ButtonRecordListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<ButtonRecord>
}

export type CategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
}

export enum CategoryModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Category (category) */
export type CategoryRecord = RecordInterface & {
  __typename?: 'CategoryRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  name: Scalars['String']['output']
  slug?: Maybe<Scalars['String']['output']>
}

/** Record of type Category (category) */
export type CategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']['output']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha: Scalars['IntType']['output']
  blue: Scalars['IntType']['output']
  cssRgb: Scalars['String']['output']
  green: Scalars['IntType']['output']
  hex: Scalars['String']['output']
  red: Scalars['IntType']['output']
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type CustomPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomPageModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CustomPageModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum CustomPageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type CustomPageModelSectionsField =
  | HeroSectionRecord
  | PageHeaderSectionRecord

export type CustomPageModelSectionsFieldListListNonNullMultiLocaleField = {
  __typename?: 'CustomPageModelSectionsFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<CustomPageModelSectionsField>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecord = RecordInterface & {
  __typename?: 'CustomPageRecord'
  _allSectionsLocales?: Maybe<
    Array<CustomPageModelSectionsFieldListListNonNullMultiLocaleField>
  >
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  sections: Array<CustomPageModelSectionsField>
  seo?: Maybe<SeoField>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Custom Page (custom_page) */
export type CustomPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']['input']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']['input']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']['input']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']['input']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']['input']>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

/** Block of type Featured Categories Section (featured_categories_section) */
export type FeaturedCategoriesSectionRecord = RecordInterface & {
  __typename?: 'FeaturedCategoriesSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  categories: Array<CategoryRecord>
  headline?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  subHeadline?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Featured Categories Section (featured_categories_section) */
export type FeaturedCategoriesSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Features Section  > Feature (features_section_feature) */
export type FeaturesSectionFeatureRecord = RecordInterface & {
  __typename?: 'FeaturesSectionFeatureRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  icon: IconRecord
  id: Scalars['ItemId']['output']
  name: Scalars['String']['output']
}

/** Block of type Features Section  > Feature (features_section_feature) */
export type FeaturesSectionFeatureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Features Section (features_section) */
export type FeaturesSectionRecord = RecordInterface & {
  __typename?: 'FeaturesSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  features: Array<FeaturesSectionFeatureRecord>
  id: Scalars['ItemId']['output']
  image: ImageFileField
  subTitleLarge: Scalars['String']['output']
  subTitleSmall: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Block of type Features Section (features_section) */
export type FeaturesSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Record of type Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

/** Record of type Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']['output']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']['output']>
  titleSuffix?: Maybe<Scalars['String']['output']>
  twitterAccount?: Maybe<Scalars['String']['output']>
}

export type HeaderModelBlocksField =
  | BannerSectionRecord
  | NavigationSectionRecord

export type HeaderModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'HeaderModelBlocksFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<HeaderModelBlocksField>
}

/** Record of type Header (header) */
export type HeaderRecord = RecordInterface & {
  __typename?: 'HeaderRecord'
  _allBlocksLocales?: Maybe<
    Array<HeaderModelBlocksFieldListListNonNullMultiLocaleField>
  >
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  blocks: Array<HeaderModelBlocksField>
  id: Scalars['ItemId']['output']
  name: Scalars['String']['output']
}

/** Record of type Header (header) */
export type HeaderRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Header (header) */
export type HeaderRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Header (header) */
export type HeaderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Header (header) */
export type HeaderRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Header (header) */
export type HeaderRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Hero Section (hero_section) */
export type HeroSectionRecord = RecordInterface & {
  __typename?: 'HeroSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  ctaButtons: Array<ButtonRecord>
  id: Scalars['ItemId']['output']
  image: ImageFileField
  subTitle: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Block of type Hero Section (hero_section) */
export type HeroSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type HomePageModelSectionsField =
  | FeaturesSectionRecord
  | HeroSectionRecord
  | LogoCloudSectionRecord
  | PageHeaderSectionRecord

export type HomePageModelSectionsFieldListListNonNullMultiLocaleField = {
  __typename?: 'HomePageModelSectionsFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<HomePageModelSectionsField>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord = RecordInterface & {
  __typename?: 'HomePageRecord'
  _allSectionsLocales?: Maybe<
    Array<HomePageModelSectionsFieldListListNonNullMultiLocaleField>
  >
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  sections: Array<HomePageModelSectionsField>
  seo?: Maybe<SeoField>
  title: Scalars['String']['output']
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home Page (home_page) */
export type HomePageRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home Page (home_page) */
export type HomePageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home Page (home_page) */
export type HomePageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Icon (icon) */
export type IconRecord = RecordInterface & {
  __typename?: 'IconRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  name: Scalars['String']['output']
}

/** Block of type Icon (icon) */
export type IconRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Image block (image_block) */
export type ImageBlockRecord = RecordInterface & {
  __typename?: 'ImageBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  image: FileField
}

/** Block of type Image block (image_block) */
export type ImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint: FocalPoint
  format: Scalars['String']['output']
  height: Scalars['IntType']['output']
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage: ResponsiveImage
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width: Scalars['IntType']['output']
}

export type ImageFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type ImageFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type ImageFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>
}

/** Block of type Logo Cloud Section (logo_cloud_section) */
export type LogoCloudSectionRecord = RecordInterface & {
  __typename?: 'LogoCloudSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  logos: Array<FileField>
  textWithLinkHighlight: Scalars['String']['output']
}

/** Block of type Logo Cloud Section (logo_cloud_section) */
export type LogoCloudSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Logo Cloud Section (logo_cloud_section) */
export type LogoCloudSectionRecordTextWithLinkHighlightArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Menu (menu) */
export type MenuRecord = RecordInterface & {
  __typename?: 'MenuRecord'
  _allItemsLocales?: Maybe<Array<ButtonRecordListListNonNullMultiLocaleField>>
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  items: Array<ButtonRecord>
  name: Scalars['String']['output']
}

/** Record of type Menu (menu) */
export type MenuRecord_AllItemsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Menu (menu) */
export type MenuRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Menu (menu) */
export type MenuRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Menu (menu) */
export type MenuRecordItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Menu (menu) */
export type MenuRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Block of type Navigation Section (navigation_section) */
export type NavigationSectionRecord = RecordInterface & {
  __typename?: 'NavigationSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  ctaButton: Array<ButtonRecord>
  id: Scalars['ItemId']['output']
  languageToggleLabel: Scalars['String']['output']
  menu: MenuRecord
  siteLogo: FileField
}

/** Block of type Navigation Section (navigation_section) */
export type NavigationSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

/** Block of type Page Header Section (page_header_section) */
export type PageHeaderSectionRecord = RecordInterface & {
  __typename?: 'PageHeaderSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  image?: Maybe<ImageFileField>
  subTitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Page Header Section (page_header_section) */
export type PageHeaderSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type PageTemplateModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTemplateModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageTemplateModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  title?: InputMaybe<StringFilter>
}

export enum PageTemplateModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type PageTemplateModelSectionsField =
  | HeroSectionRecord
  | PageHeaderSectionRecord

export type PageTemplateModelSectionsFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageTemplateModelSectionsFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<PageTemplateModelSectionsField>
}

/** Record of type Page Template (page_template) */
export type PageTemplateRecord = RecordInterface & {
  __typename?: 'PageTemplateRecord'
  _allSectionsLocales?: Maybe<
    Array<PageTemplateModelSectionsFieldListListNonNullMultiLocaleField>
  >
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  sections: Array<PageTemplateModelSectionsField>
  title: Scalars['String']['output']
}

/** Record of type Page Template (page_template) */
export type PageTemplateRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page Template (page_template) */
export type PageTemplateRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page Template (page_template) */
export type PageTemplateRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page Template (page_template) */
export type PageTemplateRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page Template (page_template) */
export type PageTemplateRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with a parent record or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

export type PostModelContentField = {
  __typename?: 'PostModelContentField'
  blocks: Array<ImageBlockRecord>
  links: Array<Scalars['String']['output']>
  value: Scalars['JsonField']['output']
}

export type PostModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PostModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  author?: InputMaybe<LinkFilter>
  category?: InputMaybe<LinkFilter>
  content?: InputMaybe<StructuredTextFilter>
  coverImage?: InputMaybe<FileFilter>
  date?: InputMaybe<DateFilter>
  excerpt?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  seoReadabilityAnalysis?: InputMaybe<JsonFilter>
  seoSettings?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum PostModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Post (post) */
export type PostRecord = RecordInterface & {
  __typename?: 'PostRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  author: AuthorRecord
  category?: Maybe<CategoryRecord>
  content?: Maybe<PostModelContentField>
  coverImage: FileField
  date: Scalars['Date']['output']
  excerpt?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  seoReadabilityAnalysis?: Maybe<Scalars['JsonField']['output']>
  seoSettings?: Maybe<SeoField>
  slug: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Post (post) */
export type PostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ProductModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  pageTemplate?: InputMaybe<LinkFilter>
  parent?: InputMaybe<ParentFilter>
  position?: InputMaybe<PositionFilter>
  slug?: InputMaybe<SlugFilter>
  subTitle?: InputMaybe<TextFilter>
  title?: InputMaybe<StringFilter>
}

export enum ProductModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Product (product) */
export type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord'
  _allSubTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  children?: Maybe<Array<Maybe<ProductRecord>>>
  id: Scalars['ItemId']['output']
  image?: Maybe<ImageFileField>
  pageTemplate: PageTemplateRecord
  parent?: Maybe<ProductRecord>
  position?: Maybe<Scalars['IntType']['output']>
  slug: Scalars['String']['output']
  subTitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Record of type Product (product) */
export type ProductRecord_AllSubTitleLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Product (product) */
export type ProductRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Product (product) */
export type ProductRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Product (product) */
export type ProductRecordSubTitleArgs = {
  locale?: InputMaybe<SiteLocale>
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Record of type Product (product) */
export type ProductRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allAuthorsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCustomPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPageTemplatesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPostsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProductsMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allAuthors: Array<AuthorRecord>
  /** Returns a collection of records */
  allCategories: Array<CategoryRecord>
  /** Returns a collection of records */
  allCustomPages: Array<CustomPageRecord>
  /** Returns a collection of records */
  allPageTemplates: Array<PageTemplateRecord>
  /** Returns a collection of records */
  allPosts: Array<PostRecord>
  /** Returns a collection of records */
  allProducts: Array<ProductRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  author?: Maybe<AuthorRecord>
  /** Returns a specific record */
  category?: Maybe<CategoryRecord>
  /** Returns a specific record */
  customPage?: Maybe<CustomPageRecord>
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>
  /** Returns the single instance record */
  header?: Maybe<HeaderRecord>
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>
  /** Returns the single instance record */
  menu?: Maybe<MenuRecord>
  /** Returns a specific record */
  pageTemplate?: Maybe<PageTemplateRecord>
  /** Returns a specific record */
  post?: Maybe<PostRecord>
  /** Returns a specific record */
  product?: Maybe<ProductRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllAuthorsMetaArgs = {
  filter?: InputMaybe<AuthorModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllCategoriesMetaArgs = {
  filter?: InputMaybe<CategoryModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllCustomPagesMetaArgs = {
  filter?: InputMaybe<CustomPageModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPageTemplatesMetaArgs = {
  filter?: InputMaybe<PageTemplateModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAllAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AuthorModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CategoryModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllCustomPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CustomPageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CustomPageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPageTemplatesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageTemplateModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageTemplateModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PostModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProductModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAuthorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AuthorModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CategoryModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>
}

/** The query root for this schema */
export type QueryCustomPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CustomPageModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CustomPageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryHeaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryHomePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryMenuArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryPageTemplateArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageTemplateModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageTemplateModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PostModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProductModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']['output']>
  aspectRatio: Scalars['FloatType']['output']
  base64?: Maybe<Scalars['String']['output']>
  bgColor?: Maybe<Scalars['String']['output']>
  height: Scalars['IntType']['output']
  sizes: Scalars['String']['output']
  src: Scalars['String']['output']
  srcSet: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  webpSrcSet: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<FileField>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
  title?: Maybe<Scalars['String']['output']>
  twitterCard?: Maybe<Scalars['String']['output']>
}

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<SeoField>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  En = 'en',
  Fr = 'fr',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>
  pattern: Scalars['String']['input']
  regexp?: InputMaybe<Scalars['BooleanType']['input']>
}

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<Scalars['String']['output']>
}

export type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Scalars['String']['output']
}

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>
  content?: Maybe<Scalars['String']['output']>
  tag: Scalars['String']['output']
}

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  duration?: Maybe<Scalars['Int']['output']>
  framerate?: Maybe<Scalars['Int']['output']>
  mp4Url?: Maybe<Scalars['String']['output']>
  muxAssetId: Scalars['String']['output']
  muxPlaybackId: Scalars['String']['output']
  streamingUrl: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x: Scalars['FloatType']['output']
  y: Scalars['FloatType']['output']
}

export type BannerSectionFragmentFragment = {
  __typename?: 'BannerSectionRecord'
  id: string
  _modelApiKey: string
  text: string
}

export type FeaturesSectionFragmentFragment = {
  __typename?: 'FeaturesSectionRecord'
  id: string
  _modelApiKey: string
  title: string
  subTitleLarge: string
  subTitleSmall: string
  image: {
    __typename?: 'ImageFileField'
    responsiveImage: {
      __typename?: 'ResponsiveImage'
      srcSet: string
      webpSrcSet: string
      sizes: string
      src: string
      width: number
      height: number
      aspectRatio: number
      alt?: string | null
      title?: string | null
      base64?: string | null
    }
  }
  features: Array<{
    __typename?: 'FeaturesSectionFeatureRecord'
    id: string
    name: string
    description: string
    icon: {
      __typename?: 'IconRecord'
      id: string
      _modelApiKey: string
      name: string
    }
  }>
}

export type HeroSectionFragmentFragment = {
  __typename?: 'HeroSectionRecord'
  id: string
  _modelApiKey: string
  title: string
  subTitle: string
  ctaButtons: Array<{
    __typename?: 'ButtonRecord'
    id: string
    label: string
    variant: string
    size: string
    useExternalLink?: boolean | null
    externalLink?: string | null
    linkTo?:
      | { __typename?: 'AuthorRecord' }
      | {
          __typename?: 'CustomPageRecord'
          id: string
          slug: string
          _modelApiKey: string
        }
      | { __typename?: 'HomePageRecord'; id: string; _modelApiKey: string }
      | { __typename?: 'PostRecord' }
      | {
          __typename?: 'ProductRecord'
          id: string
          slug: string
          _modelApiKey: string
        }
      | null
  }>
  image: {
    __typename?: 'ImageFileField'
    responsiveImage: {
      __typename?: 'ResponsiveImage'
      srcSet: string
      webpSrcSet: string
      sizes: string
      src: string
      width: number
      height: number
      aspectRatio: number
      alt?: string | null
      title?: string | null
      base64?: string | null
    }
  }
}

export type LogoCloudSectionFragmentFragment = {
  __typename?: 'LogoCloudSectionRecord'
  id: string
  _modelApiKey: string
  textWithLinkHighlight: string
  logos: Array<{
    __typename?: 'FileField'
    id: string
    url: string
    alt?: string | null
    responsiveImage?: {
      __typename?: 'ResponsiveImage'
      srcSet: string
      webpSrcSet: string
      sizes: string
      src: string
      width: number
      height: number
      aspectRatio: number
      alt?: string | null
      title?: string | null
      base64?: string | null
    } | null
  }>
}

export type NavigationSectionFragmentFragment = {
  __typename?: 'NavigationSectionRecord'
  id: string
  _modelApiKey: string
  languageToggleLabel: string
  siteLogo: { __typename?: 'FileField'; url: string; alt?: string | null }
  menu: {
    __typename?: 'MenuRecord'
    id: string
    _modelApiKey: string
    items: Array<{
      __typename?: 'ButtonRecord'
      id: string
      label: string
      variant: string
      size: string
      useExternalLink?: boolean | null
      externalLink?: string | null
      linkTo?:
        | { __typename?: 'AuthorRecord' }
        | {
            __typename?: 'CustomPageRecord'
            id: string
            slug: string
            _modelApiKey: string
          }
        | { __typename?: 'HomePageRecord'; id: string; _modelApiKey: string }
        | { __typename?: 'PostRecord' }
        | {
            __typename?: 'ProductRecord'
            id: string
            slug: string
            _modelApiKey: string
          }
        | null
    }>
  }
  ctaButton: Array<{
    __typename?: 'ButtonRecord'
    id: string
    label: string
    variant: string
    size: string
    useExternalLink?: boolean | null
    externalLink?: string | null
    linkTo?:
      | { __typename?: 'AuthorRecord' }
      | {
          __typename?: 'CustomPageRecord'
          id: string
          slug: string
          _modelApiKey: string
        }
      | { __typename?: 'HomePageRecord'; id: string; _modelApiKey: string }
      | { __typename?: 'PostRecord' }
      | {
          __typename?: 'ProductRecord'
          id: string
          slug: string
          _modelApiKey: string
        }
      | null
  }>
}

export type PageHeaderSectionFragmentFragment = {
  __typename?: 'PageHeaderSectionRecord'
  id: string
  _modelApiKey: string
  title?: string | null
  subTitle?: string | null
  image?: {
    __typename?: 'ImageFileField'
    responsiveImage: {
      __typename?: 'ResponsiveImage'
      srcSet: string
      webpSrcSet: string
      sizes: string
      src: string
      width: number
      height: number
      aspectRatio: number
      alt?: string | null
      title?: string | null
      base64?: string | null
    }
  } | null
}

export type ButtonFragmentFragment = {
  __typename?: 'ButtonRecord'
  id: string
  label: string
  variant: string
  size: string
  useExternalLink?: boolean | null
  externalLink?: string | null
  linkTo?:
    | { __typename?: 'AuthorRecord' }
    | {
        __typename?: 'CustomPageRecord'
        id: string
        slug: string
        _modelApiKey: string
      }
    | { __typename?: 'HomePageRecord'; id: string; _modelApiKey: string }
    | { __typename?: 'PostRecord' }
    | {
        __typename?: 'ProductRecord'
        id: string
        slug: string
        _modelApiKey: string
      }
    | null
}

export type IconFragmentFragment = {
  __typename?: 'IconRecord'
  id: string
  _modelApiKey: string
  name: string
}

export type MetaTagsFragmentFragment = {
  __typename?: 'Tag'
  attributes?: Record<string, string> | null
  content?: string | null
  tag: string
}

export type ResponsiveImageFragmentFragment = {
  __typename?: 'ResponsiveImage'
  srcSet: string
  webpSrcSet: string
  sizes: string
  src: string
  width: number
  height: number
  aspectRatio: number
  alt?: string | null
  title?: string | null
  base64?: string | null
}

export type SiteQueryQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>
}>

export type SiteQueryQuery = {
  __typename?: 'Query'
  site: {
    __typename?: 'Site'
    favicon: Array<{
      __typename?: 'Tag'
      attributes?: Record<string, string> | null
      content?: string | null
      tag: string
    }>
  }
  header?: {
    __typename?: 'HeaderRecord'
    name: string
    blocks: Array<
      | {
          __typename?: 'BannerSectionRecord'
          id: string
          _modelApiKey: string
          text: string
        }
      | {
          __typename?: 'NavigationSectionRecord'
          id: string
          _modelApiKey: string
          languageToggleLabel: string
          siteLogo: {
            __typename?: 'FileField'
            url: string
            alt?: string | null
          }
          menu: {
            __typename?: 'MenuRecord'
            id: string
            _modelApiKey: string
            items: Array<{
              __typename?: 'ButtonRecord'
              id: string
              label: string
              variant: string
              size: string
              useExternalLink?: boolean | null
              externalLink?: string | null
              linkTo?:
                | { __typename?: 'AuthorRecord' }
                | {
                    __typename?: 'CustomPageRecord'
                    id: string
                    slug: string
                    _modelApiKey: string
                  }
                | {
                    __typename?: 'HomePageRecord'
                    id: string
                    _modelApiKey: string
                  }
                | { __typename?: 'PostRecord' }
                | {
                    __typename?: 'ProductRecord'
                    id: string
                    slug: string
                    _modelApiKey: string
                  }
                | null
            }>
          }
          ctaButton: Array<{
            __typename?: 'ButtonRecord'
            id: string
            label: string
            variant: string
            size: string
            useExternalLink?: boolean | null
            externalLink?: string | null
            linkTo?:
              | { __typename?: 'AuthorRecord' }
              | {
                  __typename?: 'CustomPageRecord'
                  id: string
                  slug: string
                  _modelApiKey: string
                }
              | {
                  __typename?: 'HomePageRecord'
                  id: string
                  _modelApiKey: string
                }
              | { __typename?: 'PostRecord' }
              | {
                  __typename?: 'ProductRecord'
                  id: string
                  slug: string
                  _modelApiKey: string
                }
              | null
          }>
        }
    >
  } | null
}

export const BannerSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BannerSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BannerSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BannerSectionFragmentFragment, unknown>
export const ResponsiveImageFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragmentFragment, unknown>
export const IconFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'iconFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'IconRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IconFragmentFragment, unknown>
export const FeaturesSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'FeaturesSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'FeaturesSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subTitleLarge' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subTitleSmall' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'auto' },
                            value: { kind: 'EnumValue', value: 'format' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'responsiveImageFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'features' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'icon' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'iconFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'iconFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'IconRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FeaturesSectionFragmentFragment, unknown>
export const ButtonFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'buttonFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ButtonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'useExternalLink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linkTo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HomePageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CustomPageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ProductRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'externalLink' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ButtonFragmentFragment, unknown>
export const HeroSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HeroSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HeroSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctaButtons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'buttonFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'auto' },
                            value: { kind: 'EnumValue', value: 'format' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'responsiveImageFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'buttonFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ButtonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'useExternalLink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linkTo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HomePageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CustomPageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ProductRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'externalLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HeroSectionFragmentFragment, unknown>
export const LogoCloudSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'LogoCloudSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'LogoCloudSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'auto' },
                            value: { kind: 'EnumValue', value: 'format' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'responsiveImageFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'textWithLinkHighlight' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoCloudSectionFragmentFragment, unknown>
export const NavigationSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NavigationSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavigationSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'siteLogo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: '_modelApiKey' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'buttonFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctaButton' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'buttonFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languageToggleLabel' },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'buttonFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ButtonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'useExternalLink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linkTo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HomePageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CustomPageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ProductRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'externalLink' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NavigationSectionFragmentFragment, unknown>
export const PageHeaderSectionFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageHeaderSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PageHeaderSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subTitle' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'responsiveImage' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'imgixParams' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'auto' },
                            value: { kind: 'EnumValue', value: 'format' },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'responsiveImageFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'responsiveImageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageHeaderSectionFragmentFragment, unknown>
export const MetaTagsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'metaTagsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MetaTagsFragmentFragment, unknown>
export const SiteQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SiteQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locale' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SiteLocale' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'site' },
            name: { kind: 'Name', value: '_site' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'favicon' },
                  name: { kind: 'Name', value: 'faviconMetaTags' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'metaTagsFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'header' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locale' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locale' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'blocks' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'BannerSectionFragment' },
                      },
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'NavigationSectionFragment',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'buttonFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ButtonRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'label' } },
          { kind: 'Field', name: { kind: 'Name', value: 'variant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'size' } },
          { kind: 'Field', name: { kind: 'Name', value: 'useExternalLink' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'linkTo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'HomePageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CustomPageRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ProductRecord' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '_modelApiKey' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'externalLink' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'metaTagsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Tag' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'attributes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'tag' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BannerSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'BannerSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'NavigationSectionFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'NavigationSectionRecord' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '_modelApiKey' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'siteLogo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'menu' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: '_modelApiKey' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'buttonFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctaButton' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'buttonFragment' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'languageToggleLabel' },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SiteQueryQuery, SiteQueryQueryVariables>
