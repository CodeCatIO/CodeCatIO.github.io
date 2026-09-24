// Translation dictionary for UI text
const translations = {
    zh: {
        site_name: "CodeCat",
        nav_home: "首页",
        nav_blog: "博客",
        nav_about: "关于",
        latest_posts: "最新文章",
        all_posts: "全部文章",
        view_all: "查看全部 →",
        projects: "项目",
        footer: "© 2026 CodeCat. Built with plain HTML & CSS.",
        about_intro: "Hi, I'm CodeCat.",
        about_school: "南京传媒学院 · 计算机科学与技术 · 2027届",
        about_desc1: "专注于 AI 应用开发与后端工程。相信在 AI 时代，比起 Coding 能力，更应该注重 Debug 能力——代码可以 AI 写，但你得能看懂、能排错、能讲清楚为什么。",
        about_desc2: "目前正在开发 TestMate AI——一个基于 LangChain 的智能测试用例生成平台。输入需求文字，AI 帮你生成测试用例，还能导出 Excel。部署在 Render + Vercel 上，实际跑着。",
        about_desc3: "也做过 Unity 3D 游戏原型（背包系统、AI 寻路、战斗系统）、Cocos Creator 小游戏、Spring Boot 后端项目。蓝桥杯 C++ 省二，Java 班级第三。",
        about_desc4: "目标：2026年12月拿到外企实习 offer。理想工作有 WLB，能持续成长。",
        project_testmate: "TestMate AI",
        project_testmate_desc: "基于 LangChain + DeepSeek 的智能测试用例生成平台。输入自然语言需求 → AI 生成测试用例 → 导出 Excel。FastAPI 后端 + Vue 3 前端，部署在 Render + Vercel。",
        project_unity: "Unity 3D 游戏 Demo",
        project_unity_desc: "包含背包系统、AI 寻路、战斗系统与动作系统的 3D 游戏原型。",
        contact_title: "联系方式",
        contact_email: "邮箱: codecattdev@gmail.com",
        tag_cloud: "标签",
        back_to_blog: "← 返回博客列表",
        back_to_blog_short: "← 返回博客"
    },
    en: {
        site_name: "CodeCat",
        nav_home: "Home",
        nav_blog: "Blog",
        nav_about: "About",
        latest_posts: "Latest Posts",
        all_posts: "All Posts",
        view_all: "View all →",
        projects: "Projects",
        footer: "© 2026 CodeCat. Built with plain HTML & CSS.",
        about_intro: "Hi, I'm CodeCat.",
        about_school: "Nanjing Communication University · CS · Class of 2027",
        about_desc1: "Focused on AI application development and backend engineering. In the AI era, debugging matters more than coding — AI writes the code, but you must understand, debug, and explain it.",
        about_desc2: "Currently building TestMate AI — an intelligent test case generation platform powered by LangChain. Input requirements in natural language, AI generates test cases, export to Excel. Deployed on Render + Vercel.",
        about_desc3: "Also built a Unity 3D game prototype (inventory, AI pathfinding, combat, action systems), Cocos Creator mini-games, and Spring Boot backend projects. Blue Bridge Cup C++ provincial 2nd prize.",
        about_desc4: "Goal: land a foreign company internship by Dec 2026. Want WLB and continuous growth.",
        project_testmate: "TestMate AI",
        project_testmate_desc: "Intelligent test case generation platform based on LangChain + DeepSeek. Natural language input → AI generates test cases → export to Excel. FastAPI backend + Vue 3 frontend, deployed on Render + Vercel.",
        project_unity: "Unity 3D Game Demo",
        project_unity_desc: "A 3D game prototype featuring inventory system, AI pathfinding, combat system, and action system.",
        contact_title: "Contact",
        contact_email: "Email: codecattdev@gmail.com",
        tag_cloud: "Tags",
        back_to_blog: "← Back to blog",
        back_to_blog_short: "← Back to blog"
    },
    jp: {
        site_name: "CodeCat",
        nav_home: "ホーム",
        nav_blog: "ブログ",
        nav_about: "自己紹介",
        latest_posts: "最新記事",
        all_posts: "全記事",
        view_all: "すべて見る →",
        projects: "プロジェクト",
        footer: "© 2026 CodeCat. Built with plain HTML & CSS.",
        about_intro: "Hi, I'm CodeCat.",
        about_school: "南京伝媒学院 · コンピュータ科学技術 · 2027年卒",
        about_desc1: "AIアプリケーション開発とバックエンドエンジニアリングに注力。AI時代において、コーディングよりもデバッグ能力が重要。AIがコードを書くが、理解し、デバッグし、説明できる必要がある。",
        about_desc2: "現在LangChainベースのテストケース生成プラットフォーム「TestMate AI」を開発中。自然言語で要件を入力→AIがテストケースを生成→Excelにエクスポート。Render + Vercelで稼働中。",
        about_desc3: "Unity 3Dゲームプロトタイプ（インベントリ、AIパスファインディング、戦闘システム）、Cocos Creatorミニゲーム、Spring Bootバックエンドプロジェクトも開発。藍橋杯C++省2位。",
        about_desc4: "目標：2026年12月までに外資系インターンを獲得。WLBと継続的な成長を求めている。",
        project_testmate: "TestMate AI",
        project_testmate_desc: "LangChain + DeepSeekベースのテストケース生成プラットフォーム。自然言語入力→AIがテストケース生成→Excelエクスポート。FastAPI + Vue 3、Render + Vercelデプロイ。",
        project_unity: "Unity 3Dゲームデモ",
        project_unity_desc: "インベントリシステム、AIパスファインディング、戦闘システム、アクションシステムを備えた3Dゲームプロトタイプ。",
        contact_title: "連絡先",
        contact_email: "メール: codecattdev@gmail.com",
        tag_cloud: "タグ",
        back_to_blog: "← ブログに戻る",
        back_to_blog_short: "← ブログに戻る"
    },
    kr: {
        site_name: "CodeCat",
        nav_home: "홈",
        nav_blog: "블로그",
        nav_about: "소개",
        latest_posts: "최신 글",
        all_posts: "전체 글",
        view_all: "전체 보기 →",
        projects: "프로젝트",
        footer: "© 2026 CodeCat. Built with plain HTML & CSS.",
        about_intro: "Hi, I'm CodeCat.",
        about_school: "난징 커뮤니케이션 대학교 · 컴퓨터 과학 · 2027년 졸업",
        about_desc1: "AI 애플리케이션 개발과 백엔드 엔지니어링에 집중. AI 시대에는 코딩보다 디버깅이 중요. AI가 코드를 작성하지만, 이해하고 디버깅하고 설명할 수 있어야 한다.",
        about_desc2: "현재 LangChain 기반 테스트 케이스 생성 플랫폼 TestMate AI 개발 중. 자연어 입력 → AI가 테스트 케이스 생성 → Excel 내보내기. Render + Vercel에 배포됨.",
        about_desc3: "Unity 3D 게임 프로토타입(인벤토리, AI 길찾기, 전투 시스템), Cocos Creator 미니게임, Spring Boot 백엔드 프로젝트도 개발. 청교배 C++ 성 2위.",
        about_desc4: "목표: 2026년 12월까지 외국계 기업 인턴십 확보. WLB와 지속적 성장 추구.",
        project_testmate: "TestMate AI",
        project_testmate_desc: "LangChain + DeepSeek 기반 테스트 케이스 생성 플랫폼. 자연어 입력 → AI 테스트 케이스 생성 → Excel 내보내기. FastAPI + Vue 3, Render + Vercel 배포.",
        project_unity: "Unity 3D 게임 데모",
        project_unity_desc: "인벤토리 시스템, AI 길찾기, 전투 시스템, 액션 시스템을 갖춘 3D 게임 프로토타입.",
        contact_title: "연락처",
        contact_email: "이메일: codecattdev@gmail.com",
        tag_cloud: "태그",
        back_to_blog: "← 블로그로 돌아가기",
        back_to_blog_short: "← 블로그로"
    }
};

// Set active language and update all translatable elements
function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update button active state
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Persist language choice
    localStorage.setItem('preferred-lang', lang);
}

// Initialize language switcher on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'zh';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
