---
layout: ../layouts/Layout.astro
title: 'Chapter 15. “No” Problems: On Lojban Negation'
prev: chapter14
prevTitle: 'Prev: Chapter 14'
next: chapter16
nextTitle: 'Next: Chapter 16'
---

![The picture for chapter 15](../assets/chapter15.gif)

## Introductory

The grammatical expression of negation is a critical part of Lojban's claim to being logical. The problem of negation, simply put, is to come up with a complete definition of the word “not”. For Lojban's unambiguous grammar, this means further that meanings of “not” with different grammatical effect must be different words, and even different grammatical structures.

Logical assertions are implicitly required in a logical language; thus, an apparatus for expressing them is built into Lojban's logical connectives and other structures.

In natural languages, especially those of Indo-European grammar, we have sentences composed of two parts which are typically called “subject” and “predicate”. In the statement

### Example 15.1.

John goes to the store

“John” is the subject, and “goes to the store” is the predicate. Negating [Example 15.1](chapter15#example-random-id-vrXe "Example 15.1. ") to produce

### Example 15.2.

John doesn't go to the store.

has the effect of declaring that the predicate does not hold for the subject. [Example 15.2](chapter15#example-random-id-gm3I "Example 15.2. ") says nothing about whether John goes somewhere else, or whether someone else besides John goes to the store.

We will call this kind of negation “natural language negation”. This kind of negation is difficult to manipulate by the tools of logic, because it doesn't always follow the rules of logic. Logical negation is bi-polar: either a statement is true, or it is false. If a statement is false, then its negation must be true. Such negation is termed contradictory negation.

Let's look at some examples of how natural language negation can violate the rules of contradictory negation.

### Example 15.3.

Some animals are not white.

### Example 15.4.

Some animals are white.

Both of these statements are true; yet one is apparently the negation of the other. Another example:

### Example 15.5.

I mustn't go to the dance.

### Example 15.6.

I must go to the dance.

At first thought, [Example 15.5](chapter15#example-random-id-qgxL "Example 15.5. ") negates [Example 15.6](chapter15#example-random-id-qGXL "Example 15.6. "). Thinking further, we realize that there is an intermediate state wherein I am permitted to go to the dance, but not obligated to do so. Thus, it is possible that both statements are false.

Sometimes order is significant:

### Example 15.7.

The falling rock didn't kill Sam.

### Example 15.8.

Sam wasn't killed by the falling rock.

Our minds play tricks on us with this one. Because [Example 15.7](chapter15#example-random-id-qgyb "Example 15.7. ") is written in what is called the “active voice”, we immediately get confused about whether “the falling rock” is a suitable subject for the predicate “did kill Sam”. “Kill” implies volition to us, and rocks do not have volition. This confusion is employed by opponents of gun control who use the argument “Guns don't kill people; people kill people.”

Somehow, we don't have the same problem with [Example 15.8](chapter15#example-random-id-qGYX "Example 15.8. "). The subject is Sam, and we determine the truth or falsity of the statement by whether he was or wasn't killed by the falling rock.

[Example 15.8](chapter15#example-random-id-qGYX "Example 15.8. ") also helps us focus on the fact that there are at least two questionable facts implicit in this sentence: whether Sam was killed, and if so, whether the falling rock killed him. If Sam wasn't killed, the question of what killed him is moot.

This type of problem becomes more evident when the subject of the sentence turns out not to exist:

### Example 15.9.

The King of Mexico didn't come to dinner.

### Example 15.10.

The King of Mexico did come to dinner.

In the natural languages, we would be inclined to say that both of these statements are false, since there is no King of Mexico.

The rest of this chapter is designed to explain the Lojban model of negation.

## bridi negation

In discussing Lojban negation, we will call the form of logical negation that simply denies the truth of a statement “bridi negation”. Using bridi negation, we can say the equivalent of “I haven't stopped beating my wife” without implying that I ever started, nor even that I have a wife, meaning simply “It isn't true that I have stopped beating my wife.” Since Lojban uses bridi as smaller components of complex sentences, bridi negation is permitted in these components as well at the sentence level.

For the bridi negation of a sentence to be true, the sentence being negated must be false. A major use of bridi negation is in making a negative response to a yes/no question; such responses are usually contradictory, denying the truth of the entire sentence. A negative answer to

### Example 15.11.

Did you go to the store?

is taken as a negation of the entire sentence, equivalent to

### Example 15.12.

No, I didn't go to the store.

The most important rule about bridi negation is that if a bridi is true, its negation is false, and vice versa.

The simplest way to express a bridi negation is to use the cmavo _[na](glossary#valsi-na)_ of selma'o NA before the selbri of the affirmative form of the bridi (but after the _[cu](glossary#valsi-cu)_, if there is one):

### Example 15.13.

|    |       |     |        |
| -- | ----- | --- | ------ |
| mi | klama | le  | zarci  |
| I  | go-to | the | store. |

when negated becomes:

### Example 15.14.

|    |          |       |     |        |
| -- | -------- | ----- | --- | ------ |
| mi | na       | klama | le  | zarci  |
| I  | \[false] | go-to | the | store. |

Note that we have used a special convention to show in the English that a bridi negation is present. We would like to use the word “not”, because this highlights the naturalness of putting the negation marker just before the selbri, and makes the form easier to learn. But there is a major difference between Lojban's bridi negation with _[na](glossary#valsi-na)_ and natural language negation with “not”. In English, the word “not” can apply to a single word, to a phrase, to an English predicate, or to the entire sentence. In addition, “not” may indicate either contradictory negation or another form of negation, depending on the sentence. Lojban's internal bridi negation, on the other hand, always applies to an entire bridi, and is always a contradictory negation; that is, it contradicts the claim of the whole bridi.

Because of the ambiguity of English “not”, we will use “\[false]” in the translation of Lojban examples to remind the reader that we are expressing a contradictory negation. Here are more examples of bridi negation:

### Example 15.15.

|    |       |          |     |               |     |         |
| -- | ----- | -------- | --- | ------------- | --- | ------- |
| mi | \[cu] | na       | ca  | klama         | le  | zarci   |
| I  |       | \[false] | now | am-a-go-er-to | the | market. |

|                                   |
| --------------------------------- |
| I am not going to the market now. |

### Example 15.16.

|            |         |                  |    |
| ---------- | ------- | ---------------- | -- |
| lo         | ca      | nolraitru        | be |
| The-actual | present | noblest-governor | of |

|     |                |    |          |                  |
| --- | -------------- | -- | -------- | ---------------- |
| le  | fasygu'e       | cu | na       | krecau           |
| the | French-country |    | \[false] | is-hair-without. |

|                                        |
| -------------------------------------- |
| The current king of France isn't bald. |

### Example 15.17.

|      |          |          |        |         |               |      |
| ---- | -------- | -------- | ------ | ------- | ------------- | ---- |
| ti   | na       | barda    | prenu  | co      | melbi         | mi   |
| This | \[false] | is-a-big | person | of-type | (beautiful-to | me). |

|                                                 |
| ----------------------------------------------- |
| This isn't a big person who is beautiful to me. |

Although there is this fundamental difference between Lojban's internal bridi negation and English negation, we note that in many cases, especially when there are no existential or quantified variables (the cmavo _[da](glossary#valsi-da)_, _[de](glossary#valsi-de)_, and _[di](glossary#valsi-di)_ of selma'o KOhA, explained in [Chapter 16](chapter16 "Chapter 16. “Who Did You Pass On The Road? Nobody”: Lojban And Logic")) in the bridi, you can indeed translate Lojban _[na](glossary#valsi-na)_ as “not” (or “isn't” or “doesn't”, as appropriate).

The most important rule about bridi negation is that if a bridi is true, its negation is false, and vice versa.

In Lojban, there are several structures that implicitly contain bridi, so that Lojban sentences may contain more than one occurrence of _[na](glossary#valsi-na)_. For example:

### Example 15.18.

|    |          |                |     |          |
| -- | -------- | -------------- | --- | -------- |
| mi | na       | gleki          | le  | nu       |
| I  | \[false] | am-happy-about | the | event-of |

|           |          |     |          |           |
| --------- | -------- | --- | -------- | --------- |
| na        | klama    | le  | nu       | dansu     |
| (\[false] | going-to | the | event-of | dancing). |

|                                                                                              |
| -------------------------------------------------------------------------------------------- |
| It is not the case that I am happy about it not being the case that I am going to the dance. |
| I am not happy about not going to the dance.                                                 |

In the previous example, we used internal negations in abstraction bridi; bridi negation may also be found in descriptions within sumti. For example:

### Example 15.19.

|    |            |                      |           |             |
| -- | ---------- | -------------------- | --------- | ----------- |
| mi | nelci      | le                   | na        | melbi       |
| I  | am-fond-of | the-one-described-as | (\[false] | beautiful). |

|                                           |
| ----------------------------------------- |
| I am fond of the one who isn't beautiful. |

A more extreme (and more indefinite) example is:

### Example 15.20.

|    |            |            |           |
| -- | ---------- | ---------- | --------- |
| mi | nelci      | lo         | na        |
| I  | am-fond-of | one-who-is | (\[false] |

|             |           |    |     |                  |
| ----------- | --------- | -- | --- | ---------------- |
| ca          | nolraitru | be | le  | frasygu'e        |
| the-current | king      | of | the | French-country). |

|                                                        |
| ------------------------------------------------------ |
| I am fond of one who isn't the current king of France. |

The claim of [Example 15.20](chapter15#example-random-id-eQaI "Example 15.20. ") could apply to anyone except a person who is fond of no one at all, since the relation within the description is false for everyone. You cannot readily express these situations in colloquial English.

Negation with _[na](glossary#valsi-na)_ applies to an entire bridi, and not to just part of a selbri. Therefore, you won't likely have reason to put _[na](glossary#valsi-na)_ inside a tanru. In fact, the grammar currently does not allow you to do so (except in a lujvo and in elaborate constructs involving GUhA, the forethought connector for selbri). Any situation where you might want to do so can be expressed in a less-compressed non-tanru form. This grammatical restriction helps ensure that bridi negation is kept separate from other forms of negation.

The grammar of _[na](glossary#valsi-na)_ allows multiple adjacent negations, which cancel out, as in normal logic:

### Example 15.21.

|      |          |          |          |        |      |                  |      |
| ---- | -------- | -------- | -------- | ------ | ---- | ---------------- | ---- |
| ti   | na       | na       | barda    | prenu  | co   | melbi            | mi   |
| This | \[false] | \[false] | is-a-big | person | that | is-(beautiful-to | me). |

which is the same as:

### Example 15.22.

|      |          |        |      |                  |      |
| ---- | -------- | ------ | ---- | ---------------- | ---- |
| ti   | barda    | prenu  | co   | melbi            | mi   |
| This | is-a-big | person | that | is-(beautiful-to | me). |

When a selbri is tagged with a tense or a modal, negation with _[na](glossary#valsi-na)_ is permitted in two positions: before or after the tag. No semantic difference between these forms has yet been defined, but this is not finally determined, since the interactions between tenses/modals and bridi negation have not been fully explored. In particular, it remains to be seen whether sentences using less familiar tenses, such as:

### Example 15.23.

|    |       |            |       |     |         |
| -- | ----- | ---------- | ----- | --- | ------- |
| mi | \[cu] | ta'e       | klama | le  | zarci   |
| I  |       | habitually | go-to | the | market. |

mean the same thing with _[na](glossary#valsi-na)_ before the _[ta'e](glossary#valsi-tahe)_, as when the negation occurs afterwards; we'll let future, Lojban-speaking, logicians decide on how they relate to each other.

A final caution on translating English negations into Lojban: if you translate the English literally, you'll get the wrong one. With English causal statements, and other statements with auxiliary clauses, this problem is more likely.

Thus, if you translate the English:

### Example 15.24.

I do not go to the market because the car is broken.

as:

### Example 15.25.

|    |          |       |     |        |            |
| -- | -------- | ----- | --- | ------ | ---------- |
| mi | na       | klama | le  | zarci  | ki'u       |
| I  | \[false] | go-to | the | market | because-of |

|              |     |       |    |            |
| ------------ | --- | ----- | -- | ---------- |
| lenu         | le  | karce | cu | spofu      |
| the-event-of | the | car   |    | is-broken. |

|                                                                 |
| --------------------------------------------------------------- |
| It is false that: I go to the market because the car is broken. |

you end up negating too much.

Such mistranslations result from the ambiguity of English compounded by the messiness of natural language negation. A correct translation of the normal interpretation of [Example 15.24](chapter15#example-random-id-hEa7 "Example 15.24. ") is:

### Example 15.26.

|     |          |     |          |          |     |         |    |    |                 |
| --- | -------- | --- | -------- | -------- | --- | ------- | -- | -- | --------------- |
| le  | nu       | mi  | na       | klama    | le  | zarci   | cu | se | krinu           |
| The | event-of | (my | \[false] | going-to | the | market) |    |    | is-justified-by |

|     |          |      |       |    |                |
| --- | -------- | ---- | ----- | -- | -------------- |
| le  | nu       | le   | karce | cu | spofu          |
| the | event-of | (the | car   |    | being-broken). |

|                                                          |
| -------------------------------------------------------- |
| My not going to the market is because the car is broken. |

In [Example 15.26](chapter15#example-random-id-R3GU "Example 15.26. "), the negation is clearly confined to the event abstraction in the x1 sumti, and does not extend to the whole sentence. The English could also have been expressed by two separate sentences joined by a causal connective (which we'll not go into here).

The problem is not confined to obvious causals. In the English:

### Example 15.27.

I was not conscripted into the Army with the help of my uncle the Senator.

we do not intend the uncle's help to be part of the negation. We must thus move the negation into an event clause or use two separate sentences. The event-clause version would look like:

### Example 15.28.

The event-of (my \[false] being-conscripted-into the Army) was aided by my uncle the Senator.

It is possible that someone will want to incorporate bridi negations into lujvo. For this reason, the rafsi _-nar-_ has been reserved for _[na](glossary#valsi-na)_. However, before using this rafsi, make sure that you intend the contradictory bridi negation, and not the scalar negation described in [Section 15.3](chapter15#section-scalar-negation "15.3. Scalar Negation"), which will be much more common in tanru and lujvo.

## Scalar Negation

Let us now consider some other types of negation. For example, when we say:

### Example 15.29.

The chair is not brown.

we make a positive inference – that the chair is some other color. Thus, it is legitimate to respond:

### Example 15.30.

It is green.

Whether we agree that the chair is brown or not, the fact that the statement refers to color has significant effect on how we interpret some responses. If we hear the following exchange:

### Example 15.31.

The chair is not brown.

Correct. The chair is wooden.

we immediately start to wonder about the unusual wood that isn't brown. If we hear the exchange:

### Example 15.32.

Is the chair green?

No, it is in the kitchen.

we are unsettled because the response seems to be a non-sequitur. But since it might be true and it is a statement about the chair, one can't say it is entirely irrelevant!

What is going on in these statements is something called “scalar negation”. As the name suggests, scalar negation presumes an implied scale. A negation of this type not only states that one scalar value is false, but implies that another value on the scale must be true. This can easily lead to complications. The following exchange seems reasonably natural (a little suspension of disbelief in such inane conversation will help):

### Example 15.33.

That isn't a blue house.

Right! That is a green house.

We have acknowledged a scalar negation by providing a correct value which is another color in the set of colors permissible for houses. While a little less likely, the following exchange is also natural:

### Example 15.34.

That isn't a blue house.

Right! That is a blue car.

Again, we have acknowledged a scalar negation, and substituted a different object in the universe of discourse of things that can be blue.

Now, if the following exchange occurs:

### Example 15.35.

That isn't a blue house.

Right! That is a green car.

we find the result unsettling. This is because it seems that two corrections have been applied when there is only one negation. Yet out of context, “blue house” and “green car” seem to be reasonably equivalent units that should be mutually replaceable in a sentence. It's just that we don't have a clear way in English to say:

### Example 15.36.

That isn't a “blue-house”.

aloud so as to clearly imply that the scalar negation is affecting the pair of words as a single unit.

Another even more confusing example of scalar negation is to the sentence:

### Example 15.37.

John didn't go to Paris from Rome.

Might [Example 15.37](chapter15#example-random-id-JTrd "Example 15.37. ") imply that John went to Paris from somewhere else? Or did he go somewhere else from Rome? Or perhaps he didn't go anywhere at all: maybe someone else did, or maybe there was no event of going whatsoever. One can devise circumstances where any one, two or all three of these statements might be inferred by a listener.

In English, we have a clear way of distinguishing scalar negation from predicate negation that can be used in many situations. We can use the partial word “non-” as a prefix. But this is not always considered good usage, even though it would render many statements much clearer. For example, we can clearly distinguish

### Example 15.38.

That is a non-blue house.

from the related sentence

### Example 15.39.

That is a blue non-house.

[Example 15.38](chapter15#example-random-id-gN3C "Example 15.38. ") and [Example 15.39](chapter15#example-random-id-GtQC "Example 15.39. ") have the advantage that, while they contain a negative indication, they are in fact positive assertions. They say what is true by excluding the false; they do not say what is false.

We can't always use “non-” though, because of the peculiarities of English's grammar. It would sound strange to say:

### Example 15.40.

John went to non-Paris from Rome.

or

### Example 15.41.

John went to Paris from non-Rome.

although these would clarify the vague negation. Another circumlocution for English scalar negation is “other than”, which works where “non-” does not, but is wordier.

Finally, we have natural language negations that are called polar negations, or opposites:

### Example 15.42.

John is moral

### Example 15.43.

John is immoral

To be immoral is much more than to just be not moral: it implies the opposite condition. Statements like [Example 15.43](chapter15#example-random-id-qh3s "Example 15.43. ") are strong negations which not only deny the truth of a statement, but assert its opposite. Since, “opposite” implies a scale, polar negations are a special variety of scalar negations.

To examine this concept more closely, let us draw a linear scale, showing two examples of how the scale is used:

```text
  Affirmations (positive)      Negations (negative)
  |-----------|-----------|-----------|-----------|
  All       Most        Some         Few       None
  Excellent Good        Fair         Poor     Awful
```

Some scales are more binary than the examples we diagrammed. Thus we have “not necessary” or “unnecessary” being the polar opposite of necessary. Another scale, especially relevant to Lojban, is interpreted based on situations modified by one's philosophy: “not true” may be equated with “false” in a bi-valued truth-functional logic, while in tri-valued logic an intermediate between “true” and “false” is permitted, and in fuzzy logic a continuous scale exists from true to false. The meaning of “not true” requires a knowledge of which variety of truth scale is being considered.

We will define the most general form of scalar negation as indicating only that the particular point or value in the scale or range is not valid and that some other (unspecified) point on the scale is correct. This is the intent expressed in most contexts by “not mild”, for example.

Using this paradigm, contradictory negation is less restrictive than scalar negation – it says that the point or value stated is incorrect (false), and makes no statement about the truth of any other point or value, whether or not on the scale.

In English, scalar negation semantically includes phrases such as “other than”, “reverse of”, or “opposite from” expressions and their equivalents. More commonly, scalar negation is expressed in English by the prefixes “non-”, “un-”, “il-”, and “im-”. Just which form and permissible values are implied by a scalar negation is dependent on the semantics of the word or concept which is being negated, and on the context. Much confusion in English results from the uncontrolled variations in meaning of these phrases and prefixes.

In the examples of [Section 15.4](chapter15#section-nahe "15.4. selbri and tanru negation"), we will translate the general case of scalar negation using the general formula “other than” when a phrase is scalar-negated, and “non-” when a single word is scalar-negated.

## selbri and tanru negation

All the scalar negations illustrated in [Section 15.3](chapter15#section-scalar-negation "15.3. Scalar Negation") are expressed in Lojban using the cmavo _[na'e](glossary#valsi-nahe)_ (of selma'o NAhE). The most common use of _[na'e](glossary#valsi-nahe)_ is as a prefix to the selbri:

### Example 15.44.

|    |       |     |         |
| -- | ----- | --- | ------- |
| mi | klama | le  | zarci   |
| I  | go-to | the | market. |

### Example 15.45.

|    |             |        |     |         |
| -- | ----------- | ------ | --- | ------- |
| mi | na'e        | klama  | le  | zarci   |
| I  | (other-than | go-to) | the | market. |

Comparing these two, we see that the negation operator being used in [Example 15.45](chapter15#example-random-id-qH4n "Example 15.45. ") is _[na'e](glossary#valsi-nahe)_. But what exactly does _[na'e](glossary#valsi-nahe)_ negate? Does the negation include only the gismu _[klama](glossary#valsi-klama)_, which is the entire selbri in this case, or does it include the _le zarci_ as well? In Lojban, the answer is unambiguously “only the gismu”. The cmavo _[na'e](glossary#valsi-nahe)_ always applies only to what follows it.

[Example 15.45](chapter15#example-random-id-qH4n "Example 15.45. ") looks as if it were parallel to:

### Example 15.46.

|    |          |       |     |         |
| -- | -------- | ----- | --- | ------- |
| mi | na       | klama | le  | zarci   |
| I  | \[false] | go-to | the | market. |

but in fact there is no real parallelism at all. A negation using _[na](glossary#valsi-na)_ denies the truth of a relationship, but a selbri negation with _[na'e](glossary#valsi-nahe)_ asserts that a relationship exists other than that stated, one which specifically involves the sumti identified in the statement. The grammar allotted to _[na'e](glossary#valsi-nahe)_ allows us to unambiguously express scalar negations in terms of scope, scale, and range within the scale. Before we explain the scalar aspects, let us show how the scope of _[na'e](glossary#valsi-nahe)_ is determined.

In tanru, we may wish to negate an individual element before combining it with another to form the tanru. We in effect need a shorter-than-selbri-scope negation, for which we can use _[na'e](glossary#valsi-nahe)_ as well. The positive sentence

### Example 15.47.

|    |            |       |     |         |
| -- | ---------- | ----- | --- | ------- |
| mi | cadzu      | klama | le  | zarci   |
| I  | walking-ly | go-to | the | market. |

can be subjected to selbri negation in several ways. Two are:

### Example 15.48.

|    |             |            |       |     |         |
| -- | ----------- | ---------- | ----- | --- | ------- |
| mi | na'e        | cadzu      | klama | le  | zarci   |
| I  | (other-than | walkingly) | go-to | the | market. |

### Example 15.49.

|    |           |             |        |     |         |
| -- | --------- | ----------- | ------ | --- | ------- |
| mi | cadzu     | na'e        | klama  | le  | zarci   |
| I  | walkingly | (other-than | go-to) | the | market. |

These negations show the default scope of _[na'e](glossary#valsi-nahe)_ is close-binding on an individual brivla in a tanru. [Example 15.48](chapter15#example-random-id-qh4w "Example 15.48. ") says that I am going to the market, but in some kind of a non-walking manner. (As with most tanru, there are a few other possible interpretations, but we'll assume this one – see [Chapter 5](chapter05 "Chapter 5. “Pretty Little Girls' School”: The Structure Of Lojban selbri") for a discussion of tanru meaning).

In neither [Example 15.48](chapter15#example-random-id-qh4w "Example 15.48. ") nor [Example 15.49](chapter15#example-random-id-qH6w "Example 15.49. ") does the _[na'e](glossary#valsi-nahe)_ negate the entire selbri. While both sentences contain negations that deny a particular relationship between the sumti, they also have a component which makes a positive claim about such a relationship. This is clearer in [Example 15.48](chapter15#example-random-id-qh4w "Example 15.48. "), which says that I am going, but in a non-walking manner. In [Example 15.49](chapter15#example-random-id-qH6w "Example 15.49. "), we have claimed that the relationship between me and the market in some way involves walking, but is not one of “going to” (perhaps we are walking around the market, or walking-in-place while at the market).

The “scale”, or actually the “set”, implied in Lojban tanru negations is anything which plausibly can be substituted into the tanru. (Plausibility here is interpreted in the same way that answers to a _[mo](glossary#valsi-mo)_ question must be plausible – the result must not only have the right number of places and have sumti values appropriate to the place structure, it must also be appropriate or relevant to the context.) This minimal condition allows a speaker to be intentionally vague, while still communicating meaningful information. The speaker who uses selbri negation is denying one relationship, while minimally asserting a different relationship.

We also need a scalar negation form that has a scope longer than a single brivla. There exists such a longer-scope selbri negation form, as exemplified by (each Lojban sentence in the next several examples is given twice, with parentheses in the second copy showing the scope of the _[na'e](glossary#valsi-nahe)_):

### Example 15.50.

|    |            |     |           |       |          |     |         |
| -- | ---------- | --- | --------- | ----- | -------- | --- | ------- |
| mi | na'e       | ke  | cadzu     | klama | \[ke'e]  | le  | zarci   |
| mi | na'e       | (ke | cadzu     | klama | \[ke'e]) | le  | zarci   |
| I  | other-than | (   | walkingly | go-to | )        | the | market. |

This negation uses the same _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_ delimiters (the _[ke'e](glossary#valsi-kehe)_ is always elidable at the end of a selbri) that are used in tanru. The sentence clearly negates the entire selbri. The _[ke'e](glossary#valsi-kehe)_, whether elided or not, reminds us that the negation does not include the trailing sumti. While the trailing-sumti place-structure is defined as that of the final brivla, the trailing sumti themselves are not part of the selbri and are thus not negated by _[na'e](glossary#valsi-nahe)_.

Negations of just part of the selbri are also permitted:

### Example 15.51.

|    |            |     |         |           |       |       |     |         |
| -- | ---------- | --- | ------- | --------- | ----- | ----- | --- | ------- |
| mi | na'e       | ke  | sutra   | cadzu     | ke'e  | klama | le  | zarci   |
| mi | na'e       | (ke | sutra   | cadzu     | ke'e) | klama | le  | zarci   |
| I  | other-than | (   | quickly | walkingly | )     | go-to | the | market. |

In [Example 15.51](chapter15#example-random-id-PVct "Example 15.51. "), only the _sutra cadzu_ tanru is negated, so the speaker is indeed going to the market, but not by walking quickly.

Negations made with _[na'e](glossary#valsi-nahe)_ or _na'eke_ also include within their scope any sumti attached to the brivla or tanru with _[be](glossary#valsi-be)_ or _[bei](glossary#valsi-bei)_. Such attached sumti are considered part of the brivla or tanru:

### Example 15.52.

|    |            |    |         |         |    |     |       |         |
| -- | ---------- | -- | ------- | ------- | -- | --- | ----- | ------- |
| mi | na'e       | ke | sutra   | cadzu   | be | le  | mi    | birka   |
| I  | other-than | (  | quickly | walking | on | the | of-me | arms-ly |

|      |       |     |         |
| ---- | ----- | --- | ------- |
| ke'e | klama | le  | zarci   |
| )    | go-to | the | market. |

Note that [Example 15.53](chapter15#example-random-id-qh7T "Example 15.53. ") and [Example 15.54](chapter15#example-random-id-qH8J "Example 15.54. ") do not express the same thing:

### Example 15.53.

|    |            |     |         |         |          |      |       |
| -- | ---------- | --- | ------- | ------- | -------- | ---- | ----- |
| mi | na'e       | ke  | sutra   | cadzu   | \[ke'e]  | lemi | birka |
| mi | na'e       | (ke | sutra   | cadzu   | \[ke'e]) | lemi | birka |
| I  | other-than | (   | quickly | walk-on | )        | my   | arms. |

### Example 15.54.

|    |            |     |         |       |    |      |       |          |
| -- | ---------- | --- | ------- | ----- | -- | ---- | ----- | -------- |
| mi | na'e       | ke  | sutra   | cadzu | be | lemi | birka | \[ke'e]  |
| mi | na'e       | (ke | sutra   | cadzu | be | lemi | birka | \[ke'e]) |
| I  | other-than | (   | quickly | walk  | on | my   | arms  | ).       |

The translations show that the negation in [Example 15.53](chapter15#example-random-id-qh7T "Example 15.53. ") is more restricted in scope; i.e. less of the sentence is negated with respect to x1 (_[mi](glossary#valsi-mi)_).

Logical scope being an important factor in Lojban's claims to be unambiguous, let us indicate the relative precedence of _[na'e](glossary#valsi-nahe)_ as an operator. Grouping with _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_, of course, has an overt scope, which is its advantage. _[na'e](glossary#valsi-nahe)_ is very close binding to its brivla. Internal binding of tanru, with _[bo](glossary#valsi-bo)_, is not as tightly bound as _[na'e](glossary#valsi-nahe)_. _[co](glossary#valsi-co)_, the tanru inversion operator has a scope that is longer than all other tanru constructs.

In short, _[na'e](glossary#valsi-nahe)_ and _na'eke_ define a type of negation, which is shorter in scope than bridi negation, and which affects all or part of a selbri. The result of _[na'e](glossary#valsi-nahe)_ negation remains an assertion of some specific truth and not merely a denial of another claim.

The similarity becomes striking when it is noticed that the rafsi _-nal-_, representing _[na'e](glossary#valsi-nahe)_ when a tanru is condensed into a lujvo, forms an exact parallel to the English usage of _non-_. Turning a series of related negations into lujvo gives:

### Example 15.55.

- na'e klama becomes nalkla

- na'e cadzu klama becomes naldzukla

- na'e sutra cadzu klama becomes nalsu'adzukla

- nake sutra cadzu ke'e klama becomes nalsu'adzuke'ekla

Note: _-kem-_ is the rafsi for _[ke](glossary#valsi-ke)_, but it is omitted in the final lujvo as superfluous – _[ke'e](glossary#valsi-kehe)_ is its own rafsi, and its inclusion in the lujvo implies a _[ke](glossary#valsi-ke)_ after the _-nal-_, since it needs to close something; only a _[ke](glossary#valsi-ke)_ immediately after the negation would make the _[ke'e](glossary#valsi-kehe)_ meaningful in the tanru expressed in this lujvo.

In a lujvo, it is probably clearest to translate _-nal-_ as “non-”, to match the English combining forms, except when the _[na'e](glossary#valsi-nahe)_ has single word scope and English uses “un-” or “im-” to negate that single word. Translation style should determine the use of “other than”, “non-”, or another negator for _[na'e](glossary#valsi-nahe)_ in tanru; the translator must render the Lojban into English so it is clear in context. Let's go back to our simplest example:

### Example 15.56.

|    |            |         |     |         |
| -- | ---------- | ------- | --- | ------- |
| mi | na'e       | klama   | le  | zarci   |
| I  | other-than | (go-to) | the | market. |
| I  | not        | go-to   | the | market. |

### Example 15.57.

|    |                   |     |         |
| -- | ----------------- | --- | ------- |
| mi | nalkla            | le  | zarci   |
| I  | am-a-non-go-er-to | the | market. |

Note that to compare with the English translation form using “non-”, we've translated the Lojban as if the selbri were a noun. Since Lojban _[klama](glossary#valsi-klama)_ is indifferently a noun, verb, or adjective, the difference is purely a translation change, not a true change in meaning. The English difference seems significant, though, due to the strongly different English grammatical forms and the ambiguity of English negation.

Consider the following highly problematic sentence:

### Example 15.58.

|           |           |                  |
| --------- | --------- | ---------------- |
| lo        | ca        | nolraitru        |
| An-actual | currently | noblest-governor |

|    |     |                |    |                  |
| -- | --- | -------------- | -- | ---------------- |
| be | le  | fasygu'e       | cu | krecau           |
| of | the | French-country |    | is-hair-without. |

|                                     |
| ----------------------------------- |
| The current King of France is bald. |

The selbri _[krecau](glossary#valsi-krecau)_ negates with _[na'e](glossary#valsi-nahe)_ as:

### Example 15.59.

|           |           |                  |
| --------- | --------- | ---------------- |
| lo        | ca        | nolraitru        |
| An-actual | currently | noblest-governor |

|    |     |                |    |               |               |
| -- | --- | -------------- | -- | ------------- | ------------- |
| be | le  | fasygu'e       | cu | na'e          | krecau        |
| of | the | French-country |    | is-other-than | hair-without. |

|                                                |
| ---------------------------------------------- |
| The current King of France is other-than-bald. |

or, as a lujvo:

### Example 15.60.

|           |           |                  |
| --------- | --------- | ---------------- |
| lo        | ca        | nolraitru        |
| An-actual | currently | noblest-governor |

|    |     |                |    |                      |
| -- | --- | -------------- | -- | -------------------- |
| be | le  | fasygu'e       | cu | nalkrecau            |
| of | the | French-country |    | is-non-hair-without. |

|                                               |
| --------------------------------------------- |
| The current King of France is a non-bald-one. |

[Example 15.59](chapter15#example-random-id-2maY "Example 15.59. ") and [Example 15.60](chapter15#example-random-id-wGXL "Example 15.60. ") express the predicate negation forms using a negation word (_[na'e](glossary#valsi-nahe)_) or rafsi (_-nal-_); yet they make positive assertions about the current King of France; ie., that he is other-than-bald or non-bald. This follows from the close binding of _[na'e](glossary#valsi-nahe)_ to the brivla. The lujvo form makes this overt by absorbing the negative marker into the word.

Since there is no current King of France, it is false to say that he is bald, or non-bald, or to make any other affirmative claim about him. Any sentence about the current King of France containing only a selbri negation is as false as the sentence without the negation. No amount of selbri negations have any effect on the truth value of the sentence, which is invariably “false”, since no affirmative statement about the current King of France can be true. On the other hand, bridi negation does produce a truth:

### Example 15.61.

|           |         |                  |
| --------- | ------- | ---------------- |
| lo        | ca      | nolraitru        |
| An-actual | current | noblest-governor |

|    |     |                |    |          |                  |
| -- | --- | -------------- | -- | -------- | ---------------- |
| be | le  | fasygu'e       | cu | na       | krecau           |
| of | the | French-country |    | \[false] | is-hair-without. |

|                                                      |
| ---------------------------------------------------- |
| It is false that the current King of France is bald. |

Note: _[lo](glossary#valsi-lo)_ is used in these sentences because negation relates to truth conditions. To meaningfully talk about truth conditions in sentences carrying a description, it must be clear that the description actually applies to the referent. A sentence using _[le](glossary#valsi-le)_ instead of _[lo](glossary#valsi-lo)_ can be true even if there is no current king of France, as long as the speaker and the listener agree to describe something as the current king of France. (See the explanations of _[le](glossary#valsi-le)_ in [Section 6.2](chapter06#section-basic-descriptors "6.2. The three basic description types").)

## Expressing scales in selbri negation

In expressing a scalar negation, we can provide some indication of the scale, range, frame-of-reference, or universe of discourse that is being dealt with in an assertion. As stated in [Section 15.4](chapter15#section-nahe "15.4. selbri and tanru negation"), the default is the set of plausible alternatives. Thus if we say:

### Example 15.62.

|     |       |    |           |              |
| --- | ----- | -- | --------- | ------------ |
| le  | stizu | cu | na'e      | xunre        |
| The | chair |    | is-a-non- | (red-thing). |

the pragmatic interpretation is that we mean a different color and not

### Example 15.63.

|     |       |    |                |    |     |         |
| --- | ----- | -- | -------------- | -- | --- | ------- |
| le  | stizu | cu | dzukla         | be | le  | zarci   |
| The | chair |    | walkingly-goes | to | the | market. |

However, if we have reason to be more explicit (an obtuse or contrary listener, or simply an overt logical analysis), we can clarify that we are referring to a color by saying:

### Example 15.64.

|     |       |    |              |       |        |
| --- | ----- | -- | ------------ | ----- | ------ |
| le  | stizu | cu | na'e         | xunre | skari  |
| The | chair |    | (is-of-a-non | red)  | color. |

We might also have reduced the pragmatic ambiguity by making the two trailing sumti values explicit (the “as perceived by” and “under conditions” places have been added to the place structure of _[xunre](glossary#valsi-xunre)_). But assume we have a really stubborn listener (an artificially semi-intelligent computer?) who will find a way to misinterpret [Example 15.64](chapter15#example-random-id-yWSC "Example 15.64. ") even with three specific sumti provided.

In this case, we use a sumti tagged with the sumti tcita _[ci'u](glossary#valsi-cihu)_, which translates roughly as “on a scale of X”, where `X` is the sumti. For maximal clarity, the tagged sumti can be bound into the negated selbri with _[be](glossary#valsi-be)_. To clarify [Example 15.64](chapter15#example-random-id-yWSC "Example 15.64. "), we might say:

### Example 15.65.

|     |       |    |        |       |    |            |            |              |
| --- | ----- | -- | ------ | ----- | -- | ---------- | ---------- | ------------ |
| le  | stizu | cu | na'e   | xunre | be | ci'u       | loka       | skari        |
| The | chair |    | is-non | (red  | on | a-scale-of | a-property | color-ness). |

We can alternately use the sumti tcita _[teci'e](glossary#valsi-tecihe)_, based on _[ciste](glossary#valsi-ciste)_, which translates roughly as “of a system of components X”, for universes of discourse; in this case, we would express [Example 15.64](chapter15#example-random-id-yWSC "Example 15.64. ") as:

### Example 15.66.

|     |       |    |          |       |
| --- | ----- | -- | -------- | ----- |
| le  | stizu | cu | na'e     | xunre |
| The | chair |    | is-a-non | (red  |

|    |          |                     |                |
| -- | -------- | ------------------- | -------------- |
| be | teci'e   | le                  | skari          |
| of | a-system | with-components-the | colors)-thing. |

Other places of _[ciste](glossary#valsi-ciste)_ can be brought out using the grammar of selma'o BAI modals, allowing slightly different forms of expression, thus:

### Example 15.67.

|     |       |    |          |       |
| --- | ----- | -- | -------- | ----- |
| le  | stizu | cu | na'e     | xunre |
| The | chair |    | is-a-non | (red  |

|    |          |                     |                |
| -- | -------- | ------------------- | -------------- |
| be | ci'e     | lo'i                | skari          |
| of | a-system | which-is-the-set-of | colors)-thing. |

The cmavo _[le'a](glossary#valsi-leha)_, also in selma'o BAI, can be used to specify a category:

### Example 15.68.

|     |       |    |          |       |
| --- | ----- | -- | -------- | ----- |
| le  | stizu | cu | na'e     | xunre |
| The | chair |    | is-a-non | (red  |

|    |            |                     |                |
| -- | ---------- | ------------------- | -------------- |
| be | le'a       | lo'i                | skari          |
| of | a-category | which-is-the-set-of | colors)-thing. |

which is minimally different in meaning from [Example 15.67](chapter15#example-random-id-Rj71 "Example 15.67. ").

The cmavo _[na'e](glossary#valsi-nahe)_ is not the only member of selma'o NAhE. If we want to express a scalar negation which is a polar opposite, we use the cmavo _[to'e](glossary#valsi-tohe)_, which is grammatically equivalent to _[na'e](glossary#valsi-nahe)_:

### Example 15.69.

|     |       |    |                   |       |    |       |               |             |
| --- | ----- | -- | ----------------- | ----- | -- | ----- | ------------- | ----------- |
| le  | stizu | cu | to'e              | xunre | be | ci'u  | loka          | skari       |
| The | chair |    | is-a-(opposite-of | red)  | on | scale | a-property-of | color-ness. |

Likewise, the midpoint of a scale can be expressed with the cmavo _[no'e](glossary#valsi-nohe)_, also grammatically equivalent to _[na'e](glossary#valsi-nahe)_. Here are some parallel examples of _[na'e](glossary#valsi-nahe)_, _[no'e](glossary#valsi-nohe)_, and _[to'e](glossary#valsi-tohe)_:

### Example 15.70.

|      |               |
| ---- | ------------- |
| ta   | melbi         |
| That | is-beautiful. |

### Example 15.71.

|      |               |            |
| ---- | ------------- | ---------- |
| ta   | na'e          | melbi      |
| That | is-other-than | beautiful. |

|                               |
| ----------------------------- |
| That is ugly \[in one sense]. |

### Example 15.72.

|      |              |            |
| ---- | ------------ | ---------- |
| ta   | no'e         | melbi      |
| That | is-neutrally | beautiful. |

|                                                              |
| ------------------------------------------------------------ |
| That is plain/ordinary-looking (neither ugly nor beautiful). |

### Example 15.73.

|      |                |            |
| ---- | -------------- | ---------- |
| ta   | to'e           | melbi      |
| That | is-opposite-of | beautiful. |

|                                   |
| --------------------------------- |
| That is ugly/very ugly/repulsive. |

The cmavo _[to'e](glossary#valsi-tohe)_ has the assigned rafsi _-tol-_ and _-to'e-_; the cmavo _[no'e](glossary#valsi-nohe)_ has the assigned rafsi _-nor-_ and _-no'e-_. The selbri in [Example 15.71](chapter15#example-random-id-qh9U "Example 15.71. ") through [Example 15.73](chapter15#example-random-id-qHAV "Example 15.73. ") could be replaced by the lujvo _nalmle_, _normle_, and _[tolmle](glossary#valsi-tolmle)_ respectively.

This large variety of scalar negations is provided because different scales have different properties. Some scales are open-ended in both directions: there is no “ultimately ugly” or “ultimately beautiful”. Other scales, like temperature, are open at one end and closed at the other: there is a minimum temperature (so-called “absolute zero”) but no maximum temperature. Still other scales are closed at both ends.

Correspondingly, some selbri have no obvious _[to'e](glossary#valsi-tohe)_- what is the opposite of a dog? – while others have more than one, and need _[ci'u](glossary#valsi-cihu)_ to specify which opposite is meant.

## sumti negation

There are two ways of negating sumti in Lojban. We have the choice of quantifying the sumti with zero, or of applying the sumti-negator _na'ebo_ before the sumti. It turns out that a zero quantification serves for contradictory negation. As the cmavo we use implies, _na'ebo_ forms a scalar negation.

Let us show examples of each.

### Example 15.74.

|      |                  |           |                   |    |
| ---- | ---------------- | --------- | ----------------- | -- |
| no   | lo               | ca        | nolraitru         | be |
| Zero | of-those-who-are | currently | noblest-governors | of |

|     |                |    |                   |
| --- | -------------- | -- | ----------------- |
| le  | fasygu'e       | cu | krecau            |
| the | French-country |    | are-hair-without. |

|                                    |
| ---------------------------------- |
| No current king of France is bald. |

Is [Example 15.74](chapter15#example-random-id-PL1E "Example 15.74. ") true? Yes, because it merely claims that of the current Kings of France, however many there may be, none are bald, which is plainly true, since there are no such current Kings of France.

Now let us look at the same sentence using _na'ebo_ negation:

### Example 15.75.

|                      |      |         |                  |
| -------------------- | ---- | ------- | ---------------- |
| na'ebo               | lo   | ca      | nolraitru        |
| Something-other-than | (the | current | noblest-governor |

|    |     |                 |    |                  |
| -- | --- | --------------- | -- | ---------------- |
| be | le  | fasygu'e        | cu | krecau           |
| of | the | French-country) |    | is-hair-without. |

|                                                          |
| -------------------------------------------------------- |
| Something other than the current King of France is bald. |

[Example 15.75](chapter15#example-random-id-LebJ "Example 15.75. ") is true provided that something reasonably describable as “other than a current King of France”, such as the King of Saudi Arabia, or a former King of France, is in fact bald.

In place of _na'ebo_, you may also use _no'ebo_ and _to'ebo_, to be more specific about the sumti which would be appropriate in place of the stated sumti. Good examples are hard to come by, but here's a valiant try:

### Example 15.76.

|    |       |                 |            |         |
| -- | ----- | --------------- | ---------- | ------- |
| mi | klama | to'ebo          | la         | bastn.  |
| I  | go-to | the-opposite-of | that-named | Boston. |

|                |
| -------------- |
| I go to Perth. |

(Boston and Perth are nearly, but not quite, antipodal cities. In a purely United States context, San Francisco might be a better “opposite”.) Coming up with good examples is difficult, because attaching _to'ebo_ to a description sumti is usually the same as attaching _[to'e](glossary#valsi-tohe)_ to the selbri of the description.

It is not possible to transform sumti negations of either type into bridi negations or scalar selbri negations. Negations of sumti will be used in Lojban conversation. The inability to manipulate these negations logically will, it is hoped, prevent the logical errors that result when natural languages attempt corresponding manipulations.

## Negation of minor grammatical constructs

We have a few other constructs that can be negated, all of them based on negating individual words. For such negation, we use the suffix-combining negator, which is _[nai](glossary#valsi-nai)_. _[nai](glossary#valsi-nai)_, by the way, is almost always written as a compound into the previous word that it is negating, although it is a regular separate-word cmavo and the sole member of selma'o NAI.

Most of these negation forms are straightforward, and should be discussed and interpreted in connection with an analysis of the particular construct being negated. Thus, we will not go into much detail here.

The following are places where _[nai](glossary#valsi-nai)_ is used:

When attached to tenses and modals (see [Section 9.13](chapter09#section-modal-negation "9.13. Modal negation"), [Section 10.9](chapter10#section-interval-properties "10.9. Interval properties: TAhE and roi"), [Section 10.18](chapter10#section-tense-negation "10.18. Tense negation") and [Section 10.20](chapter10#section-connected-tenses "10.20. Logical and non-logical connections between tenses")), the _[nai](glossary#valsi-nai)_ suffix usually indicates a contradictory negation of the tagged bridi. Thus _punai_ as a tense inflection means “not-in-the-past”, or “not-previously”, without making any implication about any other time period unless explicitly stated. As a result,

### Example 15.77.

|    |          |         |       |     |        |
| -- | -------- | ------- | ----- | --- | ------ |
| mi | na       | pu      | klama | le  | zarci  |
| I  | \[false] | \[past] | go-to | the | store. |

|                           |
| ------------------------- |
| I didn't go to the store. |

and

### Example 15.78.

|    |             |       |     |        |
| -- | ----------- | ----- | --- | ------ |
| mi | punai       | klama | le  | zarci  |
| I  | \[past-not] | go-to | the | store. |

|                           |
| ------------------------- |
| I didn't go to the store. |

mean exactly the same thing, although there may be a difference of emphasis.

Tenses and modals can be logically connected, with the logical connectives containing contradictory negations; this allows negated tenses and modals to be expressed positively using logical connectives. Thus _punai je ca_ means the same thing as _pu naje ca_.

As a special case, a _-nai_ attached to the interval modifiers of selma'o TAhE, ROI, or ZAhO (explained in [Chapter 10](chapter10 "Chapter 10. Imaginary Journeys: The Lojban Space/Time Tense System")) signals a scalar negation:

### Example 15.79.

|    |                |          |     |       |
| -- | -------------- | -------- | --- | ----- |
| mi | paroinai       | dansu    | le  | bisli |
| I  | \[once]-\[not] | dance-on | the | ice   |

means that I dance on the ice either zero or else two or more times within the relevant time interval described by the bridi. [Example 15.79](chapter15#example-random-id-4YYQ "Example 15.79. ") is very different from the English use of “not once”, which is an emphatic way of saying “never” – that is, exactly zero times.

In indicators and attitudinals of selma'o UI or CAI, _[nai](glossary#valsi-nai)_ denotes a polar negation. As discussed in [Section 13.4](chapter13#section-intensity-scale "13.4. Attitudes as scales"), most indicators have an implicit scale, and _[nai](glossary#valsi-nai)_ changes the indicator to refer to the opposite end of the scale. Thus _[.uinai](glossary#valsi-uinai)_ expresses unhappiness, and _[.ienai](glossary#valsi-ienai)_ expresses disagreement (not ambivalence, which is expressed with the neutral or undecided intensity as _.iecu'i_).

Vocative cmavo of selma'o COI are considered a kind of indicator, but one which identifies the listener. Semantically, we could dispense with about half of the COI selma'o words based on the scalar paradigm. For example, _[co'o](glossary#valsi-coho)_ could be expressed as _coinai_. However, this is not generally done.

Most of the COI cmavo are used in what are commonly called protocol situations. These protocols are used, for example, in radio conversations, which often take place in a noisy environment. The negatives of protocol words tend to convey diametrically opposite communications situations (as might be expected). Therefore, only one protocol vocative is dependent on _[nai](glossary#valsi-nai)_: negative acknowledgement, which is _[je'enai](glossary#valsi-jehenai)_ (“I didn't get that”).

Unlike the attitudinal indicators, which tend to be unimportant in noisy situations, the protocol vocatives become more important. So if, in a noisy environment, a protocol listener makes out only _[nai](glossary#valsi-nai)_, he or she can presume it is a negative acknowledgement and repeat transmission or otherwise respond accordingly. [Section 13.14](chapter13#section-vocative-scales "13.14. Vocative scales") provides more detail on this topic.

The abstractors of selma'o NU follow the pattern of the tenses and modals. NU allows negative abstractions, especially in compound abstractions connected by logical connectives: _su'ujeninai_, which corresponds to _su'u jenai ni_ just as _punai je ca_ corresponds to _pu naje ca_. It is not clear how much use logically connected abstractors will be: see [Section 11.12](chapter11#section-abstractor-connection "11.12. Abstractor connection").

A _[nai](glossary#valsi-nai)_ attached to a non-logical connective (of selma'o JOI or BIhI) is a scalar negation, and says that the bridi is false under the specified mixture, but that another connective is applicable. Non-logical connectives are discussed in [Section 14.14](chapter14#section-non-logical-connectives "14.14. Non-logical connectives").

## Truth questions

One application of negation is in answer to truth questions (those which expect the answers “Yes” or “No”). The truth question cmavo _[xu](glossary#valsi-xu)_ is in selma'o UI; placed at the beginning of a sentence, it asks whether the sentence as a whole is true or false.

### Example 15.80.

|                  |             |       |            |         |
| ---------------- | ----------- | ----- | ---------- | ------- |
| xu               | la          | djan. | pu         | klama   |
| Is-it-true-that: | (that-named | John  | previously | went-to |

|            |        |     |            |        |
| ---------- | ------ | --- | ---------- | ------ |
| la         | paris. | .e  | la         | rom.   |
| that-named | Paris  | and | that-named | Rome.) |

You can now use each of the several kinds of negation we've discussed in answer to this (presuming the same question and context for each answer).

The straightforward negative answer is grammatically equivalent to the expanded sentence with the _[na](glossary#valsi-na)_ immediately after the _[cu](glossary#valsi-cu)_ (and before any tense/modal):

### Example 15.81.

|          |                    |
| -------- | ------------------ |
| na       | go'i               |
| \[false] | \[repeat-previous] |

|     |
| --- |
| No. |

which means

### Example 15.82.

|            |       |          |            |         |       |
| ---------- | ----- | -------- | ---------- | ------- | ----- |
| la         | djan. | \[cu]    | na         | pu      | klama |
| That-named | John  | \[false] | previously | went-to |       |

|            |        |     |            |       |
| ---------- | ------ | --- | ---------- | ----- |
| la         | paris. | .e  | la         | rom.  |
| that-named | Paris  | and | that-named | Rome. |

|                                                 |
| ----------------------------------------------- |
| It's not true that John went to Paris and Rome. |

The respondent can change the tense, putting the _[na](glossary#valsi-na)_ in either before or after the new tense:

### Example 15.83.

|          |           |                    |
| -------- | --------- | ------------------ |
| na       | ba        | go'i               |
| \[false] | \[future] | \[repeat-previous] |

meaning

### Example 15.84.

|            |       |       |          |       |            |
| ---------- | ----- | ----- | -------- | ----- | ---------- |
| la         | djan. | \[cu] | na       | ba    | klama      |
| That-named | John  |       | \[false] | later | will-go-to |

|            |        |     |            |       |
| ---------- | ------ | --- | ---------- | ----- |
| la         | paris. | .e  | la         | rom.  |
| that-named | Paris  | and | that-named | Rome. |

|                                                  |
| ------------------------------------------------ |
| It is false that John will go to Paris and Rome. |

or alternatively

### Example 15.85.

|           |          |                    |
| --------- | -------- | ------------------ |
| ba        | na       | go'i               |
| \[future] | \[false] | \[repeat-previous] |

meaning

### Example 15.86.

|            |       |       |            |          |
| ---------- | ----- | ----- | ---------- | -------- |
| la         | djan. | \[cu] | ba         | na       |
| that-named | John  |       | later-will | \[false] |

|       |            |        |     |            |       |
| ----- | ---------- | ------ | --- | ---------- | ----- |
| klama | la         | paris. | .e  | la         | rom.  |
| go-to | that-named | Paris  | and | that-named | Rome. |

We stated in [Section 15.3](chapter15#section-scalar-negation "15.3. Scalar Negation") that sentences like [Example 15.84](chapter15#example-random-id-Fn2c "Example 15.84. ") and [Example 15.86](chapter15#example-random-id-2SK0 "Example 15.86. ") appear to be semantically identical, but that subtle semantic distinctions may eventually be found.

You can also use a scalar negation with _[na'e](glossary#valsi-nahe)_, in which case, it is equivalent to putting a _na'eke_ immediately after any tense:

### Example 15.87.

|            |                    |
| ---------- | ------------------ |
| na'e       | go'i               |
| other-than | \[repeat-previous] |

which means

### Example 15.88.

|            |       |       |            |             |         |         |
| ---------- | ----- | ----- | ---------- | ----------- | ------- | ------- |
| la         | djan. | \[cu] | pu         | na'eke      | klama   | \[ke'e] |
| that-named | John  |       | previously | other-than( | went-to | )       |

|            |        |     |            |       |
| ---------- | ------ | --- | ---------- | ----- |
| la         | paris. | .e  | la         | rom.  |
| that-named | Paris  | and | that-named | Rome. |

He might have telephoned the two cities instead of going there. The unnecessary _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_ would have been essential if the selbri had been a tanru.

## Affirmations

There is an explicit positive form for both selma'o NA (_[je'a](glossary#valsi-jeha)_), each of which would supplant the corresponding negator in the grammatical position used, allowing one to assert the positive in response to a negative question or statement without confusion. Assuming the same context as in [Section 15.8](chapter15#section-truth-questions "15.8. Truth questions"):

### Example 15.89.

|                 |          |                     |
| --------------- | -------- | ------------------- |
| xu              | na       | go'i                |
| Is-it-true-that | \[false] | \[repeat-previous]? |

or equivalently

### Example 15.90.

|                  |            |       |       |          |            |
| ---------------- | ---------- | ----- | ----- | -------- | ---------- |
| xu               | la         | djan. | \[cu] | na       | pu         |
| Is-it-true-that: | that-named | John  |       | \[false] | previously |

|         |           |        |     |            |       |
| ------- | --------- | ------ | --- | ---------- | ----- |
| klama   | la        | paris. | .e  | la         | rom.  |
| went-to | that-name | Paris  | and | that-named | Rome. |

The obvious, but incorrect, positive response to this negative question is:

### Example 15.91.

|      |
| ---- |
| go'i |

|                    |
| ------------------ |
| \[repeat-previous] |

A plain _[go'i](glossary#valsi-gohi)_ does not mean “Yes it is”; it merely abbreviates repeating the previous statement unmodified, including any negators present; and [Example 15.91](chapter15#example-random-id-F3LE "Example 15.91. ") actually states that it is false that John went to both Paris and Rome.

When considering:

### Example 15.92.

|          |                    |
| -------- | ------------------ |
| na       | go'i               |
| \[false] | \[repeat-previous] |

as a response to a negative question like [Example 15.90](chapter15#example-random-id-8VCt "Example 15.90. "), Lojban designers had to choose between two equally plausible interpretations with opposite effects. Does [Example 15.92](chapter15#example-random-id-Pgrw "Example 15.92. ") create a double negative in the sentence by adding a new _[na](glossary#valsi-na)_ to the one already there (forming a double negative and hence a positive statement), or does the _[na](glossary#valsi-na)_ replace the previous one, leaving the sentence unchanged?

It was decided that substitution, the latter alternative, is the preferable choice, since it is then clear whether we intend a positive or a negative sentence without performing any manipulations. This is the way English usually works, but not all languages work this way – Russian, Japanese, and Navajo all interpret a negative reply to a negative question as positive.

The positive assertion cmavo of selma'o NA, which is "ja'a", can also replace the _[na](glossary#valsi-na)_ in the context, giving:

### Example 15.93.

|         |                    |
| ------- | ------------------ |
| ja'a    | go'i               |
| \[true] | \[repeat-previous] |

|                                |
| ------------------------------ |
| John did go to Paris and Rome. |

_[ja'a](glossary#valsi-jaha)_ can replace _[na](glossary#valsi-na)_ in a similar manner wherever the latter is used:

### Example 15.94.

|    |         |       |     |       |
| -- | ------- | ----- | --- | ----- |
| mi | ja'a    | klama | le  | zarci |
| I  | \[true] | go-to | the | store |

|                           |
| ------------------------- |
| I indeed go to the store. |

_[je'a](glossary#valsi-jeha)_ can replace _[na'e](glossary#valsi-nahe)_ in exactly the same way, stating that scalar negation does not apply, and that the relation indeed holds as stated. In the absence of a negation context, it emphasizes the positive:

### Example 15.95.

|      |           |            |
| ---- | --------- | ---------- |
| ta   | je'a      | melbi      |
| that | is-indeed | beautiful. |

## Metalinguistic negation forms

The question of truth or falsity is not entirely synonymous with negation. Consider the English sentence

### Example 15.96.

I have not stopped beating my wife.

If I never started such a heinous activity, then this sentence is neither true nor false. Such a negation simply says that something is wrong with the non-negated statement. Generally, we then use either tone of voice or else a correction to express a preferred true claim: “I never have beaten my wife.”

Negations which follow such a pattern are called “metalinguistic negations”. In natural languages, the mark of metalinguistic negation is that an indication of a correct statement always, or almost always, follows the negation. Tone of voice or emphasis may be further used to clarify the error.

Negations of every sort must be expressible in Lojban; errors are inherent to human thought, and are not excluded from the language. When such negations are metalinguistic, we must separate them from logical claims about the truth or falsity of the statement, as well as from scalar negations which may not easily express (or imply) the preferred claim. Because Lojban allows concepts to be so freely combined in tanru, limits on what is plausible or not plausible tend to be harder to determine.

Mimicking the muddled nature of natural language negation would destroy this separation. Since Lojban does not use tone of voice, we need other means to metalinguistically indicate what is wrong with a statement. When the statement is entirely inappropriate, we need to be able to express metalinguistic negation in a more non-specific fashion.

Here is a list of some different kinds of metalinguistic negation with English-language examples:

### Example 15.97.

I have not _stopped_ beating my wife

(I never started – failure of presupposition).

### Example 15.98.

5 is not blue

(color does not apply to abstract concepts – failure of category).

### Example 15.99.

The current King of France is not bald.

(there is no current King of France – existential failure)

### Example 15.100.

I do not have THREE children.

(I have two – simple undue quantity)

### Example 15.101.

I have not held THREE jobs previously, but four.

(inaccurate quantity; the difference from the previous example is that someone who has held four jobs has also held three jobs)

### Example 15.102.

It is not good, but bad.

(undue quantity negation indicating that the value on a scale for measuring the predicate is incorrect)

### Example 15.103.

She is not PRETTY; she is beautiful.

(undue quantity transferred to a non-numeric scale)

### Example 15.104.

The house is not blue, but green.

(the scale/category being used is incorrect, but a related category applies)

### Example 15.105.

The house is not blue, but is colored.

(the scale/category being used is incorrect, but a broader category applies)

### Example 15.106.

The cat is not blue, but long-haired.

(the scale/category being used is incorrect, but an unrelated category applies)

### Example 15.107.

A: He ain't coming today.

B: “Ain't” ain't a word.

(solecism, or improper grammatical action)

### Example 15.108.

I haven't STOOPED beating my wife; I've STOPPED.

(spelling or mispronunciation error)

### Example 15.109.

Not only was it a sheep, it was a black sheep.

(non-contradictory correction)

The set of possible metalinguistic errors is open-ended.

Many of these forms have a counterpart in the various examples that we've discussed under logical negation. Metalinguistic negation doesn't claim that the sentence is false or true, though. Rather, it claims that, due to some error in the statement, “true” and “false” don't really apply.

Because one can metalinguistically negate a true statement intending a non-contradictory correction (say, a spelling error); we need a way (or ways) to metalinguistically negate a statement which is independent of our logical negation schemes using _[na](glossary#valsi-na)_, _[na'e](glossary#valsi-nahe)_ and kin. The cmavo _[na'i](glossary#valsi-nahi)_ is assigned this function. If it is present in a statement, it indicates metalinguistically that something in the statement is incorrect. This metalinguistic negation must override any evaluation of the logic of the statement. It is equally allowed in both positive and negative statements.

Since _[na'i](glossary#valsi-nahi)_ is not a logical operator, multiple occurrences of _[na'i](glossary#valsi-nahi)_ need not be assumed to cancel each other. Indeed, we can use the position of _[na'i](glossary#valsi-nahi)_ to indicate metalinguistically what is incorrect, preparatory to correcting it in a later sentence; for this reason, we give _[na'i](glossary#valsi-nahi)_ the grammar of UI. The inclusion of _[na'i](glossary#valsi-nahi)_ anywhere in a sentence makes it a non-assertion, and suggests one or more pitfalls in assigning a truth value.

Let us briefly indicate how the above-mentioned metalinguistic errors can be identified. Other metalinguistic problems can then be marked by devising analogies to these examples:

Existential failure can be marked by attaching _[na'i](glossary#valsi-nahi)_ to the descriptor _[lo](glossary#valsi-lo)_ or the _[poi](glossary#valsi-poi)_ in a _da poi_-form sumti. (See [Section 6.2](chapter06#section-basic-descriptors "6.2. The three basic description types") and [Section 16.4](chapter16#section-restricted-claims "16.4. Restricted claims: da poi") for details on these constructions.) Remember that if a _[le](glossary#valsi-le)_ sumti seems to refer to a non-existent referent, you may not understand what the speaker has in mind – the appropriate response is then _[ki'a](glossary#valsi-kiha)_, asking for clarification.

Presupposition failure can be marked directly if the presupposition is overt; if not, one can insert a “mock presupposition” to question with the sumti tcita (selma'o BAI) word _[ji'u](glossary#valsi-jihu)_; _ji'uku_ thus explicitly refers to an unexpressed assumption, and _ji'una'iku_ metalinguistically says that something is wrong with that assumption. (See [Chapter 9](chapter09 "Chapter 9. To Boston Via The Road Go I, With An Excursion Into The Land Of Modals").)

Scale errors and category errors can be similarly expressed with selma'o BAI. _[le'a](glossary#valsi-leha)_ has meaning “of category/class/type X”, _[ci'u](glossary#valsi-cihu)_ has meaning “on scale X”, and _[ci'e](glossary#valsi-cihe)_, based on _[ciste](glossary#valsi-ciste)_, can be used to talk about universes of discourse defined either as systems or sets of components, as shown in [Section 15.8](chapter15#section-truth-questions "15.8. Truth questions"). _[kai](glossary#valsi-kai)_ and _[la'u](glossary#valsi-lahu)_ also exist in BAI for discussing other quality and quantity errors.

We have to make particular note of potential problems in the areas of undue quantity and incorrect scale/category. Assertions about the relationships between gismu are among the basic substance of the language. It is thus invalid to logically require that if something is blue, that it is colored, or if it is not-blue, then it is some other color. In Lojban, _[blanu](glossary#valsi-blanu)_ (“blue”) is not explicitly defined as a _[skari](glossary#valsi-skari)_ (“color”). Similarly, it is not implicit that the opposite of “good” is “bad”.

This mutual independence of gismu is only an ideal. Pragmatically, people will categorize things based on their world-views. We will write dictionary definitions that will relate gismu, unfortunately including some of these world-view assumptions. Lojbanists should try to minimize these assumptions, but this seems a likely area where logical rules will break down (or where Sapir-Whorf effects will be made evident). In terms of negation, however, it is vital that we clearly preserve the capability of denying a presumably obvious scale or category assumption.

Solecisms, grammatical and spelling errors will be marked by marking the offending word or phrase with _[na'i](glossary#valsi-nahi)_ (in the manner of any selma'o UI cmavo). In this sense, _[na'i](glossary#valsi-nahi)_ becomes equivalent to the English metalinguistic marker “\[sic]”. Purists may choose to use ZOI or LOhU/LEhU quotes or _[sa'a](glossary#valsi-saha)_-marked corrections to avoid repeating a truly unparsable passage, especially if a computer is to analyze the speech/text. See [Section 19.12](chapter19#section-parentheses "19.12. Parenthesis and metalinguistic commentary: TO, TOI, SEI") for explanations of these usages.

In summary, metalinguistic negation will typically take the form of referring to a previous statement and marking it with one or more _[na'i](glossary#valsi-nahi)_ to indicate what metalinguistic errors have been made, and then repeating the statement with corrections. References to previous statements may be full repetitions, or may use members of selma'o GOhA. _[na'i](glossary#valsi-nahi)_ at the beginning of a statement merely says that something is inappropriate about the statement, without specificity.

In normal use, metalinguistic negation requires that a corrected statement follow the negated statement. In Lojban, however, it is possible to completely and unambiguously specify metalinguistic errors without correcting them. It will eventually be seen whether an uncorrected metalinguistic negation remains an acceptable form in Lojban. In such a statement, metalinguistic expression would involve an ellipsis not unlike that of tenseless expression.

Note that metalinguistic negation gives us another kind of legitimate negative answer to a _[xu](glossary#valsi-xu)_ question (see [Section 15.8](chapter15#section-truth-questions "15.8. Truth questions")). _[na'i](glossary#valsi-nahi)_ will be used when something about the questioned statement is inappropriate, such as in questions like “Have you stopped beating your wife?”:

### Example 15.110.

|                  |     |       |                 |
| ---------------- | --- | ----- | --------------- |
| xu               | do  | sisti | lezu'o          |
| is-it-true-that: | you | cease | the-activity-of |

|     |                |      |                |
| --- | -------------- | ---- | -------------- |
| do  | rapydarxi      | ledo | fetspe         |
| you | repeat-hitting | your | female-spouse? |

|                                     |
| ----------------------------------- |
| Have you stopped beating your wife? |

Responses could include:

### Example 15.111.

|                            |                    |
| -------------------------- | ------------------ |
| na'i                       | go'i               |
| \[metalinguistic-negation] | \[repeat-previous] |

|                                                    |
| -------------------------------------------------- |
| The bridi as a whole is inappropriate in some way. |

### Example 15.112.

|                    |                            |
| ------------------ | -------------------------- |
| go'i               | na'i                       |
| \[repeat-previous] | \[metalinguistic-negation] |

|                                                                               |
| ----------------------------------------------------------------------------- |
| The selbri (_[sisti](glossary#valsi-sisti)_) is inappropriate in some way. |

One can also specifically qualify the metalinguistic negation, by explicitly repeating the erroneous portion of the bridi to be metalinguistically negated, or adding on of the selma'o BAI qualifiers mentioned above:

### Example 15.113.

|                    |                         |
| ------------------ | ----------------------- |
| go'i               | ji'una'iku              |
| \[repeat-previous] | \[presupposition-wrong] |

|                                                       |
| ----------------------------------------------------- |
| Some presupposition is wrong with the previous bridi. |

Finally, one may metalinguistically affirm a bridi with _[jo'a](glossary#valsi-joha)_, another cmavo of selma'o UI. A common use for _[jo'a](glossary#valsi-joha)_ might be to affirm that a particular construction, though unusual or counterintuitive, is in fact correct; another usage would be to disagree with – by overriding – a respondent's metalinguistic negation.

## Summary – Are All Possible Questions About Negation Now Answered?

### Example 15.114.

na go'i .ije na'e go'i .ije na'i go'i

