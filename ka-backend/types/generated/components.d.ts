import type { Schema, Struct } from '@strapi/strapi';

export interface CommentsEducation extends Struct.ComponentSchema {
  collectionName: 'components_comments_educations';
  info: {
    description: '';
    displayName: 'Education';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.String;
    institute: Schema.Attribute.String;
    Year: Schema.Attribute.Integer;
  };
}

export interface CommentsExperiences extends Struct.ComponentSchema {
  collectionName: 'components_comments_experiences';
  info: {
    description: '';
    displayName: 'Experiences';
  };
  attributes: {
    description: Schema.Attribute.Text;
    endYear: Schema.Attribute.BigInteger;
    plateformType: Schema.Attribute.String;
    present: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    startYear: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
  };
}

export interface CommentsWhatPakistanisSaysAboutHim
  extends Struct.ComponentSchema {
  collectionName: 'components_comments_what_pakistanis_says_about_hims';
  info: {
    description: '';
    displayName: 'whatPakistanisSaysAboutHim';
  };
  attributes: {
    comment: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    link: Schema.Attribute.String;
    plateformName: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'comments.education': CommentsEducation;
      'comments.experiences': CommentsExperiences;
      'comments.what-pakistanis-says-about-him': CommentsWhatPakistanisSaysAboutHim;
    }
  }
}
