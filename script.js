// Translation dictionary for UI text
// 翻译字典：存储四种语言的界面文案
const translations = {
    zh: {
        tagline: "一个在 AI 与工程之间寻找平衡的开发者",
        about_title: "关于我",
        about_school: "南京传媒学院",
        about_major: "计算机科学与技术",
        about_desc: "专注于 AI 应用开发与后端工程，热爱用代码解决真实问题。目前正在开发 TestMate AI —— 一个基于 LangChain 的智能测试用例生成平台。",
        projects_title: "项目",
        testmate_desc: "基于 LangChain + ChromaDB 的智能测试用例生成平台。支持自然语言生成测试用例、RAG 知识检索、Agent 自主执行。",
        unity_title: "Unity 3D 游戏 Demo",
        unity_desc: "包含背包系统、AI 寻路、战斗系统与动作系统的 3D 游戏原型。",
        blog_title: "博客",
        blog_tagline: "笔记与思考",
        blog_soon: "文章正在准备中…",
        contact_title: "联系方式",
        contact_email: "邮箱: Songwj811018@gmail.com"
    },
    en: {
        tagline: "A developer finding balance between AI and engineering",
        about_title: "About",
        about_school: "Nanjing Communication University",
        about_major: "Computer Science & Technology",
        about_desc: "Focused on AI application development and backend engineering. Passionate about solving real problems with code. Currently building TestMate AI — an intelligent test case generation platform powered by LangChain.",
        projects_title: "Projects",
        testmate_desc: "An intelligent test case generation platform based on LangChain + ChromaDB. Supports natural language test generation, RAG knowledge retrieval, and autonomous agent execution.",
        unity_title: "Unity 3D Game Demo",
        unity_desc: "A 3D game prototype featuring an inventory system, AI pathfinding, combat system, and action system.",
        blog_title: "Blog",
        blog_tagline: "Notes & Thoughts",
        blog_soon: "Posts coming soon…",
        contact_title: "Contact",
        contact_email: "Email: Songwj811018@gmail.com"
    },
    jp: {
        tagline: "AIとエンジニアリングの間でバランスを探す開発者",
        about_title: "自己紹介",
        about_school: "南京伝媒学院",
        about_major: "コンピュータ科学技術",
        about_desc: "AIアプリケーション開発とバックエンドエンジニアリングに注力。コードで現実の問題を解決することに情熱を持っています。現在はLangChainベースのスマートテストケース生成プラットフォーム「TestMate AI」を開発中です。",
        projects_title: "プロジェクト",
        testmate_desc: "LangChain + ChromaDBベースのスマートテストケース生成プラットフォーム。自然言語によるテスト生成、RAGナレッジ検索、自律エージェント実行をサポート。",
        unity_title: "Unity 3Dゲームデモ",
        unity_desc: "インベントリシステム、AIパスファインディング、戦闘システム、アクションシステムを備えた3Dゲームプロトタイプ。",
        blog_title: "ブログ",
        blog_tagline: "メモと思考",
        blog_soon: "記事は準備中…",
        contact_title: "連絡先",
        contact_email: "メール: Songwj811018@gmail.com"
    },
    kr: {
        tagline: "AI와 엔지니어링 사이에서 균형을 찾는 개발자",
        about_title: "소개",
        about_school: "난징 커뮤니케이션 대학교",
        about_major: "컴퓨터 과학 기술",
        about_desc: "AI 애플리케이션 개발과 백엔드 엔지니어링에 집중하고 있습니다. 코드로 실제 문제를 해결하는 것을 좋아합니다. 현재 LangChain 기반의 지능형 테스트 케이스 생성 플랫폼 TestMate AI를 개발 중입니다.",
        projects_title: "프로젝트",
        testmate_desc: "LangChain + ChromaDB 기반의 지능형 테스트 케이스 생성 플랫폼. 자연어 테스트 생성, RAG 지식 검색, 자율 에이전트 실행을 지원합니다.",
        unity_title: "Unity 3D 게임 데모",
        unity_desc: "인벤토리 시스템, AI 길찾기, 전투 시스템, 액션 시스템을 갖춘 3D 게임 프로토타입.",
        blog_title: "블로그",
        blog_tagline: "노트와 생각",
        blog_soon: "글 준비 중…",
        contact_title: "연락처",
        contact_email: "이메일: Songwj811018@gmail.com"
    }
};

// Set active language and update all translatable elements
// 设置当前语言并更新所有可翻译元素
function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Update all elements with data-i18n attribute
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update button active state
    // 更新按钮激活状态
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Persist language choice
    // 保存语言选择
    localStorage.setItem('preferred-lang', lang);
}

// Initialize language switcher on page load
// 页面加载时初始化语言切换
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'zh';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
