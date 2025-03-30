export interface Chapter {
  id: number;
  title: string;
  slug: string;
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string[];
    }>;
    quotes: Array<{
      text: string;
      author: string;
    }>;
    keyPoints: string[];
  };
  tools: {
    primary: string[];
    alternatives: string[];
  };
  images: Array<{
    url: string;
    alt: string;
    description: string[];
  }>;
}

export interface ChaptersData {
  chapters: Chapter[];
}