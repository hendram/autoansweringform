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

## 🚀 Where It May Use It?

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

## 🚀 Getting Started

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

🚀 How to Run All Containers

You’ll be running 8 containers in total:

🗄️ kafka-tidb

📝 autoansweringform

🕷️ puppeteerworker1

🕷️ puppeteerworker2

🕷️ puppeteerworker3

🌐 puppeteerservice

⚙️ chunkgeneratorforaimodel

🧠 vectorembedgen


---

## ✅ Recommended Startup Sequence


1️⃣ Start Core Services

Run kafka-tidb first (foundation for messaging + database).


2️⃣ Launch Puppeteer Workers & Service

Start these together:

🌐 puppeteerservice

🕷️ puppeteerworker1

🕷️ puppeteerworker2

🕷️ puppeteerworker3

3️⃣ Initialize Chunk Generator

## Run chunkgeneratorforaimodel to prepare and dispatch jobs.

4️⃣ Start Vector Embedder

Run vectorembedgen to generate and store embeddings.

5️⃣ Deploy Auto-Answering Service

Finally, start autoansweringform for the application layer.


# 📝 Scenario 1

### 🏢 Test to populate corporate knowledgebase database  

🔹 **Put this inside Corporate Knowledge Based Url input**  
👉 [https://hendram.github.io/Knowledgebasetidb/](https://hendram.github.io/Knowledgebasetidb/)  

🔹 **Put this into Topic:**  
👉 `tidb vector search`  

✅ **Click**: `Submit Topic`  

---

### 🌐 Test to populate external database scrap from internet  

🔹 **Put this into Searched input:**  
👉 `tidb vector search`  

🔽 **On Filter click down arrow, and click each of the options:**  
- `--filetype=xhtml`  
- `--filetype=html`  
- `--filetype=text`  

⬆️ **Click the arrow to close it back**  

🔹 **Put this into Search Engine input:**  
👉 `search.brave.com`  

🔹 **Put this into Site just one url per submit to test if just search for answer works or not later on, so put just one first here:**  
👉 [https://docs.google.com/forms/d/e/1FAIpQLSc7PUBn8q6IWhBGBHzZ1NlhG-v0Cyzb-JA-JD64NQpN0DF9MA/viewform?usp=dialog](https://docs.google.com/forms/d/e/1FAIpQLSc7PUBn8q6IWhBGBHzZ1NlhG-v0Cyzb-JA-JD64NQpN0DF9MA/viewform?usp=dialog)  

✅ **Click**: `Submit`  

---

### ❓ Test to get answer from any Q&A url that not inputted in the beginning, but external or internal or both table has been created  

✏️ **Just remove one character on existing and add it again to make + - button show up**  

➕ **Click + button**  

🔹 **Put second url on the second input Site:**  
👉 [https://docs.google.com/forms/d/e/1FAIpQLScGTW4qCBivaJr2RXW6OgSnsmgvDZMMB9KLNbB4ilahRx5XBw/viewform?usp=dialog](https://docs.google.com/forms/d/e/1FAIpQLScGTW4qCBivaJr2RXW6OgSnsmgvDZMMB9KLNbB4ilahRx5XBw/viewform?usp=dialog)  

➕ **Click + button again, if already gone just remove one character and add again**  

🔹 **Put third url on the third input site:**  
👉 [https://docs.google.com/forms/d/e/1FAIpQLScoYJWCGzBfkByhudH-Jaxj-3DWtS1JlZ21AYaUrawtTGJ0yg/viewform?usp=dialog](https://docs.google.com/forms/d/e/1FAIpQLScoYJWCGzBfkByhudH-Jaxj-3DWtS1JlZ21AYaUrawtTGJ0yg/viewform?usp=dialog)  

---

# 📝 Scenario 2  

### 🏢 Test to populate corporate knowledgebase database  

🔹 **Put this inside Corporate Knowledge Based Url input**  
👉 [https://hendram.github.io/Knowledgebase/](https://hendram.github.io/Knowledgebase/)  

🔹 **Put this into Topic:**  
👉 `mongodb rag`  

✅ **Click**: `Submit Topic`  

---

### 🌐 Test to populate external database scrap from internet  

🔹 **Put this into Searched input:**  
👉 `mongodb rag`  

🔽 **On Filter click down arrow, and click each of the options:**  
- `--filetype=xhtml`  
- `--filetype=html`  
- `--filetype=text`  

⬆️ **Click the arrow to close it back**  

🔹 **Put this into Search Engine input:**  
👉 `search.brave.com`  

🔹 **Put this into Site just one url per submit to test if just search for answer works or not later on, so put just one first here:**  
👉 [https://docs.google.com/forms/d/e/1FAIpQLSfNCiKsb-vRB9aG7DvJKFk7mqEmbC411YvuTusPBD999kj4cA/viewform?usp=dialog](https://docs.google.com/forms/d/e/1FAIpQLSfNCiKsb-vRB9aG7DvJKFk7mqEmbC411YvuTusPBD999kj4cA/viewform?usp=dialog)  

✅ **Click**: `Submit`  

---

### ❓ Test to get answer from any Q&A url that not inputted in the beginning, but external or internal or both table has been created  

✏️ **Just remove one character on existing and add it again to make + - button show up**  

➕ **Click + button**  

🔹 **Put second url on the second input Site:**  
👉 [https://docs.google.com/forms/d/e/1FAIpQLSfRj7VFEAZJIm8HgE3lk0K_b5i9w0mgX9G2_XntzbptuURYiw/viewform?usp=dialog](https://docs.google.com/forms/d/e/1FAIpQLSfRj7VFEAZJIm8HgE3lk0K_b5i9w0mgX9G2_XntzbptuURYiw/viewform?usp=dialog)  

➕ **Click + button again, if already gone just remove one character and add again**  

🔹 **Put third url on the third input site:**  
👉 [https://docs.google.com/forms/d/e/1FAIpQLSdarhQiEV1AqQzPvtSXx2ZxGAJIYvIgHOb3XE9xcHDUoGVMcQ/viewform?usp=dialog](https://docs.google.com/forms/d/e/1FAIpQLSdarhQiEV1AqQzPvtSXx2ZxGAJIYvIgHOb3XE9xcHDUoGVMcQ/viewform?usp=dialog)  

