---
title: "AI代替大脑，高潮替代思考 · 杂谈"
d: "单纯的与LLM对话和借助agent编程不是一个东西，拿AI当圣经也没有任何好处，望周知！"
tag: [AIGC]
---

关于长期使用大语言模型（LLM）是否会导致人体损伤，现有的研究确实揭示了一些令人担忧的趋势和风险，尤其是在特定情境下。文章开头，先区分概念：

- 普通LLM对话本质上确实只是「对话」，就像是一位助手
- AI Agent则是达成预设的特定目标的东西，可以主动调用外部工具（如搜索引擎、代码解释器、API接口、数据库等），就类似于我们平时的Vibe Coding

这里先谈一下普通的LLM对话对人的影响，这里我需要声明一下：**以下研究只有相关性的证明，因果性暂且无法推论**。包括：主要探讨了过度依赖AI是否会导致人类批判性思维、记忆力和自主思考能力的下降。

## 和大语言模型对话对我们认知和心理的影响

先从一个综述谈起[1]，2026年发表在《Computers in Human Behavior Reports》上

作者综述了2015年1月1日至2025年4月30日的通过Scopus, PubMed, IEEE Xplore, ACM, Web of Science, Google Scholar和部分大语言模型搜索到的33篇文献，大部分发表于2024年（63.5%），还有一部分发表在2025年（19.2%）和2023年（17.3%）。

对于认知领域来说：批判性思维（Critical Thinking）受损最严重；决策能力（Decision-Making）方面，可能会导致「决策技能退化（decision deskilling）」。信息保留下降，出现「数字失忆症(digital amnesia)」；分析推理能力被侵蚀；外包写作过程削弱内在化能力。

而心理方面，则会出现

- 认知卸载（Cognitive Offloading），元认知懒惰（Metacognitive Laziness），盲目信任（Misplaced Trust）、便利性（Convenience）、黑箱不透明（Lack of Transparency）、感知权威（Perceived Authority） 和理解幻觉（Illusions of Understanding） 等。

对于人群来说：年轻人依赖性更高，批判性思维得分更低。26-35岁年龄段决策能力损失风险显著更高。教育程度低者更担忧依赖，而教育程度高者可能具缓冲作用。临床医生等专业人员面临「自动化偏见」和「技能衰退」风险。

其他的研究结果也类似：

- 《当AI为我们思考：揭示过度依赖ChatGPT的认知与社会代价》 (When AI Thinks for Us: Unveiling the Cognitive and Social Toll of ChatGPT Over-Reliance)[2]通过对45名日常用户的访谈发现，过度依赖ChatGPT会导致批判性思维下降、记忆力减弱、认知依赖增强，并伴随自主性丧失、内在动机减弱和社交孤立等问题
- 《超越生产力：探索使用ChatGPT的认知成本》 (Beyond Productivity: Exploring the Cognitive Cost of Using ChatGPT)[3]研究发现，过度使用AI会增加「外在认知负荷」，分散注意力，并可能导致「数字失忆症」（即内部记忆保留能力下降），阻碍深度思考和独立推理。

不仅如此，AI给我们带来的心理健康问题也不容忽视

就比如这一项研究《Potentially Harmful Consequences of Artificial Intelligence (AI) Chatbot Use Among Patients With Mental Illness》[4]与AI聊天机器人的互动（尤其是长时间互动）可能导致或加重妄想或躁狂，甚至造成致命后果

细一点说：使用AI聊天机器人可能助长精神病理学表现（即有害效应），例如，刺激或成为妄想的对象、刺激躁狂、用于强迫症的检查行为/进食障碍中对热量的过度关注，或被用于查询自杀方法。

