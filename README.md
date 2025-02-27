## 🚀 실행 방법

1. 레포지토리 clone

   ```bash
   git clone https://github.com/SangWoo9734/2025_fliption_sde_assignment.git
   ```

2. 프로젝트 관련 외부 라이브러리 설치

   ```bash
   npm install
   ```

3. 클라이언트 / 서버 로컬 실행

   **클라이언트 ( 3000번 포트에서 실행 )**

   ```bash
   npm run client
   ```

   **서버 ( 5000번 포트에서 실행 )**

   ```bash
   npm run server
   ```

4. 브라우저에서 http://localhost:3000 실행

<br/>

## ⚒️ UX 플로우

### [🔗 Figma Link](https://www.figma.com/design/0UFfykKfaEfrk4yDnAOqQp/플립션?node-id=25-61&t=Mo3gdAPMohFjus4m-1)

<br/>

## 💻 개발 환경 및 기술 스택

- Node.js (v20.11.1)
- Next.js 15 / React 19
- Tanstack Query
- Zustand
- Tailwind
- json-server ( for Mock API )

<br/>

## 프로젝트 구조

```
📦src
 ┣ 📂apis
 ┣ 📂app
 ┃ ┣ 📂directory
 ┃ ┃ ┣ 📂[id]
 ┃ ┣ 📂feedback
 ┃ ┣ 📂new-project
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂layout
 ┃ ┣ 📂page
 ┃ ┗ 📂provider
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂store
 ┗ 📂types
```

| 디렉토리                     | 설명                                                     |
| ---------------------------- | -------------------------------------------------------- |
| **`📂 apis`**                | 서버 리소스 요청과 관련한 API 로직을 관리                |
| **`📂 components`**          | 프로젝트 내 모든 컴포넌트를 관리                         |
| **`📂 components/common`**   | 공통 컴포넌트를 관리                                     |
| **`📂 components/layout`**   | 레이아웃과 관련된 컴포넌트를 관리                        |
| **`📂 components/page`**     | 각 페이지 내에 필요한 컴포넌트들을 관리                  |
| **`📂 components/provider`** | 컨텍스트, Portal 등 리소스 공유 관련된 Provider들을 관리 |
| **`📂 constants`**           | 상수를 관리                                              |
| **`📂 hooks`**               | 커스텀 훅을 관리                                         |
| **`📂 store`**               | 전역 상태 관리 로직을 관리                               |
| **`📂 types`**               | 프로젝트 내 공유되고 있는 타입을 관리                    |

<br/>

## Mock API 명세

### **🟢 프로젝트 리스트 조회 - `GET`**

**Request**

```bash
GET / projects
```

**Response**

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "userId": "user-001",
    "title": "new swap",
    "sourceImageUrl": "/images/user1.jpg",
    "targetImageUrl": "/images/style3.png",
    "resultImageUrl": "/images/result3.png",
    "status": "done",
    "createdAt": "2025-02-22T10:00:00Z",
    "updatedAt": "2025-02-22T10:00:00Z"
  },
  ...
]
```

### **🟢** 프로젝트 조회 - `GET`

**Request**

```bash
GET /projects/:id
```

**Response**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "userId": "user-001",
  "title": "new swap",
  "sourceImageUrl": "/images/user1.jpg",
  "targetImageUrl": "/images/style3.png",
  "resultImageUrl": "/images/result3.png",
  "status": "done",
  "createdAt": "2025-02-22T10:00:00Z",
  "updatedAt": "2025-02-22T10:00:00Z"
}
```

### **🟢 프로젝트 생성 - `POST`**

**Request**

```json
POST /projects
Content-Type: application/json

body
{
	"id": "41c6194a-c373-4150-af67-e1b45548581c",
	"userId": "user123",
	"title": "New Project - 1740650017933",
	"sourceImageUrl": "/images/user1.jpg",
	"targetImageUrl": "/images/style3.png",
	"resultImageUrl": "/images/result3.png",
	"status": "waiting",
	"createdAt": "2025-02-27T09:53:37.933Z",
	"updatedAt": "2025-02-27T09:53:37.933Z"
}
```

**Response**

```bash
None
```

### **🟢 피드백 조회 - `GET`**

**Request**

```bash
GET / feedbacks
```

**Response**

```json
[
  {
    "id": "5efb5aaf-50f7-4ae3-8648-cff789a68fc6",
    "title": "new swap",
    "category": "wrong-position",
    "contents": "fadada",
    "projectImageUrl": "http://localhost:3000/_next/image?url=%2Fimages%2Fresult3.png&w=256&q=75",
    "userId": "user123",
    "createdAt": "2025-02-27T09:08:26.971Z",
    "status": "Answering"
  },
  ...
]
```

### **🟢 피드백 생성 - `POST`**

**Request**

```json
POST /feedbacks
Content-Type: application/json

body
{
  "id": "5efb5aaf-50f7-4ae3-8648-cff789a68fc6",
  "title": "new swap",
  "category": "wrong-position",
  "contents": "fadada",
  "projectImageUrl": "http://localhost:3000/_next/image?url=%2Fimages%2Fresult3.png&w=256&q=75",
  "userId": "user123",
  "createdAt": "2025-02-27T09:08:26.971Z",
  "status": "Answering"
}
```

**Response**

```bash
None;
```

<br/>

## **🧐** 고민했던 부분

