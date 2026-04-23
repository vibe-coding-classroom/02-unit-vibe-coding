針對 **`02-unit-vibe-coding` (主流 Vibe Coding 工具旗艦店)** 單元，這個單元是工具能力的綜藝大賞，重點在於學員是否能根據需求選擇最適合的「AI 代理人 (Agent)」。

以下是針對 **v0, Lovable, Google Antigravity 與 Claude Code** 在 GitHub Classroom 部署其作業 (Assignments) 的具體建議：

### 1. 核心設置：跨平台整合作業
本單元的作業具有「跨平台」特性，因此 GitHub Classroom 倉庫將扮演 **「成果展示路徑 (Documentation Hub)」** 的角色。

*   **範本倉庫 (Template Repo) 配置**：
    *   **📂 `links.md`**：預置一個表格，讓學員填入 Google Antigravity 部署網址、Lovable 專案網址。
    *   **📂 `vibe-prompts.md`**：讓學員記錄在不同平台使用的「靈魂提示詞 (Vibe Prompts)」。
    *   **📂 `security-audit.log`**：用於存放 Claude Code 的執行日誌。

---

### 2. 作業任務部署細節

#### 任務 1：審美天花板 - 視覺實戰 (v0 / Lovable)
*   **目標**：練習精確定義 UI 風格與迭代優化。
*   **Classroom 部署建議**：
    *   **要求**：學員需在 Lovable 中點擊 "Publish" 並將產出的公開網址貼回 `links.md`。
    *   **驗證方式**：導師點擊網址，檢查是否有符合題目要求的「Cyberpunk 霓虹 + 毛玻璃」質感。
    *   **挑戰項**：在 `vibe-prompts.md` 中記錄他們如何透過 3 次以上的對話，將 UI 從「平庸」調整到「精緻」。

#### 任務 2：10 分鐘全棧開發 (Google Antigravity)
*   **目標**：體驗從零到一（含資料庫、後端、部署）的一條龍自動化。
*   **Classroom 部署建議**：
    *   **自動化檢核 (Autograding)**：在 GitHub Actions 中撰寫一個簡單的 `curl` 腳本，去 Ping 學員提供的 Google Antigravity URL。若回傳 `200 OK`，則自動判定「部署成功」。
    *   **功能驗證**：導師手動打開網址，測試其 Todo List 是否具備資料持久化功能（重新整理後資料不消失）。

#### 任務 3：CLI 掃描與安全修復 (Claude Code)
*   **目標**：練習使用終端機 Agent 進行本地代碼庫的深度維護。
*   **Classroom 部署建議**：
    *   **日誌提交**：學員需執行 `claude` 並對現有專案進行安全掃描。將 Agent 產出的「掃描報告與修復清單」複製並存入 `security-audit.log`。
    *   **Git 軌跡**：檢查提交紀錄中是否有由 Claude 自動產生的 Commit（通常會帶有其特有的語氣或格式），這能證明學員確實掌握了 CLI Agent 的協作方式。

---

### 3. 翻轉教室的評估指標 (Teaching Rubric)
本單元的評價不看「代碼寫得多漂亮」，而看 **「對工具特長的理解」**：
*   [ ] **工具選型**：學員是否理解 Lovable 適合做精緻前端，而 Google Antigravity 適合做快速全棧部署？
*   [ ] **溝通效率**：學員的 Prompt 是否能讓 AI 在最少的回合內達成目標？
*   [ ] **自動化意識**：是否理解透過 Claude Code 進行批次安全修復的價值？

### 📁 推薦範本結構 (GitHub Classroom Template)：
```text
.
├── screenshots/            # 存放 v0/Lovable 的精美 UI 截圖
├── links.md                # 各平台部署成功的 URL 連結清單
├── vibe-prompts.md         # 紀錄與 AI 代理人「調情」優化的過程
├── security-audit.log      # Claude Code 產出的安全性修復日誌
└── README.md               # 專案總覽與實戰心得
```

這種部署方案能讓學生迅速跨越技術門檻，體會到 2026 年「**指揮官式開發 (Orchestration)**」的強大威力。
