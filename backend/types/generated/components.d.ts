import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_steps';
  info: {
    displayName: 'about-step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_items';
  info: {
    displayName: 'case-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    theme: Schema.Attribute.Enumeration<['purple', 'mint', 'sky']>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsClinicStat extends Struct.ComponentSchema {
  collectionName: 'components_sections_clinic_stats';
  info: {
    displayName: 'clinic-stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsHeroStat extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_stats';
  info: {
    displayName: 'hero-stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsMethodologyStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_methodology_steps';
  info: {
    displayName: 'methodology-step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTechStackItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_tech_stack_items';
  info: {
    displayName: 'tech-stack-item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
    sub: Schema.Attribute.String;
    theme: Schema.Attribute.String;
  };
}

export interface SectionsTechStatItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_tech_stat_items';
  info: {
    displayName: 'tech-stat-item';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsWhyUsItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_us_items';
  info: {
    displayName: 'why-us-item';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon_key: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-step': SectionsAboutStep;
      'sections.case-item': SectionsCaseItem;
      'sections.clinic-stat': SectionsClinicStat;
      'sections.hero-stat': SectionsHeroStat;
      'sections.methodology-step': SectionsMethodologyStep;
      'sections.tech-stack-item': SectionsTechStackItem;
      'sections.tech-stat-item': SectionsTechStatItem;
      'sections.why-us-item': SectionsWhyUsItem;
    }
  }
}
