# 📝 AutoAnsweringForm

The **AutoAnsweringForm AI Agent** is designed to support multiple scenarios where automated Q&A handling is required. It enables faster, cleaner, and more reliable responses by leveraging AI-powered scraping, knowledge integration, and automated answer generation.

---

## 🎯 Example Scenarios

1. 🏢 **HR Recruitment Testing**  
   A company HR needs to generate unique answers for every Q&A form.  
   - AI automation tools prepare Q&A automatically.  
   - The AutoAnsweringForm ensures each candidate receives clean, unbiased questions.  
   - Prevents **collusion** or **cheating** among test candidates.  

2. ⏱️ **Urgent User Needs**  
   A user must finish answering a Q&A test **quickly**.  
   - This tool provides instant AI-powered answers.  

3. 🏆 **Tech & Knowledge Competitions**  
   Some events rely on **up-to-date information** and **news-based competitions**.  
   - AutoAnsweringForm can be used to **prepare topic materials**.  
   - ⚠️ *Not recommended for competition misuse — intended for learning and research.*  

---

## 🚀 How to Use It?

There are several scenarios where this **frontend app** can be applied:

1. 📚 **Corporate Knowledge Base Enrichment**  
   - Populate **internal corporate knowledge bases** with specific topics.  
   - Later, search answers automatically by combining **internal** + **external** sources.  
   - Ensures company data stays **enriched** and **updated** with the newest information from the internet.  

2. 🌐 **Q&A Test Assistance**  
   - Users can search for answers from:  
     - **Internet-only sources**, or  
     - A combination of **corporate knowledge base** + **internet** (if corporate data has been populated).  

3. 🔄 **Continuous Search & Retrieval**  
   - Users can query answers **anytime**, as long as:  
     - External knowledge sources have been scraped, or  
     - Internal databases exist, or  
     - Both sources are available.  
   - This enables **persistent learning** and **ongoing Q&A support**. 


---

🚀 Getting Started

Download the Image

```bash
docker pull ghcr.io/hendram/autoansweringform
```

▶️ Start

```bash
docker run -it -d --network=host ghcr.io/hendram/autoansweringform bash
```

🔍 Check Running Container

```bash
docker ps
```

```bash
CONTAINER ID   IMAGE                                  NAME                  STATUS
123abc456def   ghcr.io/hendram/autoansweringform      confident_bhaskara    Up 5 minutes
```

📦 Enter Container

```bash
docker exec -it confident_bhaskara /bin/bash
```

🏃 Run the Service

```bash
cd /home/autoansweringform
npm run dev
```