### **1️⃣ 헤드 스왑 진행 상태 표시**

실시간 진행 상태를 표기함으로서 비교적 처리 시간이 필요한 작업에 대한 대기 경험을 향상시킬 수 있습니다.

헤드 스왑의 진행의 실시간 상태를 확인할 수 있게 하기 위해 아래와 같은 UX를 생각해 보았습니다.

1. 잔여 시간 표기
2. 진행도(%) 를 표기한 로딩 UI
3. 진행중인 상태 표기 UI - 로딩 스피너, 텍스트 UI

어떤 방식을 선택하느냐에 따라 서버-클라이언트간 실시간 통신 방식을 결정할 수 있을 것 같다고 생각해서 아래와 같은 이유로 3번을 선택하게 되었습니다.

잔여 시간 표기는 비교적 긴시간이 걸리더라도 사용자들에게 끝나는 시간에 대한 정보를 전달 받을 수 있어 좋은 점이 있다고 생각합니다. 하지만 해당 작업들을 보다 작업 소요시간을 정밀하게 산정할 수 있는 경우에 사용할 수 있는 방법고 생각합니다.

진행도 표기의 경우는 현재 진행중인 작업에 대해서 가장 직관적으로 경과를 파악할 수 있다는 장점이 있지만 내부 코드상으로도 작업이 단계적으로 잘 나누어 져있어 각 단계의 경과를 전달할 수 있는 경우에 더 적절하다고 생각이 들었습니다.

마지막 진행중인 상태만 표기하는 것은 앞선 두 방식에 비해 사용자들에게 처리되는 작업 과정에 대한 정보가 구체적이지 않을 수 있다고 생각합니다. 하지만 현재 처리하고 있는 단계에 대해서 최소한의 정보 제공을 하고 있고, 클라이언트 서버 사이 처리 요청/ 처리 완료에 대한 부분만 주고 받기 현재 백엔드 로직에 대한 정보가 없는 상황에서 선택할 수 있는 합리적인 UX 방식이라는 생각이 들었습니다.

### 2️⃣ zustand vs Custom Hook + Context API

1. **배경**

   이번 프로젝트에서 프로젝트 생성 기능과 관련하여 **폼 제출 및 관리 로직을 UI 컴포넌트와 분리**하는 과정이 있었습니다. 폼의 상태는 2개(이미지 + 스타일)로 단순하지만, 폼 상태 관리 로직과 UI 로직의 관심사를 분리할 필요성을 느꼈습니다. **Custom Hook + Context API** 방식과 **Zustand**를 통해 분리하는 방식을 사용할지 고민해보았습니다.

2. **의사 결정 과정**
   1. **외부 의존성 추가**
      - → 폼 상태가 단순한 만큼 해당 폼만을 위해 외부 라이브러리를 추가할 필요가 없다고 생각했습니다.
      - 하지만 Context API를 사용하면 Provider 컴포넌트 등의 보일러플레이트 코드가 늘어나기 때문에, 결국 코드 복잡도가 증가할 가능성이 있다고 생각했습니다.
   2. **보일러플레이트 비용**
      - Context API를 사용하면 `createContext`, `Provider`, `useContext` 등을 설정해야할 것들이 zustand에 비해 많습니다.
      - 반면, Zustand는 `create()` 하나로 상태를 정의하고 필요한 곳에서 바로 가져다 쓸 수 있어보다 간결하다는 장점이 있습니다.
   3. **상태 관리 로직의 분리도**
      - Context API를 사용하면 상태 정의와 Provider 선언이 분리되어 zustand에 비해 연관 로직들이 분산되어 있다는 생각을 했습니다.
      - 반면 Zustand는 Provider 없이 상태를 중앙에서 관리할 수 있어 로직이 더 집중적으로 관리된다는 느낌을 받았다.
      - 관심사를 명확히 분리하고 상태 관리 코드를 더 직관적으로 유지하는 것이 더 필요하다고 생각했기 때문에,이 부분에서 Zustand가 더 적합하다고 판단했습니다.
3. 결론

   폼 상태가 단순하지만, 관심사를 분리하여 관리 로직을 보다 간단하고, 통합적으로 유지하려는 목적에서 Zustand를 선택하여 구현했습니다.

<br/>

## 🏃‍♂️ 추가 문제해결 과제

### 🥸 **Polling 방식이 가지는 한계는 무엇이며, 이를 개선할 수 있는 방법은 무엇인가요?**

Polling 방식은 크게 ‘불필요한 주기적 요청/응답으로 인한 리소스 낭비’와 ‘상태 변경이 즉시 반영되지 않음` 두가지에 한계점을 가진다고 생각합니다.

폴링 방식을 사용하는 상황에서 위 두가지 한계는 다음과 같은 방식으로 개선해볼 수 있을 것 같습니다.

서버가 해당 작업에 대해서 변경되는 시점을 예측이 가능하다면 특정 시간 이후부터 Polling 방식을 시작하거나 w주기를 짧게 조 할 수 있을 것 같습니다. 긴시간 polling을 보내는 것에 비해 실시간성을 더 높이고, 요청 횟수면에서 개선이 있을 수 있다고 생각합니다.

그리고 Long Polling 방식을 사용해볼 수 있습니다. Long Polling 방식은 서버에 요청을 보낸후 상태 변환이 있기 전까지 응답을 대기하여 불필요한 횟수와 실시간성을 높일 수 있습니다.

---
