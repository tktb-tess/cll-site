---
layout: ../layouts/Layout.astro
title: 'Chapter 19. Putting It All Together: Notes on the Structure of Lojban Texts'
prev: chapter18
prevTitle: 'Prev: Chapter 18'
next: chapter20
nextTitle: 'Next: Chapter 20'
---

![The picture for chapter 19](../assets/chapter-structure.gif)

## Introductory

This chapter is incurably miscellaneous. It describes the cmavo that specify the structure of Lojban texts, from the largest scale (paragraphs) to the smallest (single words). There are fewer examples than are found in other chapters of this book, since the linguistic mechanisms described are generally made use of in conversation or else in long documents.

This chapter is also not very self-contained. It makes passing reference to a great many concepts which are explained in full only in other chapters. The alternative would be a chapter on text structure which was as complex as all the other chapters put together. Lojban is a unified language, and it is not possible to understand any part of it (in full) before understanding every part of it (to some degree).

## Sentences: I

The following cmavo is discussed in this section:

|    |   |                    |
| -- | - | ------------------ |
| .i | I | sentence separator |

Since Lojban is audio-visually isomorphic, there needs to be a spoken and written way of signaling the end of a sentence and the start of the following one. In written English, a period serves this purpose; in spoken English, a tone contour (rising or falling) usually does the job, or sometimes a long pause. Lojban uses a single separator: the cmavo _[i](glossary#valsi-i)_ (of selma'o I):

### Example 19.1.

|    |       |     |        |    |     |         |     |       |
| -- | ----- | --- | ------ | -- | --- | ------- | --- | ----- |
| mi | klama | le  | zarci  | .i | do  | cadzu   | le  | bisli |
| I  | go-to | the | store. |    | You | walk-on | the | ice.  |



The word “separator” should be noted. _[i](glossary#valsi-i)_ is not normally used after the last sentence nor before the first one, although both positions are technically grammatical. _[i](glossary#valsi-i)_ signals a new sentence on the same topic, not necessarily by the same speaker. The relationship between the sentences is left vague, except in stories, where the relationship usually is temporal, and the following sentence states something that happened after the previous sentence.

Note that although the first letter of an English sentence is capitalized, the cmavo _[i](glossary#valsi-i)_ is never capitalized. In writing, it is appropriate to place extra space before _[i](glossary#valsi-i)_ to make it stand out better for the reader. In some styles of Lojban writing, every _[i](glossary#valsi-i)_ is placed at the beginning of a line, possibly leaving space at the end of the previous line.

An _[i](glossary#valsi-i)_ cmavo may or may not be used when the speaker of the following sentence is different from the speaker of the preceding sentence, depending on whether the sentences are felt to be connected or not.

An _[i](glossary#valsi-i)_ cmavo can be compounded with a logical or non-logical connective (a jek or joik), a modal or tense connective, or both: these constructs are explained in [Section 9.8](chapter09#section-modal-connectives "9.8. Other modal connections"), [Section 10.16](chapter10#section-tense-connection "10.16. Tense relations between sentences"), and [Section 14.4](chapter14#section-bridi-connection "14.4. Logical connection of bridi"). In all cases, the _[i](glossary#valsi-i)_ comes first in the compound. Attitudinals can also be attached to an _[i](glossary#valsi-i)_ if they are meant to apply to the whole sentence: see [Section 13.9](chapter13#section-scope "13.9. The uses of indicators").

There exist a pair of mechanisms for binding a sequence of sentences closely together. If the _[i](glossary#valsi-i)_ (with or without connectives) is followed by _[bo](glossary#valsi-bo)_ (of selma'o BO), then the two sentences being separated are understood to be more closely grouped than sentences connected by _[i](glossary#valsi-i)_ alone.

Similarly, a group of sentences can be preceded by _[tu'e](glossary#valsi-tuhe)_ (of selma'o TUhE) and followed by _[tu'u](glossary#valsi-tuhu)_ (of selma'o TUhU) to fuse them into a single unit. A common use of _[tu'u](glossary#valsi-tuhu)_ is to group the sentences which compose a poem: the title sentence would precede the group, separated from it by _[i](glossary#valsi-i)_. Another use might be a set of directions, where each numbered direction might be surrounded by _[tu'u](glossary#valsi-tuhu)_ and contain one or more sentences separated by _[i](glossary#valsi-i)_. Grouping with _[tu'e](glossary#valsi-tuhe)_ and _[tu'u](glossary#valsi-tuhu)_ is analogous to grouping with _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_ to establish the scope of logical or non-logical connectives (see [Section 14.8](chapter14#section-afterthought-connectives-grouping "14.8. Grouping of afterthought connectives")).

## Paragraphs: NIhO

The following cmavo are discussed in this section:

|      |      |                          |
| ---- | ---- | ------------------------ |
| ni'o | NIhO | new topic                |
| no'i | NIhO | old topic                |
| da'o | DAhO | cancel cmavo assignments |

The paragraph is a concept used in writing systems for two purposes: to indicate changes of topic, and to break up the hard-to-read appearance of large blocks of text on the page. The former function is represented in both spoken and written Lojban by the cmavo _[ni'o](glossary#valsi-niho)_ and _[no'i](glossary#valsi-nohi)_, both of selma'o NIhO. Of these two, _[ni'o](glossary#valsi-niho)_ is the more common. By convention, written Lojban is broken into paragraphs just before any _[ni'o](glossary#valsi-niho)_ or _[no'i](glossary#valsi-nohi)_, but a very long passage on a single topic might be paragraphed before an _[i](glossary#valsi-i)_. On the other hand, it is conventional in English to start a new paragraph in dialogue when a new speaker starts, but this convention is not commonly observed in Lojban dialogues. Of course, none of these conventions affect meaning in any way.

A _[ni'o](glossary#valsi-niho)_ can take the place of an _[i](glossary#valsi-i)_ as a sentence separator, and in addition signals a new topic or paragraph. Grammatically, any number of _[ni'o](glossary#valsi-niho)_ cmavo can appear consecutively and are equivalent to a single one; semantically, a greater number of _[ni'o](glossary#valsi-niho)_ cmavo indicates a larger-scale change of topic. This feature allows complexly structured text, with topics, subtopics, and sub-subtopics, to be represented clearly and unambiguously in both spoken and written Lojban. However, some conventional differences do exist between _[ni'o](glossary#valsi-niho)_ in writing and in conversation.

In written text, a single _[ni'o](glossary#valsi-niho)_ is a mere discursive indicator of a new subject, whereas _ni'oni'o_ marks a change in the context. In this situation, _ni'oni'o_ implicitly cancels the definitions of all pro-sumti of selma'o KOhA as well as pro-bridi of selma'o GOhA. (Explicit cancelling is expressed by the cmavo _[da'o](glossary#valsi-daho)_ of selma'o DAhO, which has the free grammar of an indicator – it can appear almost anywhere.) The use of _ni'oni'o_ does not affect indicators (of selma'o UI) or tense references, but _ni'oni'oni'o_, indicating a drastic change of topic, would serve to reset both indicators and tenses. (See [Section 19.8](chapter19#section-attitudinal-scope "19.8. Attitude scope markers: FUhE/FUhO") for a discussion of indicator scope.)

In spoken text, which is inherently less structured, these levels are reduced by one, with _[ni'o](glossary#valsi-niho)_ indicating a change in context sufficient to cancel pro-sumti and pro-bridi assignment. On the other hand, in a book, or in stories within stories such as “The Arabian Nights”, further levels may be expressed by extending the _[ni'o](glossary#valsi-niho)_ string as needed. Normally, a written text will begin with the number of _[ni'o](glossary#valsi-niho)_ cmavo needed to signal the largest scale division which the text contains. _[ni'o](glossary#valsi-niho)_ strings may be subscripted to label each context of discourse: see [Section 19.6](chapter19#section-subscripts-general "19.6. Subscripts: XI").

[_no'i_](glossary#valsi-nohi) is similar in effect to _[ni'o](glossary#valsi-niho)_, but indicates the resumption of a previous topic. In speech, it is analogous to (but much shorter than) such English discursive phrases as “But getting back to the point ...”. By default, the topic resumed is that in effect before the last _[ni'o](glossary#valsi-niho)_. When subtopics are nested within topics, then _[no'i](glossary#valsi-nohi)_ would resume the previous subtopic and _no'ino'i_ the previous topic. Note that _[no'i](glossary#valsi-nohi)_ also resumes tense and pro-sumti assignments dropped at the previous _[ni'o](glossary#valsi-niho)_.

If a _[ni'o](glossary#valsi-niho)_ is subscripted, then a _[no'i](glossary#valsi-nohi)_ with the same subscript is assumed to be a continuation of it. A _[no'i](glossary#valsi-nohi)_ may also have a negative subscript, which would specify counting backwards a number of paragraphs and resuming the topic found thereby.

## Topic-comment sentences: ZOhU

The following cmavo is discussed in this section:

|      |      |                         |
| ---- | ---- | ----------------------- |
| zo'u | ZOhU | topic/comment separator |

The normal Lojban sentence is just a bridi, parallel to the normal English sentence which has a subject and a predicate:

### Example 19.2.

|    |       |    |       |
| -- | ----- | -- | ----- |
| mi | klama | le | zarci |

|                      |
| -------------------- |
| I went-to the market |



In Chinese, the normal sentence form is different: a topic is stated, and a comment about it is made. (Japanese also has the concept of a topic, but indicates it by attaching a suffix; other languages also distinguish topics in various ways.) The topic says what the sentence is about:

### Example 19.3.

- zhe4 xiao1xi2 : wo3 zhi1dao le

- this news : I know \[perfective]

- As for this news, I knew it.

- I've heard this news already.



The colon in the first two versions of [Example 19.3](chapter19#example-random-id-ovFJ "Example 19.3. ") separate the topic (“this news”) from the comment (“I know already”).

Lojban uses the cmavo _[zo'u](glossary#valsi-zohu)_ (of selma'o ZOhU) to separate topic (a sumti) from comment (a bridi):

### Example 19.4.

|     |       |      |    |               |       |
| --- | ----- | ---- | -- | ------------- | ----- |
| le  | nuzba | zo'u | mi | ba'o          | djuno |
| The | news  | :    | I  | \[perfective] | know. |



[Example 19.4](chapter19#example-random-id-p4ww "Example 19.4. ") is the literal Lojban translation of [Example 19.3](chapter19#example-random-id-ovFJ "Example 19.3. "). Of course, the topic-comment structure can be changed to a straightforward bridi structure:

### Example 19.5.

|    |               |       |     |       |
| -- | ------------- | ----- | --- | ----- |
| mi | ba'o          | djuno | le  | nuzba |
| I  | \[perfective] | know  | the | news. |



[Example 19.5](chapter19#example-random-id-V2B4 "Example 19.5. ") means the same as [Example 19.4](chapter19#example-random-id-p4ww "Example 19.4. "), and it is simpler. However, often the position of the topic in the place structure of the selbri within the comment is vague:

### Example 19.6.

|     |       |      |       |
| --- | ----- | ---- | ----- |
| le  | finpe | zo'u | citka |
| the | fish  | :    | eat   |



Is the fish eating or being eaten? The sentence doesn't say. The Chinese equivalent of [Example 19.6](chapter19#example-random-id-tpcK "Example 19.6. ") is:

### Example 19.7.

- yu2: chi1

- fish: eat



which is vague in exactly the same way.

Grammatically, it is possible to have more than one sumti before _[zo'u](glossary#valsi-zohu)_. This is not normally useful in topic-comment sentences, but is necessary in the other use of _[zo'u](glossary#valsi-zohu)_: to separate a quantifying section from a bridi containing quantified variables. This usage belongs to a discussion of quantifier logic in Lojban (see [Section 16.2](chapter16#section-da-and-zohu "16.2. Existential claims, prenexes, and variables")), but an example would be:

### Example 19.8.

|         |    |       |              |      |
| ------- | -- | ----- | ------------ | ---- |
| ro      | da | poi   | prenu        | ku'o |
| For-all | X  | which | are-persons, |      |

|                |    |           |    |                  |    |
| -------------- | -- | --------- | -- | ---------------- | -- |
| su'o           | de | zo'u      | de | patfu            | da |
| there-exists-a | Y  | such-that | Y  | is-the-father-of | X. |

|                            |
| -------------------------- |
| Every person has a father. |



The string of sumti before _[zo'u](glossary#valsi-zohu)_ (called the “prenex”: see [Section 16.2](chapter16#section-da-and-zohu "16.2. Existential claims, prenexes, and variables")) may contain both a topic and bound variables:

### Example 19.9.

|                 |         |         |    |       |              |      |
| --------------- | ------- | ------- | -- | ----- | ------------ | ---- |
| loi             | patfu   | ro      | da | poi   | prenu        | ku'o |
| For-the-mass-of | fathers | for-all | X  | which | are-persons, |      |

|                |    |           |    |                  |    |
| -------------- | -- | --------- | -- | ---------------- | -- |
| su'o           | de | zo'u      | de | patfu            | da |
| there-exists-a | Y  | such-that | Y  | is-the-father-of | X. |

|                                       |
| ------------------------------------- |
| As for fathers, every person has one. |



To specify a topic which affects more than one sentence, wrap the sentences in _[tu'u](glossary#valsi-tuhu)_ brackets and place the topic and the _[zo'u](glossary#valsi-zohu)_ directly in front. This is the exception to the rule that a topic attaches directly to a sentence:

### Example 19.10.

|             |       |      |      |       |     |          |        |     |       |         |
| ----------- | ----- | ---- | ---- | ----- | --- | -------- | ------ | --- | ----- | ------- |
| loi         | jdini | zo'u | tu'e |       | do  | ponse    | .inaja | do  | djica | \[tu'u] |
| The-mass-of | money | :    | (    | \[if] | you | possess, | then   | you | want  | )       |

|                                     |
| ----------------------------------- |
| Money: if you have it, you want it. |



Note: In Lojban, you do not “want money”; you “want to have money” or something of the sort, as the x2 place of _[djica](glossary#valsi-djica)_ demands an event. As a result, the straightforward rendering of [Example 19.9](chapter19#example-random-id-ggMy "Example 19.9. ") without a topic is not:

### Example 19.11.

|     |         |           |         |     |        |                     |
| --- | ------- | --------- | ------- | --- | ------ | ------------------- |
| do  | ponse   | loi jdini | .inaja  | do  | djica  | ri                  |
| You | possess | money     | only-if | you | desire | its-mere-existence. |



where _[ri](glossary#valsi-ri)_ means _loi jdini_ and is interpreted as “the mere existence of money”, but rather:

### Example 19.12.

|     |         |           |         |     |        |                 |     |
| --- | ------- | --------- | ------- | --- | ------ | --------------- | --- |
| do  | ponse   | loi jdini | .inaja  | do  | djica  | tu'a            | ri  |
| You | possess | money     | only-if | you | desire | something-about | it. |



namely, the possession of money. But topic-comment sentences like [Example 19.10](chapter19#example-random-id-mK5Y "Example 19.10. ") are inherently vague, and this difference between _[ponse](glossary#valsi-ponse)_ (which expects a physical object in x2) and _[djica](glossary#valsi-djica)_ is ignored. See [Example 19.45](chapter19#example-random-id-EXeq "Example 19.45. ") for another topic/comment sentence.

The subject of an English sentence is often the topic as well, but in Lojban the sumti in the x1 place is not necessarily the topic, especially if it is the normal (unconverted) x1 for the selbri. Thus Lojban sentences don't necessarily have a “subject” in the English sense.

## Questions and answers

The following cmavo are discussed in this section:

|      |      |                                       |
| ---- | ---- | ------------------------------------- |
| xu   | UI   | truth question                        |
| ma   | KOhA | sumti question                        |
| mo   | GOhA | bridi question                        |
| xo   | PA   | number question                       |
| ji   | A    | sumti connective question             |
| ge'i | GA   | forethought connective question       |
| gi'i | GIhA | bridi-tail connective question        |
| gu'i | GUhA | tanru forethought connective question |
| je'i | JA   | tanru connective question             |
| pei  | UI   | attitude question                     |
| fi'a | FA   | place structure question              |
| cu'e | CUhE | tense/modal question                  |
| pau  | UI   | question premarker                    |

Lojban questions are not at all like English questions. There are two basic types: truth questions, of the form “Is it true that ...”, and fill-in-the-blank questions. Truth questions are marked by preceding the bridi, or following any part of it specifically questioned, with the cmavo _[xu](glossary#valsi-xu)_ (of selma'o UI):

### Example 19.13.

|                   |     |       |     |       |
| ----------------- | --- | ----- | --- | ----- |
| xu                | do  | klama | le  | zarci |
| \[True-or-false?] | You | go-to | the | store |

|                                                     |
| --------------------------------------------------- |
| Are you going to the store/Did you go to the store? |



(Since the Lojban is tenseless, either colloquial translation might be correct.) Truth questions are further discussed in [Section 15.8](chapter15#section-truth-questions "15.8. Truth questions").

Fill-in-the-blank questions have a cmavo representing some Lojban word or phrase which is not known to the questioner, and which the answerer is to supply. There are a variety of cmavo belonging to different selma'o which provide different kinds of blanks.

Where a sumti is not known, a question may be formed with _[ma](glossary#valsi-ma)_ (of selma'o KOhA), which is a kind of pro-sumti:

### Example 19.14.

|                |         |     |       |
| -------------- | ------- | --- | ----- |
| ma             | klama   | le  | zarci |
| \[What-sumti?] | goes-to | the | store |

|                            |
| -------------------------- |
| Who is going to the store? |



Of course, the _[ma](glossary#valsi-ma)_ need not be in the x1 place:

### Example 19.15.

|     |       |                |
| --- | ----- | -------------- |
| do  | klama | ma             |
| You | go-to | \[what-sumti?] |

|                      |
| -------------------- |
| Where are you going? |



The answer is a simple sumti:

### Example 19.16.

|          |
| -------- |
| le zarci |

|            |
| ---------- |
| The store. |



A sumti, then, is a legal utterance, although it does not by itself constitute a bridi – it does not claim anything, but merely completes the open-ended claim of the previous bridi.

There can be two _[ma](glossary#valsi-ma)_ cmavo in a single question:

### Example 19.17.

|             |
| ----------- |
| ma klama ma |

|                 |
| --------------- |
| Who goes where? |



and the answer would be two sumti, which are meant to fill in the two _[ma](glossary#valsi-ma)_ cmavo in order:

### Example 19.18.

|    |           |        |
| -- | --------- | ------ |
| mi | le        | zarci  |
| I, | \[to]-the | store. |



An even more complex example, depending on the non-logical connective _[fa'u](glossary#valsi-fahu)_ (of selma'o JOI), which is like the English “and ... respectively”:

### Example 19.19.

|    |      |    |       |    |      |    |
| -- | ---- | -- | ----- | -- | ---- | -- |
| ma | fa'u | ma | klama | ma | fa'u | ma |

|                                                  |
| ------------------------------------------------ |
| Who and who goes where and where, -respectively? |



An answer might be

### Example 19.20.

|    |       |    |         |     |        |     |         |
| -- | ----- | -- | ------- | --- | ------ | --- | ------- |
| la | djan. | la | marcas. | le  | zarci  | le  | briju   |
|    | John, |    | Marsha, | the | store, | the | office. |

|                                                               |
| ------------------------------------------------------------- |
| John and Marsha go to the store and the office, respectively. |



(Note: A mechanical substitution of [Example 19.20](chapter19#example-random-id-yGYX "Example 19.20. ") into [Example 19.19](chapter19#example-random-id-nDeV "Example 19.19. ") produces an ungrammatical result, because _\* ... le zarci fa'u le briju_ is ungrammatical Lojban: the first _le zarci_ has to be closed with its proper terminator _[ku](glossary#valsi-ku)_, for reasons explained in [Section 14.14](chapter14#section-non-logical-connectives "14.14. Non-logical connectives"). This effect is not important: Lojban behaves as if all elided terminators have been supplied in both question and answer before inserting the latter into the former. The exchange is grammatical if question and answer are each separately grammatical.)

Questions to be answered with a selbri are expressed with _[mo](glossary#valsi-mo)_ of selma'o GOhA, which is a kind of pro-bridi:

### Example 19.21.

|    |         |                 |
| -- | ------- | --------------- |
| la | lojban. | mo              |
|    | Lojban  | \[what-selbri?] |

|                 |
| --------------- |
| What is Lojban? |



Here the answerer is to supply some predicate which is true of Lojban. Such questions are extremely open-ended, due to the enormous range of possible predicate answers. The answer might be just a selbri, or might be a full bridi, in which case the sumti in the answer override those provided by the questioner. To limit the range of a _[mo](glossary#valsi-mo)_ question, make it part of a tanru.

Questions about numbers are expressed with _[xo](glossary#valsi-xo)_ of selma'o PA:

### Example 19.22.

|     |       |                 |          |
| --- | ----- | --------------- | -------- |
| do  | viska | xo              | prenu    |
| You | saw   | \[what-number?] | persons. |

|                              |
| ---------------------------- |
| How many people did you see? |



The answer would be a simple number, another kind of non-bridi utterance:

### Example 19.23.

|             |
| ----------- |
| vomu        |
| Forty-five. |



Fill-in-the-blank questions may also be asked about: logical connectives (using cmavo _[ji](glossary#valsi-ji)_ of A, _[ge'i](glossary#valsi-gehi)_ of GA, _[gi'i](glossary#valsi-gihi)_ of GIhA, _[gu'i](glossary#valsi-guhi)_ of GUhA, or _[je'i](glossary#valsi-jehi)_ of JA, and receiving an ek, gihek, ijek, or ijoik as an answer) – see [Section 14.13](chapter14#section-truth-and-connective-questions "14.13. Truth questions and connective questions"); attitudes (using _[pei](glossary#valsi-pei)_ of UI, and receiving an attitudinal as an answer) – see [Section 13.10](chapter13#section-questions-empathy-contours "13.10. Attitude questions; empathy; attitude contours"); place structures (using _[fi'a](glossary#valsi-fiha)_ of FA, and receiving a cmavo of FA as an answer) – see [Section 9.3](chapter09#section-FA "9.3. Tagging places: FA"); tenses and modals (using _[cu'e](glossary#valsi-cuhe)_ of CUhE, and receiving any tense or BAI cmavo as an answer) – see [Section 9.6](chapter09#section-BAI "9.6. Modal tags: BAI") and [Chapter 10](chapter10 "Chapter 10. Imaginary Journeys: The Lojban Space/Time Tense System").

Questions can be marked by placing _[pau](glossary#valsi-pau)_ (of selma'o UI) before the question bridi. See [Section 13.13](chapter13#section-miscellanious "13.13. Miscellaneous indicators") for details.

The full list of non-bridi utterances suitable as answers to questions is:

- any number of sumti (with elidable terminator _[vau](glossary#valsi-vau)_, see [Chapter 6](chapter06 "Chapter 6. To Speak Of Many Things: The Lojban sumti"))

- an ek or gihek (logical connectives, see [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System"))

- a number, or any mathematical expression placed in parentheses (see [Chapter 18](chapter18 "Chapter 18. lojbau mekso: Mathematical Expressions in Lojban"))

- a bare _[na](glossary#valsi-na)_ negator (to negate some previously expressed bridi), or corresponding _[ja'a](glossary#valsi-jaha)_ affirmer (see [Chapter 15](chapter15 "Chapter 15. “No” Problems: On Lojban Negation"))

- a relative clause (to modify some previously expressed sumti, see [Chapter 8](chapter08 "Chapter 8. Relative Clauses, Which Make sumti Even More Complicated"))

- a prenex/topic (to modify some previously expressed bridi, see [Chapter 16](chapter16 "Chapter 16. “Who Did You Pass On The Road? Nobody”: Lojban And Logic"))

- linked arguments (beginning with _[be](glossary#valsi-be)_ or _[bei](glossary#valsi-bei)_ and attached to some previously expressed selbri, often in a description, see [Section 5.7](chapter05#section-be-sumti "5.7. Linked sumti: be-bei-be'o"))

At the beginning of a text, the following non-bridi are also permitted:

- one or more names (to indicate direct address without _[doi](glossary#valsi-doi)_, see [Chapter 6](chapter06 "Chapter 6. To Speak Of Many Things: The Lojban sumti"))

- indicators (to express a prevailing attitude, see [Chapter 13](chapter13 "Chapter 13. Oooh! Arrgh! Ugh! Yecch! Attitudinal and Emotional Indicators"))

- _[nai](glossary#valsi-nai)_ (to vaguely negate something or other, see [Section 15.7](chapter15#section-other-negation "15.7. Negation of minor grammatical constructs"))

Where not needed for the expression of answers, most of these are made grammatical for pragmatic reasons: people will say them in conversation, and there is no reason to rule them out as ungrammatical merely because most of them are vague.

## Subscripts: XI

The following cmavo is discussed in this section:

|    |    |           |
| -- | -- | --------- |
| xi | XI | subscript |

The cmavo _[xi](glossary#valsi-xi)_ (of selma'o XI) indicates that a subscript (a number, a lerfu string, or a parenthesized mekso) follows. Subscripts can be attached to almost any construction and are placed following the construction (or its terminator word, which is generally required). They are useful either to extend the finite cmavo list to infinite length, or to make more refined distinctions than the standard cmavo list permits. The remainder of this section mentions some places where subscripts might naturally be used.

Lojban gismu have at most five places:

### Example 19.24.

|    |    |       |    |     |        |      |     |       |     |     |       |       |     |       |
| -- | -- | ----- | -- | --- | ------ | ---- | --- | ----- | --- | --- | ----- | ----- | --- | ----- |
| mi | cu | klama |    | le  | zarci  |      | le  | zdani |     | le  | dargu |       | le  | karce |
| I  |    | go    | to | the | market | from | the | house | via | the | road  | using | the | car.  |



Consequently, selma'o SE (which operates on a selbri to change the order of its places) and selma'o FA (which provides place number tags for individual sumti) have only enough members to handle up to five places. Conversion of [Example 19.24](chapter19#example-random-id-GuYz "Example 19.24. "), using _[xe](glossary#valsi-xe)_ to swap the x1 and x5 places, would produce:

### Example 19.25.

|     |       |    |                           |    |     |        |
| --- | ----- | -- | ------------------------- | -- | --- | ------ |
| le  | karce | cu | xe-klama                  |    | le  | zarci  |
| The | car   |    | is-a-transportation-means | to | the | market |

|      |     |       |     |     |       |     |     |
| ---- | --- | ----- | --- | --- | ----- | --- | --- |
|      | le  | zdani |     | le  | dargu |     | mi  |
| from | the | house | via | the | road  | for | me. |



And reordering of the place structures might produce:

### Example 19.26.

|     |     |       |      |     |        |    |    |
| --- | --- | ----- | ---- | --- | ------ | -- | -- |
| fo  | le  | dargu | fi   | le  | zdani  | fa | mi |
| Via | the | road, | from | the | house, |    | I, |

|    |     |         |       |     |       |    |       |
| -- | --- | ------- | ----- | --- | ----- | -- | ----- |
| fe | le  | zarci   | fu    | le  | karce | cu | klama |
| to | the | market, | using | the | car,  |    | go.   |



[Example 19.24](chapter19#example-random-id-GuYz "Example 19.24. ") to [Example 19.26](chapter19#example-random-id-PaKo "Example 19.26. ") all mean the same thing. But consider the lujvo _[nunkla](glossary#valsi-nunkla)_, formed by applying the abstraction operator _[nu](glossary#valsi-nu)_ to _[klama](glossary#valsi-klama)_:

### Example 19.27.

|                 |                       |    |                      |    |    |
| --------------- | --------------------- | -- | -------------------- | -- | -- |
| la'e            | di'u                  | cu | nunkla               |    | mi |
| The-referent-of | the-previous-sentence |    | is-an-event-of-going | by | me |

|    |     |        |      |     |       |     |     |       |       |     |       |
| -- | --- | ------ | ---- | --- | ----- | --- | --- | ----- | ----- | --- | ----- |
|    | le  | zarci  |      | le  | zdani |     | le  | dargu |       | le  | karce |
| to | the | market | from | the | house | via | the | road  | using | the | car.  |



[Example 19.27](chapter19#example-random-id-sMPn "Example 19.27. ") shows that _[nunkla](glossary#valsi-nunkla)_ has six places: the five places of _[klama](glossary#valsi-klama)_ plus a new one (placed first) for the event itself. Performing transformations similar to that of [Example 19.25](chapter19#example-random-id-QPGC "Example 19.25. ") requires an additional conversion cmavo that exchanges the x1 and x6 places. The solution is to use any cmavo of SE with a subscript "6" ([Section 19.6](chapter19#section-subscripts-general "19.6. Subscripts: XI")):

### Example 19.28.

|     |       |    |                                                 |    |    |
| --- | ----- | -- | ----------------------------------------------- | -- | -- |
| le  | karce | cu | sexixa nunkla                                   |    | mi |
| The | car   |    | is-a-transportation-means-in-the-event-of-going | by | me |

|    |     |        |      |     |       |
| -- | --- | ------ | ---- | --- | ----- |
|    | le  | zarci  |      | le  | zdani |
| to | the | market | from | the | house |

|     |     |       |                                                        |
| --- | --- | ----- | ------------------------------------------------------ |
|     | le  | dargu | la'edi'u                                               |
| via | the | road  | is-an-event-which-is-referred-to-by-the-last-sentence. |



Likewise, a sixth place tag can be created by using any cmavo of FA with a subscript:

### Example 19.29.

|     |     |       |      |     |        |    |     |
| --- | --- | ----- | ---- | --- | ------ | -- | --- |
| fu  | le  | dargu | fo   | le  | zdani  | fe | mi  |
| Via | the | road, | from | the | house, | by | me, |

|    |                   |                                      |
| -- | ----------------- | ------------------------------------ |
| fa | la'edi'u          |                                      |
|    | is-an-event-which | is-referred-to-by-the-last-sentence, |

|    |     |         |        |     |       |    |                       |
| -- | --- | ------- | ------ | --- | ----- | -- | --------------------- |
| fi | le  | zarci   | faxixa | le  | karce | cu | nunkla                |
| to | the | market, | using  | the | car,  |    | is-an-event-of-going. |



[Example 19.27](chapter19#example-random-id-sMPn "Example 19.27. ") to [Example 19.29](chapter19#example-random-id-EW1n "Example 19.29. ") also all mean the same thing, and each is derived straightforwardly from any of the others, despite the tortured nature of the English glosses. In addition, any other member of SE or FA could be substituted into _sexixa_ and _faxixa_ without change of meaning: _vexixa_ means the same thing as _sexixa_.

Lojban provides two groups of pro-sumti, both belonging to selma'o KOhA. The ko'a-series cmavo are used to refer to explicitly specified sumti to which they have been bound using _[goi](glossary#valsi-goi)_. The da-series, on the other hand, are existentially or universally quantified variables. (These concepts are explained more fully in [Chapter 16](chapter16 "Chapter 16. “Who Did You Pass On The Road? Nobody”: Lojban And Logic").) There are ten ko'a-series cmavo and 3 da-series cmavo available.

If more are required, any cmavo of the ko'a-series or the da-series can be subscripted:

### Example 19.30.

|    |     |    |
| -- | --- | -- |
| da | xi  | vo |
| X  | sub | 4  |



is the 4th bound variable of the 1st sequence of the da-series, and

### Example 19.31.

|             |     |      |
| ----------- | --- | ---- |
| ko'i        | xi  | paso |
| something-3 | sub | 18   |



is the 18th free variable of the 3rd sequence of the ko'a-series. This convention allows 10 sequences of ko'a-type pro-sumti and 3 sequences of da-type pro-sumti, each with as many members as needed. Note that _daxivo_ and _dexivo_ are considered to be distinct pro-sumti, unlike the situation with _sexixa_ and _vexixa_ above. Exactly similar treatment can be given to the bu'a-series of selma'o GOhA and to the gismu pro-bridi _[broda](glossary#valsi-broda)_, _[brode](glossary#valsi-brode)_, _[brodi](glossary#valsi-brodi)_, _[brodo](glossary#valsi-brodo)_, and _[brodu](glossary#valsi-brodu)_.

Subscripts on lerfu words are used in the standard mathematical way to extend the number of variables:

### Example 19.32.

|              |            |        |            |            |      |            |
| ------------ | ---------- | ------ | ---------- | ---------- | ---- | ---------- |
| li           | xy.boixipa | du     | li         | xy.boixire | su'i | xy.boixici |
| The-number   | x-sub-1    | equals | the-number | x-sub-2    | plus | x-sub-3    |
| x1 = x2 + x3 |            |        |            |            |      |            |



and can be used to extend the number of pro-sumti as well, since lerfu strings outside mathematical contexts are grammatically and semantically equivalent to pro-sumti of the ko'a-series. (In [Example 19.32](chapter19#example-random-id-wez6 "Example 19.32. "), note the required terminator _[boi](glossary#valsi-boi)_ after each _[xy.](glossary#valsi-xy)_ cmavo; this terminator allows the subscript to be attached without ambiguity.)

Names, which are similar to pro-sumti, can also be subscripted to distinguish two individuals with the same name:

### Example 19.33.

|    |       |      |           |          |          |     |            |    |       |      |   |   |
| -- | ----- | ---- | --------- | -------- | -------- | --- | ---------- | -- | ----- | ---- | - | - |
| la | djan. | xipa | cusku     | lu       | mi'enai  | do  | li'u       | la | djan. | xire |   |   |
|    | John  | 1    | expresses | \[quote] | I-am-not | you | \[unquote] | to |       | John | 2 | . |



Subscripts on tenses allow talking about more than one time or place that is described by the same general cmavo. For example, _puxipa_ could refer to one point in the past, and _puxire_ a second point (earlier or later).

You can place a subscript on the word _[ja'a](glossary#valsi-jaha)_, the bridi affirmative of selma'o NA, to express so-called fuzzy truths. The usual machinery for fuzzy logic (statements whose truth value is not merely “true” or “false”, but is expressed by a number in the range 0 to 1) in Lojban is the abstractor _[jei](glossary#valsi-jei)_:

### Example 19.34.

|            |      |                       |    |              |
| ---------- | ---- | --------------------- | -- | ------------ |
| li         | pimu | jei                   | mi | ganra        |
| The-number | .5   | is-the-truth-value-of | my | being-broad. |



However, by convention we can attach a subscript to _[ja'a](glossary#valsi-jaha)_ to indicate fuzzy truth (or to _[na](glossary#valsi-na)_ if we change the amount):

### Example 19.35.

|    |       |        |          |
| -- | ----- | ------ | -------- |
| mi | ja'a  | xipimu | ganra    |
| I  | truly | sub-.5 | am-broad |



Finally, as mentioned in [Section 19.2](chapter19#section-i "19.2. Sentences: I"), _[ni'o](glossary#valsi-niho)_ and _[no'i](glossary#valsi-nohi)_ cmavo with matching subscripts mark the start and the continuation of a given topic respectively. Different topics can be assigned to different subscripts.

Other uses of subscripts will doubtless be devised in future.

## Utterance ordinals: MAI

The following cmavo are discussed in this section:

|      |     |                                |
| ---- | --- | ------------------------------ |
| mai  | MAI | utterance ordinal, -thly       |
| mo'o | MAI | higher order utterance ordinal |

Numerical free modifiers, corresponding to English “firstly”, “secondly”, and so on, can be created by suffixing _[mai](glossary#valsi-mai)_ or _[mo'o](glossary#valsi-moho)_ of selma'o MAI to a number or a lerfu string. Here are some examples:

### Example 19.36.

|    |       |           |     |       |     |            |     |        |
| -- | ----- | --------- | --- | ----- | --- | ---------- | --- | ------ |
| mi | klama | pamai     | le  | zarci | .e  | remai      | le  | zdani  |
| I  | go-to | (firstly) | the | store | and | (secondly) | the | house. |



This does not imply that I go to the store before I go to the house: that meaning requires a tense. The sumti are simply numbered for convenience of reference. Like other free modifiers, the utterance ordinals can be inserted almost anywhere in a sentence without affecting its grammar or its meaning.

Any of the Lojban numbers can be used with MAI: _[romai](glossary#valsi-romai)_, for example, means “all-thly” or “lastly”. Likewise, if you are enumerating a long list and have forgotten which number is wanted next, you can say _ny.mai_, or “Nthly”.

The difference between _[mai](glossary#valsi-mai)_ and _[mo'o](glossary#valsi-moho)_ is that _[mo'o](glossary#valsi-moho)_ enumerates larger subdivisions of a text; _[mai](glossary#valsi-mai)_ was designed for lists of numbered items, whereas _[mo'o](glossary#valsi-moho)_ was intended to subdivide structured works. If this chapter were translated into Lojban, it might number each section with _[mo'o](glossary#valsi-moho)_: this section would then be introduced with _zemo'o_, or “Section 7.”

## Attitude scope markers: FUhE/FUhO

The following cmavo are discussed in this section:

|      |      |                         |
| ---- | ---- | ----------------------- |
| fu'e | FUhE | open attitudinal scope  |
| fu'o | FUhO | close attitudinal scope |

Lojban has a complex system of “attitudinals”, words which indicate the speaker's attitude to what is being said. The attitudinals include indicators of emotion, intensity markers, discursives (which show the structure of discourse), and evidentials (which indicate “how the speaker knows”). Most of these words belong to selma'o UI; the intensity markers belong to selma'o CAI for historical reasons, but the two selma'o are grammatically identical. The individual cmavo of UI and CAI are discussed in [Chapter 13](chapter13 "Chapter 13. Oooh! Arrgh! Ugh! Yecch! Attitudinal and Emotional Indicators"); only the rules for applying them in discourse are presented here.

Normally, an attitudinal applies to the preceding word only. However, if the preceding word is a structural cmavo which begins or ends a whole construction, then that whole construction is affected by the attitudinal:

### Example 19.37.

|    |       |     |       |           |        |       |
| -- | ----- | --- | ----- | --------- | ------ | ----- |
| mi | viska | le  | blanu | .ia       | zdani  | \[ku] |
| I  | see   | the | blue  | \[belief] | house. |       |

|                                              |
| -------------------------------------------- |
| I see the house, which I believe to be blue. |



### Example 19.38.

|    |       |     |       |       |            |       |
| -- | ----- | --- | ----- | ----- | ---------- | ----- |
| mi | viska | le  | blanu | zdani | .ia        | \[ku] |
| I  | see   | the | blue  | house | \[belief]. |       |

|                                                      |
| ---------------------------------------------------- |
| I see the blue thing, which I believe to be a house. |



### Example 19.39.

|    |       |     |           |       |       |       |
| -- | ----- | --- | --------- | ----- | ----- | ----- |
| mi | viska | le  | .ia       | blanu | zdani | \[ku] |
| I  | see   | the | \[belief] | blue  | house |       |

|                                          |
| ---------------------------------------- |
| I see what I believe to be a blue house. |



### Example 19.40.

|    |       |      |       |        |    |           |
| -- | ----- | ---- | ----- | ------ | -- | --------- |
| mi | viska | le   | blanu | zdani  | ku | .ia       |
| I  | see   | (the | blue  | house) |    | \[belief] |

|                                          |
| ---------------------------------------- |
| I see what I believe to be a blue house. |



An attitudinal meant to cover a whole sentence can be attached to the preceding _[i](glossary#valsi-i)_, expressed or understood:

### Example 19.41.

|       |           |    |       |     |       |        |
| ----- | --------- | -- | ----- | --- | ----- | ------ |
| \[.i] | .ia       | mi | viska | le  | blanu | zdani  |
|       | \[belief] | I  | see   | the | blue  | house. |

|                               |
| ----------------------------- |
| I believe I see a blue house. |



or to an explicit _[vau](glossary#valsi-vau)_ placed at the end of a bridi.

Likewise, an attitudinal meant to cover a whole paragraph can be attached to _[ni'o](glossary#valsi-niho)_ or _[no'i](glossary#valsi-nohi)_. An attitudinal at the beginning of a text applies to the whole text.

However, sometimes it is necessary to be more specific about the range of one or more attitudinals, particularly if the range crosses the boundaries of standard Lojban syntactic constructions. The cmavo _[fu'e](glossary#valsi-fuhe)_ (of selma'o FUhE) and _[fu'o](glossary#valsi-fuho)_ (of selma'o FUhO) provide explicit scope markers. Placing _[fu'e](glossary#valsi-fuhe)_ in front of an attitudinal disconnects it from what precedes it, and instead says that it applies to all following words until further notice. The notice is given by _[fu'o](glossary#valsi-fuho)_, which can appear anywhere and cancels all in-force attitudinals. For example:

### Example 19.42.

|    |       |     |          |           |       |       |        |           |
| -- | ----- | --- | -------- | --------- | ----- | ----- | ------ | --------- |
| mi | viska | le  | fu'e     | .ia       | blanu | zdani | fu'o   | ponse     |
| I  | see   | the | \[start] | \[belief] | blue  | house | \[end] | possessor |

|                                                       |
| ----------------------------------------------------- |
| I see the owner of what I believe to be a blue house. |



Here, only the _blanu zdani_ portion of the three-part tanru _blanu zdani ponse_ is marked as a belief of the speaker. Naturally, the attitudinal scope markers do not affect the rules for interpreting multi-part tanru: _blanu zdani_ groups first because tanru group from left to right unless overridden with _[ke](glossary#valsi-ke)_ or _[bo](glossary#valsi-bo)_.

Other attitudinals of more local scope can appear after attitudinals marked by FUhE; these attitudinals are added to the globally active attitudinals rather than superseding them.

## Quotations: LU, LIhU, LOhU, LEhU

The following cmavo are discussed in this section:

|      |      |                       |
| ---- | ---- | --------------------- |
| lu   | LU   | begin quotation       |
| li'u | LIhU | end quotation         |
| lo'u | LOhU | begin error quotation |
| le'u | LEhU | end error quotation   |

Grammatically, quotations are very simple in Lojban: all of them are sumti, and they all mean something like “the piece of text here quoted”:

### Example 19.43.

|    |         |         |          |      |        |            |
| -- | ------- | ------- | -------- | ---- | ------ | ---------- |
| mi | pu      | cusku   | lu       | mi'e | .djan. | \[li'u]    |
| I  | \[past] | express | \[quote] | I-am | John   | \[unquote] |

|                     |
| ------------------- |
| I said, “I'm John”. |



But in fact there are four different flavors of quotation in the language, involving six cmavo of six different selma'o. This being the case, quotation deserves some elaboration.

The simplest kind of quotation, exhibited in [Example 19.43](chapter19#example-random-id-6SBj "Example 19.43. "), uses the cmavo _[lu](glossary#valsi-lu)_ (of selma'o LU) as the opening quotation mark, and the cmavo _[li'u](glossary#valsi-lihu)_ (of selma'o LIhU) as the closing quotation mark. The text between _[lu](glossary#valsi-lu)_ and _[li'u](glossary#valsi-lihu)_ must be a valid, parseable Lojban text. If the quotation is ungrammatical, so is the surrounding expression. The cmavo _[li'u](glossary#valsi-lihu)_ is technically an elidable terminator, but it's almost never possible to elide it except at the end of text.

The cmavo _[lo'u](glossary#valsi-lohu)_ (of selma'o LOhU) and _[le'u](glossary#valsi-lehu)_ (of selma'o LEhU) are used to surround a quotation that is not necessarily grammatical Lojban. However, the text must consist of morphologically correct Lojban words (as defined in [Chapter 4](chapter04 "Chapter 4. The Shape Of Words To Come: Lojban Morphology")), so that the _[le'u](glossary#valsi-lehu)_ can be picked out reliably. The words need not be meaningful, but they must be recognizable as cmavo, brivla, or cmene. Quotation with _[lo'u](glossary#valsi-lohu)_ is essential to quoting ungrammatical Lojban for teaching in the language, the equivalent of the \* that is used in English to mark such errors:

### Example 19.44.

|          |                      |            |
| -------- | -------------------- | ---------- |
| lo'u     | mi du do du la djan. | le'u       |
| \[quote] | mi du do du la djan. | \[unquote] |

|        |                         |    |         |
| ------ | ----------------------- | -- | ------- |
| na     | tergerna                | la | lojban. |
| is-not | a-grammatical-structure | in | Lojban. |



[Example 19.44](chapter19#example-random-id-IUz8 "Example 19.44. ") is grammatical even though the embedded quotation is not. Similarly, _[lo'u](glossary#valsi-lohu)_ quotation can quote fragments of a text which themselves do not constitute grammatical utterances:

### Example 19.45.

|          |                            |            |      |
| -------- | -------------------------- | ---------- | ---- |
| lu       | le mlatu cu viska le finpe | li'u       | zo'u |
| \[quote] | le mlatu cu viska le finpe | \[unquote] | :    |

|          |          |            |    |                |
| -------- | -------- | ---------- | -- | -------------- |
| lo'u     | viska le | le'u       | cu | selbasti       |
| \[quote] | viska le | \[unquote] |    | is-replaced-by |

|                |          |          |             |
| -------------- | -------- | -------- | ----------- |
| .ei            | lo'u     | viska lo | le'u        |
| \[obligation!] | \[quote] | viska lo | \[unquote]. |

|                             |
| --------------------------- |
| In the sentence _viska lo_. |



Note the topic-comment formulation ([Section 19.4](chapter19#section-topic-comments "19.4. Topic-comment sentences: ZOhU")) and the indicator applying to the selbri only ([Section 19.8](chapter19#section-attitudinal-scope "19.8. Attitude scope markers: FUhE/FUhO")). Neither _viska le_ nor _viska lo_ is a valid Lojban utterance, and both require _[lo'u](glossary#valsi-lohu)_ quotation.

Additionally, pro-sumti or pro-bridi in the quoting sentence can refer to words appearing in the quoted sentence when _[li'u](glossary#valsi-lihu)_ is used, but not when _lo'u ... le'u_ is used:

### Example 19.46.

|    |          |       |          |     |       |    |         |             |
| -- | -------- | ----- | -------- | --- | ----- | -- | ------- | ----------- |
| la | tcarlis. | cusku | lu       | le  | ninmu | cu | morsi   | li'u        |
|    | Charlie  | says  | \[quote] | the | woman |    | is-dead | \[unquote]. |

|          |                    |           |
| -------- | ------------------ | --------- |
| .iku'i   | ri                 | jmive     |
| However, | the-last-mentioned | is-alive. |

|                                                     |
| --------------------------------------------------- |
| Charlie says “The woman is dead”, but she is alive. |



In [Example 19.46](chapter19#example-random-id-x8XL "Example 19.46. "), _[ri](glossary#valsi-ri)_ is a pro-sumti which refers to the most recent previous sumti, namely _le ninmu_. Compare:

### Example 19.47.

|    |          |       |          |    |       |    |       |             |
| -- | -------- | ----- | -------- | -- | ----- | -- | ----- | ----------- |
| la | tcarlis. | cusku | lo'u     | le | ninmu | cu | morsi | le'u        |
|    | Charlie  | says  | \[quote] | le | ninmu | cu | morsi | \[unquote]. |

|          |                    |           |
| -------- | ------------------ | --------- |
| .iku'i   | ri                 | jmive     |
| However, | the-last-mentioned | is-alive. |

|                                                    |
| -------------------------------------------------- |
| Charlie says _le ninmu cu morsi_, but he is alive. |



In [Example 19.47](chapter19#example-random-id-hvhb "Example 19.47. "), _[ri](glossary#valsi-ri)_ cannot refer to the referent of the alleged sumti _le ninmu_, because _le ninmu cu morsi_ is a mere uninterpreted sequence of Lojban words. Instead, _[ri](glossary#valsi-ri)_ ends up referring to the referent of the sumti _la tcarlis._, and so it is Charlie who is alive.

The metalinguistic erasers _[si](glossary#valsi-si)_, _[sa](glossary#valsi-sa)_, and _[su](glossary#valsi-su)_, discussed in [Section 19.13](chapter19#section-erasure "19.13. Erasure: SI, SA, SU"), do not operate in text between _[lo'u](glossary#valsi-lohu)_ and _[le'u](glossary#valsi-lehu)_. Since the first _[le'u](glossary#valsi-lehu)_ terminates a _[lo'u](glossary#valsi-lohu)_ quotation, it is not directly possible to have a _[lo'u](glossary#valsi-lohu)_ quotation within another _[lo'u](glossary#valsi-lohu)_ quotation. However, it is possible for a _[le'u](glossary#valsi-lehu)_ to occur within a _lo'u ... le'u_ quotation by preceding it with the cmavo _[zo](glossary#valsi-zo)_, discussed in [Section 19.10](chapter19#section-more-quotations "19.10. More on quotations: ZO, ZOI"). Note that _[le'u](glossary#valsi-lehu)_ is not an elidable terminator; it is required.

## More on quotations: ZO, ZOI

The following cmavo are discussed in this section:

|      |     |                      |
| ---- | --- | -------------------- |
| zo   | ZO  | quote single word    |
| zoi  | ZOI | non-Lojban quotation |
| la'o | ZOI | non-Lojban name      |

The cmavo _[zo](glossary#valsi-zo)_ (of selma'o ZO) is a strong quotation mark for the single following word, which can be any Lojban word whatsoever. Among other uses, _[zo](glossary#valsi-zo)_ allows a metalinguistic word to be referenced without having it act on the surrounding text. The word must be a morphologically legal (but not necessarily meaningful) single Lojban word; compound cmavo are not permitted. For example:

### Example 19.48.

|                      |
| -------------------- |
| zo si cu lojbo valsi |

|                                                  |
| ------------------------------------------------ |
| _[si](glossary#valsi-si)_ is a Lojbanic word. |



Since _[zo](glossary#valsi-zo)_ acts on a single word only, there is no corresponding terminator. Brevity, then, is a great advantage of _[zo](glossary#valsi-zo)_, since the terminators for other kinds of quotation are rarely or never elidable.

The cmavo _[zoi](glossary#valsi-zoi)_ (of selma'o ZOI) is a quotation mark for quoting non-Lojban text. Its syntax is _zoi X. text .X_, where X is a Lojban word (called the delimiting word) which is separated from the quoted text by pauses, and which is not found in the written text or spoken phoneme stream. It is common, but not required, to use the lerfu word (of selma'o BY) which corresponds to the Lojban name of the language being quoted:

### Example 19.49.

|                                           |
| ----------------------------------------- |
| zoi gy. John is a man .gy. cu glico jufra |

|                                         |
| --------------------------------------- |
| “John is a man” is an English sentence. |



where _[gy](glossary#valsi-gy)_ stands for _[glico](glossary#valsi-glico)_. Other popular choices of delimiting words are _.kuot._, a Lojban name which sounds like the English word “quote”, and the word _[zoi](glossary#valsi-zoi)_ itself. Another possibility is a Lojban word suggesting the topic of the quotation.

Within written text, the Lojban written word used as a delimiting word may not appear, whereas within spoken text, the sound of the delimiting word may not be uttered. This leads to occasional breakdowns of audio-visual isomorphism: [Example 19.50](chapter19#example-random-id-qIsv "Example 19.50. ") is fine in speech but ungrammatical as written, whereas [Example 19.51](chapter19#example-random-id-qIsx "Example 19.51. ") is correct when written but ungrammatical in speech.

### Example 19.50.

|                                                  |
| ------------------------------------------------ |
| mi djuno fi le valsi po'u zoi gy. gyrations .gy. |

|                                             |
| ------------------------------------------- |
| I know about the word which-is “gyrations”. |



### Example 19.51.

|                                                   |
| ------------------------------------------------- |
| mi djuno fi le valsi po'u zoi jai. gyrations .jai |

|                                             |
| ------------------------------------------- |
| I know about the word which-is “gyrations”. |



The text _[gy](glossary#valsi-gy)_ appears in the written word “gyrations”, whereas the sound represented in Lojban by _[jai](glossary#valsi-jai)_ appears in the spoken word “gyrations”. Such borderline cases should be avoided as a matter of good style.

It should be noted particularly that _[zoi](glossary#valsi-zoi)_ quotation is the only way to quote rafsi, specifically CCV rafsi, because they are not Lojban words, and _[zoi](glossary#valsi-zoi)_ quotation is the only way to quote things which are not Lojban words. (CVC and CVV rafsi look like names and cmavo respectively, and so can be quoted using other methods.) For example:

### Example 19.52.

|                                    |
| ---------------------------------- |
| zoi ry. sku .ry. cu rafsi zo cusku |

|                                                             |
| ----------------------------------------------------------- |
| “_sku_” is a rafsi of “_[cusku](glossary#valsi-cusku)_”. |



(A minor note on interaction between _lo'u ... le'u_ and _[zoi](glossary#valsi-zoi)_: The text between _[lo'u](glossary#valsi-lohu)_ and _[le'u](glossary#valsi-lehu)_ should consist of Lojban words only. In fact, non-Lojban material in the form of a _[zoi](glossary#valsi-zoi)_ quotation may also appear. However, if the word _[le'u](glossary#valsi-lehu)_ is used either as the delimiting word for the _[zoi](glossary#valsi-zoi)_ quotation, or within the quotation itself, the outer _[lo'u](glossary#valsi-lohu)_ quotation will be prematurely terminated. Therefore, _[le'u](glossary#valsi-lehu)_ should be avoided as the delimiting word in any _[zoi](glossary#valsi-zoi)_ quotation.)

Lojban strictly avoids any confusion between things and the names of things:

### Example 19.53.

|          |       |                |               |      |
| -------- | ----- | -------------- | ------------- | ---- |
| zo       | .bab. | cmene          | la            | bab. |
| The-word | “Bob” | is-the-name-of | the-one-named | Bob. |



In [Example 19.53](chapter19#example-random-id-56m5 "Example 19.53. "), _zo .bab._ is the word, whereas _la bab._ is the thing named by the word. The cmavo _[la'e](glossary#valsi-lahe)_ and _[lu'e](glossary#valsi-luhe)_ (of selma'o LAhE) convert back and forth between references and their referents:

### Example 19.54.

|          |       |                |                 |          |       |   |
| -------- | ----- | -------------- | --------------- | -------- | ----- | - |
| zo       | .bab. | cmene          | la'e            | zo       | .bab. |   |
| The-word | “Bob” | is-the-name-of | the-referent-of | the-word | “Bob” | . |



### Example 19.55.

|              |    |      |                |    |      |
| ------------ | -- | ---- | -------------- | -- | ---- |
| lu'e         | la | bab. | cmene          | la | bab. |
| A-symbol-for |    | Bob  | is-the-name-of |    | Bob. |



[Example 19.53](chapter19#example-random-id-56m5 "Example 19.53. ") through [Example 19.55](chapter19#example-random-id-qiTd "Example 19.55. ") all mean approximately the same thing, except for differences in emphasis. [Example 19.56](chapter19#example-random-id-3yXJ "Example 19.56. ") is different:

### Example 19.56.

|                       |
| --------------------- |
| la bab. cmene la bab. |

|                         |
| ----------------------- |
| Bob is the name of Bob. |



and says that Bob is both the name and the thing named, an unlikely situation. People are not names.

(In [Example 19.53](chapter19#example-random-id-56m5 "Example 19.53. ") through [Example 19.54](chapter19#example-random-id-qITB "Example 19.54. "), the name _bab._ was separated from a preceding _[zo](glossary#valsi-zo)_ by a pause, thus: _zo .bab._. The reason for this extra pause is that all Lojban names must be separated by pause from any preceding word other than _[la](glossary#valsi-la)_, _[lai](glossary#valsi-lai)_, _[la'i](glossary#valsi-lahi)_ (all of selma'o LA) and _[doi](glossary#valsi-doi)_ (of selma'o DOI). There are numerous other cmavo that may precede a name: of these, _[zo](glossary#valsi-zo)_ is one of the most common.)

The cmavo _[la'o](glossary#valsi-laho)_ also belongs to selma'o ZOI, and is mentioned here for completeness, although it does not signal the beginning of a quotation. Instead, _[la'o](glossary#valsi-laho)_ serves to mark non-Lojban names, especially the Linnaean binomial names (such as “Homo sapiens”) which are the internationally standardized names for species of animals and plants. Internationally known names which can more easily be recognized by spelling rather than pronunciation, such as “Goethe”, can also appear in Lojban text with _[la'o](glossary#valsi-laho)_:

### Example 19.57.

|                                                       |
| ----------------------------------------------------- |
| la'o dy. Goethe .dy. cu me la'o ly. Homo sapiens .ly. |

|                           |
| ------------------------- |
| Goethe is a Homo sapiens. |



Using _[la'o](glossary#valsi-laho)_ for all names rather than Lojbanizing, however, makes for very cumbersome text. A rough equivalent of _[la'o](glossary#valsi-laho)_ might be _la me zoi_.

## Contrastive emphasis: BAhE

The following cmavo are discussed in this section:

|      |      |                     |
| ---- | ---- | ------------------- |
| ba'e | BAhE | emphasize next word |
| za'e | BAhE | next word is nonce  |

English often uses strong stress on a word to single it out for contrastive emphasis, thus

### Example 19.58.

I saw George.



is quite different from

### Example 19.59.

I saw _George_.



The heavy stress on “_George_” (represented in writing by _italics_) indicates that I saw George rather than someone else. Lojban does not use stress in this way: stress is used only to help separate words (because every brivla is stressed on the penultimate syllable) and in names to match other languages' stress patterns. Note that many other languages do not use stress in this way either; typically word order is rearranged, producing something like

### Example 19.60.

It was George whom I saw.



In Lojban, the cmavo _[ba'e](glossary#valsi-bahe)_ (of selma'o BAhE) precedes a single word which is to be emphasized:

### Example 19.61.

|    |       |               |             |          |   |
| -- | ----- | ------------- | ----------- | -------- | - |
| mi | viska | la            | ba'e        | .djordj. |   |
| I  | saw   | the-one-named | \[emphasis] | “George” | . |

|                 |
| --------------- |
| I saw _George_. |



Note the pause before the name _djordj._, which serves to separate it unambiguously from the _[ba'e](glossary#valsi-bahe)_. Alternatively, the _[ba'e](glossary#valsi-bahe)_ can be moved to a position before the _[la](glossary#valsi-la)_, which in effect emphasizes the whole construct _la djordj._:

### Example 19.62.

|    |       |             |               |          |   |
| -- | ----- | ----------- | ------------- | -------- | - |
| mi | viska | ba'e        | la            | djordj.  |   |
| I  | saw   | \[emphasis] | the-one-named | “George” | . |

|                 |
| --------------- |
| I saw _George_. |



Marking a word with a cmavo of BAhE does not change the word's grammar in any way. Any word in a bridi can receive contrastive emphasis marking:

### Example 19.63.

|                          |
| ------------------------ |
| ba'e mi viska la djordj. |

|                             |
| --------------------------- |
| I, no one else, saw George. |



### Example 19.64.

|                          |
| ------------------------ |
| mi ba'e viska la djordj. |

|                                      |
| ------------------------------------ |
| I saw (not heard or smelled) George. |



Emphasis on one of the structural components of a Lojban bridi can also be achieved by rearranging it into an order that is not the speaker's or writer's usual order. Any sumti moved out of place, or the selbri when moved out of place, is emphatic to some degree.

For completeness, the cmavo _[za'e](glossary#valsi-zahe)_ should be mentioned, also of selma'o BAhE. It marks a word as possibly irregular, non-standard, or nonce (created for the occasion):

### Example 19.65.

|    |       |    |           |             |
| -- | ----- | -- | --------- | ----------- |
| mi | klama | la | za'e      | .albeinias. |
| I  | go-to |    | so-called | Albania     |



marks a Lojbanization of an English name, where a more appropriate standard form might be something like _la ckiipyris._, reflecting the country's name in Albanian.

Before a lujvo or fu'ivla, _[za'e](glossary#valsi-zahe)_ indicates that the word has been made up on the spot and may be used in a sense that is not found in the unabridged dictionary (when we have an unabridged dictionary!).

## Parenthesis and metalinguistic commentary: TO, TOI, SEI

The following cmavo are discussed in this section:

|      |     |                             |
| ---- | --- | --------------------------- |
| to   | TO  | open parenthesis            |
| to'i | TO  | open editorial parenthesis  |
| toi  | TOI | close parenthesis           |
| sei  | SEI | metalinguistic bridi marker |

The cmavo _[to](glossary#valsi-to)_ and _[toi](glossary#valsi-toi)_ are discursive (non-mathematical) parentheses, for inserting parenthetical remarks. Any text whatsoever can go within the parentheses, and it is completely invisible to its context. It can, however, refer to the context by the use of pro-sumti and pro-bridi: any that have been assigned in the context are still assigned in the parenthetical remarks, but the reverse is not true.

### Example 19.66.

|     |        |    |        |     |          |    |     |        |
| --- | ------ | -- | ------ | --- | -------- | -- | --- | ------ |
| doi | lisas. | mi | djica  | le  | nu       | to | doi | frank. |
| O   | Lisa,  | I  | desire | the | event-of | (  | O   | Frank, |

|               |       |     |     |       |     |       |
| ------------- | ----- | --- | --- | ----- | --- | ----- |
| ko            | sisti | toi | do  | viska | le  | mlatu |
| \[imperative] | stop! | )   | you | see   | the | cat.  |

|                                                 |
| ----------------------------------------------- |
| Lisa, I want you to (Frank! Stop!) see the cat. |



[Example 19.66](chapter19#example-random-id-FHJi "Example 19.66. ") implicitly redefines _[do](glossary#valsi-do)_ within the parentheses: the listener is changed by _doi frank._ When the context sentence resumes, however, the old listener, Lisa, is automatically restored.

There is another cmavo of selma'o TO: _[to'i](glossary#valsi-tohi)_. The difference between _[to](glossary#valsi-to)_ and _[to'i](glossary#valsi-tohi)_ is the difference between parentheses and square brackets in English prose. Remarks within _to ... toi_ cmavo are implicitly by the same speaker, whereas remarks within _to'i ... toi_ are implicitly by someone else, perhaps an editor:

### Example 19.67.

|                                                                  |
| ---------------------------------------------------------------- |
| la frank. cusku lu mi prami do to'isa'a do du la djein. toi li'u |

|                                            |
| ------------------------------------------ |
| Frank expresses “I love you \[you = Jane]” |



The _[sa'a](glossary#valsi-saha)_ suffix is a discursive cmavo (of selma'o UI) meaning “editorial insertion”, and indicating that the marked word or construct (in this case, the entire bracketed remark) is not part of the quotation. It is required whenever the _to'i ... toi_ remark is physically within quotation marks, at least when speaking to literal-minded listeners; the convention may be relaxed if no actual confusion results.

Note: The parser believes that parentheses are attached to the previous word or construct, because it treats them as syntactic equivalents of subscripts and other such so-called “free modifiers”. Semantically, however, parenthetical remarks are not necessarily attached either to what precedes them or what follows them.

The cmavo _[sei](glossary#valsi-sei)_ (of selma'o SEI) begins an embedded discursive bridi. Comments added with _[sei](glossary#valsi-sei)_ are called “metalinguistic”, because they are comments about the discourse itself rather than about the subject matter of the discourse. This sense of the term “metalinguistic” is used throughout this chapter, and is not to be confused with the sense “language for expressing other languages”.

When marked with _[sei](glossary#valsi-sei)_, a metalinguistic utterance can be embedded in another utterance as a discursive. In this way, discursives which do not have cmavo assigned in selma'o UI can be expressed:

### Example 19.68.

|                                               |
| --------------------------------------------- |
| la frank. prami sei la frank. gleki la djein. |

|                                    |
| ---------------------------------- |
| Frank loves (Frank is happy) Jane. |



Using the happiness attitudinal, _[.ui](glossary#valsi-ui)_, would imply that the speaker was happy. Instead, the speaker attributes happiness to Frank. It would probably be safe to elide the one who is happy, and say:

### Example 19.69.

|                                     |
| ----------------------------------- |
| la frank. prami sei gleki la djein. |

|                                 |
| ------------------------------- |
| Frank loves (he is happy) Jane. |



The grammar of the bridi following _[sei](glossary#valsi-sei)_ has an unusual limitation: the sumti must either precede the selbri, or must be glued into the selbri with _[be](glossary#valsi-be)_ and _[bei](glossary#valsi-bei)_:

### Example 19.70.

|                                                    |
| -------------------------------------------------- |
| la frank. prami sei gleki be fa la suzn. la djein. |

|                                    |
| ---------------------------------- |
| Frank loves (Susan is happy) Jane. |



This restriction allows the terminator cmavo _[se'u](glossary#valsi-sehu)_ to almost always be elided.

Since a discursive utterance is working at a “higher” level of abstraction than a non-discursive utterance, a non-discursive utterance cannot refer to a discursive utterance. Specifically, the various back-counting, reciprocal, and reflexive constructs in selma'o KOhA ignore the utterances at “higher” metalinguistic levels in determining their referent. It is possible, and sometimes necessary, to refer to lower metalinguistic levels. For example, the English “he said” in a conversation is metalinguistic. For this purpose, quotations are considered to be at a lower metalinguistic level than the surrounding context (a quoted text cannot refer to the statements of the one who quotes it), whereas parenthetical remarks are considered to be at a higher level than the context.

Lojban works differently from English in that the “he said” can be marked instead of the quotation. In Lojban, you can say:

### Example 19.71.

|    |       |           |          |    |       |     |       |             |
| -- | ----- | --------- | -------- | -- | ----- | --- | ----- | ----------- |
| la | djan. | cusku     | lu       | mi | klama | le  | zarci | li'u        |
|    | John  | expresses | \[quote] | I  | go-to | the | store | \[unquote]. |



which literally claims that John uttered the quoted text. If the central claim is that John made the utterance, as is likely in conversation, this style is the most sensible. However, in written text which quotes a conversation, you don't want the “he said” or “she said” to be considered part of the conversation. If unmarked, it could mess up the anaphora counting. Instead, you can use:

### Example 19.72.

|          |    |       |     |       |         |
| -------- | -- | ----- | --- | ----- | ------- |
| lu       | mi | klama | le  | zarci | seisa'a |
| \[quote] | I  | go-to | the | store | (       |

|    |       |           |    |               |             |
| -- | ----- | --------- | -- | ------------- | ----------- |
| la | djan. | cusku     | be | dei           | li'u        |
|    | John  | expresses |    | this-sentence | )\[unquote] |

|                                 |
| ------------------------------- |
| “I go to the store”, said John. |



And of course other orders are possible:

### Example 19.73.

|                                                    |
| -------------------------------------------------- |
| lu seisa'a la djan. cusku be dei mi klama le zarci |

|                                 |
| ------------------------------- |
| John said, “I go to the store”. |



### Example 19.74.

|                                            |
| ------------------------------------------ |
| lu mi klama seisa'a la djan cusku le zarci |

|                                    |
| ---------------------------------- |
| “I go”, John said, “to the store”. |



Note the _[sa'a](glossary#valsi-saha)_ following each _[sei](glossary#valsi-sei)_, marking the _[sei](glossary#valsi-sei)_ and its attached bridi as an editorial insert, not part of the quotation. In a more relaxed style, these _[sa'a](glossary#valsi-saha)_ cmavo would probably be dropped.

The elidable terminator for _[sei](glossary#valsi-sei)_ is _[se'u](glossary#valsi-sehu)_ (of selma'o SEhU); it is rarely needed, except to separate a selbri within the _[sei](glossary#valsi-sei)_ comment from an immediately following selbri (or component) outside the comment.

## Erasure: SI, SA, SU

The following cmavo are discussed in this section:

|    |    |                 |
| -- | -- | --------------- |
| si | SI | erase word      |
| sa | SA | erase phrase    |
| su | SU | erase discourse |

The cmavo _[si](glossary#valsi-si)_ (of selma'o SI) is a metalinguistic operator that erases the preceding word, as if it had never been spoken:

### Example 19.75.

|      |           |     |           |
| ---- | --------- | --- | --------- |
| ti   | gerku     | si  | mlatu     |
| This | is-a-dog, | er, | is-a-cat. |



means the same thing as _ti mlatu_. Multiple _[si](glossary#valsi-si)_ cmavo in succession erase the appropriate number of words:

### Example 19.76.

|      |           |        |     |     |            |        |
| ---- | --------- | ------ | --- | --- | ---------- | ------ |
| ta   | blanu     | zdani  | si  | si  | xekri      | zdani  |
| That | is-a-blue | house, | er, | er, | is-a-black | house. |



In order to erase the word _[zo](glossary#valsi-zo)_, it is necessary to use three _[si](glossary#valsi-si)_ cmavo in a row:

### Example 19.77.

|          |       |                |       |      |                              |    |     |     |      |
| -------- | ----- | -------------- | ----- | ---- | ---------------------------- | -- | --- | --- | ---- |
| zo       | .bab. | se             | cmene | zo   | si                           | si | si  | la  | bab. |
| The-word | “Bob” | is-the-name-of | the   | word | _[si](glossary#valsi-si)_ | ,  | er, | er, | Bob. |



The first use of _[si](glossary#valsi-si)_ does not erase anything, but completes the _[zo](glossary#valsi-zo)_ quotation. Two more _[si](glossary#valsi-si)_ cmavo are then necessary to erase the first _[si](glossary#valsi-si)_ and the _[zo](glossary#valsi-zo)_.

Incorrect names can likewise cause trouble with _[si](glossary#valsi-si)_:

### Example 19.78.

|    |       |             |            |               |
| -- | ----- | ----------- | ---------- | ------------- |
| mi | tavla | fo          | la         | .esperanto    |
| I  | talk  | in-language | that-named | and-speranto, |

|     |     |              |
| --- | --- | ------------ |
| si  | si  | .esperanton. |
| er, | er, | Esperanto.   |



The Lojbanized spelling _.esperanto_ breaks up, as a consequence of the Lojban morphology rules (see [Chapter 4](chapter04 "Chapter 4. The Shape Of Words To Come: Lojban Morphology")) into two Lojban words, the cmavo _[e](glossary#valsi-e)_ and the undefined lujvo _speranto_. Therefore, two _[si](glossary#valsi-si)_ cmavo are needed to erase them. Of course, _.e speranto_ is not grammatical after _[la](glossary#valsi-la)_, but recognition of _[si](glossary#valsi-si)_ is done before grammatical analysis.

Even more messy is the result of an incorrect _[zoi](glossary#valsi-zoi)_:

### Example 19.79.

|    |         |            |          |                              |             |     |     |     |     |          |   |
| -- | ------- | ---------- | -------- | ---------------------------- | ----------- | --- | --- | --- | --- | -------- | - |
| mi | cusku   | zoi        | fy.      | gy.                          | .fy.        | si  | si  | si  | si  | zo .djan |   |
| I  | express | \[foreign] | \[quote] | _[gy](glossary#valsi-gy)_ | \[unquote], | er, | er, | er, | er, | “John”   | . |



In [Example 19.79](chapter19#example-random-id-zoWF "Example 19.79. "), the first _[fy](glossary#valsi-fy)_ is taken to be the delimiting word. The next word must be different from the delimiting word, and _[gy.](glossary#valsi-gy)_, the Lojban name for the letter _g_, was chosen arbitrarily. Then the delimiting word must be repeated. For purposes of _[si](glossary#valsi-si)_ erasure, the entire quoted text is taken to be a word, so four words have been uttered, and four more _[si](glossary#valsi-si)_ cmavo are needed to erase them altogether. Similarly, a stray _[lo'u](glossary#valsi-lohu)_ quotation mark must be erased with _fy. le'u si si si_, by completing the quotation and then erasing it all with three _[si](glossary#valsi-si)_ cmavo.

What if less than the entire _[zo](glossary#valsi-zo)_ or _[zoi](glossary#valsi-zoi)_ construct is erased? The result is something which has a loose _[zo](glossary#valsi-zo)_ or _[zoi](glossary#valsi-zoi)_ in it, without its expected sequels, and which is incurably ungrammatical. Thus, to erase just the word quoted by _[zo](glossary#valsi-zo)_, it turns out to be necessary to erase the _[zo](glossary#valsi-zo)_ as well:

### Example 19.80.

|    |    |             |          |         |     |     |          |           |
| -- | -- | ----------- | -------- | ------- | --- | --- | -------- | --------- |
| mi | se | cmene       | zo       | .djan.  | si  | si  | zo       | .djordj.  |
| I  |    | am-named-by | the-word | “John,” | er, | er, | the-word | “George.” |



The parser will reject _zo .djan. si .djordj._, because in that context _djordj._ is a name (of selma'o CMENE) rather than a quoted word.

Note: The current machine parser does not implement _[si](glossary#valsi-si)_ erasure.

As the above examples plainly show, precise erasures with _[si](glossary#valsi-si)_ can be extremely hard to get right. Therefore, the cmavo _[sa](glossary#valsi-sa)_ (of selma'o SA) is provided for erasing more than one word. The cmavo following _[sa](glossary#valsi-sa)_ should be the starting marker of some grammatical construct. The effect of the _[sa](glossary#valsi-sa)_ is to erase back to and including the last starting marker of the same kind. For example:

### Example 19.81.

|    |       |     |     |    |    |       |          |        |   |
| -- | ----- | --- | --- | -- | -- | ----- | -------- | ------ | - |
| mi | viska | le  | sa  | .i | mi | cusku | zo       | .djan. |   |
| I  | see   | the | ... |    | I  | say   | the-word | “John” | . |



Since the word following _[sa](glossary#valsi-sa)_ is _[i](glossary#valsi-i)_, the sentence separator, its effect is to erase the preceding sentence. So [Example 19.81](chapter19#example-random-id-YdX7 "Example 19.81. ") is equivalent to:

### Example 19.82.

mi cusku zo .djan.



Another example, erasing a partial description rather than a partial sentence:

### Example 19.83.

|    |       |     |       |        |     |     |       |        |
| -- | ----- | --- | ----- | ------ | --- | --- | ----- | ------ |
| mi | viska | le  | blanu | .zdan. | sa  | le  | xekri | zdani  |
| I  | see   | the | blue  | hou    | ... | the | black | house. |



In [Example 19.83](chapter19#example-random-id-SszI "Example 19.83. "), _le blanu .zdan._ is ungrammatical, but clearly reflects the speaker's original intention to say _le blanu zdani_. However, the _[zdani](glossary#valsi-zdani)_ was cut off before the end and changed into a name. The entire ungrammatical _[le](glossary#valsi-le)_ construct is erased and replaced by _le xekri zdani_.

Note: The current machine parser does not implement _[sa](glossary#valsi-sa)_ erasure. Getting _[sa](glossary#valsi-sa)_ right is even more difficult (for a computer) than getting _[si](glossary#valsi-si)_ right, as the behavior of _[si](glossary#valsi-si)_ is defined in terms of words rather than in terms of grammatical constructs (possibly incorrect ones) and words are conceptually simpler entities. On the other hand, _[sa](glossary#valsi-sa)_ is generally easier for human beings, because the rules for using it correctly are less finicky.

The cmavo _[su](glossary#valsi-su)_ (of selma'o SU) is yet another metalinguistic operator that erases the entire text. However, if the text involves multiple speakers, then _[su](glossary#valsi-su)_ will only erase the remarks made by the one who said it, unless that speaker has said nothing. Therefore _susu_ is needed to eradicate a whole discussion in conversation.

Note: The current machine parser does not implement either _[su](glossary#valsi-su)_ or _susu_ erasure.

## Hesitation: Y

The following cmavo is discussed in this section:

|     |   |                  |
| --- | - | ---------------- |
| .y. | Y | hesitation noise |

Speakers often need to hesitate to think of what to say next or for some extra-linguistic reason. There are two ways to hesitate in Lojban: to pause between words (that is, to say nothing) or to use the cmavo _[.y.](glossary#valsi-y)_ (of selma'o Y). This resembles in sound the English hesitation noise written “uh” (or “er”), but differs from it in the requirement for pauses before and after. Unlike a long pause, it cannot be mistaken for having nothing more to say: it holds the floor for the speaker. Since vowel length is not significant in Lojban, the _y_ sound can be dragged out for as long as necessary. Furthermore, the sound can be repeated, provided the required pauses are respected.

Since the hesitation sound in English is outside the formal language, English-speakers may question the need for a formal cmavo. Speakers of other languages, however, often hesitate by saying (or, if necessary, repeating) a word (“este” in some dialects of Spanish, roughly meaning “that is”), and Lojban's audio-visual isomorphism requires a written representation of all meaningful spoken behavior. Of course, _[.y.](glossary#valsi-y)_ has no grammatical significance: it can appear anywhere at all in a Lojban sentence except in the middle of a word.

## No more to say: FAhO

The following cmavo is discussed in this section:

|      |      |             |
| ---- | ---- | ----------- |
| fa'o | FAhO | end of text |

The cmavo _[fa'o](glossary#valsi-faho)_ (of selma'o FAhO) is the usually omitted marker for the end of a text; it can be used in computer interaction to indicate the end of input or output, or for explicitly giving up the floor during a discussion. It is outside the regular grammar, and the machine parser takes it as an unconditional signal to stop parsing unless it is quoted with _[zo](glossary#valsi-zo)_ or with _lo'u ... le'u_. In particular, it is not used at the end of subordinate texts quoted with _[li'u](glossary#valsi-lihu)_ or parenthesized with _to ... toi_.

## List of cmavo interactions

The following list gives the cmavo and selma'o that are recognized by the earliest stages of the parser, and specifies exactly which of them interact with which others. All of the cmavo are at least mentioned in this chapter. The cmavo are written in lower case, and the selma'o in UPPER CASE.

- _[zo](glossary#valsi-zo)_ quotes the following word, no matter what it is.

- _[si](glossary#valsi-si)_ erases the preceding word unless it is a _[zo](glossary#valsi-zo)_.

- _[sa](glossary#valsi-sa)_ erases the preceding word and other words, unless the preceding word is a _[zo](glossary#valsi-zo)_.

- _[su](glossary#valsi-su)_ is the same as _[sa](glossary#valsi-sa)_, but erases more words.

- _[lo'u](glossary#valsi-lohu)_ quotes all following words up to a _[le'u](glossary#valsi-lehu)_ (but not a _zo le'u_).

- _[le'u](glossary#valsi-lehu)_ is ungrammatical except at the end of a “lo'u quotation.

- ZOI cmavo use the following word as a delimiting word, no matter what it is, but using _[le'u](glossary#valsi-lehu)_ may create difficulties.

- _[zei](glossary#valsi-zei)_ combines the preceding and the following word into a lujvo, but does not affect _[zo](glossary#valsi-zo)_, _[si](glossary#valsi-si)_, _[sa](glossary#valsi-sa)_, _[su](glossary#valsi-su)_, _[lo'u](glossary#valsi-lohu)_, ZOI cmavo, _[fa'o](glossary#valsi-faho)_, and _[zei](glossary#valsi-zei)_.

- BAhE cmavo mark the following word, unless it is _[si](glossary#valsi-si)_, _[sa](glossary#valsi-sa)_, or _[su](glossary#valsi-su)_, or unless it is preceded by _[zo](glossary#valsi-zo)_. Multiple BAhE cmavo may be used in succession.

- _[bu](glossary#valsi-bu)_ makes the preceding word into a lerfu word, except for _[zo](glossary#valsi-zo)_, _[si](glossary#valsi-si)_, _[sa](glossary#valsi-sa)_, _[su](glossary#valsi-su)_, _[lo'u](glossary#valsi-lohu)_, ZOI cmavo, _[fa'o](glossary#valsi-faho)_, _[zei](glossary#valsi-zei)_, BAhE cmavo, and _[bu](glossary#valsi-bu)_. Multiple _[bu](glossary#valsi-bu)_ cmavo may be used in succession.

- UI and CAI cmavo mark the previous word, except for _[zo](glossary#valsi-zo)_, _[si](glossary#valsi-si)_, _[sa](glossary#valsi-sa)_, _[su](glossary#valsi-su)_, _[lo'u](glossary#valsi-lohu)_, ZOI, _[fa'o](glossary#valsi-faho)_, _[zei](glossary#valsi-zei)_, BAhE cmavo, and _[bu](glossary#valsi-bu)_. Multiple UI cmavo may be used in succession. A following _[nai](glossary#valsi-nai)_ is made part of the UI.

- _[.y.](glossary#valsi-y)_, _[da'o](glossary#valsi-daho)_, _[fu'e](glossary#valsi-fuhe)_, and _[fu'o](glossary#valsi-fuho)_ are the same as UI, but do not absorb a following _[nai](glossary#valsi-nai)_.

## List of Elidable Terminators

The following list shows all the elidable terminators of Lojban. The first column is the terminator, the second column is the selma'o that starts the corresponding construction, and the third column states what kinds of grammatical constructs are terminated. Each terminator is the only cmavo of its selma'o, which naturally has the same name as the cmavo.

|      |              |                                  |
| ---- | ------------ | -------------------------------- |
| be'o | BE           | sumti attached to a tanru unit   |
| boi  | PA/BY        | number or lerfu string           |
| do'u | COI/DOI      | vocative phrases                 |
| fe'u | FIhO         | ad-hoc modal tags                |
| ge'u | GOI          | relative phrases                 |
| kei  | NU           | abstraction bridi                |
| ke'e | KE           | groups of various kinds          |
| ku   | LE/LA        | description sumti                |
| ku'e | PEhO         | forethought mekso                |
| ku'o | NOI          | relative clauses                 |
| li'u | LU           | quotations                       |
| lo'o | LI           | number sumti                     |
| lu'u | LAhE/NAhE+BO | sumti qualifiers                 |
| me'u | ME           | tanru units formed from sumti    |
| nu'u | NUhI         | forethought termsets             |
| se'u | SEI/SOI      | metalinguistic insertions        |
| te'u | various      | mekso conversion constructs      |
| toi  | TO           | parenthetical remarks            |
| tu'u | TUhE         | multiple sentences or paragraphs |
| vau  | (none)       | simple bridi or bridi-tails      |
| ve'o | VEI          | mekso parentheses                |

---

| The Complete Lojban Language |
| :--------------------------: |

|                                        |                                            |
| -------------------------------------: | :----------------------------------------- |
| [Prev: Chapter 18](chapter18) | [Next: Chapter 20](chapter20) |

[Table of Contents](../)

[Book Info Page](http://www.lojban.org/cll)
