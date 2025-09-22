---
layout: ../layouts/Layout.astro
title: ''
prev: 
prevTitle: ''
next: 
nextTitle: ''
---

Chapter 14. If Wishes Were Horses: The Lojban Connective System

| The Complete Lojban Language |
| :--------------------------: |

|                                               |                                           |
| --------------------------------------------: | :---------------------------------------- |
| [Prev: Chapter 13](chapter13) | [Next: Chapter 15](chapter15) |

[Table of Contents](../)

[Book Info Page](http://www.lojban.org/cll)

---

# If Wishes Were Horses: The Lojban Connective System

![The picture for chapter 14](../assets/chapter-connectives.gif)

## Logical connection and truth tables

Lojban is a logical language: the name of the language itself means “logical language”. The fundamentals of ordinary logic (there are variant logics, which aren't addressed in this book) include the notions of a “sentence” (sometimes called a “statement” or “proposition”), which asserts a truth or falsehood, and a small set of “truth functions”, which combine two sentences to create a new sentence. The truth functions have the special characteristic that the truth value (that is, the truth or falsehood) of the results depends only on the truth value of the component sentences. For example,

### Example 14.1.

John is a man or James is a woman.



is true if “John is a man” is true, or if “James is a woman” is true. If we know whether John is a man, and we know whether James is a woman, we know whether “John is a man or James is a woman” is true, provided we know the meaning of “or”. Here “John is a man” and “James is a woman” are the component sentences.

We will use the phrase “negating a sentence” to mean changing its truth value. An English sentence may always be negated by prefixing “It is false that ...”, or more idiomatically by inserting “not” at the right point, generally before the verb. “James is not a woman” is the negation of “James is a woman”, and vice versa. Recent slang can also negate a sentence by following it with the exclamation “Not!”

Words like “or” are called “logical connectives”, and Lojban has many of them, as befits a logical language. This chapter is mostly concerned with explaining the forms and uses of the Lojban logical connectives. There are a number of other logical connectives in English such as “and”, “and/or”, “if”, “only if”, “whether or not”, and others; however, not every use of these English words corresponds to a logical connective. This point will be made clear in particular cases as needed. The other English meanings are supported by different Lojban connective constructs.

The Lojban connectives form a system (as the title of this chapter suggests), regular and predictable, whereas natural-language connectives are rather less systematic and therefore less predictable.

There exist 16 possible different truth functions. A truth table is a graphical device for specifying a truth function, making it clear what the value of the truth function is for every possible value of the component sentences. Here is a truth table for “or”:

| first | second | result |
| ----- | ------ | ------ |
| True  | True   | True   |
| True  | False  | True   |
| False | True   | True   |
| False | False  | False  |

This table means that if the first sentence stated is true, and the second sentence stated is true, then the result of the truth function is also true. The same is true for every other possible combination of truth values except the one where both the first and the second sentences are false, in which case the truth value of the result is also false.

Suppose that “John is a man” is true (and “John is not a man” is false), and that “James is a woman” is false (and “James is not a woman” is true). Then the truth table tells us that

|                                                                     |
| ------------------------------------------------------------------- |
| “John is a man, or James is not a woman” (true true ) is true       |
| “John is a man, or James is a woman” (true , false) is true         |
| “John is not a man, or James is not a woman” (false, true ) is true |
| “John is not a man, or James is a woman” (false, false) is false    |

Note that the kind of “or” used in this example can also be expressed (in formal English) with “and/or”. There is a different truth table for the kind of “or” that means “either ... or ... but not both”.

To save space, we will write truth tables in a shorter format henceforth. Let the letters T and F stand for True and False. The rows will always be given in the order shown above: TT, TF, FT, FF for the two sentences. Then it is only necessary to give the four letters from the result column, which can be written TTTF, as can be seen by reading down the third column of the table above. So TTTF is the abbreviated truth table for the “or” truth function. Here are the 16 possible truth functions, with an English version of what it means to assert that each function is, in fact, true (“first” refers to the first sentence, and “second” to the second sentence):

|      |                                                |
| ---- | ---------------------------------------------- |
| TTTT | (always true)                                  |
| TTTF | first is true and/or second is true.           |
| TTFT | first is true if second is true.               |
| TTFF | first is true whether or not second is true.   |
| TFTT | first is true only if second is true.          |
| TFTF | whether or not first is true, second is true.  |
| TFFT | first is true if and only if second is true.   |
| TFFF | first is true and second is true               |
| FTTT | first and second are not both true.            |
| FTTF | first or second is true, but not both.         |
| FTFT | whether or not first is true, second is false. |
| FTFF | first is true, but second is false.            |
| FFTT | first is false whether or not second is true.  |
| FFTF | first is false, but second is true.            |
| FFFT | neither first nor second is true.              |
| FFFF | (always false)                                 |

Skeptics may work out the detailed truth tables for themselves.

## The Four basic vowels

Lojban regards four of these 16 truth functions as fundamental, and assigns them the four vowels A, E, O, and U. These letters do not represent actual cmavo or selma'o, but rather a component vowel from which actual logical-connective cmavo are built up, as explained in the next section. Here are the four vowels, their truth tables, and rough English equivalents:

|     |      |                |
| --- | ---- | -------------- |
| A   | TTTF | or, and/or     |
| E   | TFFF | and            |
| O   | TFFT | if and only if |
| U   | TTFF | whether or not |

More precisely:

|                                                                                               |
| --------------------------------------------------------------------------------------------- |
| A is true if either or both sentences are true                                                |
| E is true if both sentences are true, but not otherwise                                       |
| O is true if the sentences are both true or both false                                        |
| U is true if the first sentence is true, regardless of the truth value of the second sentence |

With the four vowels, the ability to negate either sentence, and the ability to exchange the sentences, as if their order had been reversed, we can create all of the 16 possible truth functions except TTTT and FFFF, which are fairly useless anyway. The following table illustrates how to create each of the 14 remaining truth functions:

|      |                                                    |
| ---- | -------------------------------------------------- |
| TTTF | A                                                  |
| TTFT | A with second sentence negated                     |
| TTFF | U                                                  |
| TFTT | A with first sentence negated                      |
| TFTF | U with sentences exchanged                         |
| TFFT | O                                                  |
| TFFF | E                                                  |
| FTTT | A with both sentences negated                      |
| FTTF | O with either first or second negated (not both)   |
| FTFT | U with sentences exchanged and then second negated |
| FTFF | E with second sentence negated                     |
| FFTT | U with first sentence negated                      |
| FFTF | E with first sentence negated                      |
| FFFT | E with both sentences negated                      |

Note that exchanging the sentences is only necessary with U. The three other basic truth functions are commutative; that is, they mean the same thing regardless of the order of the component sentences. There are other ways of getting some of these truth tables; these just happen to be the methods usually employed.

## The six types of logical connectives

In order to remain unambiguous, Lojban cannot have only a single logical connective for each truth function. There are many places in the grammar of the language where logical connection is permitted, and each must have its appropriate set of connectives. If the connective suitable for sumti were used to connect selbri, ambiguity would result.

Consider the English sentence:

### Example 14.2.

Mary went to the window and ...



where the last word could be followed by “the door”, a noun phrase, or by “saw the horses”, a sentence with subject omitted, or by “John went to the door”, a full sentence, or by one of a variety of other English grammatical constructions. Lojban cannot tolerate such grammatical looseness.

Instead, there are a total of five different selma'o used for logical connection: A, GA, GIhA, GUhA, and JA. Each of these includes four cmavo, one based on each of the four vowels, which is always the last vowel in the cmavo. In selma'o A, the vowel is the entire cmavo.

Thus, in selma'o A, the cmavo for the function A is _[a](glossary#valsi-a)_. (Do not confuse A, which is a selma'o, with A, which is a truth function, or _[a](glossary#valsi-a)_, which is a cmavo.) Likewise, the cmavo for E in selma'o GIhA is _[gi'e](glossary#valsi-gihe)_, and the cmavo for U in selma'o GA is _[gu](glossary#valsi-gu)_. This systematic regularity makes the cmavo easier to learn.

Obviously, four cmavo are not enough to express the 14 truth functions explained in [Section 14.1](chapter14#section-connectives-introduction "14.1. Logical connection and truth tables"). Therefore, compound cmavo must be used. These compound cmavo follow a systematic pattern: each has one cmavo from the five logical connection selma'o at its heart, and may also contain one or more of the auxiliary cmavo _[se](glossary#valsi-se)_, _[na](glossary#valsi-na)_, or _[nai](glossary#valsi-nai)_. Which auxiliaries are used with which logical connection cmavo, and with what grammar and meaning, will be explained in the following sections. The uses of each of these auxiliary cmavo relates to its other uses in other parts of Lojban grammar.

For convenience, each of the types of compound cmavo used for logical connection is designated by a Lojban name. The name is derived by changing the final “-A” of the selma'o name to “-ek”; the reasons for using “-ek” are buried deep in the history of the Loglan Project. Thus, compound cmavo based on selma'o A are known as eks, and those based on selma'o JA are known as jeks. (When writing in English, it is conventional to use “eks” as the plural of “ek”.) When the term “logical connective” is used in this chapter, it refers to one or more of these kinds of compound cmavo.

Why does the title of this section refer to “six types” when there are only five selma'o? A jek may be preceded by _[i](glossary#valsi-i)_, the usual Lojban cmavo for connecting two sentences. The compound produced by _[i](glossary#valsi-i)_ followed by a jek is known as an ijek. It is useful to think of ijeks as a sixth kind of logical connective, parallel to eks, jeks, geks, giheks, and guheks.

There also exist giks, joiks, ijoiks, and joigiks, which are not logical connectives, but are other kinds of compound cmavo which will be introduced later.

## Logical connection of bridi

Now we are ready to express [Example 14.1](chapter14#example-random-id-mJ6y "Example 14.1. ") in Lojban! The kind of logical connective which is placed between two Lojban bridi to connect them logically is an ijek:

### Example 14.3.

|            |       |          |      |            |          |             |
| ---------- | ----- | -------- | ---- | ---------- | -------- | ----------- |
| la         | djan. | nanmu    | .ija | la         | djeimyz. | ninmu       |
| That-named | John  | is-a-man | or   | that-named | James    | is-a-woman. |



Here we have two separate Lojban bridi, _la djan. nanmu_ and _la djeimyz. ninmu_. These bridi are connected by _[ja](glossary#valsi-ja)_, the ijek for the truth function A. The _[i](glossary#valsi-i)_ portion of the ijek tells us that we are dealing with separate sentences here. Similarly, we can now say:

### Example 14.4.

|            |       |          |      |            |          |             |
| ---------- | ----- | -------- | ---- | ---------- | -------- | ----------- |
| la         | djan. | nanmu    | .ije | la         | djeimyz. | ninmu       |
| That-named | John  | is-a-man | and  | that-named | James    | is-a-woman. |



### Example 14.5.

|            |       |          |                |            |          |             |
| ---------- | ----- | -------- | -------------- | ---------- | -------- | ----------- |
| la         | djan. | nanmu    | .ijo           | la         | djeimyz. | ninmu       |
| That-named | John  | is-a-man | if-and-only-if | that-named | James    | is-a-woman. |



### Example 14.6.

|            |       |          |                |            |          |             |
| ---------- | ----- | -------- | -------------- | ---------- | -------- | ----------- |
| la         | djan. | nanmu    | .iju           | la         | djeimyz. | ninmu       |
| That-named | John  | is-a-man | whether-or-not | that-named | James    | is-a-woman. |



To obtain the other truth tables listed in [Section 14.2](chapter14#section-four-basics "14.2. The Four basic vowels"), we need to know how to negate the two bridi which represent the component sentences. We could negate them directly by inserting _[na](glossary#valsi-na)_ before the selbri, but Lojban also allows us to place the negation within the connective itself.

To negate the first or left-hand bridi, prefix _[na](glossary#valsi-na)_ to the JA cmavo but after the _[i](glossary#valsi-i)_. To negate the second or right-hand bridi, suffix _-nai_ to the JA cmavo. In either case, the negating word is placed on the side of the connective that is closest to the bridi being negated.

So to express the truth table FTTF, which requires O with either of the two bridi negated (not both), we can say either:

### Example 14.7.

|            |       |              |                |            |          |             |
| ---------- | ----- | ------------ | -------------- | ---------- | -------- | ----------- |
| la         | djan. | nanmu        | .inajo         | la         | djeimyz. | ninmu       |
| That-named | John  | is-not-a-man | if-and-only-if | that-named | James    | is-a-woman. |



### Example 14.8.

|            |       |          |                |            |          |                 |
| ---------- | ----- | -------- | -------------- | ---------- | -------- | --------------- |
| la         | djan. | nanmu    | .ijonai        | la         | djeimyz. | ninmu           |
| That-named | John  | is-a-man | if-and-only-if | that-named | James    | is-not-a-woman. |



The meaning of both [Example 14.7](chapter14#example-random-id-qgKB "Example 14.7. ") and [Example 14.8](chapter14#example-random-id-qgLH "Example 14.8. ") is the same as that of:

### Example 14.9.

John is a man or James is a woman, but not both.



Here is another example:

### Example 14.10.

|            |       |          |         |            |          |                 |
| ---------- | ----- | -------- | ------- | ---------- | -------- | --------------- |
| la         | djan. | nanmu    | .ijanai | la         | djeimyz. | ninmu           |
| That-named | John  | is-a-man | or      | that-named | James    | is-not-a-woman. |

|                                    |
| ---------------------------------- |
| John is a man if James is a woman. |



How's that again? Are those two English sentences in [Example 14.10](chapter14#example-random-id-FXSC "Example 14.10. ") really equivalent? In English, no. The Lojban TTFT truth function can be glossed “A if B”, but the “if” does not quite have its English sense. [Example 14.10](chapter14#example-random-id-FXSC "Example 14.10. ") is true so long as John is a man, even if James is not a woman; likewise, it is true just because James is not a woman, regardless of John's gender. This kind of “if-then” is technically known as a “material conditional”.

Since James is not a woman (by our assertions in [Section 14.1](chapter14#section-connectives-introduction "14.1. Logical connection and truth tables")), the English sentence “John is a man if James is a woman” seems to be neither true nor false, since it assumes something which is not true. It turns out to be most convenient to treat this “if” as TTFT, which on investigation means that [Example 14.10](chapter14#example-random-id-FXSC "Example 14.10. ") is true. [Example 14.11](chapter14#example-random-id-EdY5 "Example 14.11. "), however, is equally true:

### Example 14.11.

|            |       |            |         |            |          |             |
| ---------- | ----- | ---------- | ------- | ---------- | -------- | ----------- |
| la         | djan. | ninmu      | .ijanai | la         | djeimyz. | ninmu       |
| That-named | John  | is-a-woman | if      | that-named | James    | is-a-woman. |



This can be thought of as a principle of consistency, and may be paraphrased as follows: “If a false statement is true, any statement follows from it.” All uses of English “if” must be considered very carefully when translating into Lojban to see if they really fit this Lojban mold.

[Example 14.12](chapter14#example-random-id-9CCS "Example 14.12. "), which uses the TFTT truth function, is subject to the same rules: the stated gloss of TFTT as “only if” works naturally only when the right-hand bridi is false; if it is true, the left-hand bridi may be either true or false. The last gloss of [Example 14.12](chapter14#example-random-id-9CCS "Example 14.12. ") illustrates the use of “if ... then” as a more natural substitute for “only if”.

### Example 14.12.

|            |       |              |        |            |          |             |
| ---------- | ----- | ------------ | ------ | ---------- | -------- | ----------- |
| la         | djan. | nanmu        | .inaja | la         | djeimyz. | ninmu       |
| That-named | John  | is-not-a-man | or     | that-named | James    | is-a-woman. |

|                                          |
| ---------------------------------------- |
| John is a man only if James is a woman.  |
| If John is a man, then James is a woman. |



The following example illustrates the use of _[se](glossary#valsi-se)_ to, in effect, exchange the two sentences. The normal use of _[se](glossary#valsi-se)_ is to (in effect) transpose places of a bridi, as explained in [Section 5.11](chapter05#section-place-conversion "5.11. Conversion of simple selbri").

### Example 14.13.

|     |       |       |        |     |          |       |
| --- | ----- | ----- | ------ | --- | -------- | ----- |
| la  | djan. | nanmu | .iseju | la  | djeimyz. | ninmu |

|                                                 |
| ----------------------------------------------- |
| Whether or not John is a man, James is a woman. |



If both _[na](glossary#valsi-na)_ and _[se](glossary#valsi-se)_ are present, which is legal but never necessary, _[na](glossary#valsi-na)_ would come before _[se](glossary#valsi-se)_.

The full syntax of ijeks, therefore, is:

> .i \[na] \[se] JA \[nai]

where the cmavo in brackets are optional.

## Forethought bridi connection

Many concepts in Lojban are expressible in two different ways, generally referred to as “afterthought” and “forethought”. [Section 14.4](chapter14#section-bridi-connection "14.4. Logical connection of bridi") discussed what is called “afterthought bridi logical connection”. The word “afterthought” is used because the connective cmavo and the second bridi were added, as it were, afterwards and without changing the form of the first bridi. This form might be used by someone who makes a statement and then wishes to add or qualify that statement after it has been completed. Thus,

### Example 14.14.

la djan. nanmu



is a complete bridi, and adding an afterthought connection to make

### Example 14.15.

|     |       |       |      |     |          |       |
| --- | ----- | ----- | ---- | --- | -------- | ----- |
| la  | djan. | nanmu | .ija | la  | djeimyz. | ninmu |

|                                             |
| ------------------------------------------- |
| John is a man or James is a woman (or both) |



provides additional information without requiring any change in the form of what has come before; changes which may not be possible or practical, especially in speaking. (The meaning, however, may be changed by the use of a negating connective.) Afterthought connectives make it possible to construct all the important truth-functional relationships in a variety of ways.

In forethought style the speaker decides in advance, before expressing the first bridi, that a logical connection will be expressed. Forethought and afterthought connectives are expressed with separate selma'o. The forethought logical connectives corresponding to afterthought ijeks are geks:

### Example 14.16.

|     |     |       |       |     |     |          |       |
| --- | --- | ----- | ----- | --- | --- | -------- | ----- |
| ga  | la  | djan. | nanmu | gi  | la  | djeimyz. | ninmu |

|                                                     |
| --------------------------------------------------- |
| Either John is a man or James is a woman (or both). |



_[ga](glossary#valsi-ga)_ is the cmavo which represents the A truth function in selma'o GA. The word _[gi](glossary#valsi-gi)_ does not belong to GA at all, but constitutes its own selma'o: it serves only to separate the two bridi without having any content of its own. The English translation of _[gi](glossary#valsi-gi)_ is “either ... or”, but in the English form the truth function is specified both by the word “either” and by the word “or”: not so in Lojban.

Even though two bridi are being connected, geks and giks do not have any _[i](glossary#valsi-i)_ in them. The forethought construct binds up the two bridi into a single sentence as far as the grammar is concerned.

Some more examples of forethought bridi connection are:

### Example 14.17.

|     |     |       |       |     |     |          |       |
| --- | --- | ----- | ----- | --- | --- | -------- | ----- |
| ge  | la  | djan. | nanmu | gi  | la  | djeimyz. | ninmu |

|                                                            |
| ---------------------------------------------------------- |
| (It is true that) both John is a man and James is a woman. |



### Example 14.18.

|     |     |       |       |     |     |          |       |
| --- | --- | ----- | ----- | --- | --- | -------- | ----- |
| gu  | la  | djan. | nanmu | gi  | la  | djeimyz. | ninmu |

|                                                                 |
| --------------------------------------------------------------- |
| It is true that John is a man, whether or not James is a woman. |



It is worth emphasizing that [Example 14.18](chapter14#example-random-id-qgMN "Example 14.18. ") does not assert that James is (or is not) a woman. The _[gu](glossary#valsi-gu)_ which indicates that _la djeimyz. ninmu_ may be true or false is unfortunately rather remote from the bridi thus affected.

Perhaps the most important of the truth functions commonly expressed in forethought is TFTT, which can be paraphrased as “if ... then ...”:

### Example 14.19.

|        |            |       |               |     |            |          |             |
| ------ | ---------- | ----- | ------------- | --- | ---------- | -------- | ----------- |
| ganai  | la         | djan. | nanmu         | gi  | la         | djeimyz. | ninmu       |
| Either | that-named | John  | is-not-a-man, | or  | that-named | James    | is-a-woman. |

|                                          |
| ---------------------------------------- |
| If John is a man, then James is a woman. |



Note the placement of the _[nai](glossary#valsi-nai)_ in [Example 14.19](chapter14#example-random-id-Xcg1 "Example 14.19. "). When added to afterthought selma'o such as JA, a following _[nai](glossary#valsi-nai)_ negates the second bridi, to which it is adjacent. Since GA cmavo precede the first bridi, a following _[nai](glossary#valsi-nai)_ negates the first bridi instead.

Why does English insist on forethought in the translation of [Example 14.19](chapter14#example-random-id-Xcg1 "Example 14.19. ")? Possibly because it would be confusing to seemingly assert a sentence and then make it conditional (which, as the Lojban form shows, involves a negation). Truth functions which involve negating the first sentence may be confusing, even to the Lojbanic understanding, when expressed using afterthought.

It must be reiterated here that not every use of English “if ... then” is properly translated by _[ja](glossary#valsi-ja)_ or _[gi](glossary#valsi-gi)_; anything with implications of time needs a somewhat different Lojban translation, which will be discussed in [Section 14.18](chapter14#section-sumtcita "14.18. Tenses, modals, and logical connection"). Causal sentences like “If you feed the pig, then it will grow” are not logical connectives of any type, but rather need a translation using _[rinka](glossary#valsi-rinka)_ as the selbri joining two event abstractions, thus:

### Example 14.20.

|     |          |      |       |       |     |     |       |
| --- | -------- | ---- | ----- | ----- | --- | --- | ----- |
| le  | nu       | do   | cidja | dunda | fi  | le  | xarju |
| The | event-of | (you | food  | give  | to  | the | pig)  |

|     |        |     |          |     |      |        |
| --- | ------ | --- | -------- | --- | ---- | ------ |
| cu  | rinka  | le  | nu       | ri  | ba   | banro  |
|     | causes | the | event-of | (it | will | grow). |



Causality is discussed in far more detail in [Section 9.7](chapter09#section-causals "9.7. Modal sentence connection: the causals").

[Example 14.21](chapter14#example-random-id-I2jU "Example 14.21. ") and [Example 14.22](chapter14#example-random-id-Tiz6 "Example 14.22. ") illustrates a truth function, FTTF, which needs to negate either the first or the second bridi. We already understand how to negate the first bridi:

### Example 14.21.

|       |     |       |       |     |     |          |       |
| ----- | --- | ----- | ----- | --- | --- | -------- | ----- |
| gonai | la  | djan. | nanmu | gi  | la  | djeimyz. | ninmu |

|                                                        |
| ------------------------------------------------------ |
| John is not a man if and only if James is a woman.     |
| Either John is a man or James is a woman but not both. |



How can the second bridi be negated? By adding _-nai_ to the _[gi](glossary#valsi-gi)_.

### Example 14.22.

|     |     |       |       |       |     |          |       |
| --- | --- | ----- | ----- | ----- | --- | -------- | ----- |
| go  | la  | djan. | nanmu | ginai | la  | djeimyz. | ninmu |

|                                                        |
| ------------------------------------------------------ |
| John is a man if and only if James is not a woman.     |
| Either John is a man or James is a woman but not both. |



A compound cmavo based on _[gi](glossary#valsi-gi)_ is called a gik; the only giks are _[gi](glossary#valsi-gi)_ itself and _[nai](glossary#valsi-nai)_.

Further examples:

### Example 14.23.

|     |     |       |       |       |     |          |       |
| --- | --- | ----- | ----- | ----- | --- | -------- | ----- |
| ge  | la  | djan. | nanmu | ginai | la  | djeimyz. | ninmu |

|                                         |
| --------------------------------------- |
| John is a man and James is not a woman. |



### Example 14.24.

|       |     |       |       |       |     |          |       |
| ----- | --- | ----- | ----- | ----- | --- | -------- | ----- |
| ganai | la  | djan. | nanmu | ginai | la  | djeimyz. | ninmu |

|                                            |
| ------------------------------------------ |
| John is not a man or James is not a woman. |



The syntax of geks is:

> \[se] GA \[nai]

and of giks (which are not themselves connectives, but part of the machinery of forethought connection) is:

> _[gi](glossary#valsi-gi)_ \[nai]

## sumti connection

Geks and ijeks are sufficient to state every possible logical connection between two bridi. However, it is often the case that two bridi to be logically connected have one or more portions in common:

### Example 14.25.

|     |       |       |     |       |      |     |        |       |     |       |
| --- | ----- | ----- | --- | ----- | ---- | --- | ------ | ----- | --- | ----- |
| la  | djan. | klama | le  | zarci | .ije | la  | .alis. | klama | le  | zarci |

|                                                        |
| ------------------------------------------------------ |
| John goes to the market, and Alice goes to the market. |



Here only a single sumti differs between the two bridi. Lojban does not require that both bridi be expressed in full. Instead, a single bridi can be given which contains both of the different sumti and uses a logical connective from a different selma'o to combine the two sumti:

### Example 14.26.

|            |      |     |            |        |       |     |         |
| ---------- | ---- | --- | ---------- | ------ | ----- | --- | ------- |
| la         | djan | .e  | la         | .alis. | klama | le  | zarci   |
| That-named | John | and | that-named | Alice  | go-to | the | market. |



[Example 14.26](chapter14#example-random-id-JTIm "Example 14.26. ") means exactly the same thing as [Example 14.25](chapter14#example-random-id-Ecnq "Example 14.25. "): one may be rigorously transformed into the other without any change of logical meaning. This rule is true in general for every different kind of logical connection in Lojban; all of them, with one exception (see [Section 14.12](chapter14#section-tanru "14.12. Logical connection within tanru")), can always be transformed into a logical connection between sentences that expresses the same truth function.

The afterthought logical connectives between sumti are eks, which contain a connective cmavo of selma'o A. If ijeks were used in [Example 14.26](chapter14#example-random-id-JTIm "Example 14.26. "), the meaning would be changed:

### Example 14.27.

|            |       |                       |      |
| ---------- | ----- | --------------------- | ---- |
| la         | djan. |                       | .ije |
| That-named | John  | \[is/does-something]. | And  |

|            |        |         |     |         |
| ---------- | ------ | ------- | --- | ------- |
| la         | .alis. | klama   | le  | zarci   |
| that-named | Alices | goes-to | the | market. |



leaving the reader uncertain why John is mentioned at all.

Any ek may be used between sumti, even if there is no direct English equivalent:

### Example 14.28.

|            |       |                |            |        |         |     |         |
| ---------- | ----- | -------------- | ---------- | ------ | ------- | --- | ------- |
| la         | djan. | .o             | la         | .alis. | klama   | le  | zarci   |
| That-named | John  | if-and-only-if | that-named | Alice  | goes-to | the | market. |

|                                                      |
| ---------------------------------------------------- |
| John goes to the market if, and only if, Alice does. |



The second line of [Example 14.27](chapter14#example-random-id-7KHA "Example 14.27. ") is highly stilted English, but the first line (of which it is a literal translation) is excellent Lojban.

What about forethought sumti connection? As is the case for bridi connection, geks are appropriate. They are not the only selma'o of forethought logical-connectives, but are the most commonly used ones.

### Example 14.29.

|     |     |       |     |     |        |       |     |       |
| --- | --- | ----- | --- | --- | ------ | ----- | --- | ----- |
| ga  | la  | djan. | gi  | la  | .alis. | klama | le  | zarci |

|                                                    |
| -------------------------------------------------- |
| Either John or Alice (or both) goes to the market. |



Of course, eks include all the same patterns of compound cmavo that ijeks do. When _[na](glossary#valsi-na)_ or _[se](glossary#valsi-se)_ is part of an ek, a special writing convention is invoked, as in the following example:

### Example 14.30.

|            |       |         |            |        |         |     |         |
| ---------- | ----- | ------- | ---------- | ------ | ------- | --- | ------- |
| la         | djan. | na.a    | la         | .alis. | klama   | le  | zarci   |
| That-named | John  | only-if | that-named | Alice  | goes-to | the | market. |

|                                             |
| ------------------------------------------- |
| John goes to the market only if Alice does. |



Note the period in _[.a](glossary#valsi-a)_. The cmavo of A begin with vowels, and therefore must always be preceded by a pause. It is conventional to write all connective compounds as single words (with no spaces), but this pause must still be marked in writing as in speech; otherwise, the _[na](glossary#valsi-na)_ and _[a](glossary#valsi-a)_ would tend to run together.

## More than two propositions

So far we have seen logical connectives used to connect exactly two sentences. How about connecting three or more? Is this possible in Lojban? The answer is yes, subject to some warnings and some restrictions.

Of the four primitive truth functions A, E, O, and U, all but O have the same truth values no matter how their component sentences are associated in pairs. Therefore,

### Example 14.31.

|     |            |      |     |          |      |     |           |
| --- | ---------- | ---- | --- | -------- | ---- | --- | --------- |
| mi  | dotco      | .ije | mi  | ricfu    | .ije | mi  | nanmu     |
| I   | am-German. | And  | I   | am-rich. | And  | I   | am-a-man. |



means that all three component sentences are true. Likewise,

### Example 14.32.

|     |            |      |     |          |      |     |           |
| --- | ---------- | ---- | --- | -------- | ---- | --- | --------- |
| mi  | dotco      | .ija | mi  | ricfu    | .ija | mi  | nanmu     |
| I   | am-German. | Or   | I   | am-rich. | Or   | I   | am-a-man. |



means that one or more of the component sentences is true.

O, however, is different. Working out the truth table for

### Example 14.33.

|     |            |                |     |          |                |     |           |
| --- | ---------- | -------------- | --- | -------- | -------------- | --- | --------- |
| mi  | dotco      | .ijo           | mi  | ricfu    | .ijo           | mi  | nanmu     |
| I   | am-German. | If-and-only-if | I   | am-rich. | If-and-only-if | I   | am-a-man. |



shows that [Example 14.33](chapter14#example-random-id-3zE1 "Example 14.33. ") does not mean that either I am all three of these things or none of them; instead, an accurate translation would be:

> Of the three properties – German-ness, wealth, and manhood – I possess either exactly one or else all three.

Because of the counterintuitiveness of this outcome, it is safest to avoid O with more than two sentences. Likewise, the connectives which involve negation also have unexpected truth values when used with more than two sentences.

In fact, no combination of logical connectives can produce the “all or none” interpretation intended (but not achieved) by [Example 14.33](chapter14#example-random-id-3zE1 "Example 14.33. ") without repeating one of the bridi. See [Example 14.48](chapter14#example-random-id-KyHw "Example 14.48. ").

There is an additional difficulty with the use of more than two sentences. What is the meaning of:

### Example 14.34.

|     |       |            |       |      |     |       |            |         |
| --- | ----- | ---------- | ----- | ---- | --- | ----- | ---------- | ------- |
| mi  | nelci | la         | djan. | .ije | mi  | nelci | la         | martas. |
| I   | like  | that-named | John. | And  | I   | like  | that-named | Martha. |

|      |     |       |            |        |
| ---- | --- | ----- | ---------- | ------ |
| .ija | mi  | nelci | la         | meris. |
| Or   | I   | like  | that-named | Mary.  |



Does this mean:

### Example 14.35.

I like John, and I like either Martha or Mary or both.



Or is the correct translation:

### Example 14.36.

Either I like John and I like Martha, or I like Mary, or both.



[Example 14.36](chapter14#example-random-id-dPcI "Example 14.36. ") is the correct translation of [Example 14.34](chapter14#example-random-id-mLo1 "Example 14.34. "). The reason is that Lojban logical connectives pair off from the left, like many constructs in the language. This rule, called the left-grouping rule, is easy to forget, especially when intuition pulls the other way. Forethought connectives are not subject to this problem:

### Example 14.37.

|        |       |     |       |            |       |
| ------ | ----- | --- | ----- | ---------- | ----- |
| ga     | ge    | mi  | nelci | la         | djan. |
| Either | (Both | I   | like  | that-named | John  |

|     |     |       |            |         |
| --- | --- | ----- | ---------- | ------- |
| gi  | mi  | nelci | la         | martas. |
| and | I   | like  | that-named | Martha) |

|     |     |       |            |        |
| --- | --- | ----- | ---------- | ------ |
| gi  | mi  | nelci | la         | meris. |
| or  | I   | like  | that-named | Mary.  |



is equivalent in meaning to [Example 14.34](chapter14#example-random-id-mLo1 "Example 14.34. "), whereas

### Example 14.38.

|      |     |       |            |       |
| ---- | --- | ----- | ---------- | ----- |
| ge   | mi  | nelci | la         | djan. |
| Both | I   | like  | that-named | John  |

|     |         |     |       |            |         |
| --- | ------- | --- | ----- | ---------- | ------- |
| gi  | ga      | mi  | nelci | la         | martas. |
| and | (Either | I   | like  | that-named | Martha  |

|     |     |       |            |        |
| --- | --- | ----- | ---------- | ------ |
| gi  | mi  | nelci | la         | meris. |
| or  | I   | like  | that-named | Mary). |



is not equivalent to [Example 14.34](chapter14#example-random-id-mLo1 "Example 14.34. "), but is instead a valid translation into Lojban, using forethought, of [Example 14.35](chapter14#example-random-id-BSuT "Example 14.35. ").

## Grouping of afterthought connectives

There are several ways in Lojban to render [Example 14.35](chapter14#example-random-id-BSuT "Example 14.35. ") using afterthought only. The simplest method is to make use of the cmavo _[bo](glossary#valsi-bo)_ (of selma'o BO). This cmavo has several functions in Lojban, but is always associated with high precedence and short scope. In particular, if _[bo](glossary#valsi-bo)_ is placed after an ijek, the result is a grammatically distinct kind of ijek which overrides the regular left-grouping rule. Connections marked with _[bo](glossary#valsi-bo)_ are interpreted before connections not so marked. [Example 14.39](chapter14#example-random-id-Uu7D "Example 14.39. ") is equivalent in meaning to [Example 14.38](chapter14#example-random-id-1Dd2 "Example 14.38. "):

### Example 14.39.

|     |       |            |       |      |     |       |            |         |
| --- | ----- | ---------- | ----- | ---- | --- | ----- | ---------- | ------- |
| mi  | nelci | la         | djan. | .ije | mi  | nelci | la         | martas. |
| I   | like  | that-named | John, | and  | I   | like  | that-named | Martha  |

|        |     |       |            |        |
| ------ | --- | ----- | ---------- | ------ |
| .ijabo | mi  | nelci | la         | meris. |
| or     | I   | like  | that-named | Mary.  |



The English translation feebly indicates with a comma what the Lojban marks far more clearly: the “I like Martha” and “I like Mary” sentences are joined by _[ja](glossary#valsi-ja)_ first, before the result is joined to “I like John” by _[je](glossary#valsi-je)_.

Eks can have _[bo](glossary#valsi-bo)_ attached in exactly the same way, so that [Example 14.40](chapter14#example-random-id-JVhK "Example 14.40. ") is equivalent in meaning to [Example 14.39](chapter14#example-random-id-Uu7D "Example 14.39. "):

### Example 14.40.

mi nelci la djan. .e la martas. .abo la meris.



Forethought connectives, however, never can be suffixed with _[bo](glossary#valsi-bo)_, for every use of forethought connectives clearly indicates the intended pattern of grouping.

What happens if _[bo](glossary#valsi-bo)_ is used on both connectives, giving them the same high precedence, as in [Example 14.41](chapter14#example-random-id-YJeE "Example 14.41. ")?

### Example 14.41.

mi nelci la djan. .ebo la martas. .abo la meris.



Does this wind up meaning the same as [Example 14.34](chapter14#example-random-id-mLo1 "Example 14.34. ") and [Example 14.36](chapter14#example-random-id-dPcI "Example 14.36. ")? Not at all. A second rule relating to _[bo](glossary#valsi-bo)_ is that where several _[bo](glossary#valsi-bo)_-marked connectives are used in succession, the normal Lojban left-grouping rule is replaced by a right-grouping rule. As a result, [Example 14.41](chapter14#example-random-id-YJeE "Example 14.41. ") in fact means the same as [Example 14.39](chapter14#example-random-id-Uu7D "Example 14.39. ") and [Example 14.40](chapter14#example-random-id-JVhK "Example 14.40. "). This rule may be occasionally exploited for special effects, but is tricky to keep straight; in writing intended to be easy to understand, multiple consecutive connectives marked with _[bo](glossary#valsi-bo)_ should be avoided.

The use of _[bo](glossary#valsi-bo)_, therefore, gets tricky in complex connections of more than three sentences. Looking back at the English translations of [Example 14.37](chapter14#example-random-id-487z "Example 14.37. ") and [Example 14.38](chapter14#example-random-id-1Dd2 "Example 14.38. "), parentheses were used to clarify the grouping. These parentheses have their Lojban equivalents, two sets of them actually. _[tu'e](glossary#valsi-tuhe)_ and _[tu'u](glossary#valsi-tuhu)_ are used with ijeks, and _[ke](glossary#valsi-ke)_ and _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_ are also used in other roles in the language, but always as grouping markers). Consider the English sentence:

### Example 14.42.

I kiss you and you kiss me, if I love you and you love me.



where the semantics tells us that the instances of “and” are meant to have higher precedence than that of “if”. If we wish to express [Example 14.42](chapter14#example-random-id-aqIg "Example 14.42. ") in afterthought, we can say:

### Example 14.43.

|     |       |     |           |     |       |     |
| --- | ----- | --- | --------- | --- | ----- | --- |
| mi  | cinba | do  | .ije\[bo] | do  | cinba | mi  |
| I   | kiss  | you | and       | you | kiss  | me, |

|         |     |       |     |        |     |       |     |
| ------- | --- | ----- | --- | ------ | --- | ----- | --- |
| .ijanai | mi  | prami | do  | .ijebo | do  | prami | mi  |
| if      | I   | love  | you | and    | you | love  | me. |



marking two of the ijeks with _[bo](glossary#valsi-bo)_ for high precedence. (The first _[bo](glossary#valsi-bo)_ is not strictly necessary, because of the left-grouping rule, and is shown here in brackets.)

But it may be clearer to use explicit parenthesis words and say:

### Example 14.44.

|      |     |       |     |      |     |       |     |      |
| ---- | --- | ----- | --- | ---- | --- | ----- | --- | ---- |
| tu'e | mi  | cinba | do  | .ije | do  | cinba | mi  | tu'u |
| (    | I   | kiss  | you | and  | you | kiss  | me  | )    |

|         |      |     |       |     |      |     |       |     |         |
| ------- | ---- | --- | ----- | --- | ---- | --- | ----- | --- | ------- |
| .ijanai | tu'e | mi  | prami | do  | .ije | do  | prami | mi  | \[tu'u] |
| if      | (    | I   | love  | you | and  | you | love  | me  | ).      |



where the _[tu'u](glossary#valsi-tuhu)_ pairs set off the structure. The cmavo _[tu'u](glossary#valsi-tuhu)_ is an elidable terminator, and its second occurrence in [Example 14.44](chapter14#example-random-id-erTb "Example 14.44. ") is bracketed, because all terminators may be elided at the end of a text.

In addition, parentheses are a general solution: multiple parentheses may be nested inside one another, and additional afterthought material may be added without upsetting the existing structure. Neither of these two advantages apply to _[bo](glossary#valsi-bo)_ grouping. In general, afterthought constructions trade generality for simplicity.

Because of the left-grouping rule, the first set of _[tu'u](glossary#valsi-tuhu)_ parentheses may actually be left off altogether, producing:

### Example 14.45.

|     |       |     |      |     |       |     |
| --- | ----- | --- | ---- | --- | ----- | --- |
| mi  | cinba | do  | .ije | do  | cinba | mi  |
| I   | kiss  | you | and  | you | kiss  | me  |

|         |      |     |       |     |      |     |       |     |         |
| ------- | ---- | --- | ----- | --- | ---- | --- | ----- | --- | ------- |
| .ijanai | tu'e | mi  | prami | do  | .ije | do  | prami | mi  | \[tu'u] |
| if      | (    | I   | love  | you | and  | you | love  | me  | ).      |



What about parenthesized sumti connection? Consider

### Example 14.46.

I walk to either the market and the house, or the school and the office.



Two pairs of parentheses, analogous to [Example 14.44](chapter14#example-random-id-erTb "Example 14.44. "), would seem to be the right approach. However, it is a rule of Lojban grammar that a sumti may not begin with _[ke](glossary#valsi-ke)_, so the first set of parentheses must be omitted, producing [Example 14.47](chapter14#example-random-id-0mJM "Example 14.47. "), which is instead parallel to [Example 14.45](chapter14#example-random-id-QGBz "Example 14.45. "):

### Example 14.47.

|     |         |     |        |     |     |       |
| --- | ------- | --- | ------ | --- | --- | ----- |
| mi  | dzukla  | le  | zarci  | .e  | le  | zdani |
| I   | walk-to | the | market | and | the | house |

|     |     |     |        |     |     |        |         |
| --- | --- | --- | ------ | --- | --- | ------ | ------- |
| .a  | ke  | le  | ckule  | .e  | le  | briju  | \[ke'e] |
| or  | (   | the | school | and | the | office | ).      |



If sumti were allowed to begin with _[ke](glossary#valsi-ke)_, unavoidable ambiguities would result, so _[ke](glossary#valsi-ke)_ grouping of sumti is allowed only just after a logical connective. This rule does not apply to _[tu'e](glossary#valsi-tuhe)_ grouping of bridi, as [Example 14.44](chapter14#example-random-id-erTb "Example 14.44. ") shows.

Now we have enough facilities to handle the problem of [Example 14.33](chapter14#example-random-id-3zE1 "Example 14.33. "): “I am German, rich, and a man – or else none of these.” The following paraphrase has the correct meaning:

### Example 14.48.

|         |     |           |                |     |         |         |
| ------- | --- | --------- | -------------- | --- | ------- | ------- |
| \[tu'e] | mi  | dotco     | .ijo           | mi  | ricfu   | \[tu'u] |
| (       | I   | am-German | if-and-only-if | I   | am-rich | )       |

|      |      |     |           |                |     |          |         |
| ---- | ---- | --- | --------- | -------------- | --- | -------- | ------- |
| .ije | tu'e | mi  | dotco     | .ijo           | mi  | nanmu    | \[tu'u] |
| and  | (    | I   | am-German | if-and-only-if | I   | am-a-man | ).      |



The truth table, when worked out, produces T if and only if all three component sentences are true or all three are false.

## Compound bridi

So far we have seen how to handle two sentences that need have no similarity at all (bridi connection) and sentences that are identical except for a difference in one sumti (sumti connection). It would seem natural to ask how to logically connect sentences that are identical except for having different selbri.

Surprise! Lojban provides no logical connective that is designed to handle selbri and nothing else. Instead, selbri connection is provided as part of a more general-purpose mechanism called “compound bridi”. Compound bridi result from logically connecting sentences that differ in their selbri and possibly some of their sumti.

The simplest cases result when the x1 sumti is the only common point:

### Example 14.49.

|     |       |     |         |      |     |       |            |       |
| --- | ----- | --- | ------- | ---- | --- | ----- | ---------- | ----- |
| mi  | klama | le  | zarci   | .ije | mi  | nelci | la         | djan. |
| I   | go-to | the | market, | and  | I   | like  | that-named | John. |



is equivalent in meaning to the compound bridi:

### Example 14.50.

|     |       |     |        |      |       |            |       |
| --- | ----- | --- | ------ | ---- | ----- | ---------- | ----- |
| mi  | klama | le  | zarci  | gi'e | nelci | la         | djan. |
| I   | go-to | the | market | and  | like  | that-named | John. |



As [Example 14.50](chapter14#example-random-id-9H9e "Example 14.50. ") indicates, giheks are used in afterthought to create compound bridi; _[gi'e](glossary#valsi-gihe)_ is the gihek corresponding to “and”. The actual phrases _klama le zarci_ and _nelci la djan._ that the gihek connects are known as “bridi-tails”, because they represent (in this use) the “tail end” of a bridi, including the selbri and any following sumti, but excluding any sumti that precede the selbri:

### Example 14.51.

|     |         |      |       |     |         |
| --- | ------- | ---- | ----- | --- | ------- |
| mi  | ricfu   | gi'e | klama | le  | zarci   |
| I   | am-rich | and  | go-to | the | market. |



In [Example 14.51](chapter14#example-random-id-F3RE "Example 14.51. "), the first bridi-tail is _[ricfu](glossary#valsi-ricfu)_, a simple selbri, and the second bridi-tail is _klama le zarci_, a selbri with one following sumti.

Suppose that more than a single sumti is identical between the two sentences:

### Example 14.52.

|     |       |     |       |         |      |     |       |      |                |           |
| --- | ----- | --- | ----- | ------- | ---- | --- | ----- | ---- | -------------- | --------- |
| mi  | dunda | le  | cukta | do      | .ije | mi  | lebna | lo   | rupnu          | do        |
| I   | give  | the | book  | to-you, | and  | I   | take  | some | currency-units | from-you. |



In [Example 14.52](chapter14#example-random-id-PRxj "Example 14.52. "), the first and last sumti of each bridi are identical; the selbri and the second sumti are different. By moving the final sumti to the beginning, a form analogous to [Example 14.50](chapter14#example-random-id-9H9e "Example 14.50. ") can be achieved:

### Example 14.53.

|         |     |     |     |       |     |       |
| ------- | --- | --- | --- | ----- | --- | ----- |
| fi      | do  | fa  | mi  | dunda | le  | cukta |
| to/from | you |     | I   | give  | the | book  |

|      |       |      |                 |
| ---- | ----- | ---- | --------------- |
| gi'e | lebna | lo   | rupnu           |
| and  | take  | some | currency-units. |



where the _[fi](glossary#valsi-fi)_ does not have an exact English translation because it merely places _[do](glossary#valsi-do)_ in the third place of both _[lebna](glossary#valsi-lebna)_ and _[dunda](glossary#valsi-dunda)_. However, a form that preserves natural sumti order also exists in Lojban. Giheks connect two bridi-tails, but also allow sumti to be added following the bridi-tail. These sumti are known as tail-terms, and apply to both bridi. The straightforward gihek version of [Example 14.52](chapter14#example-random-id-PRxj "Example 14.52. ") therefore is:

### Example 14.54.

|     |       |     |       |      |       |      |                 |     |              |
| --- | ----- | --- | ----- | ---- | ----- | ---- | --------------- | --- | ------------ |
| mi  | dunda | le  | cukta | gi'e | lebna | lo   | rupnu           | vau | do           |
| I   | (give | the | book) | and  | (take | some | currency-units) |     | to/from-you. |



The _[vau](glossary#valsi-vau)_ (of selma'o VAU) serves to separate the bridi-tail from the tail-terms. Every bridi-tail is terminated by an elidable _[vau](glossary#valsi-vau)_, but only in connection with compound bridi is it ever necessary to express this _[vau](glossary#valsi-vau)_. Thus:

### Example 14.55.

|     |       |     |         |        |
| --- | ----- | --- | ------- | ------ |
| mi  | klama | le  | zarci   | \[vau] |
| I   | go-to | the | market. |        |



has a single elided _[vau](glossary#valsi-vau)_, and [Example 14.50](chapter14#example-random-id-9H9e "Example 14.50. ") is equivalent to:

### Example 14.56.

mi klama le zarci \[vau] gi'e nelci la djan. \[vau] \[vau]



where the double _[vau](glossary#valsi-vau)_ at the end of [Example 14.56](chapter14#example-random-id-RfIR "Example 14.56. ") terminates both the right-hand bridi-tail and the unexpressed tail-terms.

A final use of giheks is to combine bridi-tails used as complete sentences, the Lojban observative:

### Example 14.57.

|        |        |        |      |          |        |         |
| ------ | ------ | ------ | ---- | -------- | ------ | ------- |
| klama  | le     | zarci  | gi'e | dzukla   | le     | briju   |
| A-goer | to-the | market | and  | a-walker | to-the | office. |



Since x1 is omitted in both of the bridi underlying [Example 14.57](chapter14#example-random-id-rvUD "Example 14.57. "), this compound bridi does not necessarily imply that the goer and the walker are the same. Only the presence of an explicit x1 (other than _[zo'e](glossary#valsi-zohe)_, which is equivalent to omission) can force the goer and the walker to be identical.

A strong argument for this convention is provided by analysis of the following example:

### Example 14.58.

|        |               |          |
| ------ | ------------- | -------- |
| klama  | la            | nu,IORK. |
| A-goer | to-that-named | New-York |

|                 |         |
| --------------- | ------- |
| la              | finyks. |
| from-that-named | Phoenix |

|      |        |               |          |
| ---- | ------ | ------------- | -------- |
| gi'e | klama  | la            | nu,IORK. |
| and  | a-goer | to-that-named | New-York |

|                 |       |
| --------------- | ----- |
| la              | rom.  |
| from-that-named | Rome. |



If the rule were that the x1 places of the two underlying bridi were considered identical, then (since there is nothing special about x1), the unspecified x4 (route) and x5 (means) places would also have to be the same, leading to the absurd result that the route from Phoenix to New York is the same as the route from Rome to New York. Inserting _[da](glossary#valsi-da)_, meaning roughly “something”, into the x1 place cures the problem:

### Example 14.59.

|           |           |               |          |                 |         |
| --------- | --------- | ------------- | -------- | --------------- | ------- |
| da        | klama     | la            | nu,IORK. | la              | finyks. |
| Something | is-a-goer | to-that-named | New-York | from-that-named | Phoenix |

|      |           |               |          |                 |       |
| ---- | --------- | ------------- | -------- | --------------- | ----- |
| gi'e | klama     | la            | nu,IORK. | la              | rom.  |
| and  | is-a-goer | to-that-named | New-York | from-that-named | Rome. |



The syntax of giheks is:

> \[na] \[se] GIhA \[nai]

which is exactly parallel to the syntax of eks.

## Multiple compound bridi

Giheks can be combined with _[bo](glossary#valsi-bo)_ in the same way as eks:

### Example 14.60.

|     |       |     |       |      |       |     |         |        |       |     |        |
| --- | ----- | --- | ----- | ---- | ----- | --- | ------- | ------ | ----- | --- | ------ |
| mi  | nelci | la  | djan. | gi'e | nelci | la  | martas. | gi'abo | nelci | la  | meris. |

|                                               |
| --------------------------------------------- |
| I like John and ( like Martha or like Mary ). |



is equivalent in meaning to [Example 14.39](chapter14#example-random-id-Uu7D "Example 14.39. ") and [Example 14.40](chapter14#example-random-id-JVhK "Example 14.40. "). Likewise, _[ke'e](glossary#valsi-kehe)_ grouping can be used after giheks:

### Example 14.61.

|     |         |     |        |
| --- | ------- | --- | ------ |
| mi  | dzukla  | le  | zarci  |
| I   | walk-to | the | market |

|      |         |     |        |
| ---- | ------- | --- | ------ |
| gi'e | dzukla  | le  | zdani  |
| and  | walk-to | the | house, |

|      |     |         |     |        |
| ---- | --- | ------- | --- | ------ |
| gi'a | ke  | dzukla  | le  | ckule  |
| or   | (   | walk-to | the | school |

|      |         |     |         |         |
| ---- | ------- | --- | ------- | ------- |
| gi'e | dzukla  | le  | briju   | \[ke'e] |
| and  | walk-to | the | office. | )       |



is the gihek version of [Example 14.47](chapter14#example-random-id-0mJM "Example 14.47. "). The same rule about using _[ke'e](glossary#valsi-kehe)_ bracketing only just after a connective applies to bridi-tails as to sumti, so the first two bridi-tails in [Example 14.61](chapter14#example-random-id-rH4n "Example 14.61. ") cannot be explicitly grouped; implicit left-grouping suffices to associate them.

Each of the pairs of bridi-tails joined by multiple giheks can have its own set of tail-terms:

### Example 14.62.

|       |     |       |      |                |               |       |
| ----- | --- | ----- | ---- | -------------- | ------------- | ----- |
|       | mi  | dejni | lo   | rupnu          | la            | djan. |
| \[If] | I   | owe   | some | currency-units | to-that-named | John, |

|        |     |       |     |       |               |       |
| ------ | --- | ----- | --- | ----- | ------------- | ----- |
| .inaja | mi  | dunda | le  | cukta | la            | djan. |
| then   | I   | give  | the | book  | to-that-named | John  |

|        |     |       |     |       |                 |       |
| ------ | --- | ----- | --- | ----- | --------------- | ----- |
| .ijabo | mi  | lebna | le  | cukta | la              | djan. |
| or     | I   | take  | the | book  | from-that-named | John. |



is equivalent in meaning to:

### Example 14.63.

|       |     |       |      |                |        |       |
| ----- | --- | ----- | ---- | -------------- | ------ | ----- |
|       | mi  | dejni | lo   | rupnu          | nagi'a | dunda |
| \[If] | I   | owe   | some | currency-units | then   | (give |

|        |       |     |     |       |     |                    |       |
| ------ | ----- | --- | --- | ----- | --- | ------------------ | ----- |
| gi'abo | lebna | vau | le  | cukta | vau | la                 | djan. |
| or     | take) |     | a   | book  |     | to/from-that-named | John. |



The literal English translation in [Example 14.63](chapter14#example-random-id-901t "Example 14.63. ") is almost unintelligible, but the Lojban is perfectly grammatical. _[mi](glossary#valsi-mi)_ fills the x1 place of all three selbri; _lo rupnu_ is the x2 of _[dejni](glossary#valsi-dejni)_, whereas _le cukta_ is a tail-term shared between _[dunda](glossary#valsi-dunda)_ and _[lebna](glossary#valsi-lebna)_; _la djan._ is a tail-term shared by _[dejni](glossary#valsi-dejni)_ and by _dunda gi'abo lebna_. In this case, greater clarity is probably achieved by moving _la djan._ to the beginning of the sentence, as in [Example 14.53](chapter14#example-random-id-Evo4 "Example 14.53. "):

### Example 14.64.

|         |            |       |       |     |     |       |      |                |
| ------- | ---------- | ----- | ----- | --- | --- | ----- | ---- | -------------- |
| fi      | la         | djan. |       | fa  | mi  | dejni | lo   | rupnu          |
| To/from | that-named | John, | \[if] |     | I   | owe   | some | currency-units |

|        |      |       |        |       |     |     |       |
| ------ | ---- | ----- | ------ | ----- | --- | --- | ----- |
| nagi'a |      | dunda | gi'abo | lebna | vau | le  | cukta |
| then   | \[I] | give  | or     | take  |     | the | book. |



Finally, what about forethought logical connection of bridi-tails? There is no direct mechanism for the purpose. Instead, Lojban grammar allows a pair of forethought-connected sentences to function as a single bridi-tail, and of course the sentences need not have terms before their selbri. For example:

### Example 14.65.

|     |      |       |     |        |     |       |            |       |
| --- | ---- | ----- | --- | ------ | --- | ----- | ---------- | ----- |
| mi  | ge   | klama | le  | zarci  | gi  | nelci | la         | djan. |
| I   | both | go-to | the | market | and | like  | that-named | John. |



is equivalent in meaning to [Example 14.50](chapter14#example-random-id-9H9e "Example 14.50. ").

Of course, either of the connected sentences may contain giheks:

### Example 14.66.

|     |      |       |        |        |      |        |        |        |
| --- | ---- | ----- | ------ | ------ | ---- | ------ | ------ | ------ |
| mi  | ge   | klama | le     | zarci  | gi'e | dzukla | le     | zdani  |
| I   | both | (go   | to-the | market | and  | walk   | to-the | house) |

|     |       |            |       |
| --- | ----- | ---------- | ----- |
| gi  | nelci | la         | djan. |
| and | like  | that-named | John. |



The entire gek-connected sentence pair may be negated as a whole by prefixing _[na](glossary#valsi-na)_:

### Example 14.67.

|           |     |     |      |       |     |        |     |         |     |        |
| --------- | --- | --- | ---- | ----- | --- | ------ | --- | ------- | --- | ------ |
|           | mi  | na  | ge   | klama | le  | zarci  | gi  | dzukla  | le  | zdani  |
| \[False!] | I   |     | both | go-to | the | market | and | walk-to | the | house. |



Since a pair of sentences joined by geks is the equivalent of a bridi-tail, it may be followed by tail terms. The forethought equivalent of [Example 14.54](chapter14#example-random-id-DYBN "Example 14.54. ") is:

### Example 14.68.

|     |      |       |     |       |
| --- | ---- | ----- | --- | ----- |
| mi  | ge   | dunda | le  | cukta |
| I   | both | (give | the | book) |

|     |       |      |                |     |              |
| --- | ----- | ---- | -------------- | --- | ------------ |
| gi  | lebna | lo   | rupnu          | vau | do           |
| and | (take | some | currency-units | )   | to/from-you. |



Here is a pair of gek-connected observatives, a forethought equivalent of [Example 14.57](chapter14#example-random-id-rvUD "Example 14.57. "):

### Example 14.69.

|      |        |        |        |     |          |        |         |
| ---- | ------ | ------ | ------ | --- | -------- | ------ | ------- |
| ge   | klama  | le     | zarci  | gi  | dzukla   | le     | briju   |
| Both | a-goer | to-the | market | and | a-walker | to-the | office. |



Finally, here is an example of gek-connected sentences with both shared and unshared terms before their selbri:

### Example 14.70.

|     |                     |        |        |     |       |     |        |       |     |        |
| --- | ------------------- | ------ | ------ | --- | ----- | --- | ------ | ----- | --- | ------ |
| mi  | gonai               | le     | zarci  | cu  | klama | gi  | le     | bisli | cu  | dansu  |
| I   | either-but-not-both | to-the | office |     | go    | or  | on-the | ice   |     | dance. |

|                                                               |
| ------------------------------------------------------------- |
| I either go to the office or dance on the ice (but not both). |



## Termset logical connection

So far we have seen sentences that differ in all components, and require bridi connection; sentences that differ in one sumti only, and permit sumti connection; and sentences that differ in the selbri and possibly one or more sumti, and permit bridi-tail connection. Termset logical connectives are employed for sentences that differ in more than one sumti but not in the selbri, such as:

### Example 14.71.

I go to the market from the office and to the house from the school.



The Lojban version of [Example 14.71](chapter14#example-random-id-G02C "Example 14.71. ") requires two termsets joined by a logical connective. A “term” is either a sumti or a sumti preceded by a tense or modal tag such as _[pu](glossary#valsi-pu)_ or _[bai](glossary#valsi-bai)_. Afterthought termsets are formed by linking terms together by inserting the cmavo _[ce'e](glossary#valsi-cehe)_ (of selma'o CEhE) between each of them. Furthermore, the logical connective (which is a jek) must be prefixed by the cmavo _[pe'e](glossary#valsi-pehe)_ (of selma'o PEhE). (We could refer to the combination of _[pe'e](glossary#valsi-pehe)_ and a jek as a “pehejek”, I suppose.)

### Example 14.72.

|     |       |        |        |         |          |        |
| --- | ----- | ------ | ------ | ------- | -------- | ------ |
| mi  | klama | le     | zarci  | ce'e    | le       | briju  |
| I   | go    | to-the | market | \[plus] | from-the | office |

|          |     |        |       |         |          |         |
| -------- | --- | ------ | ----- | ------- | -------- | ------- |
| pe'e     | je  | le     | zdani | ce'e    | le       | ckule   |
| \[joint] | and | to-the | house | \[plus] | from-the | school. |



The literal translation uses “\[plus]” to indicate the termset connective, and “\[joint]” to indicate the position of the logical connective joint. As usual, there is an equivalent bridi-connection form:

### Example 14.73.

|     |       |        |        |          |         |
| --- | ----- | ------ | ------ | -------- | ------- |
| mi  | klama | le     | zarci  | le       | briju   |
| I   | go    | to-the | market | from-the | office, |

|      |     |       |        |       |          |         |
| ---- | --- | ----- | ------ | ----- | -------- | ------- |
| .ije | mi  | klama | le     | zdani | le       | ckule   |
| and  | I   | go    | to-the | house | from-the | school. |



which illustrates that the two bridi differ in the x2 and x3 places only.

What happens if the two joined sets of terms are of unequal length? Expanding to bridi connection will always make clear which term goes in which place of which bridi. It can happen that a sumti may fall in the x2 place of one bridi and the x3 place of another:

### Example 14.74.

|     |          |     |     |         |        |        |     |       |             |         |
| --- | -------- | --- | --- | ------- | ------ | ------ | --- | ----- | ----------- | ------- |
| mi  | pe'e     | ja  | do  | ce'e    | le     | zarci  | cu  | klama | le          | briju   |
| I   | \[joint] | or  | you | \[plus] | to-the | market |     | go    | to/from-the | office. |



can be clearly understood by expansion to:

### Example 14.75.

|     |       |        |         |      |     |        |        |     |       |
| --- | ----- | ------ | ------- | ---- | --- | ------ | ------ | --- | ----- |
| mi  | klama | le     | briju   | .ija | do  | le     | zarci  | cu  | klama |
| I   | go    | to-the | office, | or   | you | to-the | market |     | go    |

|          |         |
| -------- | ------- |
| le       | briju   |
| from-the | office. |



So _le briju_ is your origin but my destination, and thus falls in the x2 and x3 places of _[klama](glossary#valsi-klama)_ simultaneously! This is legal because even though there is only one selbri, _[klama](glossary#valsi-klama)_, there are two distinct bridi expressed here. In addition, _[mi](glossary#valsi-mi)_ in [Example 14.74](chapter14#example-random-id-yYsr "Example 14.74. ") is serving as a termset containing only one term. An analogous paradox applies to compound bridi with tail-terms and unequal numbers of sumti within the connected bridi-tails:

### Example 14.76.

|     |     |       |        |        |      |        |     |             |         |
| --- | --- | ----- | ------ | ------ | ---- | ------ | --- | ----------- | ------- |
| mi  |     | klama | le     | zarci  | gi'e | dzukla | vau | le          | briju   |
| I   | (   | go    | to-the | market | and  | walk   | )   | to/from-the | office. |



means that I go to the market from the office, and I walk to the office; _le briju_ is the x3 place of _[klama](glossary#valsi-klama)_ and the x2 place of _[dzukla](glossary#valsi-dzukla)_.

Forethought termsets also exist, and use _[nu'i](glossary#valsi-nuhi)_ of selma'o NUhI to signal the beginning and _[nu'u](glossary#valsi-nuhu)_ of selma'o NUhU (an elidable terminator) to signal the end. Nothing is inserted between the individual terms: they simply sit side-by-side. To make a logical connection in a forethought termset, use a gek, with the gek just after the _[nu'i](glossary#valsi-nuhi)_, and an extra _[nu'u](glossary#valsi-nuhu)_ just before the gik:

### Example 14.77.

|     |       |                  |      |        |        |          |        |
| --- | ----- | ---------------- | ---- | ------ | ------ | -------- | ------ |
| mi  | klama | nu'i             | ge   | le     | zarci  | le       | briju  |
| I   | go    | \[start-termset] | both | to-the | market | from-the | office |

|          |     |        |       |          |        |                 |
| -------- | --- | ------ | ----- | -------- | ------ | --------------- |
| nu'u     | gi  | le     | zdani | le       | ckule  | \[nu'u]         |
| \[joint] | and | to-the | house | from-the | school | \[end-termset]. |



Note that even though two termsets are being connected, only one _[nu'i](glossary#valsi-nuhi)_ is used.

The grammatical uses of termsets that do not contain logical connectives are explained in [Section 9.8](chapter09#section-modal-connectives "9.8. Other modal connections"), [Section 10.25](chapter10#section-explicit-magnitudes "10.25. Explicit magnitudes"), and [Section 16.7](chapter16#section-quantifier-grouping "16.7. Grouping of quantifiers").

## Logical connection within tanru

As noted at the beginning of [Section 14.9](chapter14#section-compound-bridi "14.9. Compound bridi"), there is no logical connective in Lojban that joins selbri and nothing but selbri. However, it is possible to have logical connectives within a selbri, forming a kind of tanru that involves a logical connection. Consider the simple tanru _blanu zdani_, blue house. Now anything that is a blue ball, in the most ordinary understanding of the phrase at least, is both blue and a ball. And indeed, instead of _blanu bolci_, Lojbanists can say _blanu je bolci_, using a jek connective within the tanru. (We saw jeks used in [Section 14.11](chapter14#section-termsets "14.11. Termset logical connection") also, but there they were always prefixed by _[pe'e](glossary#valsi-pehe)_; in this section they are used alone.) Here is a pair of examples:

### Example 14.78.

|      |                   |        |
| ---- | ----------------- | ------ |
| ti   | blanu             | zdani  |
| This | is-a-blue-type-of | house. |



### Example 14.79.

|      |         |     |             |
| ---- | ------- | --- | ----------- |
| ti   | blanu   | je  | zdani       |
| This | is-blue | and | is-a-house. |



But of course [Example 14.78](chapter14#example-random-id-qGoH "Example 14.78. ") and [Example 14.79](chapter14#example-random-id-qgoW "Example 14.79. ") are not necessarily equivalent in meaning! It is the most elementary point about Lojban tanru that [Example 14.78](chapter14#example-random-id-qGoH "Example 14.78. ") might just as well mean

### Example 14.80.

This is a house for blue inhabitants.



and [Example 14.79](chapter14#example-random-id-qgoW "Example 14.79. ") certainly is not equivalent in meaning to [Example 14.80](chapter14#example-random-id-DxVB "Example 14.80. ").

A full explanation of logical connection within tanru belongs rather to a discussion of selbri structure than to logical connectives in general. Why? Because although [Example 14.79](chapter14#example-random-id-qgoW "Example 14.79. ") happens to mean the same as

### Example 14.81.

ti blanu gi'e zdani



and therefore as

### Example 14.82.

ti blanu .ije ti zdani



the rule of expansion into separate bridi simply does not always work for tanru connection. Supposing Alice to be a person who lives in blue houses, then

### Example 14.83.

|            |        |     |        |       |     |       |     |                 |
| ---------- | ------ | --- | ------ | ----- | --- | ----- | --- | --------------- |
| la         | .alis. | cu  |        | blanu | je  | zdani |     | prenu           |
| That-named | Alice  |     | is-a-( | blue  | and | house | )   | type-of-person. |



would be true, because tanru grouping with a jek has higher precedence than unmarked tanru grouping, but:

### Example 14.84.

|            |        |     |      |       |         |
| ---------- | ------ | --- | ---- | ----- | ------- |
| la         | .alis. | cu  |      | blanu | prenu   |
| That-named | Alice  |     | is-a | blue  | person, |

|      |            |        |     |      |       |         |
| ---- | ---------- | ------ | --- | ---- | ----- | ------- |
| .ije | la         | .alis. | cu  |      | zdani | prenu   |
| and  | that-named | Alice  |     | is-a | house | person. |



is probably false, because the blueness is associated with the house, not with Alice, even leaving aside the question of what it means to say “Alice is a blue person”. (Perhaps she belongs to the Blue team, or is wearing blue clothes.) The semantic ambiguity of tanru make such logical manipulations impossible.

It suffices to note here, then, a few purely grammatical points about tanru logical connection. _[bo](glossary#valsi-bo)_ may be appended to jeks as to eks, with the same rules:

### Example 14.85.

|            |        |     |         |     |       |      |          |
| ---------- | ------ | --- | ------- | --- | ----- | ---- | -------- |
| la         | teris. | cu  | ricfu   | je  | nakni | jabo | fetsi    |
| That-named | Terry  |     | is-rich | and | (male | or   | female). |



The components of tanru may be grouped with _[ke](glossary#valsi-ke)_ both before and after a logical connective:

### Example 14.86.

|            |         |     |       |         |     |         |         |
| ---------- | ------- | --- | ----- | ------- | --- | ------- | ------- |
| la         | .teris. | cu  | \[ke] | ricfu   | ja  | pindi   | \[ke'e] |
| That-named | Terry   |     | (     | is-rich | or  | is-poor | )       |

|     |     |       |     |        |         |
| --- | --- | ----- | --- | ------ | ------- |
| je  | ke  | nakni | ja  | fetsi  | \[ke'e] |
| and | (   | male  | or  | female | ).      |



where the first _[ke'e](glossary#valsi-kehe)_ pair may be omitted altogether by the rule of left-grouping, but is optionally permitted. In any case, the last instance of _[ke'e](glossary#valsi-kehe)_ may be elided.

The syntax of jeks is:

> \[na] \[se] JA \[nai]

parallel to eks and giheks.

> \[se] GUhA \[nai]

Using guheks in tanru connection (rather than geks) resolves what would otherwise be an unacceptable ambiguity between bridi-tail and tanru connection:

### Example 14.87.

|            |        |         |       |     |         |
| ---------- | ------ | ------- | ----- | --- | ------- |
| la         | .alis. | gu'e    | ricfu | gi  | fetsi   |
| That-named | Alice  | is-both | rich  | and | female. |



Note that giks are used with guheks in exactly the same way they are used with geks. Like jeks, guheks bind more closely than unmarked tanru grouping does:

### Example 14.88.

|            |        |            |       |     |          |                 |
| ---------- | ------ | ---------- | ----- | --- | -------- | --------------- |
| la         | .alis. | gu'e       | blanu | gi  | zdani    | prenu           |
| That-named | Alice  | is-a-(both | blue  | and | a-house) | type-of-person. |



is the forethought version of [Example 14.83](chapter14#example-random-id-DG5K "Example 14.83. ").

A word of caution about the use of logically connected tanru within descriptions. English-based intuition can lead the speaker astray. In correctly reducing

### Example 14.89.

|     |       |     |       |      |     |       |     |        |
| --- | ----- | --- | ----- | ---- | --- | ----- | --- | ------ |
| mi  | viska | pa  | nanmu | .ije | mi  | viska | pa  | ninmu  |
| I   | see   | a   | man,  | and  | I   | see   | a   | woman. |



to

### Example 14.90.

|     |       |     |       |     |     |        |
| --- | ----- | --- | ----- | --- | --- | ------ |
| mi  | viska | pa  | nanmu | .e  | pa  | ninmu  |
| I   | see   | a   | man   | and | a   | woman. |



there is a great temptation to reduce further to:

### Example 14.91.

|     |       |     |       |     |        |
| --- | ----- | --- | ----- | --- | ------ |
| mi  | viska | pa  | nanmu | je  | ninmu  |
| I   | see   | a   | man   | and | woman. |



But [Example 14.91](chapter14#example-random-id-ag8r "Example 14.91. ") means that you see one thing which is both a man and a woman simultaneously! A _nanmu je ninmu_ is a manwoman, a presumably non-existent creature who is both a _[nanmu](glossary#valsi-nanmu)_ and a _[ninmu](glossary#valsi-ninmu)_.

## Truth questions and connective questions

So far we have addressed only sentences which are statements. Lojban, like all human languages, needs also to deal with sentences which are questions. There are many ways of asking questions in Lojban, but some of these (like questions about quantity, tense, and emotion) are discussed in other chapters.

The simplest kind of question is of the type “Is it true that ...” where some statement follows. This type is called a “truth question”, and can be represented in English by [Example 14.92](chapter14#example-random-id-bMjE "Example 14.92. "):

### Example 14.92.

Is it true that Fido is a dog?

Is Fido a dog?



Note the two formulations. English truth questions can always be formed by prefixing “Is is true that” to the beginning of a statement; there is also usually a more idiomatic way involving putting the verb before its subject. “Is Fido a dog?” is the truth question corresponding to “Fido is a dog”. In Lojban, the equivalent mechanism is to prefix the cmavo _[xu](glossary#valsi-xu)_ (of selma'o UI) to the statement:

### Example 14.93.

|                 |            |         |           |
| --------------- | ---------- | ------- | --------- |
| xu              | la         | faidon. | gerku     |
| Is-it-true-that | that-named | Fido    | is-a-dog? |



[Example 14.92](chapter14#example-random-id-bMjE "Example 14.92. ") and [Example 14.93](chapter14#example-random-id-gKaM "Example 14.93. ") are equivalent in meaning.

A truth question can be answered “yes” or “no”, depending on the truth or falsity, respectively, of the underlying statement. The standard way of saying “yes” in Lojban is _[go'i](glossary#valsi-gohi)_ and of saying “no” is _[go'i](glossary#valsi-gohi)_. (The reasons for this rule are explained in [Section 7.6](chapter07#section-ri-gohi-series "7.6. Anaphoric pro-sumti and pro-bridi: the ri-series and the go'i-series").) In answer to [Example 14.93](chapter14#example-random-id-gKaM "Example 14.93. "), the possible answers are:

### Example 14.94.

|      |
| ---- |
| go'i |

|                |
| -------------- |
| Fido is a dog. |



and

### Example 14.95.

|        |
| ------ |
| nago'i |

|                    |
| ------------------ |
| Fido is not a dog. |



Some English questions seemingly have the same form as the truth questions so far discussed. Consider

### Example 14.96.

Is Fido a dog or a cat?



Superficially, [Example 14.96](chapter14#example-random-id-mftC "Example 14.96. ") seems like a truth question with the underlying statement:

### Example 14.97.

Fido is a dog or a cat.



By translating [Example 14.97](chapter14#example-random-id-n6Ec "Example 14.97. ") into Lojban and prefixing _[xu](glossary#valsi-xu)_ to signal a truth question, we get:

### Example 14.98.

|                 |            |         |          |         |          |                 |
| --------------- | ---------- | ------- | -------- | ------- | -------- | --------------- |
| xu              | la         | faidon. | gerku    | gi'onai | mlatu    |                 |
| Is-it-true-that | that-named | Fido    | is-a-dog | or      | is-a-cat | (but not both)? |



Given that Fido really is either a dog or a cat, the appropriate answer would be _[go'i](glossary#valsi-gohi)_; if Fido were a fish, the appropriate answer would be _[go'i](glossary#valsi-gohi)_.

But that is not what an English-speaker who utters [Example 14.96](chapter14#example-random-id-mftC "Example 14.96. ") is asking! The true significance of [Example 14.96](chapter14#example-random-id-mftC "Example 14.96. ") is that the speaker desires to know the truth value of either of the two underlying bridi (it is presupposed that only one is true).

Lojban has an elegant mechanism for rendering this kind of question which is very unlike that used in English. Instead of asking about the truth value of the connected bridi, Lojban users ask about the truth function which connects them. This is done by using a special question cmavo: there is one of these for each of the logical connective selma'o, as shown by the following table:

|      |      |                                       |
| ---- | ---- | ------------------------------------- |
| ge'i | GA   | forethought connective question       |
| gi'i | GIhA | bridi-tail connective question        |
| gu'i | GUhA | tanru forethought connective question |
| je'i | JA   | tanru connective question             |
| ji   | A    | sumti connective question             |

(This list unfortunately departs from the pretty regularity of the other cmavo for logical connection. The two-syllable selma'o, GIhA and GUhA, make use of the cmavo ending in “-i” which is not used for a truth function, but _[gi](glossary#valsi-gi)_ and _[i](glossary#valsi-i)_ were not available, and different cmavo had to be chosen. This table must simply be memorized, like most other non-connective cmavo assignments.)

One correct translation of [Example 14.96](chapter14#example-random-id-mftC "Example 14.96. ") employs a question gihek:

### Example 14.99.

|            |        |          |                    |           |
| ---------- | ------ | -------- | ------------------ | --------- |
| la         | .alis. | gerku    | gi'i               | mlatu     |
| That-named | Alice  | is-a-dog | \[truth-function?] | is-a-cat? |



Here are some plausible answers:

### Example 14.100.

|        |
| ------ |
| nagi'e |

|                                  |
| -------------------------------- |
| Alice is not a dog and is a cat. |



### Example 14.101.

|         |
| ------- |
| gi'enai |

|                                  |
| -------------------------------- |
| Alice is a dog and is not a cat. |



### Example 14.102.

|           |
| --------- |
| nagi'enai |

|                                      |
| ------------------------------------ |
| Alice is not a dog and is not a cat. |



### Example 14.103.

|         |
| ------- |
| nagi'o  |
| gi'onai |

|                                                                 |
| --------------------------------------------------------------- |
| Alice is a dog or is a cat but not both (I'm not saying which). |



[Example 14.103](chapter14#example-random-id-qGRz "Example 14.103. ") is correct but uncooperative.

As usual, Lojban questions are answered by filling in the blank left by the question. Here the blank is a logical connective, and therefore it is grammatical in Lojban to utter a bare logical connective without anything for it to connect.

The answer _[gi'e](glossary#valsi-gihe)_, meaning that Alice is a dog and is a cat, is impossible in the real world, but for:

### Example 14.104.

|     |        |                 |           |        |
| --- | ------ | --------------- | --------- | ------ |
| do  | djica  | tu'a            | loi       | ckafi  |
| You | desire | something-about | a-mass-of | coffee |

|                    |           |       |
| ------------------ | --------- | ----- |
| ji                 | loi       | tcati |
| \[truth-function?] | a-mass-of | tea?  |

|                            |
| -------------------------- |
| Do you want coffee or tea? |



the answer _[e](glossary#valsi-e)_, meaning that I want both, is perfectly plausible, if not necessarily polite.

The forethought questions _[ge'i](glossary#valsi-gehi)_ and _[gu'i](glossary#valsi-guhi)_ are used like the others, but ambiguity forbids the use of isolated forethought connectives as answers – they sound like the start of forethought-connected bridi. So although [Example 14.105](chapter14#example-random-id-286J "Example 14.105. ") is the forethought version of [Example 14.104](chapter14#example-random-id-xtIf "Example 14.104. "):

### Example 14.105.

|     |        |                 |                    |           |        |
| --- | ------ | --------------- | ------------------ | --------- | ------ |
| do  | djica  | tu'a            | ge'i               | loi       | ckafi  |
| You | desire | something-about | \[truth-function?] | a-mass-of | coffee |

|       |           |       |
| ----- | --------- | ----- |
| gi    | loi       | tcati |
| \[or] | a-mass-of | tea?  |



the answer must be in afterthought form.

There are natural languages, notably Chinese, which employ the Lojbanic form of connective question. The Chinese sentence

### Example 14.106.

|                         |
| ----------------------- |
| _ni3 zou3 hai2shi pao3_ |
| You walk \[or?] run?    |



means “Do you walk or run?”, and is exactly parallel to the Lojban:

### Example 14.107.

|     |       |        |       |
| --- | ----- | ------ | ----- |
| do  | cadzu | gi'i   | bajra |
| You | walk  | \[or?] | run?  |



However, Chinese does not use logical connectives in the reply to such a question, so the resemblance, though striking, is superficial.

Truth questions may be used in bridi connection. This form of sentence is perfectly legitimate, and can be interpreted by using the convention that a truth question is true if the answer is “yes” and false if the answer is _[no](glossary#valsi-no)_. Analogously, an imperative sentence (involving the special pro-sumti _[ko](glossary#valsi-ko)_, which means “you” but marks the sentence as a command) is true if the command is obeyed, and false otherwise. A request of Abraham Lincoln's may be translated thus:

### Example 14.108.

|       |      |           |      |         |       |           |       |        |
| ----- | ---- | --------- | ---- | ------- | ----- | --------- | ----- | ------ |
| ganai | ti   | ckafi     | gi   | ko      | bevri | loi       | tcati | mi     |
| If    | this | is-coffee | then | \[you!] | bring | a-mass-of | tea   | to-me, |

|      |       |      |        |      |         |       |           |        |        |
| ---- | ----- | ---- | ------ | ---- | ------- | ----- | --------- | ------ | ------ |
| .ije | ganai | ti   | tcati  | gi   | ko      | bevri | loi       | ckafi  | mi     |
| and  | if    | this | is-tea | then | \[you!] | bring | a-mass-of | coffee | to-me. |

|                                                                       |
| --------------------------------------------------------------------- |
| If this is coffee, bring me tea; but if this is tea, bring me coffee. |



In logical terms, however, “but” is the same as “and”; the difference is that the sentence after a “but” is felt to be in tension or opposition to the sentence before it. Lojban represents this distinction by adding the discursive cmavo _[ku'i](glossary#valsi-kuhi)_ (of selma'o UI), which is explained in [Section 13.12](chapter13#section-discursives "13.12. Discursives"), to the logical _[je](glossary#valsi-je)_.)

## Non-logical connectives

Way back in [Section 14.1](chapter14#section-connectives-introduction "14.1. Logical connection and truth tables"), the point was made that not every use of English “and”, “if ... then”, and so on represents a Lojban logical connective. In particular, consider the “and” of:

### Example 14.109.

John and Alice carried the piano.



Given the nature of pianos, this probably means that John carried one end and Alice the other. So it is not true that:

### Example 14.110.

John carried the piano, and Alice carried the piano.



which would mean that each of them carried the piano by himself/herself. Lojban deals with this particular linguistic phenomenon as a “mass”. John and Alice are joined together into a mass, John-and-Alice, and it is this mass which carried the piano, not either of them separately. The cmavo _[joi](glossary#valsi-joi)_ (of selma'o JOI) is used to join two or more components into a mass:

### Example 14.111.

|            |       |             |            |        |     |       |     |        |
| ---------- | ----- | ----------- | ---------- | ------ | --- | ----- | --- | ------ |
| la         | djan. | joi         | la         | .alis. | cu  | bevri | le  | pipno  |
| That-named | John  | massed-with | that-named | Alice  |     | carry | the | piano. |



[Example 14.111](chapter14#example-random-id-pC5x "Example 14.111. ") covers the case mentioned, where John and Alice divide the labor; it also could mean that John did all the hauling and Alice did the supervising. This possibility arises because the properties of a mass are the properties of its components, which can lead to apparent contradictions: if John is small and Alice is large, then John-and-Alice is both small and large. Masses are also discussed in [Section 6.3](chapter06#section-masses "6.3. Individuals and masses").

Grammatically, _[joi](glossary#valsi-joi)_ can appear between two sumti (like an ek) or between two tanru components (like a jek). This flexibility must be paid for in the form of occasional terminators that cannot be elided:

### Example 14.112.

|     |       |     |             |     |       |       |     |       |     |         |
| --- | ----- | --- | ----------- | --- | ----- | ----- | --- | ----- | --- | ------- |
| le  | nanmu | ku  | joi         | le  | ninmu | \[ku] | cu  | klama | le  | zarci   |
| The | man   |     | massed-with | the | woman |       |     | go-to | the | market. |



The cmavo _[ku](glossary#valsi-ku)_ is the elidable terminator for _[le](glossary#valsi-le)_, which can almost always be elided, but not in this case. If the first _[ku](glossary#valsi-ku)_ were elided here, Lojban's parsing rules would see _le nanmu joi_ and assume that another tanru component is to follow; since the second _[le](glossary#valsi-le)_ cannot be part of a tanru, a parsing error results. No such problem can occur with logical connectives, because an ek signals a following sumti and a jek a following tanru component unambiguously.

Single or compound cmavo involving members of selma'o JOI are called joiks, by analogy with the names for logical connectives. It is not grammatical to use joiks to connect bridi-tails.

In tanru, _[joi](glossary#valsi-joi)_ has the connotation “mixed with”, as in the following example:

### Example 14.113.

|      |            |            |       |       |
| ---- | ---------- | ---------- | ----- | ----- |
| ti   | blanu      | joi        | xunre | bolci |
| This | is-a-(blue | mixed-with | red)  | ball. |

|                              |
| ---------------------------- |
| This is a blue and red ball. |



Here the ball is neither wholly blue nor wholly red, but partly blue and partly red. Its blue/redness is a mass property. (Just how blue something has to be to count as “wholly blue” is an unsettled question, though. A _blanu zdani_ may be so even though not every part of it is blue.)

There are several other cmavo in selma'o JOI which can be used in the same grammatical constructions. Not all of them are well-defined as yet in all contexts. All have clear definitions as sumti connectives; those definitions are shown in the following table:

|                                    |                                             |
| ---------------------------------- | ------------------------------------------- |
| A _[joi](glossary#valsi-joi)_ B   | the mass with components A and B            |
| A _[ce](glossary#valsi-ce)_ B     | the set with elements A and B               |
| A _[ce'o](glossary#valsi-ceho)_ B | the sequence with elements A and B in order |
| A _[ce'o](glossary#valsi-ceho)_ B | the sequence with elements B and A in order |
| A _[jo'u](glossary#valsi-johu)_ B | A and B considered jointly                  |
| A _[fa'u](glossary#valsi-fahu)_ B | A and B respectively                        |
| A _[fa'u](glossary#valsi-fahu)_ B | B and A respectively                        |
| A _[jo'e](glossary#valsi-johe)_ B | the union of sets A and B                   |
| A _[ku'a](glossary#valsi-kuha)_ B | the intersection of sets A and B            |
| A _[pi'u](glossary#valsi-pihu)_ B | the cross product of sets A and B           |
| A _[pi'u](glossary#valsi-pihu)_ B | the cross product of sets B and A           |

The cmavo _[se](glossary#valsi-se)_ is grammatical before any JOI cmavo, but only useful with those that have inherent order. Here are some examples of joiks:

### Example 14.114.

|     |        |            |        |                 |        |
| --- | ------ | ---------- | ------ | --------------- | ------ |
| mi  | cuxna  | la         | .alis. | la              | frank. |
| I   | choose | that-named | Alice  | from-that-named | Frank  |

|            |            |        |            |            |          |
| ---------- | ---------- | ------ | ---------- | ---------- | -------- |
| ce         | la         | .alis. | ce         | la         | djeimyz. |
| and-member | that-named | Alice  | and-member | that-named | James.   |

|                                                    |
| -------------------------------------------------- |
| I choose Alice from among Frank, Alice, and James. |



The x3 place of _[cuxna](glossary#valsi-cuxna)_ is a set from which the choice is being made. A set is an abstract object which is determined by specifying its members. Unlike those of a mass, the properties of a set are unrelated to its members' properties: the set of all rats is large (since many rats exist), but the rats themselves are small. This chapter does not attempt to explain set theory (the mathematical study of sets) in detail: explaining propositional logic is quite enough for one chapter!

In [Example 14.114](chapter14#example-random-id-cwG8 "Example 14.114. ") we specify that set by listing the members with _[ce](glossary#valsi-ce)_ joining them.

### Example 14.115.

|      |              |     |              |     |              |            |       |
| ---- | ------------ | --- | ------------ | --- | ------------ | ---------- | ----- |
| ti   | liste        | mi  | ce'o         | do  | ce'o         | la         | djan. |
| This | is-a-list-of | me  | and-sequence | you | and-sequence | that-named | John. |

|                                      |
| ------------------------------------ |
| This is a list of you, me, and John. |



The x2 place of _[liste](glossary#valsi-liste)_ is a sequence of the things which are mentioned in the list. (It is worth pointing out that _lo liste_ means a physical object such as a grocery list: a purely abstract list is _lo porsi_, a sequence.) Here the three sumti connected by _[ce'o](glossary#valsi-ceho)_ are in a definite order, not just lumped together in a set or a mass.

So _[joi](glossary#valsi-joi)_, _[ce](glossary#valsi-ce)_, and _[ce'o](glossary#valsi-ceho)_ are parallel, in that the sumti connected are taken to be individuals, and the result is something else: a mass, a set, or a sequence respectively. The cmavo _[jo'u](glossary#valsi-johu)_ serves as a fourth element in this pattern: the sumti connected are individuals, and the result is still individuals – but inseparably so. The normal Lojban way of saying that James and George are brothers is:

### Example 14.116.

|            |          |                   |            |         |
| ---------- | -------- | ----------------- | ---------- | ------- |
| la         | djeimyz. | bruna             | la         | djordj. |
| That-named | James    | is-the-brother-of | that-named | George. |



possibly adding a discursive element meaning “and vice versa”. However, “James and George are brothers” cannot be correctly translated as:

### Example 14.117.

|            |          |     |            |         |               |
| ---------- | -------- | --- | ---------- | ------- | ------------- |
| la         | djeimyz. | .e  | la         | djordj. | bruna         |
| That-named | James    | and | that-named | George  | is-a-brother. |



since that expands to two bridi and means that James is a brother and so is George, but not necessarily of each other. If the _[e](glossary#valsi-e)_ is changed to _[jo'u](glossary#valsi-johu)_, however, the meaning of [Example 14.116](chapter14#example-random-id-sy2V "Example 14.116. ") is preserved:

### Example 14.118.

|            |          |                |            |
| ---------- | -------- | -------------- | ---------- |
| la         | djeimyz. | jo'u           |            |
| That-named | James    | in-common-with | that-named |

|        |         |               |                   |       |
| ------ | ------- | ------------- | ----------------- | ----- |
| la     | djordj. | cu            | remei             | bruna |
| George |         | are-a-twosome | type-of-brothers. |       |



The tanru _remei bruna_ is not strictly necessary in this sentence, but is used to make clear that we are not saying that James and George are both brothers of some third person not specified. Alternatively, we could turn the tanru around: the x1 place of _[mei](glossary#valsi-mei)_ is a mass with two components, leading to:

### Example 14.119.

|            |          |             |
| ---------- | -------- | ----------- |
| la         | djeimyz. | joi         |
| That-named | James    | massed-with |

|            |         |     |               |                  |
| ---------- | ------- | --- | ------------- | ---------------- |
| la         | djordj. | cu  | bruna         | remei            |
| that-named | George  |     | are-a-brother | type-of-twosome. |



where _[joi](glossary#valsi-joi)_ is used to create the necessary mass.

Likewise, _[fa'u](glossary#valsi-fahu)_ can be used to put two individuals together where order matters. Typically, there will be another _[fa'u](glossary#valsi-fahu)_ somewhere else in the same bridi:

### Example 14.120.

|            |          |                       |            |         |
| ---------- | -------- | --------------------- | ---------- | ------- |
| la         | djeimyz. | fa'u                  | la         | djordj. |
| That-named | James    | jointly-in-order-with | that-named | George  |

|       |            |        |                       |            |         |
| ----- | ---------- | ------ | --------------------- | ---------- | ------- |
| prami | la         | meris. | fa'u                  | la         | martas. |
| loves | that-named | Mary   | jointly-in-order-with | that-named | Martha. |

|                                                      |
| ---------------------------------------------------- |
| James and George love Mary and Martha, respectively. |



Here the information carried by the English adverb “respectively”, namely that James loves Mary and George loves Martha, is divided between the two occurrences of _[fa'u](glossary#valsi-fahu)_. If both uses of _[fa'u](glossary#valsi-fahu)_ were to be changed to _[e](glossary#valsi-e)_, we would get:

### Example 14.121.

|            |          |     |            |         |       |
| ---------- | -------- | --- | ---------- | ------- | ----- |
| la         | djeimyz. | .e  | la         | djordj. | prami |
| That-named | James    | and | that-named | George  | love  |

|            |        |     |            |         |
| ---------- | ------ | --- | ---------- | ------- |
| la         | meris. | .e  | la         | martas. |
| that-named | Mary   | and | that-named | Martha. |



which can be transformed to four bridi:

### Example 14.122.

|            |          |       |            |        |      |            |         |       |
| ---------- | -------- | ----- | ---------- | ------ | ---- | ---------- | ------- | ----- |
| la         | djeimyz. | prami | la         | meris. | .ije | la         | djordj. | prami |
| That-named | James    | loves | that-named | Mary,  | and  | that-named | George  | loves |

|            |        |      |            |          |       |            |         |
| ---------- | ------ | ---- | ---------- | -------- | ----- | ---------- | ------- |
| la         | meris. | .ije | la         | djeimyz. | prami | la         | martas. |
| that-named | Mary,  | and  | that-named | James    | loves | that-named | Martha, |

|      |            |         |       |            |         |
| ---- | ---------- | ------- | ----- | ---------- | ------- |
| .ije | la         | djordj. | prami | la         | martas. |
| and  | that-named | George  | loves | that-named | Martha. |



which represents quite a different state of affairs from [Example 14.120](chapter14#example-random-id-MBsp "Example 14.120. "). The meaning of [Example 14.120](chapter14#example-random-id-MBsp "Example 14.120. ") can also be conveyed by a termset:

### Example 14.123.

|            |          |         |            |        |          |
| ---------- | -------- | ------- | ---------- | ------ | -------- |
| la         | djeimyz. | ce'e    | la         | meris. | pe'e     |
| That-named | James    | \[plus] | that-named | Mary   | \[joint] |

|     |            |         |         |            |         |        |
| --- | ---------- | ------- | ------- | ---------- | ------- | ------ |
| .e  | la         | djordj. | ce'e    | la         | martas. | prami  |
| and | that-named | George  | \[plus] | that-named | Martha  | loves. |



at the expense of re-ordering the list of names so as to make the pairs explicit. This option is not available when one of the lists is only described rather than enumerated:

### Example 14.124.

|            |          |                  |            |         |       |     |          |
| ---------- | -------- | ---------------- | ---------- | ------- | ----- | --- | -------- |
| la         | djeimyz. | fa'u             | la         | djordj. | prami | re  | mensi    |
| That-named | James    | and-respectively | that-named | George  | love  | two | sisters. |



which conveys that James loves one sister and George the other, though we are not able to tell which of the sisters is which.

## More about non-logical connectives

The final three JOI cmavo, _[jo'e](glossary#valsi-johe)_, _[ku'a](glossary#valsi-kuha)_, and _[pi'u](glossary#valsi-pihu)_, are probably only useful when talking explicitly about sets. They represent three standard set operators usually called “union”, “intersection”, and “cross product” (also known as “Cartesian product”). The union of two sets is a set containing all the members that are in either set; the intersection of two sets is a set containing all the members that are in both sets. The cross product of two sets is the set of all possible ordered pairs, where each ordered pair contains a single element from the first set followed by a single element from the second. This may seem very abstract; hopefully, the following examples will help:

### Example 14.125.

|            |             |     |       |            |               |     |           |
| ---------- | ----------- | --- | ----- | ---------- | ------------- | --- | --------- |
| lo'i       | ricfu       | ku  | jo'e  | lo'i       | dotco         | cu  | barda     |
| The-set-of | rich-things |     | union | the-set-of | German-things |     | is-large. |



### Example 14.126.

|            |             |     |              |            |               |     |           |
| ---------- | ----------- | --- | ------------ | ---------- | ------------- | --- | --------- |
| lo'i       | ricfu       | ku  | ku'a         | lo'i       | dotco         | cu  | cmalu     |
| The-set-of | rich-things |     | intersection | the-set-of | German-things |     | is-small. |



There is a parallelism between logic and set theory that makes [Example 14.125](chapter14#example-random-id-qGSA "Example 14.125. ") and [Example 14.126](chapter14#example-random-id-qgSe "Example 14.126. ") equivalent respectively to:

### Example 14.127.

|            |              |     |                |     |           |
| ---------- | ------------ | --- | -------------- | --- | --------- |
| lo'i       | ricfu        | ja  | dotco          | cu  | barda     |
| The-set-of | (rich-things | or  | German-things) |     | is-large. |



and

### Example 14.128.

|            |              |     |                |     |           |
| ---------- | ------------ | --- | -------------- | --- | --------- |
| lo'i       | ricfu        | je  | dotco          | cu  | cmalu     |
| The-set-of | (rich-things | and | German-things) |     | is-small. |



The following example uses _se remei_, which is a set (not a mass) of two elements:

### Example 14.129.

|            |          |         |            |         |               |
| ---------- | -------- | ------- | ---------- | ------- | ------------- |
| la         | djeimyz. | ce\[bo] | la         | djordj. | pi'u          |
| That-named | James    | and-set | that-named | George  | cross-product |

|            |        |         |            |         |     |           |     |                |
| ---------- | ------ | ------- | ---------- | ------- | --- | --------- | --- | -------------- |
| la         | meris. | cebo    | la         | martas. | cu  | prami     | se  | remei          |
| that-named | Mary   | and-set | that-named | Martha  |     | are-lover |     | type-of-pairs. |



means that each of the pairs James/Mary, George/Mary, James/Martha, and George/Martha love each other. Therefore it is similar in meaning to [Example 14.121](chapter14#example-random-id-7bv3 "Example 14.121. "); however, that example speaks only of the men loving the women, not vice versa.

Joiks may be combined with _[bo](glossary#valsi-bo)_ or with _[ke](glossary#valsi-ke)_ in the same way as eks and jeks; this allows grouping of non-logical connections between sumti and tanru units, in complete parallelism with logical connections:

### Example 14.130.

|     |             |      |     |             |       |             |            |        |
| --- | ----------- | ---- | --- | ----------- | ----- | ----------- | ---------- | ------ |
| mi  | joibo       | do   | ce  | la          | djan. | joibo       | la         | djein. |
| (I  | massed-with | you) | and | (that-named | John  | massed-with | that-named | Jane)  |

|     |            |     |                 |
| --- | ---------- | --- | --------------- |
| cu  | gunma      | se  | remei           |
|     | are-a-mass |     | type-of-two-set |



asserts that there is a set of two items each of which is a mass.

Non-logical connection is permitted at the joint of a termset; this is useful for associating more than one sumti or tagged sumti with each side of the non-logical connection. The place structure of _[casnu](glossary#valsi-casnu)_ is:

> _[casnu](glossary#valsi-casnu)_ the mass x1 discusses/talks about x2

so the x1 place must be occupied by a mass (for reasons not explained here); however, different components of the mass may discuss in different languages. To associate each participant with his or her language, we can say:

### Example 14.131.

|     |         |             |            |         |          |             |
| --- | ------- | ----------- | ---------- | ------- | -------- | ----------- |
| mi  | ce'e    | bau         | la         | lojban. | pe'e     | joi         |
| (I  | \[plus] | in-language | that-named | Lojban  | \[joint] | massed-with |

|     |         |             |            |         |      |          |
| --- | ------- | ----------- | ---------- | ------- | ---- | -------- |
| do  | ce'e    | bau         | la         | gliban. | nu'u | casnu    |
| you | \[plus] | in-language | that-named | English | )    | discuss. |



Like all non-logical connectives, the usage shown in [Example 14.131](chapter14#example-random-id-sdba "Example 14.131. ") cannot be mechanically converted into a non-logical connective placed at another location in the bridi. The forethought equivalent of [Example 14.131](chapter14#example-random-id-sdba "Example 14.131. ") is:

### Example 14.132.

nu'i joigi mi bau la lojban gi do bau la gliban. nu'u casnu



Non-logical forethought termsets are also useful when the things to be non-logically connected are sumti preceded with tense or modal (BAI) tags:

### Example 14.133.

|            |       |                   |            |        |         |
| ---------- | ----- | ----------------- | ---------- | ------ | ------- |
| la         | djan. | fa'u              | la         | frank. | cusku   |
| That-named | John  | respectively-with | that-named | Frank  | express |

|                  |             |            |         |
| ---------------- | ----------- | ---------- | ------- |
| nu'i             | bau         | la         | lojban. |
| \[start-termset] | in-language | that-named | Lojban  |

|          |                   |                     |
| -------- | ----------------- | ------------------- |
| nu'u     | fa'u              | bai                 |
| \[joint] | respectively-with | under-compulsion-by |

|                 |            |         |         |
| --------------- | ---------- | ------- | ------- |
| tu'a            | la         | djordj. | \[nu'u] |
| something-about | that-named | George. |         |

|                                                                             |
| --------------------------------------------------------------------------- |
| John and Frank speak in Lojban and under George's compulsion, respectively. |



[Example 14.133](chapter14#example-random-id-wVSG "Example 14.133. ") associates speaking in Lojban with John, and speaking under George's compulsion with Frank. We do not know what language Frank uses, or whether John speaks under anyone's compulsion.

Joiks may be prefixed with _[i](glossary#valsi-i)_ to produce ijoiks, which serve to non-logically connect sentences. The ijoik _[ce'o](glossary#valsi-ceho)_ indicates that the event of the second bridi follows that of the first bridi in some way other than a time relationship (which is handled with a tense):

### Example 14.134.

|     |           |       |                 |                |     |
| --- | --------- | ----- | --------------- | -------------- | --- |
| mi  | ba        | gasnu | la'e            | di'e           | .i  |
| I   | \[future] | do    | the-referent-of | the-following: |     |

|      |         |     |             |        |          |       |     |       |
| ---- | ------- | --- | ----------- | ------ | -------- | ----- | --- | ----- |
| tu'e | kanji   | lo  | ni          | cteki  | .ice'o   | lumci | le  | karce |
| (    | Compute | the | quantity-of | taxes. | And-then | wash  | the | car.  |

|          |                     |     |       |      |
| -------- | ------------------- | --- | ----- | ---- |
| .ice'o   | dzukansa            | le  | gerku | tu'u |
| And-then | walkingly-accompany | the | dog.  | )    |

|                                                         |
| ------------------------------------------------------- |
| List of things to do: Figure taxes. Wash car. Walk dog. |



[Example 14.134](chapter14#example-random-id-27xU "Example 14.134. ") represents a list of things to be done in priority order. The order is important, hence the need for a sequence connective, but does not necessarily represent a time order (the dog may end up getting walked first). Note the use of _[tu'e](glossary#valsi-tuhe)_ and _[tu'u](glossary#valsi-tuhu)_ as general brackets around the whole list. This is related to, but distinct from, their use in [Section 14.8](chapter14#section-afterthought-connectives-grouping "14.8. Grouping of afterthought connectives"), because there is no logical connective between the introductory phrase _mi ba gasnu la'edi'e_ and the rest. The brackets effectively show how large an utterance the word _[di'e](glossary#valsi-dihe)_, which means “the following utterance”, refers to.

Similarly, _[joi](glossary#valsi-joi)_ is used to connect sentences that represent the components of a joint event such as a joint cause: the Lojban equivalent of “Fran hit her head and fell out of the boat, so that she drowned” would join the events “Fran hit her head” and “Fran fell out of the boat” with _[joi](glossary#valsi-joi)_.

The following _[nai](glossary#valsi-nai)_, if present, does not negate either of the things to be connected, but instead specifies that some other connection (logical or non-logical) is applicable: it is a scalar negation:

### Example 14.135.

|     |                |         |     |     |               |
| --- | -------------- | ------- | --- | --- | ------------- |
| mi  | jo'u           | nai     | do  | cu  | remei         |
| I   | in-common-with | \[not!] | you |     | are-a-twosome |



The result of _mi jo'u do_ would be two individuals, not a mass, therefore _[jo'u](glossary#valsi-johu)_ is not applicable; _[joi](glossary#valsi-joi)_ would be the correct connective.

There is no joik question cmavo as such; however, joiks and ijoiks may be uttered in isolation in response to a logical connective question, as in the following exchange:

### Example 14.136.

|     |        |                 |           |        |
| --- | ------ | --------------- | --------- | ------ |
| do  | djica  | tu'a            | loi       | ckafi  |
| You | desire | something-about | a-mass-of | coffee |

|                     |           |       |
| ------------------- | --------- | ----- |
| ji                  | loi       | tcati |
| \[what-connective?] | a-mass-of | tea?  |

|                            |
| -------------------------- |
| Do you want coffee or tea? |



### Example 14.137.

|                 |
| --------------- |
| joi             |
| Mixed-mass-and. |

|                                       |
| ------------------------------------- |
| Both as a mass (i.e, mixed together). |



Ugh. (Or in Lojban: _[ro'o](glossary#valsi-roho)_.)

## Interval connectives and forethought non-logical connection

In addition to the non-logical connectives of selma'o JOI explained in [Section 14.14](chapter14#section-non-logical-connectives "14.14. Non-logical connectives") and [Section 14.15](chapter14#section-non-logical-continued "14.15. More about non-logical connectives"), there are three other connectives which can appear in joiks: _[bi'i](glossary#valsi-bihi)_, _[bi'o](glossary#valsi-biho)_, and _[mi'i](glossary#valsi-mihi)_, all of selma'o BIhI. The first two cmavo are used to specify intervals: abstract objects defined by two endpoints. The cmavo _[bi'i](glossary#valsi-bihi)_ is correct if the endpoints are independent of order, whereas _[bi'o](glossary#valsi-biho)_ or _[bi'o](glossary#valsi-biho)_ are used when order matters.

An example of _[bi'i](glossary#valsi-bihi)_ in sumti connection:

### Example 14.138.

|     |            |                  |
| --- | ---------- | ---------------- |
| mi  | ca         | sanli            |
| I   | \[present] | stand-on-surface |

|            |         |             |            |            |
| ---------- | ------- | ----------- | ---------- | ---------- |
| la         | drezdn. | bi'i        | la         | frankfurt. |
| that-named | Dresden | \[interval] | that-named | Frankfurt. |

|                                              |
| -------------------------------------------- |
| I am standing between Dresden and Frankfurt. |



In [Example 14.138](chapter14#example-random-id-sHhA "Example 14.138. "), it is all the same whether I am standing between Dresden and Frankfurt or between Frankfurt and Dresden, so _[bi'i](glossary#valsi-bihi)_ is the appropriate interval connective. The sumti _la drezdn. bi'i la frankfurt._ falls into the x2 place of _[sanli](glossary#valsi-sanli)_, which is the surface I stand on; the interval specifies that surface by its limits. (Obviously, I am not standing on the whole of the interval; the x2 place of _[sanli](glossary#valsi-sanli)_ specifies a surface which is typically larger in extent than just the size of the stander's feet.)

### Example 14.139.

|     |       |                   |     |            |
| --- | ----- | ----------------- | --- | ---------- |
| mi  | cadzu | ca                | la  | pacac.     |
| I   | walk  | simultaneous-with |     | First-hour |

|                     |     |              |
| ------------------- | --- | ------------ |
| bi'o                | la  | recac.       |
| \[ordered-interval] |     | Second-hour. |

|                                         |
| --------------------------------------- |
| I walk from one o'clock to two o'clock. |



In [Example 14.139](chapter14#example-random-id-rYv4 "Example 14.139. "), on the other hand, it is essential that _la pacac._ comes before _la recac._; otherwise we have an 11-hour (or 23-hour) interval rather than a one-hour interval. In this use of an interval, the whole interval is probably intended, or at least most of it.

[Example 14.139](chapter14#example-random-id-rYv4 "Example 14.139. ") is equivalent to:

### Example 14.140.

|     |       |                   |     |             |
| --- | ----- | ----------------- | --- | ----------- |
| mi  | cadzu | ca                | la  | recac.      |
| I   | walk  | simultaneous-with |     | Second-hour |

|            |            |     |             |
| ---------- | ---------- | --- | ----------- |
| se         | bi'o       | la  | pacac.      |
| \[reverse] | \[ordered] |     | First-hour. |



English cannot readily express _[bi'o](glossary#valsi-biho)_, but its meaning can be understood by reversing the two sumti.

The third cmavo of selma'o BIhI, namely _[mi'i](glossary#valsi-mihi)_, expresses an interval seen from a different viewpoint: not a pair of endpoints, but a center point and a distance. For example:

### Example 14.141.

|     |       |         |          |     |            |
| --- | ----- | ------- | -------- | --- | ---------- |
| le  | jbama | pu      | daspo    | la  | .uacintyn. |
| The | bomb  | \[past] | destroys |     | Washington |

|           |         |                   |     |     |      |
| --------- | ------- | ----------------- | --- | --- | ---- |
| mi'i      | lo      | minli             | be  | li  | muno |
| \[center] | what-is | measured-in-miles |     | by  | 50.  |

|                                                       |
| ----------------------------------------------------- |
| The bomb destroyed Washington and fifty miles around. |



Here we have an interval whose center is Washington and whose distance, or radius, is fifty miles.

In [Example 14.138](chapter14#example-random-id-sHhA "Example 14.138. "), is it possible that I am standing in Dresden (or Frankfurt) itself? Yes. The connectives of selma'o BIhI are ambiguous about whether the endpoints themselves are included in or excluded from the interval. Two auxiliary cmavo _[ga'o](glossary#valsi-gaho)_ and _[ke'i](glossary#valsi-kehi)_ (of cmavo GAhO) are used to indicate the status of the endpoints: _[ga'o](glossary#valsi-gaho)_ means that the endpoint is included, _[ke'i](glossary#valsi-kehi)_ that it is excluded:

### Example 14.142.

|     |            |       |            |         |              |
| --- | ---------- | ----- | ---------- | ------- | ------------ |
| mi  | ca         | sanli | la         | drezdn. | ga'o         |
| I   | \[present] | stand | that-named | Dresden | \[inclusive] |

|             |              |            |            |
| ----------- | ------------ | ---------- | ---------- |
| bi'i        | ga'o         | la         | frankfurt. |
| \[interval] | \[inclusive] | that-named | Frankfurt. |

|                                                                 |
| --------------------------------------------------------------- |
| I am standing between Dresden and Frankfurt, inclusive of both. |



### Example 14.143.

|     |            |       |            |         |              |
| --- | ---------- | ----- | ---------- | ------- | ------------ |
| mi  | ca         | sanli | la         | drezdn. | ga'o         |
| I   | \[present] | stand | that-named | Dresden | \[inclusive] |

|             |              |            |            |
| ----------- | ------------ | ---------- | ---------- |
| bi'i        | ke'i         | la         | frankfurt. |
| \[interval] | \[exclusive] | that-named | Frankfurt. |

|                                                                      |
| -------------------------------------------------------------------- |
| I am standing between Dresden (inclusive) and Frankfurt (exclusive). |



### Example 14.144.

|     |            |       |            |         |              |
| --- | ---------- | ----- | ---------- | ------- | ------------ |
| mi  | ca         | sanli | la         | drezdn. | ke'i         |
| I   | \[present] | stand | that-named | Dresden | \[exclusive] |

|             |              |            |            |
| ----------- | ------------ | ---------- | ---------- |
| bi'i        | ga'o         | la         | frankfurt. |
| \[interval] | \[inclusive] | that-named | Frankfurt. |

|                                                                      |
| -------------------------------------------------------------------- |
| I am standing between Dresden (exclusive) and Frankfurt (inclusive). |



### Example 14.145.

|     |            |       |            |         |              |
| --- | ---------- | ----- | ---------- | ------- | ------------ |
| mi  | ca         | sanli | la         | drezdn. | ke'i         |
| I   | \[present] | stand | that-named | Dresden | \[exclusive] |

|             |              |            |            |
| ----------- | ------------ | ---------- | ---------- |
| bi'i        | ke'i         | la         | frankfurt. |
| \[interval] | \[exclusive] | that-named | Frankfurt. |

|                                                                 |
| --------------------------------------------------------------- |
| I am standing between Dresden and Frankfurt, exclusive of both. |



As these examples should make clear, the GAhO cmavo that applies to a given endpoint is the one that stands physically adjacent to it: the left-hand endpoint is referred to by the first GAhO, and the right-hand endpoint by the second GAhO. It is ungrammatical to have just one GAhO.

(Etymologically, _[ga'o](glossary#valsi-gaho)_ is derived from _[ganlo](glossary#valsi-ganlo)_, which means “closed”, and _[ke'i](glossary#valsi-kehi)_ from _[kalri](glossary#valsi-kalri)_, which means “open”. In mathematics, inclusive intervals are referred to as closed intervals, and exclusive intervals as open ones.)

BIhI joiks are grammatical anywhere that other joiks are, including in tanru connection and (as ijoiks) between sentences. No meanings have been found for these uses.

Negated intervals, marked with a _-nai_ following the BIhI cmavo, indicate an interval that includes everything but what is between the endpoints (with respect to some understood scale):

### Example 14.146.

|     |         |           |     |     |            |         |
| --- | ------- | --------- | --- | --- | ---------- | ------- |
| do  | dicra   | .e'a      | mi  | ca  | la         | daucac. |
| You | disturb | (allowed) | me  | at  | that-named | 10      |

|                 |            |         |
| --------------- | ---------- | ------- |
| bi'onai         | la         | gaicac. |
| not-from-...-to | that-named | 12      |

|                                          |
| ---------------------------------------- |
| You can contact me except from 10 to 12. |



The complete syntax of joiks is:

> - \[se] JOI \[nai]
>
> - \[se] BIhI \[nai]
>
> - GAhO \[se] BIhI \[nai] GAhO

Notice that the colloquial English translations of _[bi'i](glossary#valsi-bihi)_ and _[bi'o](glossary#valsi-biho)_ have forethought form: “between ... and” for _[bi'i](glossary#valsi-bihi)_, and “from ... to” for _[bi'o](glossary#valsi-biho)_. In Lojban too, non-logical connectives can be expressed in forethought. Rather than using a separate selma'o, the forethought logical connectives are constructed from the afterthought ones by suffixing _[gi](glossary#valsi-gi)_. Such a compound cmavo is not unnaturally called a “joigik”; the syntax of joigiks is any of:

> - \[se] JOI \[nai] GI
>
> - \[se] BIhI \[nai] GI
>
> - GAhO \[se] BIhI \[nai] GAhO GI

Joigiks may be used to non-logically connect bridi, sumti, and bridi-tails; and also in termsets.

[Example 14.111](chapter14#example-random-id-pC5x "Example 14.111. ") in forethought becomes:

### Example 14.147.

|             |            |       |     |            |        |       |     |        |
| ----------- | ---------- | ----- | --- | ---------- | ------ | ----- | --- | ------ |
| joigi       | la         | djan. | gi  | la         | .alis. | bevri | le  | pipno  |
| \[Together] | that-named | John  | and | that-named | Alice  | carry | the | piano. |



The first _[gi](glossary#valsi-gi)_ is part of the joigik; the second _[gi](glossary#valsi-gi)_ is the regular gik that separates the two things being connected in all forethought forms.

[Example 14.143](chapter14#example-random-id-qGtv "Example 14.143. ") can be expressed in forethought as:

### Example 14.148.

|     |            |       |              |         |
| --- | ---------- | ----- | ------------ | ------- |
| mi  | ca         | sanli | ke'i         | bi'i    |
| I   | \[present] | stand | \[exclusive] | between |

|              |     |            |         |     |            |            |
| ------------ | --- | ---------- | ------- | --- | ---------- | ---------- |
| ga'o         | gi  | la         | drezdn. | gi  | la         | frankfurt. |
| \[inclusive] | and | that-named | Dresden | and | that-named | Frankfurt. |

|                                                                      |
| -------------------------------------------------------------------- |
| I am standing between Dresden (exclusive) and Frankfurt (inclusive). |



In forethought, unfortunately, the GAhOs become physically separated from the endpoints, but the same rule applies: the first GAhO refers to the first endpoint.

## Logical and non-logical connectives within mekso

Lojban has a separate grammar embedded within the main grammar for representing mathematical expressions (or mekso in Lojban) such as “2 + 2”. Mathematical expressions are explained fully in [Chapter 18](chapter18 "Chapter 18. lojbau mekso: Mathematical Expressions in Lojban"). The basic components of mekso are operands, like “2”, and operators, like “+”. Both of these may be either logically or non-logically connected.

Operands are connected in afterthought with eks and in forethought with geks, just like sumti. Operators, on the other hand, are connected in afterthought with jeks and in forethought with guheks, just like tanru components. (However, jeks and joiks with _[bo](glossary#valsi-bo)_ are not allowed for operators.) This parallelism is no accident.

In addition, eks with _[bo](glossary#valsi-bo)_ and with _[ke'e](glossary#valsi-kehe)_ are allowed for grouping logically connected operands, and _[ke'e](glossary#valsi-kehe)_ is allowed for grouping logically connected operators, although there is no analogue of tanru among the operators.

Only a few examples of each kind of mekso connection will be given. Despite the large number of rules required to support this feature, it is of relatively minor importance in either the mekso or the logical-connective scheme of things. These examples are drawn from [Section 18.17](chapter18#section-connectives-within-mekso "18.17. Logical and non-logical connectives within mekso"), and contain many mekso features not explained in this chapter.

[Example 14.149](chapter14#example-random-id-gMU4 "Example 14.149. ") exhibits afterthought logical connection between operands:

### Example 14.149.

|     |       |     |      |         |        |     |       |     |         |
| --- | ----- | --- | ---- | ------- | ------ | --- | ----- | --- | ------- |
| vei | ci    | .a  | vo   | \[ve'o] | prenu  | cu  | klama | le  | zarci   |
| (   | Three | or  | four | )       | people |     | go-to | the | market. |



[Example 14.150](chapter14#example-random-id-ftNY "Example 14.150. ") is equivalent in meaning, but uses forethought connection:

### Example 14.150.

|     |        |     |     |     |         |        |     |       |     |         |
| --- | ------ | --- | --- | --- | ------- | ------ | --- | ----- | --- | ------- |
| vei | ga     | ci  | gi  | vo  | \[ve'o] | prenu  | cu  | klama | le  | zarci   |
| (   | Either | 3   | or  | 4   | )       | people |     | go-to | the | market. |



Note that the mekso in [Example 14.149](chapter14#example-random-id-gMU4 "Example 14.149. ") and [Example 14.150](chapter14#example-random-id-ftNY "Example 14.150. ") are being used as quantifiers. Lojban requires that any mekso other than a simple number be enclosed in _[vei](glossary#valsi-vei)_ and _[ve'o](glossary#valsi-veho)_ parentheses when used as a quantifier. The right parenthesis mark, _[ve'o](glossary#valsi-veho)_, is an elidable terminator.

Simple examples of logical connection between operators are hard to come by. A contrived example is:

### Example 14.151.

|            |     |      |     |       |     |        |            |     |
| ---------- | --- | ---- | --- | ----- | --- | ------ | ---------- | --- |
| li         | re  | su'i | je  | pi'i  | re  | du     | li         | vo  |
| The-number | 2   | plus | and | times | 2   | equals | the-number | 4.  |

|                          |
| ------------------------ |
| 2 + 2 = 4 and 2 x 2 = 4. |



The forethought form of [Example 14.151](chapter14#example-random-id-dCxf "Example 14.151. ") is:

### Example 14.152.

|            |     |      |      |     |       |     |        |            |       |
| ---------- | --- | ---- | ---- | --- | ----- | --- | ------ | ---------- | ----- |
| li         | re  | ge   | su'i | gi  | pi'i  | re  | du     | li         | vo    |
| The-number | two | both | plus | and | times | two | equals | the-number | four. |

|                               |
| ----------------------------- |
| Both 2 + 2 = 4 and 2 x 2 = 4. |



Non-logical connection with joiks or joigiks is also permitted between operands and between operators. One use for this construct is to connect operands with _[bi'i](glossary#valsi-bihi)_ to create mathematical intervals:

### Example 14.153.

|            |      |             |         |             |     |
| ---------- | ---- | ----------- | ------- | ----------- | --- |
| li         | no   | ga'o        | bi'i    | ke'i        | pa  |
| the-number | zero | (inclusive) | from-to | (exclusive) | one |
| \[0,1)     |      |             |         |             |     |

|                                                                    |
| ------------------------------------------------------------------ |
| the numbers from zero to one, including zero but not including one |



You can also combine two operands with _[ce'o](glossary#valsi-ceho)_, the sequence connective of selma'o JOI, to make a compound subscript:

### Example 14.154.

|      |     |     |     |     |          |     |         |
| ---- | --- | --- | --- | --- | -------- | --- | ------- |
| xy.  | boi | xi  | vei | by. | ce'o     | dy. | \[ve'o] |
| “x”  |     | sub | (   | “b” | sequence | “d” | )       |
| xb,d |     |     |     |     |          |     |         |



Note that the _[boi](glossary#valsi-boi)_ in [Example 14.154](chapter14#example-random-id-8rEL "Example 14.154. ") is not elidable, because the _[xi](glossary#valsi-xi)_ subscript needs something to attach to.

## Tenses, modals, and logical connection

The tense and modal systems of Lojban interact with the logical connective system. No one chapter can explain all of these simultaneously, so each chapter must present its own view of the area of interaction with emphasis on its own concepts and terminology. In the examples of this chapter, the many tenses of various selma'o as well as the modals of selma'o BAI are represented by the simple time cmavo _[pu](glossary#valsi-pu)_, _[ca](glossary#valsi-ca)_, and _[ba](glossary#valsi-ba)_ (of selma'o PU) representing the past, the present, and the future respectively. Preceding a selbri, these cmavo state the time when the bridi was, is, or will be true (analogous to English verb tenses); preceding a sumti, they state that the event of the main bridi is before, simultaneous with, or after the event given by the sumti (which is generally a _le nu_ abstraction; see [Section 11.2](chapter11#section-events "11.2. Event abstraction")).

The two types of interaction between tenses and logical connectives are logically connected tenses and tensed logical connections. The former are fairly simple. Jeks may be used between tense cmavo to specify two connected bridi that differ only in tense:

### Example 14.155.

|            |        |         |                        |
| ---------- | ------ | ------- | ---------------------- |
| la         | .artr. | pu      | nolraitru              |
| That-named | Arthur | \[past] | is-a-noblest-governor. |

|      |            |        |           |                        |
| ---- | ---------- | ------ | --------- | ---------------------- |
| .ije | la         | .artr. | ba        | nolraitru              |
| And  | that-named | Arthur | \[future] | is-a-noblest-governor. |

|                                               |
| --------------------------------------------- |
| Arthur was a king, and Arthur will be a king. |



can be reduced to:

### Example 14.156.

|            |        |         |     |           |                        |
| ---------- | ------ | ------- | --- | --------- | ---------------------- |
| la         | .artr. | pu      | je  | ba        | nolraitru              |
| That-named | Arthur | \[past] | and | \[future] | is-a-noblest-governor. |

|                              |
| ---------------------------- |
| Arthur was and will be king. |



[Example 14.155](chapter14#example-random-id-g6iT "Example 14.155. ") and [Example 14.156](chapter14#example-random-id-PLgw "Example 14.156. ") are equivalent in meaning; neither says anything about whether Arthur is king now.

Non-logical connection with joiks is also possible between tenses:

### Example 14.157.

|     |         |             |           |          |
| --- | ------- | ----------- | --------- | -------- |
| mi  | pu      | bi'o        | ba        | vasxu    |
| I   | \[past] | from-...-to | \[future] | breathe. |

|                                                 |
| ----------------------------------------------- |
| I breathe from a past time until a future time. |



The full tense system makes more interesting tense intervals expressible, such as “from a medium time ago until a long time from now”.

No forethought connections between tenses are permitted by the grammar, nor is there any way to override the default left-grouping rule; these limitations are imposed to keep the tense grammar simpler. Whatever can be said with tenses or modals can be said with subordinate bridi stating the time, place, or mode explicitly, so it is reasonable to try to remove at least some complications.

Tensed logical connections are both more complex and more important than logical connections between tenses. Consider the English sentence:

### Example 14.158.

I went to the market, and I bought food.



The verbatim translation of [Example 14.158](chapter14#example-random-id-efav "Example 14.158. "), namely:

### Example 14.159.

|     |         |       |     |         |      |     |         |          |          |       |
| --- | ------- | ----- | --- | ------- | ---- | --- | ------- | -------- | -------- | ----- |
| mi  | pu      | klama | le  | zarci   | .ije | mi  | pu      | tervecnu | lo       | cidja |
| I   | \[past] | go-to | the | market. | And  | I   | \[past] | buy      | items-of | food. |



fails to fully represent a feature of the English, namely that the buying came after the going. (It also fails to represent that the buying was a consequence of the going, which can be expressed by a modal that is discussed in [Chapter 9](chapter09 "Chapter 9. To Boston Via The Road Go I, With An Excursion Into The Land Of Modals").) However, the tense information – that the event of my going to the market preceded the event of my buying food – can be added to the logical connective as follows. The _[je](glossary#valsi-je)_ is replaced by _[bo](glossary#valsi-bo)_, and the tense cmavo _[ba](glossary#valsi-ba)_ is inserted between _[je](glossary#valsi-je)_ and _[bo](glossary#valsi-bo)_:

### Example 14.160.

|     |         |       |     |         |
| --- | ------- | ----- | --- | ------- |
| mi  | pu      | klama | le  | zarci   |
| I   | \[past] | go-to | the | market. |

|      |          |     |         |          |          |       |
| ---- | -------- | --- | ------- | -------- | -------- | ----- |
| .ije | babo     | mi  | pu      | tervecnu | lo       | cidja |
| And  | \[later] | I   | \[past] | buy      | items-of | food. |



Here the _[pu](glossary#valsi-pu)_ cmavo in the two bridi-tails express the time of both actions with respect to the speaker: in the past. The _[ba](glossary#valsi-ba)_ relates the two items to one another: the second item is later than the first item. The grammar does not permit omitting the _[bo](glossary#valsi-bo)_; if it were omitted, the _[ba](glossary#valsi-ba)_ and the second _[pu](glossary#valsi-pu)_ would run together to form a compound tense _[bapu](glossary#valsi-bapu)_ applying to the second bridi-tail only.

Adding tense or modal information to a logical connective is permitted only in the following situations:

Between an ek (or joik) and _[bo](glossary#valsi-bo)_, as in:

### Example 14.161.

|            |       |     |                 |            |        |       |     |         |
| ---------- | ----- | --- | --------------- | ---------- | ------ | ----- | --- | ------- |
| la         | .djan | .e  | cabo            | la         | .alis. | klama | le  | zarci   |
| That-named | John  | and | \[simultaneous] | that-named | Alice  | go-to | the | market. |

|                                                 |
| ----------------------------------------------- |
| John and Alice go to the market simultaneously. |



Between an ek (or joik) and _[ke](glossary#valsi-ke)_, as in:

### Example 14.162.

|     |         |     |        |     |            |
| --- | ------- | --- | ------ | --- | ---------- |
| mi  | dzukla  | le  | zarci  | .e  | pu         |
| I   | walk-to | the | market | and | \[earlier] |

|     |     |       |     |     |        |         |
| --- | --- | ----- | --- | --- | ------ | ------- |
| ke  | le  | zdani | .a  | le  | ckule  | \[ke'e] |
| (   | the | house | or  | the | school | ).      |

|                                                                    |
| ------------------------------------------------------------------ |
| I walk to the market and, before that, to the house or the school. |



Between a gihek and _[bo](glossary#valsi-bo)_, as in:

### Example 14.163.

|     |       |     |       |      |          |
| --- | ----- | --- | ----- | ---- | -------- |
| mi  | dunda | le  | cukta | gi'e | babo     |
| I   | give  | the | book  | and  | \[later] |

|       |      |                |     |              |
| ----- | ---- | -------------- | --- | ------------ |
| lebna | lo   | rupnu          | vau | do           |
| take  | some | currency-units |     | from/to-you. |

|                                                                        |
| ---------------------------------------------------------------------- |
| I give you the book and then take some dollars (pounds, yen) from you. |



Between a gihek and _[ke](glossary#valsi-ke)_, as in:

### Example 14.164.

|     |         |     |        |      |                 |
| --- | ------- | --- | ------ | ---- | --------------- |
| mi  | dzukla  | le  | zarci  | gi'e | ca              |
| I   | walk-to | the | market | and  | \[simultaneous] |

|     |         |           |               |       |         |
| --- | ------- | --------- | ------------- | ----- | ------- |
| ke  | cusku   | zo'e      | la            | djan. | \[ke'e] |
| (   | express | something | to-that-named | John. | )       |

|                                                         |
| ------------------------------------------------------- |
| I walk to the market and at the same time talk to John. |



Between an ijek (or ijoik) and _[bo](glossary#valsi-bo)_, as in:

### Example 14.165.

|     |       |     |       |      |          |     |       |     |        |
| --- | ----- | --- | ----- | ---- | -------- | --- | ----- | --- | ------ |
| mi  | viska | pa  | nanmu | .ije | babo     | mi  | viska | pa  | ninmu  |
| I   | see   | a   | man.  | And  | \[later] | I   | see   | a   | woman. |

|                                      |
| ------------------------------------ |
| I see a man, and then I see a woman. |



Between an ijek (or ijoik) and _[tu'e](glossary#valsi-tuhe)_, as in:

### Example 14.166.

|     |       |     |       |      |          |     |       |     |        |         |
| --- | ----- | --- | ----- | ---- | -------- | --- | ----- | --- | ------ | ------- |
| mi  | viska | pa  | nanmu | .ije | batu'e   | mi  | viska | pa  | ninmu  | \[tu'u] |
| I   | see   | a   | man.  | And  | \[later] | I   | see   | a   | woman. |         |

|                                      |
| ------------------------------------ |
| I see a man, and then I see a woman. |



And finally, between a jek (or joik) and _[bo](glossary#valsi-bo)_, as in:

### Example 14.167.

|     |             |              |       |
| --- | ----------- | ------------ | ----- |
| mi  | mikce       | jebabo       | ricfu |
| I   | am-a-doctor | and-\[later] | rich  |

|                                       |
| ------------------------------------- |
| I am a doctor and future rich person. |



As can be seen from [Example 14.165](chapter14#example-random-id-AhnP "Example 14.165. ") and [Example 14.166](chapter14#example-random-id-GBgP "Example 14.166. "), the choice between _[bo](glossary#valsi-bo)_ and _[ke](glossary#valsi-ke)_ (or _[tu'e](glossary#valsi-tuhe)_) is arbitrary when there are only two things to be connected. If there were no tense information to include, of course neither would be required; it is only the rule that tense information must always be sandwiched between the logical connective and a following _[bo](glossary#valsi-bo)_, _[ke](glossary#valsi-ke)_, or _[tu'e](glossary#valsi-tuhe)_ that requires the use of one of these grouping cmavo in [Example 14.161](chapter14#example-random-id-129L "Example 14.161. ") and [Example 14.163](chapter14#example-random-id-APPE "Example 14.163. ") through [Example 14.167](chapter14#example-random-id-Ce09 "Example 14.167. ").

Non-logical connectives with _[bo](glossary#valsi-bo)_ and _[ke](glossary#valsi-ke)_ can include tense information in exactly the same way as logical connectives. Forethought connectives, however (except as noted below) are unable to do so, as are termsets or tense connectives. Mathematical operands and operators can also include tense information in their logical connectives as a result of their close parallelism with sumti and tanru components respectively:

### Example 14.168.

|     |     |               |     |         |          |     |        |     |       |
| --- | --- | ------------- | --- | ------- | -------- | --- | ------ | --- | ----- |
| vei | ci  | .ebabo        | vo  | \[ve'o] | tadni    | cu  | zvati  | le  | kumfa |
| (   | 3   | and-\[future] | 4   | )       | students |     | are-at | the | room. |

|                                                   |
| ------------------------------------------------- |
| Three and, later, four students were in the room. |



is a simple example. There is a special grammatical rule for use when a tense applies to both of the selbri in a forethought bridi-tail connection: the entire forethought construction can just be preceded by a tense. For example:

### Example 14.169.

|     |         |      |       |     |        |     |          |      |       |
| --- | ------- | ---- | ----- | --- | ------ | --- | -------- | ---- | ----- |
| mi  | pu      | ge   | klama | le  | zarci  | gi  | tervecnu | lo   | cidja |
| I   | \[past] | both | go-to | the | market | and | buy      | some | food  |

|                                            |
| ------------------------------------------ |
| I went to the market and bought some food. |



[Example 14.169](chapter14#example-random-id-DxuA "Example 14.169. ") is similar to [Example 14.159](chapter14#example-random-id-PMTu "Example 14.159. "). There is no time relationship specified between the going and the buying; both are simply set in the past.

## Abstractor connection and connection within abstractions

Last and (as a matter of fact) least: a logical connective is allowed between abstraction markers of selma'o NU. As usual, the connection can be expanded to a bridi connection between two bridi which differ only in abstraction marker. Jeks are the appropriate connective. [Example 14.170](chapter14#example-random-id-qGVP "Example 14.170. ") and [Example 14.171](chapter14#example-random-id-qgVR "Example 14.171. ") are equivalent in meaning:

### Example 14.170.

|     |            |            |         |         |     |         |
| --- | ---------- | ---------- | ------- | ------- | --- | ------- |
| le  | ka         | la         | frank.  | ciska   | cu  | xlali   |
| The | quality-of | that-named | Frank's | writing |     | is-bad, |

|      |     |             |            |         |         |     |         |
| ---- | --- | ----------- | ---------- | ------- | ------- | --- | ------- |
| .ije | le  | ni          | la         | frank.  | ciska   | cu  | xlali   |
| and  | the | quantity-of | that-named | Frank's | writing |     | is-bad. |



### Example 14.171.

|     |         |     |          |     |            |         |         |       |         |
| --- | ------- | --- | -------- | --- | ---------- | ------- | ------- | ----- | ------- |
| le  | ka      | je  | ni       | la  | frank.     | ciska   | cu      | xlali |         |
| The | quality | and | quantity | of  | that-named | Frank's | writing |       | is-bad. |



As with tenses and modals, there is no forethought and no way to override the left-grouping rule.

Logical connectives and abstraction are related in another way as well, though. Since an abstraction contains a bridi, the bridi may have a logical connection inside it. Is it legitimate to split the outer bridi into two, joined by the logical connection? Absolutely not. For example:

### Example 14.172.

|     |       |     |           |           |               |
| --- | ----- | --- | --------- | --------- | ------------- |
| mi  | jinvi | le  | du'u      | loi       | jmive         |
| I   | opine | the | fact-that | a-mass-of | living-things |

|     |        |         |        |       |     |            |           |
| --- | ------ | ------- | ------ | ----- | --- | ---------- | --------- |
| cu  | zvati  | gi'onai | na     | zvati | vau | la         | .iupiter. |
|     | (is-at | or-else | is-not | at)   |     | that-named | Jupiter.  |

|                                                     |
| --------------------------------------------------- |
| I believe there either is or isn't life on Jupiter. |



is true, since the embedded sentence is a tautology, but:

### Example 14.173.

|     |       |     |           |           |               |     |       |            |           |
| --- | ----- | --- | --------- | --------- | ------------- | --- | ----- | ---------- | --------- |
| mi  | jinvi | le  | du'u      | loi       | jmive         | cu  | zvati | la         | .iupiter. |
| I   | opine | the | fact-that | a-mass-of | living-things |     | is-at | that-named | Jupiter   |

|         |     |       |     |           |           |               |
| ------- | --- | ----- | --- | --------- | --------- | ------------- |
| .ijonai | mi  | jinvi | le  | du'u      | loi       | jmive         |
| or-else | I   | opine | the | fact-that | a-mass-of | living-things |

|     |          |            |           |
| --- | -------- | ---------- | --------- |
| cu  | zvati    | la         | .iupiter. |
|     | isn't-at | that-named | Jupiter   |



is false, since I have no evidence one way or the other (_[jinvi](glossary#valsi-jinvi)_ requires some sort of evidence, real or fancied, unlike _[krici](glossary#valsi-krici)_).

## Constructs and appropriate connectives

The following table specifies, for each kind of construct that can be logically or non-logically connected in Lojban, what kind of connective is required for both afterthought and (when possible) forethought modes. An asterisk (\*) indicates that tensed connection is permitted.

A dash indicates that connection of the specified type is not possible.

| construct     | afterthought logical                                                                                                  | forethought logical                                                                                                   | afterthought non-logical                                                                                               | forethought non-logical                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| bridi         | [ijek\*](chapter14#section-bridi-connection "14.4. Logical connection of bridi")                       | [gek](chapter14#section-forethought-bridi-connection "14.5. Forethought bridi connection")             | [ijoik\*](chapter14#section-non-logical-continued "14.15. More about non-logical connectives")          | [joigik](chapter14#section-non-logical-continued-continued "14.16. Interval connectives and forethought non-logical connection") |
| sumti         | [ek\*](chapter14#section-sumti-connection "14.6. sumti connection")                                    | [gek](chapter14#section-sumti-connection "14.6. sumti connection")                                     | [joik\*](chapter14#section-non-logical-connectives "14.14. Non-logical connectives")                    | [joigik](chapter14#section-non-logical-continued-continued "14.16. Interval connectives and forethought non-logical connection") |
| bridi-tails   | [gihek\*](chapter14#section-compound-bridi "14.9. Compound bridi")                                     | [gek](chapter14#section-multiple-compound-bridi "14.10. Multiple compound bridi")                      | -                                                                                                                      | [joigik](chapter14#section-non-logical-continued-continued "14.16. Interval connectives and forethought non-logical connection") |
| termsets      | [ek\*](chapter14#section-termsets "14.11. Termset logical connection")                                 | [gek](chapter14#section-termsets "14.11. Termset logical connection")                                  | [joik\*](chapter14#section-termsets "14.11. Termset logical connection")                                | [joigik](chapter14#section-termsets "14.11. Termset logical connection")                                                         |
| tanru parts   | [jek](chapter14#section-tanru "14.12. Logical connection within tanru")                                | [guhek](chapter14#section-tanru "14.12. Logical connection within tanru")                              | [joik\*](chapter14#section-tanru "14.12. Logical connection within tanru")                              | -                                                                                                                                               |
| operands      | [ek\*](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso")  | [gek](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso")   | [joik\*](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso") | [joigik](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso")                          |
| operators     | [jek](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso")   | [guhek](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso") | [joik](chapter14#section-mekso-connections "14.17. Logical and non-logical connectives within mekso")   | -                                                                                                                                               |
| tenses/modals | [jek](chapter14#section-sumtcita "14.18. Tenses, modals, and logical connection")                      | -                                                                                                                     | [joik](chapter14#section-sumtcita "14.18. Tenses, modals, and logical connection")                      | -                                                                                                                                               |
| abstractors   | [jek](chapter14#section-abstractors "14.19. Abstractor connection and connection within abstractions") | -                                                                                                                     | [joik](chapter14#section-abstractors "14.19. Abstractor connection and connection within abstractions") | -                                                                                                                                               |

## Truth functions and corresponding logical connectives

The following table specifies, for each truth function, the most-often used cmavo or compound cmavo which expresses it for each of the six types of logical connective. (Other compound cmavo are often possible: for example, _[.a](glossary#valsi-a)_ means the same as _[a](glossary#valsi-a)_, and could be used instead.)

| truth | ek                                                                                | jek                                                                                | gihek                                                                                  | gek-gik                      | guhek-gik                    |
| ----- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------- |
| TTTF  | _[a](glossary#valsi-a)_                                                          | _[ja](glossary#valsi-ja)_                                                         | _[gi'a](glossary#valsi-giha)_                                                         | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| TTFT  | _[.a](glossary#valsi-a)_ _[nai](glossary#valsi-nai)_                            | _[ja](glossary#valsi-ja)_ _[nai](glossary#valsi-nai)_                            | _[gi'a](glossary#valsi-giha)_ _[nai](glossary#valsi-nai)_                            | _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ |
| TTFF  | _[u](glossary#valsi-u)_                                                          | _[ju](glossary#valsi-ju)_                                                         | _[gi'u](glossary#valsi-gihu)_                                                         | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| TFTT  | _[na](glossary#valsi-na)_ _[.a](glossary#valsi-a)_                              | _[na](glossary#valsi-na)_ _[ja](glossary#valsi-ja)_                              | _[na](glossary#valsi-na)_ _[gi'a](glossary#valsi-giha)_                              | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| TFTF  | _[se](glossary#valsi-se)_ _[.u](glossary#valsi-u)_                              | _[se](glossary#valsi-se)_ _[ju](glossary#valsi-ju)_                              | _[se](glossary#valsi-se)_ _[gi'u](glossary#valsi-gihu)_                              | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| TFFT  | _[o](glossary#valsi-o)_                                                          | _[jo](glossary#valsi-jo)_                                                         | _[gi'o](glossary#valsi-giho)_                                                         | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| TFFF  | _[e](glossary#valsi-e)_                                                          | _[je](glossary#valsi-je)_                                                         | _[gi'e](glossary#valsi-gihe)_                                                         | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| FTTT  | _[na](glossary#valsi-na)_ _[.a](glossary#valsi-a)_ _[nai](glossary#valsi-nai)_ | _[na](glossary#valsi-na)_ _[ja](glossary#valsi-ja)_ _[nai](glossary#valsi-nai)_ | _[na](glossary#valsi-na)_ _[gi'a](glossary#valsi-giha)_ _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ |
| FTTF  | _[.o](glossary#valsi-o)_ _[nai](glossary#valsi-nai)_                            | _[jo](glossary#valsi-jo)_ _[nai](glossary#valsi-nai)_                            | _[gi'o](glossary#valsi-giho)_ _[nai](glossary#valsi-nai)_                            | _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ |
| FTFT  | _[se](glossary#valsi-se)_ _[.u](glossary#valsi-u)_ _[nai](glossary#valsi-nai)_ | _[se](glossary#valsi-se)_ _[ju](glossary#valsi-ju)_ _[nai](glossary#valsi-nai)_ | _[se](glossary#valsi-se)_ _[gi'u](glossary#valsi-gihu)_ _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ |
| FTFF  | _[.e](glossary#valsi-e)_ _[nai](glossary#valsi-nai)_                            | _[je](glossary#valsi-je)_ _[nai](glossary#valsi-nai)_                            | _[gi'e](glossary#valsi-gihe)_ _[nai](glossary#valsi-nai)_                            | _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ |
| FFTT  | _[na](glossary#valsi-na)_ _[.u](glossary#valsi-u)_                              | _[na](glossary#valsi-na)_ _[ju](glossary#valsi-ju)_                              | _[na](glossary#valsi-na)_ _[gi'u](glossary#valsi-gihu)_                              | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| FFTF  | _[na](glossary#valsi-na)_ _[.e](glossary#valsi-e)_                              | _[na](glossary#valsi-na)_ _[je](glossary#valsi-je)_                              | _[na](glossary#valsi-na)_ _[gi'e](glossary#valsi-gihe)_                              | _[gi](glossary#valsi-gi)_   | _[gi](glossary#valsi-gi)_   |
| FFFT  | _[na](glossary#valsi-na)_ _[.e](glossary#valsi-e)_ _[nai](glossary#valsi-nai)_ | _[na](glossary#valsi-na)_ _[je](glossary#valsi-je)_ _[nai](glossary#valsi-nai)_ | _[na](glossary#valsi-na)_ _[gi'e](glossary#valsi-gihe)_ _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ | _[nai](glossary#valsi-nai)_ |

Note: ijeks are exactly the same as the corresponding jeks, except for the prefixed _[i](glossary#valsi-i)_.

## Rules for making logical and non-logical connectives

The full set of rules for inserting _[na](glossary#valsi-na)_, _[se](glossary#valsi-se)_, and _[nai](glossary#valsi-nai)_ into any connective is:

Afterthought logical connectives (eks, jeks, giheks, ijeks):

- Negate first construct: Place _[na](glossary#valsi-na)_ before the connective cmavo (but after the _[i](glossary#valsi-i)_ of an ijek).

- Negate second construct: Place _[nai](glossary#valsi-nai)_ after the connective cmavo.

- Exchange constructs: Place _[se](glossary#valsi-se)_ before the connective cmavo (after _[na](glossary#valsi-na)_ if any).

Forethought logical connectives (geks, guheks):

- Negate first construct: Place _[nai](glossary#valsi-nai)_ after the connective cmavo.

- Negate second construct: Place _[nai](glossary#valsi-nai)_ after the _[gi](glossary#valsi-gi)_.

- Exchange constructs: Place _[se](glossary#valsi-se)_ before the connective cmavo.

Non-logical connectives (joiks, joigiks):

- Negate connection: Place _[nai](glossary#valsi-nai)_ after the connective cmavo (but before the _[gi](glossary#valsi-gi)_ of a joigik).

- Exchange constructs: Place _[se](glossary#valsi-se)_ before the connective cmavo.

## Locations of other tables

[Section 14.1](chapter14#section-connectives-introduction "14.1. Logical connection and truth tables"): a table explaining the meaning of each truth function in English.

[Section 14.2](chapter14#section-four-basics "14.2. The Four basic vowels"): a table relating the truth functions to the four basic vowels.

[Section 14.13](chapter14#section-truth-and-connective-questions "14.13. Truth questions and connective questions"): a table of the connective question cmavo.

[Section 14.14](chapter14#section-non-logical-connectives "14.14. Non-logical connectives"): a table of the meanings of JOI cmavo when used to connect sumti.

---

| The Complete Lojban Language |
| :--------------------------: |

|                                               |                                           |
| --------------------------------------------: | :---------------------------------------- |
| [Prev: Chapter 13](chapter13) | [Next: Chapter 15](chapter15) |

[Table of Contents](../)

[Book Info Page](http://www.lojban.org/cll)
