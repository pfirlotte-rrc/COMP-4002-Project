export interface Topic {
  id: string;
  name: string;
}

export interface UserProfileTags {
  id: string;
  username: string;
  favoriteTopics: Topic[];
}

export const mockUsers: UserProfileTags[] = [
  {
    id: "u1",
    username: "peter_dev",
    favoriteTopics: [
      { id: "t1", name: "React" },
      { id: "t2", name: "TypeScript" },
      { id: "t3", name: "Unit Testing" }
    ]
  },
  {
    id: "u2",
    username: "cloud_ninja",
    favoriteTopics: [
      { id: "t4", name: "Docker" },
      { id: "t5", name: "Kubernetes" },
      { id: "t6", name: "AWS" }
    ]
  },
  {
    id: "u3",
    username: "secureCoder",
    favoriteTopics: [
      { id: "t7", name: "Penetration Testing" },
      { id: "t8", name: "OWASP" },
      { id: "t9", name: "Zero Trust Architecture" }
    ]
  },
  {
    id: "u4",
    username: "ai_builder",
    favoriteTopics: [
      { id: "t10", name: "Machine Learning" },
      { id: "t11", name: "TensorFlow" },
      { id: "t12", name: "Data Engineering" }
    ]
  },
  {
    id: "u5",
    username: "fullstack_ace",
    favoriteTopics: [
      { id: "t13", name: "Node.js" },
      { id: "t14", name: "PostgreSQL" },
      { id: "t15", name: "REST APIs" }
    ]
  },
  {
    id: "u6",
    username: "frontend_focused",
    favoriteTopics: [
      { id: "t16", name: "CSS Grid" },
      { id: "t17", name: "Accessibility" },
      { id: "t18", name: "Next.js" }
    ]
  },
  {
    id: "u7",
    username: "data_dan",
    favoriteTopics: [
      { id: "t19", name: "SQL Optimization" },
      { id: "t20", name: "ETL Pipelines" },
      { id: "t21", name: "Power BI" }
    ]
  },
  {
    id: "u8",
    username: "mobile_maker",
    favoriteTopics: [
      { id: "t22", name: "React Native" },
      { id: "t23", name: "Flutter" },
      { id: "t24", name: "iOS Development" }
    ]
  },
  {
    id: "u9",
    username: "devops_guru",
    favoriteTopics: [
      { id: "t25", name: "Terraform" },
      { id: "t26", name: "Infrastructure as Code" },
      { id: "t27", name: "GitHub Actions" }
    ]
  },
  {
    id: "u10",
    username: "test_driven",
    favoriteTopics: [
      { id: "t28", name: "Jest" },
      { id: "t29", name: "Cypress" },
      { id: "t30", name: "TDD" }
    ]
  }
];