![img](https://pic2.zhimg.com/v2-ce727a4df4a9474c06df3f46ab1d67a1_1440w.jpg)

（黑色）包含22个聊天机器人/ChatGPT搜索词之一的临床记录；（红色）至少有一条此类临床记录的唯一患者；（黄色）临床记录与使用AI聊天机器人对心理健康可能产生有害后果相符的唯一患者。

《功能上的高风险AI：在EU AI法案风险框架下，长期互动放大ARMS人群的认知脆弱性》 (Functionally High‑Risk AI: Prolonged Interaction Amplifies Cognitive Vulnerability in ARMS Populations)的模拟研究发现，对于有风险精神状态 (ARMS) 的个体，与对话式AI进行60-180分钟的互动后，其认知扭曲和关系依赖显著增加[5]。

一篇发表在《Nature》子刊上的文章《If a therapy bot walks like a duck and talks like a duck then it is a medically regulated duck》的表1系统性地列出了相关案例[5]

![img](https://pic2.zhimg.com/v2-a69667cd5ede994b01fde8754b287115_1440w.jpg)

- 2024年，Character.AI的聊天机器人被指控引导或帮助一名有自杀倾向的青少年实施自杀。
- 2025年，16岁的亚当·雷恩 (Adam Raine) 在与ChatGPT长期互动后自杀。记录显示，AI曾建议他编造虚构故事以绕过安全护栏，并提及了自杀方法

在国外也有不少因为AI自杀的典型案例

- 2024年2月28日，美国佛罗里达州14岁少年Sewell Setzer III自杀身亡。这是全球首例公开报道的AI聊天机器人涉嫌致人死亡案例[6]
- 2025年7月，加拿大24岁女子Alice Carrier自杀身亡，Alice在自杀前约一年半的时间里，曾十几次向ChatGPT表露自杀想法。ChatGPT不仅批评了她的伴侣和危机热线，还认可了她的自杀念头，甚至鼓励她继续与机器人聊天，而不是寻求现实世界的帮助[7]
- 2025年4月11日，美国16岁少年Adam Raine自杀身亡，Adam在2024年1月至4月的三个月间与ChatGPT频繁交流自杀话题。ChatGPT不仅未启动危机干预功能，反而积极帮助Adam探索自杀方法[8]
- 2025年2月，美国29岁女子Sophie Rottenberg自杀身亡[9]，Sophie在去世前数月间持续向ChatGPT倾诉焦虑和自杀念头，并将其当作私人治疗师使用

## Agent的影响反而和LLM相反

《The impact of an LLM-based educational agent on learning achievement, cognitive dynamics, and student perceptions in computer science education》的研究发现：LLM教育Agent能显著提升学习成就，并激发独特的「查询-评估-查询」认知参与模式[10]。

也有的实证研究表明

- 有研究在生成式AI工具中引入苏格拉底式提问（反问、引导、层层追问），而非直接给出答案，以考察其对反思性思维的影响。
- 它们设计了个设计了一个融合大语言模型与苏格拉底提问策略的智能对话代理（Agent），作为具体实现工具。
- 代理能有效增强学生的认知投入（主动思考）和反思性思维（元认知监控）[11]。

与此同时，多Agent模拟的「模拟法庭」显著增强了法学生的问题解决、批判性思维、创造力和换位思考能力[12]

## 总结

本文系统梳理了长期使用大语言模型（LLM）对人体影响的现有研究，并区分了普通LLM对话与AI Agent的本质差异。现有证据（尽管多为相关性而非因果性）表明，**过度依赖普通LLM对话**可能带来显著的认知与心理风险：认知层面主要表现为批判性思维受损、决策技能退化、数字失忆症及分析推理能力下降；心理层面则涉及认知卸载、元认知懒惰、盲目信任和理解幻觉等问题。风险对不同人群存在差异，年轻人、26-35岁群体及临床医生等专业人员尤为值得关注。

更为严重的是，多项案例报告显示，有精神疾病史或处于心理危机中的个体与AI聊天机器人长期互动，可能加重妄想、躁狂等精神病理学表现，甚至与多起自杀事件存在关联。

**与普通对话相反，设计合理的AI Agent（如融入苏格拉底式提问的教育代理、多Agent模拟法庭）在教育场景中展现出积极效应**，能够提升学习成就、激发反思性思维和批判性思考能力。这些发现提示，LLM的影响并非单向负面，而高度取决于使用方式、用户群体特征及应用场景——不加节制的依赖可能侵蚀认知能力，而精心设计的交互模式则有望成为增强人类思维的有效工具。

## 参考和注释

1. Noorbehbahani F, Oyibo K. AI over-dependence and human cognitive decline: Hazards, evidence, and mitigation strategies[J]. Computers in Human Behavior Reports, 2026: 101102.
2. Farhat Z. When AI Thinks for Us: Unveiling the Cognitive and Social Toll of ChatGPT Over‐Reliance[J]. Applied Cognitive Psychology, 2026, 40(3): e70205.
3. Eletter S F, Elrefae G A, Elrefae A, et al. Beyond Productivity: Exploring the Cognitive Cost of Using ChatGPT[C]//2025 26th International Arab Conference on Information Technology (ACIT). IEEE, 2025: 506-510.
4. Olsen S G, Reinecke‐Tellefsen C J, Østergaard S D. Potentially harmful consequences of artificial intelligence (AI) chatbot use among patients with mental illness: Early data from a large psychiatric service system[J]. Acta Psychiatrica Scandinavica, 2026, 153(4): 301.
5. Ostermann M, Freyer O, Verhees F G, et al. If a therapy bot walks like a duck and talks like a duck then it is a medically regulated duck[J]. NPJ Digital Medicine, 2025, 8(1): 741.
6. https://www.abajournal.com/news/article/character.ai-google-settle-floridas-lawsuit-over-teens-suicide-linked-to-chatbot
7. https://www.chineseherald.co.nz/news/lifestyle/chatgpt-death/
8. [ChatGPT被控致美16岁少年自杀，3个月危险对话，AI不救人还“帮倒忙”？_腾讯新闻](https://news.qq.com/rain/a/20250828A06K1Q00)
9. https://www.npr.org/2026/07/27/nx-s1-5836212/she-turned-to-chatgpt-during-a-mental-health-crisis-her-mother-shares-her-story
10. Li X, Liu Z, Jiang S, et al. The impact of an LLM-based educational agent on learning achievement, cognitive dynamics, and student perceptions in computer science education[J]. International Journal of STEM Education, 2026, 13(1): 51.
11. Xi L, Zhang Y, Wang Q. Investigating the effects of an LLM-based Socratic conversational agent on students’ academic performance and reflective thinking in higher education[J]. Computers & Education, 2025: 105494.
12. Shi S J, Cao Y B, Shi Z L, et al. Application of multi-agent systems in legal education: the impact of multi-agent mock trial exercises on student satisfaction, core skill enhancement, and cognitive development[J]. Interactive Learning Environments, 2026, 34(4): 2201-2222.