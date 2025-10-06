---
layout: ../layouts/Layout.astro
title: 'Chapter 12. Dog House And White House: Determining lujvo Place Structures'
prev: chapter11
prevTitle: 'Prev: Chapter 11'
next: chapter13
nextTitle: 'Next: Chapter 13'
---

![The picture for chapter 12](../assets/chapter12.gif)

## Why have lujvo?

The Lojban vocabulary is founded on its list of 1350-plus gismu, made up by combining word lists from various sources. These gismu are not intended to be either a complete vocabulary for the language nor a minimal list of semantic primitives. Instead, the gismu list serves as a basis for the creation of compound words, or lujvo. The intention is that (except in certain semantically broad but shallow fields such as cultures, nations, foods, plants, and animals) suitable lujvo can be devised to cover the ten million or so concepts expressible in all the world's languages taken together. Grammatically, lujvo behave just like gismu: they have place structures and function as selbri.

There is a close relationship between lujvo and tanru. In fact, lujvo are condensed forms of tanru:

### Example 12.1.

|      |    |       |        |
| ---- | -- | ----- | ------ |
| ti   |    | fagri | festi  |
| That | is | fire  | waste. |

contains a tanru which can be reduced to the lujvo in:

### Example 12.2.

|      |                |
| ---- | -------------- |
| ti   | fagyfesti      |
| That | is-fire-waste. |
| That | is-ashes.      |

Although the lujvo _[fagyfesti](glossary#valsi-fagyfesti)_ is derived from the tanru _fagri festi_, it is not equivalent in meaning to it. In particular, _[fagyfesti](glossary#valsi-fagyfesti)_ has a distinct place structure of its own, not the same as that of _[festi](glossary#valsi-festi)_. (In contrast, the tanru does have the same place structure as _[festi](glossary#valsi-festi)_.) The lujvo needs to take account of the places of _[fagri](glossary#valsi-fagri)_ as well. When a tanru is made into a lujvo, there is no equivalent of _[be'o](glossary#valsi-beho)_ (described in [Section 5.7](chapter05#section-be-sumti "5.7. Linked sumti: be-bei-be'o")) to incorporate sumti into the middle of the lujvo.

So why have lujvo? Primarily to reduce semantic ambiguity. On hearing a tanru, there is a burden on the listener to figure out what the tanru might mean. Adding further terms to the tanru reduces ambiguity in one sense, by providing more information; but it increases ambiguity in another sense, because there are more and more tanru joints, each with an ambiguous significance. Since lujvo, like other brivla, have a fixed place structure and a single meaning, encapsulating a commonly-used tanru into a lujvo relieves the listener of the burden of creative understanding. In addition, lujvo are typically shorter than the corresponding tanru.

There are no absolute laws fixing the place structure of a newly created lujvo. The maker must consider the place structures of all the components of the tanru and then decide which are still relevant and which can be removed. What is said in this chapter represents guidelines, presented as one possible standard, not necessarily complete, and not the only possible standard. There may well be lujvo that are built without regard for these guidelines, or in accordance with entirely different guidelines, should such alternative guidelines someday be developed. The reason for presenting any guidelines at all is so that Lojbanists have a starting point for deciding on a likely place structure – one that others seeing the same word can also arrive at by similar consideration.

If the tanru includes connective cmavo such as _[bo](glossary#valsi-bo)_, _[ke](glossary#valsi-ke)_, _[ke'e](glossary#valsi-kehe)_, or _[je](glossary#valsi-je)_, or conversion or abstraction cmavo such as _[se](glossary#valsi-se)_ or _[nu](glossary#valsi-nu)_, there are ways of incorporating them into the lujvo as well. Sometimes this makes the lujvo excessively long; if so, the cmavo may be dropped. This leads to the possibility that more than one tanru could produce the same lujvo. Typically, however, only one of the possible tanru is useful enough to justify making a lujvo for it.

The exact workings of the lujvo-making algorithm, which takes a tanru built from gismu (and possibly cmavo) and produces a lujvo from it, are described in [Section 4.11](chapter04#section-lujvo-making "4.11. The lujvo-making algorithm").

## The meaning of tanru: a necessary detour

The meaning of a lujvo is controlled by – but is not the same as – the meaning of the tanru from which the lujvo was constructed. The tanru corresponding to a lujvo is called its _[veljvo](glossary#valsi-veljvo)_ in Lojban, and since there is no concise English equivalent, that term will be used in this chapter. Furthermore, the left (modifier) part of a tanru will be called the _[seltau](glossary#valsi-seltau)_, and the right (modified) part the _[tertau](glossary#valsi-tertau)_, following the usage of [Chapter 5](chapter05 "Chapter 5. “Pretty Little Girls' School”: The Structure Of Lojban selbri"). For brevity, we will speak of the seltau or tertau of a lujvo, meaning of course the seltau or tertau of the veljvo of that lujvo. (If this terminology is confusing, substituting “modifier” for _[seltau](glossary#valsi-seltau)_ and “modified” for _[tertau](glossary#valsi-tertau)_ may help.)

The place structure of a tanru is always the same as the place structure of its tertau. As a result, the meaning of the tanru is a modified version of the meaning of the tertau; the tanru will typically, but not always, refer to a subset of the things referred to by the tertau.

The purpose of a tanru is to join concepts together without necessarily focusing on the exact meaning of the seltau. For example, in the _Iliad_, the poet talks about “the wine-dark sea”, in which “wine” is a seltau relative to “dark”, and the pair of words is a seltau relative to “sea”. We're talking about the sea, not about wine or color. The other words are there to paint a scene in the listener's mind, in which the real action will occur, and to evoke relations to other sagas of the time similarly describing the sea. Logical inferences about wine or color will be rejected as irrelevant.

As a simple example, consider the rather non-obvious tanru _klama zdani_, or “goer-house”. The gismu _[zdani](glossary#valsi-zdani)_ has two places:

### Example 12.3.

> x1 is a nest/house/lair/den for inhabitant x2

(but in this chapter we will use simply “house”, for brevity), and the gismu _[klama](glossary#valsi-klama)_ has five:

### Example 12.4.

> x1 goes to destination x2 from origin point x3 via route x4 using means x5

The tanru _klama zdani_ will also have two places, namely those of _[zdani](glossary#valsi-zdani)_. Since a _klama zdani_ is a type of _[zdani](glossary#valsi-zdani)_, we can assume that all goer-houses – whatever they may be – are also houses.

But is knowing the places of the tertau everything that is needed to understand the meaning of a tanru? No. To see why, let us switch to a less unlikely tanru: _gerku zdani_, literally “dog house”. A tanru expresses a very loose relation: a _gerku zdani_ is a house that has something to do with some dog or dogs. What the precise relation might be is left unstated. Thus, the meaning of _lo gerku zdani_ can include all of the following: houses occupied by dogs, houses shaped by dogs, dogs which are also houses (e.g. houses for fleas), houses named after dogs, and so on. All that is essential is that the place structure of _[zdani](glossary#valsi-zdani)_ continues to apply.

For something (call it z1) to qualify as a _gerku zdani_ in Lojban, it's got to be a house, first of all. For it to be a house, it's got to house someone (call that z2). Furthermore, there's got to be a dog somewhere (called g1). For g1 to count as a dog in Lojban, it's got to belong to some breed as well (called g2). And finally, for z1 to be in the first place of _gerku zdani_, as opposed to just _[zdani](glossary#valsi-zdani)_, there's got to be some relationship (called r) between some place of _[zdani](glossary#valsi-zdani)_ and some place of _[gerku](glossary#valsi-gerku)_. It doesn't matter which places, because if there's a relationship between some place of _[zdani](glossary#valsi-zdani)_ and any place of _[gerku](glossary#valsi-gerku)_, then that relationship can be compounded with the relationship between the places of _[gerku](glossary#valsi-gerku)_- namely, _[gerku](glossary#valsi-gerku)_ itself – to reach any of the other _[gerku](glossary#valsi-gerku)_ places. Thus, if the relationship turns out to be between z2 and g2, we can still state r in terms of z1 and g1: “the relationship involves the dog g1, whose breed has to do with the occupant of the house z1”.

Doubtless to the relief of the reader, here's an illustration. We want to find out whether the White House (the one in which the U. S. President lives, that is) counts as a _gerku zdani_. We go through the five variables. The White House is the z1. It houses Bill Clinton as z2, as of this writing, so it counts as a _[zdani](glossary#valsi-zdani)_. Let's take a dog – say, Spot (g1). Spot has to have a breed; let's say it's a Saint Bernard (g2). Now, the White House counts as a _gerku zdani_ if there is any relationship (r) at all between the White House and Spot. (We'll choose the g1 and z1 places to relate by r; we could have chosen any other pair of places, and simply gotten a different relationship.)

The sky is the limit for r; it can be as complicated as “The other day, g1 (Spot) chased Socks, who is owned by Chelsea Clinton, who is the daughter of Bill Clinton, who lives in z1 (the White House)” or even worse. If no such r can be found, well, you take another dog, and keep going until no more dogs can be found. Only then can we say that the White House cannot fit into the first place of _gerku zdani_.

As we have seen, no less than five elements are involved in the definition of _gerku zdani_: the house, the house dweller, the dog, the dog breed (everywhere a dog goes in Lojban, a dog breed follows), and the relationship between the house and the dog. Since tanru are explicitly ambiguous in Lojban, the relationship r cannot be expressed within a tanru (if it could, it wouldn't be a tanru any more!) All the other places, however, can be expressed – thus:

### Example 12.5.

|            |       |       |    |          |    |        |            |       |
| ---------- | ----- | ----- | -- | -------- | -- | ------ | ---------- | ----- |
| la         | blabi | zdani | cu | gerku    | be | fa     | la         | spot. |
| That-named | White | House |    | is-a-dog | (  | namely | that-named | Spot  |

|          |            |        |          |      |
| -------- | ---------- | ------ | -------- | ---- |
| bei      | la         | sankt. | berNARD. | be'o |
| of-breed | that-named | Saint  | Bernard  | )    |

|                   |            |      |          |
| ----------------- | ---------- | ---- | -------- |
| zdani             | la         | bil. | klinton. |
| type-of-house-for | that-named | Bill | Clinton. |

Not the most elegant sentence ever written in either Lojban or English. Yet if there is any relation at all between Spot and the White House, [Example 12.5](chapter12#example-random-id-tUDa "Example 12.5. ") is arguably true. If we concentrate on just one type of relation in interpreting the tanru _gerku zdani_, then the meaning of _gerku zdani_ changes. So if we understand _gerku zdani_ as having the same meaning as the English word “doghouse”, the White House would no longer be a _gerku zdani_ with respect to Spot, because as far as we know Spot does not actually live in the White House, and the White House is not a doghouse (derogatory terms for incumbents notwithstanding).

## The meaning of lujvo

This is a fairly long way to go to try and work out how to say “doghouse”! The reader can take heart; we're nearly there. Recall that one of the components involved in fixing the meaning of a tanru – the one left deliberately vague – is the precise relation between the tertau and the seltau. Indeed, fixing this relation is tantamount to giving an interpretation to the ambiguous tanru.

A lujvo is defined by a single disambiguated instance of a tanru. That is to say, when we try to design the place structure of a lujvo, we don't need to try to discover the relation between the tertau and the seltau. We already know what kind of relation we're looking for; it's given by the specific need we wish to express, and it determines the place structure of the lujvo itself.

Therefore, it is generally not appropriate to simply devise lujvo and decide on place structures for them without considering one or more specific usages for the coinage. If one does not consider specifics, one will be likely to make erroneous generalizations on the relationship r.

The insight driving the rest of this chapter is this: while the relation expressed by a tanru can be very distant (e.g. Spot chasing Socks, above), the relationship singled out for disambiguation in a lujvo should be quite close. This is because lujvo-making, paralleling natural language compounding, picks out the most salient relationship r between a tertau place and a seltau place to be expressed in a single word. The relationship “dog chases cat owned by daughter of person living in house” is too distant, and too incidental, to be likely to need expression as a single short word; the relationship “dog lives in house” is not. From all the various interpretations of _gerku zdani_, the person creating _[gerzda](glossary#valsi-gerzda)_ should pick the most useful value of r. The most useful one is usually going to be the most obvious one, and the most obvious one is usually the closest one.

In fact, the relationship will almost always be so close that the predicate expressing r will be either the seltau or the tertau predicate itself. This should come as no surprise, given that a word like _[zdani](glossary#valsi-zdani)_ in Lojban is a predicate. Predicates express relations; so when you're looking for a relation to tie together _le zdani_ and _le gerku_, the most obvious relation to pick is the very relation named by the tertau, _[zdani](glossary#valsi-zdani)_: the relation between a home and its dweller. As a result, the object which fills the first place of _[gerku](glossary#valsi-gerku)_ (the dog) also fills the second place of _[zdani](glossary#valsi-zdani)_ (the house-dweller).

The seltau-tertau relationship in the veljvo is expressed by the seltau or tertau predicate itself. Therefore, at least one of the seltau places is going to be equivalent to a tertau place. This place is thus redundant, and can be dropped from the place structure of the lujvo. As a corollary, the precise relationship between the veljvo components can be implicitly determined by finding one or more places to overlap in this way.

So what is the place structure of _[gerzda](glossary#valsi-gerzda)_? We're left with three places, since the dweller, the _se zdani_, turned out to be identical to the dog, the _[gerku](glossary#valsi-gerku)_. We can proceed as follows:

(The notation introduced casually in [Section 12.2](chapter12#section-tanru-meanings "12.2. The meaning of tanru: a necessary detour") will be useful in the rest of this chapter. Rather than using the regular x1, x2, etc. to represent places, we'll use the first letter of the relevant gismu in place of the “x”, or more than one letter where necessary to resolve ambiguities. Thus, z1 is the first place of _[zdani](glossary#valsi-zdani)_, and g2 is the second place of _[gerku](glossary#valsi-gerku)_.)

The place structure of _[zdani](glossary#valsi-zdani)_ is given as [Example 12.3](chapter12#example-random-id-xcfi "Example 12.3. "), but is repeated here using the new notation:

### Example 12.6.

> z1 is a nest/house/lair/den of z2

The place structure of _[gerku](glossary#valsi-gerku)_ is:

### Example 12.7.

> g1 is a dog of breed g2

But z2 is the same as g1; therefore, the tentative place structure for _[gerzda](glossary#valsi-gerzda)_ now becomes:

### Example 12.8.

> z1 is a house for dweller z2 of breed g2

which can also be written

### Example 12.9.

> z1 is a house for dog g1 of breed g2

or more comprehensively

### Example 12.10.

> z1 is a house for dweller/dog z2=g1 of breed g2

Despite the apparently conclusive nature of [Example 12.10](chapter12#example-random-id-Wx42 "Example 12.10. "), our task is not yet done: we still need to decide whether any of the remaining places should also be eliminated, and what order the lujvo places should appear in. These concerns will be addressed in the remainder of the chapter; but we are now equipped with the terminology needed for those discussions.

## Selecting places

The set of places of an ordinary lujvo are selected from the places of its component gismu. More precisely, the places of such a lujvo are derived from the set of places of the component gismu by eliminating unnecessary places, until just enough places remain to give an appropriate meaning to the lujvo. In general, including a place makes the concept expressed by a lujvo more general; excluding a place makes the concept more specific, because omitting the place requires assuming a standard value or range of values for it.

It would be possible to design the place structure of a lujvo from scratch, treating it as if it were a gismu, and working out what arguments contribute to the notion to be expressed by the lujvo. There are two reasons arguing against doing so and in favor of the procedure detailed in this chapter.

The first is that it might be very difficult for a hearer or reader, who has no preconceived idea of what concept the lujvo is intended to convey, to work out what the place structure actually is. Instead, he or she would have to make use of a lujvo dictionary every time a lujvo is encountered in order to work out what a _se jbopli_ or a _te klagau_ is. But this would mean that, rather than having to learn just the 1300-odd gismu place structures, a Lojbanist would also have to learn myriads of lujvo place structures with little or no apparent pattern or regularity to them. The purpose of the guidelines documented in this chapter is to apply regularity and to make it conventional wherever possible.

The second reason is related to the first: if the veljvo of the lujvo has not been properly selected, and the places for the lujvo are formulated from scratch, then there is a risk that some of the places formulated may not correspond to any of the places of the gismu used in the veljvo of the lujvo. If that is the case – that is to say, if the lujvo places are not a subset of the veljvo gismu places – then it will be very difficult for the hearer or reader to understand what a particular place means, and what it is doing in that particular lujvo. This is a topic that will be further discussed in [Section 12.14](chapter12#section-anomalous-lujvo "12.14. Anomalous lujvo").

However, second-guessing the place structure of the lujvo is useful in guiding the process of subsequently eliminating places from the veljvo. If the Lojbanist has an idea of what the final place structure should look like, he or she should be able to pick an appropriate veljvo to begin with, in order to express the idea, and then to decide which places are relevant or not relevant to expressing that idea.

## Symmetrical and asymmetrical lujvo

A common pattern, perhaps the most common pattern, of lujvo-making creates what is called a “symmetrical lujvo”. A symmetrical lujvo is one based on a tanru interpretation such that the first place of the seltau is equivalent to the first place of the tertau: each component of the tanru characterizes the same object. As an illustration of this, consider the lujvo _[balsoi](glossary#valsi-balsoi)_: it is intended to mean “both great and a soldier”- that is, “great soldier”, which is the interpretation we would tend to give its veljvo, _banli sonci_. The underlying gismu place structures are:

### Example 12.11.

> _[banli](glossary#valsi-banli)_ b1 is great in property b2 by standard b3
> _[sonci](glossary#valsi-sonci)_ s1 is a soldier of army s2

In this case the s1 place of _[sonci](glossary#valsi-sonci)_ is redundant, since it is equivalent to the b1 place of _[banli](glossary#valsi-banli)_. Therefore the place structure of _[balsoi](glossary#valsi-balsoi)_ need not include places for both s1 and b1, as they refer to the same thing. So the place structure of _[balsoi](glossary#valsi-balsoi)_ is at most

### Example 12.12.

> b1=s1 is a great soldier of army s2 in property b2 by standard b3

Some symmetrical veljvo have further equivalent places in addition to the respective first places. Consider the lujvo _[tinju'i](glossary#valsi-tinjuhi)_, “to listen” (“to hear attentively, to hear and pay attention”). The place structures of the gismu _[tirna](glossary#valsi-tirna)_ and _[jundi](glossary#valsi-jundi)_ are:

### Example 12.13.

> _[tirna](glossary#valsi-tirna)_ t1 hears sound t2 against background noise t3
> _[jundi](glossary#valsi-jundi)_ j1 pays attention to j2

and the place structure of the lujvo is:

### Example 12.14.

> j1=t1 listens to j2=t2 against background noise t3

Why so? Because not only is the j1 place (the one who pays attention) equivalent to the t1 place (the hearer), but the j2 place (the thing paid attention to) is equivalent to the t2 place (the thing heard).

_[gerku](glossary#valsi-gerku)_ in this case is equivalent to a place other than the first place of the tertau; such lujvo are said to be “asymmetrical”. (There is a deliberate parallel here with the terms “asymmetrical tanru” and “symmetrical tanru” used in [Chapter 5](chapter05 "Chapter 5. “Pretty Little Girls' School”: The Structure Of Lojban selbri").)

In principle any asymmetrical lujvo could be expressed as a symmetrical lujvo. Consider _[gerzda](glossary#valsi-gerzda)_, discussed in [Section 12.3](chapter12#section-lujvo-meanings "12.3. The meaning of lujvo"), where we learned that the g1 place was equivalent to the z2 place. In order to get the places aligned, we could convert _[zdani](glossary#valsi-zdani)_ to _se zdani_ (or _selzda_ when expressed as a lujvo). The place structure of _selzda_ is

### Example 12.15.

> s1 is housed by nest s2

and so the three-part lujvo _gerselzda_ would have the place structure

### Example 12.16.

> s1=g1 is a dog housed in nest s2 of dog breed g2

However, although _gerselzda_ is a valid lujvo, it doesn't translate “doghouse”; its first place is the dog, not the doghouse. Furthermore, it is more complicated than necessary; _[gerzda](glossary#valsi-gerzda)_ is simpler than _gerselzda_.

From the reader's or listener's point of view, it may not always be obvious whether a newly met lujvo is symmetrical or asymmetrical, and if the latter, what kind of asymmetrical lujvo. If the place structure of the lujvo isn't given in a dictionary or elsewhere, then plausibility must be applied, just as in interpreting tanru.

The lujvo _[karcykla](glossary#valsi-karcykla)_, for example, is based on _karce klama_, or “car goer”. The place structure of _[karce](glossary#valsi-karce)_ is:

### Example 12.17.

> _karce_: ka1 is a car carrying ka2 propelled by ka3

A asymmetrical interpretation of _[karcykla](glossary#valsi-karcykla)_ that is strictly analogous to the place structure of _[gerzda](glossary#valsi-gerzda)_, equating the kl2 (destination) and ka1 (car) places, would lead to the place structure

### Example 12.18.

> kl1 goes to car kl2=ka1 which carries ka2 propelled by ka3 from origin kl3 via route kl4 by means of kl5

But in general we go about in cars, rather than going to cars, so a far more likely place structure treats the ka1 place as equivalent to the kl5 place, leading to

### Example 12.19.

> kl1 goes to destination kl2 from origin kl3 via route kl4 by means of car kl5=ka1 carrying ka2 propelled by ka3.

instead.

## Dependent places

In order to understand which places, if any, should be completely removed from a lujvo place structure, we need to understand the concept of dependent places. One place of a brivla is said to be dependent on another if its value can be predicted from the values of one or more of the other places. For example, the g2 place of _[gerku](glossary#valsi-gerku)_ is dependent on the g1 place. Why? Because when we know what fits in the g1 place (Spot, let us say, a well-known dog), then we know what fits in the g2 place (“St. Bernard”, let us say). In other words, when the value of the g1 place has been specified, the value of the g2 place is determined by it. Conversely, since each dog has only one breed, but each breed contains many dogs, the g1 place is not dependent on the g2 place; if we know only that some dog is a St. Bernard, we cannot tell by that fact alone which dog is meant.

For _[zdani](glossary#valsi-zdani)_, on the other hand, there is no dependency between the places. When we know the identity of a house-dweller, we have not determined the house, because a dweller may dwell in more than one house. By the same token, when we know the identity of a house, we do not know the identity of its dweller, for a house may contain more than one dweller.

The rule for eliminating places from a lujvo is that dependent places provided by the seltau are eliminated. Therefore, in _[gerzda](glossary#valsi-gerzda)_ the dependent g2 place is removed from the tentative place structure given in [Example 12.10](chapter12#example-random-id-Wx42 "Example 12.10. "), leaving the place structure:

### Example 12.20.

> z1 is the house dwelt in by dog z2=g1

Informally put, the reason this has happened – and it happens a lot with seltau places – is that the third place was describing not the doghouse, but the dog who lives in it. The sentence

### Example 12.21.

|            |      |        |                  |            |       |
| ---------- | ---- | ------ | ---------------- | ---------- | ----- |
| la         | mon. | rePOS. | gerzda           | la         | spat. |
| That-named | Mon  | Repos  | is-a-doghouse-of | that-named | Spot. |

really means

### Example 12.22.

|            |      |        |               |            |       |     |           |
| ---------- | ---- | ------ | ------------- | ---------- | ----- | --- | --------- |
| la         | mon. | rePOS. | zdani         | la         | spat. | noi | gerku     |
| That-named | Mon  | Repos  | is-a-house-of | that-named | Spot, | who | is-a-dog. |

since that is the interpretation we have given _[gerzda](glossary#valsi-gerzda)_ But that in turn means

### Example 12.23.

|            |      |        |               |            |       |
| ---------- | ---- | ------ | ------------- | ---------- | ----- |
| la         | mon. | rePOS. | zdani         | la         | spat  |
| That-named | Mon  | Repos  | is-a-house-of | that-named | Spot, |

|          |          |                       |
| -------- | -------- | --------------------- |
| noi ke'a | gerku    | zo'e                  |
| who      | is-a-dog | of-unspecified-breed. |

Specifically,

### Example 12.24.

|            |      |        |               |            |       |
| ---------- | ---- | ------ | ------------- | ---------- | ----- |
| la         | mon. | rePOS. | zdani         | la         | spat. |
| That-named | Mon  | Repos  | is-a-house-of | that-named | Spot, |

|          |                   |            |        |          |
| -------- | ----------------- | ---------- | ------ | -------- |
| noi ke'a | gerku             | la         | sankt. | berNARD. |
| who      | is-a-dog-of-breed | that-named | St.    | Bernard. |

and in that case, it makes little sense to say

### Example 12.25.

|            |      |        |                  |            |       |          |          |
| ---------- | ---- | ------ | ---------------- | ---------- | ----- | -------- | -------- |
| la         | mon. | rePOS. | gerzda           | la         | spat. | noi ke'a | gerku    |
| That-named | Mon  | Repos  | is-a-doghouse-of | that-named | Spot, | who      | is-a-dog |

|          |            |        |          |      |
| -------- | ---------- | ------ | -------- | ---- |
|          | la         | sankt. | berNARD. | ku'o |
| of-breed | that-named | St.    | Bernard, |      |

|          |            |        |          |
| -------- | ---------- | ------ | -------- |
|          | la         | sankt. | berNARD. |
| of-breed | that-named | St.    | Bernard. |

employing the over-ample place structure of [Example 12.10](chapter12#example-random-id-Wx42 "Example 12.10. "). The dog breed is redundantly given both in the main selbri and in the relative clause, and (intuitively speaking) is repeated in the wrong place, since the dog breed is supplementary information about the dog, and not about the doghouse.

As a further example, take _[cakcinki](glossary#valsi-cakcinki)_, the lujvo for “beetle”, based on the tanru _calku cinki_, or “shell-insect”. The gismu place structures are:

### Example 12.26.

> _[calku](glossary#valsi-calku)_: ca1 is a shell/husk around ca2 made of ca3
> _[cinki](glossary#valsi-cinki)_: ci1 is an insect/arthropod of species ci2

This example illustrates a cross-dependency between a place of one gismu and a place of the other. The ca3 place is dependent on ci1, because all insects (which fit into ci1) have shells made of chitin (which fits into ca3). Furthermore, ca1 is dependent on ci1 as well, because each insect has only a single shell. And since ca2 (the thing with the shell) is equivalent to ci1 (the insect), the place structure is

### Example 12.27.

> ci1=ca2 is a beetle of species ci2

with not a single place of _[calku](glossary#valsi-calku)_ surviving independently!(Note that there is nothing in this explanation that tells us just why _[cakcinki](glossary#valsi-cakcinki)_ means “beetle” (member of Coleoptera), since all insects in their adult forms have chitin shells of some sort. The answer, which is in no way predictable, is that the shell is a prominent, highly noticeable feature of beetles in particular.)What about the dependency of ci2 on ci1? After all, no beetle belongs to more than one species, so it would seem that the ci2 place of _[cakcinki](glossary#valsi-cakcinki)_ could be eliminated on the same reasoning that allowed us to eliminate the g2 place of _[gerzda](glossary#valsi-gerzda)_ above. However, it is a rule that dependent places are not eliminated from a lujvo when they are derived from the tertau of its veljvo. This rule is imposed to keep the place structures of lujvo from drifting too far from the tertau place structure; if a place is necessary in the tertau, it's treated as necessary in the lujvo as well.

In general, the desire to remove places coming from the tertau is a sign that the veljvo selected is simply wrong. Different place structures imply different concepts, and the lujvo maker may be trying to shoehorn the wrong concept into the place structure of his or her choosing. This is obvious when someone tries to shoehorn a _[klama](glossary#valsi-klama)_ tertau into a _[litru](glossary#valsi-litru)_ or _[cliva](glossary#valsi-cliva)_ concept, for example: these gismu differ in their number of arguments, and suppressing places of _[klama](glossary#valsi-klama)_ in a lujvo doesn't make any sense if the resulting modified place structure is that of _[litru](glossary#valsi-litru)_ or _[cliva](glossary#valsi-cliva)_.

Sometimes the dependency is between a single place of the tertau and the whole event described by the seltau. Such cases are discussed further in [Section 12.13](chapter12#section-implicit-abstraction "12.13. Implicit-abstraction lujvo").

Unfortunately, not all dependent places in the seltau can be safely removed: some of them are necessary to interpreting the lujvo's meaning in context. It doesn't matter much to a doghouse what breed of dog inhabits it, but it can make quite a lot of difference to the construction of a school building what kind of school is in it! Music schools need auditoriums and recital rooms, elementary schools need playgrounds, and so on: therefore, the place structure of _[kuldi'u](glossary#valsi-kuldihu)_ (from _ckule dinju_, and meaning “school building”) needs to be

### Example 12.28.

> d1 is a building housing school c1 teaching subject c3 to audience c4

even though c3 and c4 are plainly dependent on c1. The other places of _[ckule](glossary#valsi-ckule)_, the location (c2) and operators (c5), don't seem to be necessary to the concept “school building”, and are dependent on c1 to boot, so they are omitted. Again, the need for case-by-case consideration of place structures is demonstrated.

## Ordering lujvo places.

So far, we have concentrated on selecting the places to go into the place structure of a lujvo. However, this is only half the story. In using selbri in Lojban, it is important to remember the right order of the sumti. With lujvo, the need to attend to the order of sumti becomes critical: the set of places selected should be ordered in such a way that a reader unfamiliar with the lujvo should be able to tell which place is which.

If we aim to make understandable lujvo, then, we should make the order of places in the place structure follow some conventions. If this does not occur, very real ambiguities can turn up. Take for example the lujvo _[jdaselsku](glossary#valsi-jdaselsku)_, meaning “prayer”. In the sentence

### Example 12.29.

|                |             |                    |            |       |
| -------------- | ----------- | ------------------ | ---------- | ----- |
| di'e           | jdaselsku   |                    | la         | dong. |
| This-utterance | is-a-prayer | somehow-related-to | that-named | Dong. |

we must be able to know if Dong is the person making the prayer, giving the meaning

### Example 12.30.

> This is a prayer by Dong

or is the entity being prayed to, resulting in

### Example 12.31.

> This is a prayer to Dong

We could resolve such problems on a case-by-case basis for each lujvo ([Section 12.14](chapter12#section-anomalous-lujvo "12.14. Anomalous lujvo") discusses when this is actually necessary), but case-by-case resolution for run-of-the-mill lujvo makes the task of learning lujvo place structures unmanageable. People need consistent patterns to make sense of what they learn. Such patterns can be found across gismu place structures (see [Section 12.16](chapter12#section-gismu-place-structures "12.16. Notes on gismu place structures")), and are even more necessary in lujvo place structures. Case-by-case consideration is still necessary; lujvo creation is a subtle art, after all. But it is helpful to take advantage of any available regularities.

We use two different ordering rules: one for symmetrical lujvo and one for asymmetrical ones. A symmetrical lujvo like _[balsoi](glossary#valsi-balsoi)_ (from [Section 12.5](chapter12#section-symmetrical-asymmetrical "12.5. Symmetrical and asymmetrical lujvo")) has the places of its tertau followed by whatever places of the seltau survive the elimination process. For _[balsoi](glossary#valsi-balsoi)_, the surviving places of _[banli](glossary#valsi-banli)_ are b2 and b3, leading to the place structure:

### Example 12.32.

> b1=s1 is a great soldier of army s2 in property b2 by standard b3

just what appears in [Example 12.11](chapter12#example-random-id-7AFc "Example 12.11. "). In fact, all place structures shown until now have been in the correct order by the conventions of this section, though the fact has been left tacit until now\.

The motivation for this rule is the parallelism between the lujvo bridi-schema

### Example 12.33.

|    |                    |            |                |                |
| -- | ------------------ | ---------- | -------------- | -------------- |
| b1 | balsoi             | s2         | b2             | b3             |
| b1 | is-a-great-soldier | of-army-s2 | in-property-b2 | by-standard-b3 |

and the more or less equivalent bridi-schema

### Example 12.34.

|    |              |            |      |          |                |                |
| -- | ------------ | ---------- | ---- | -------- | -------------- | -------------- |
| b1 | sonci        | s2         | gi'e | banli    | b2             | b3             |
| b1 | is-a-soldier | of-army-s2 | and  | is-great | in-property-b2 | by-standard-b3 |

where _[gi'e](glossary#valsi-gihe)_ is the Lojban word for “and” when placed between two partial bridi, as explained in [Section 14.9](chapter14#section-compound-bridi "14.9. Compound bridi").

Asymmetrical lujvo like _[gerzda](glossary#valsi-gerzda)_, on the other hand, employ a different rule. The seltau places are inserted not at the end of the place structure, but rather immediately after the tertau place which is equivalent to the first place of the seltau. Consider _[dalmikce](glossary#valsi-dalmikce)_, meaning “veterinarian”: its veljvo is _danlu mikce_, or “animal doctor”. The place structures for those gismu are:

### Example 12.35.

_[danlu](glossary#valsi-danlu)_: d1 is an animal of species d2_[mikce](glossary#valsi-mikce)_: m1 is a doctor to patient m2 for ailment m3 using treatment m4and the lujvo place structure is:

### Example 12.36.

> m1 is a doctor for animal m2=d1 of species d2 for ailment m3 using treatment m4

Since the shared place is m2=d1, the animal patient, the remaining seltau place d2 is inserted immediately after the shared place; then the remaining tertau places form the last two places of the lujvo.

## lujvo with more than two parts.

The theory we have outlined so far is an account of lujvo with two parts. But often lujvo are made containing more than two parts. An example is _[bavlamdei](glossary#valsi-bavlamdei)_, “tomorrow”: it is composed of the rafsi for “future”, “adjacent”, and “day”. How does the account we have given apply to lujvo like this?The best way to approach such lujvo is to continue to classify them as based on binary tanru, the only difference being that the seltau or the tertau or both is itself a lujvo. So it is easiest to make sense of _[bavlamdei](glossary#valsi-bavlamdei)_ as having two components: _[bavla'i](glossary#valsi-bavlahi)_, “next”, and _[djedi](glossary#valsi-djedi)_. If we know or invent the lujvo place structure for the components, we can compose the new lujvo place structure in the usual way.

In this case, _[bavla'i](glossary#valsi-bavlahi)_ is given the place structure

### Example 12.37.

> b1=l1 is next after b2=l2

making it a symmetrical lujvo. We combine this with _[djedi](glossary#valsi-djedi)_, which has the place structure:

### Example 12.38.

> duration d1 is d2 days long (default 1) by standard d3

While symmetrical lujvo normally put any trailing tertau places before any seltau places, the day standard is a much less important concept than the day the tomorrow follows, in the definition of _[bavlamdei](glossary#valsi-bavlamdei)_. This is an example of how the guidelines presented for selecting and ordering lujvo places are just that, not laws that must be rigidly adhered to. In this case, we choose to rank places in order of relative importance. The resulting place structure is:

### Example 12.39.

> d1=b1=l1 is a day following b2=l2, d2 days later (default 1) by standard d3

Here is another example of a multi-part lujvo: _[cladakyxa'i](glossary#valsi-cladakyxahi)_, meaning “long-sword”, a specific type of medieval weapon. The gismu place structures are:

### Example 12.40.

> _[clani](glossary#valsi-clani)_: c1 is long in direction c2 by standard c3
> _[dakfu](glossary#valsi-dakfu)_: d1 is a knife for cutting d2 with blade made of d3
> _[xarci](glossary#valsi-xarci)_: xa1 is a weapon for use against xa2 by wielder xa3

Since _[cladakyxa'i](glossary#valsi-cladakyxahi)_ is a symmetrical lujvo based on _cladakfu xarci_, and _[cladakfu](glossary#valsi-cladakfu)_ is itself a symmetrical lujvo, we can do the necessary analyses all at once. Plainly c1 (the long thing), d1 (the knife), and xa1 (the weapon) are all the same. Likewise, the d2 place (the thing cut) is the same as the xa2 place (the target of the weapon), given that swords are used to cut victims. Finally, the c2 place (direction of length) is always along the sword blade in a longsword, by definition, and so is dependent on c1=d1=xa1. Adding on the places of the remaining gismu in right-to-left order we get:

### Example 12.41.

> xa1=d1=c1 is a long-sword for use against xa2=d2 by wielder xa3, with a blade made of d3, length measured by standard c3.

If the last place sounds unimportant to you, notice that what counts legally as a “sword”, rather than just a “knife”, depends on the length of the blade (the legal limit varies in different jurisdictions). This fifth place of _[cladakyxa'i](glossary#valsi-cladakyxahi)_ may not often be explicitly filled, but it is still useful on occasion. Because it is so seldom important, it is best that it be last.

## Eliding SE rafsi from seltau

It is common to form lujvo that omit the rafsi based on cmavo of selma'o SE, as well as other cmavo rafsi. Doing so makes lujvo construction for common or useful constructions shorter. Since it puts more strain on the listener who has not heard the lujvo before, the shortness of the word should not necessarily outweigh ease in understanding, especially if the lujvo refers to a rare or unusual concept.

Consider as an example the lujvo _ti'ifla_, from the veljvo _stidi flalu_, and meaning “bill, proposed law”. The gismu place structures are:

### Example 12.42.

> _[stidi](glossary#valsi-stidi)_: agent st1 suggests idea/action st2 to audience st3
> _[flalu](glossary#valsi-flalu)_: f1 is a law specifying f2 for community f3 under conditions f4
> by lawgiver f5

This lujvo does not fit any of our existing molds: it is the second seltau place, st2, that is equivalent to one of the tertau places, namely f1. However, if we understand _ti'ifla_ as an abbreviation for the lujvo _[selti'ifla](glossary#valsi-seltihifla)_, then we get the first places of seltau and tertau lined up. The place structure of _[selti'i](glossary#valsi-seltihi)_ is:

### Example 12.43.

> _[selti'i](glossary#valsi-seltihi)_: idea/action se1 is suggested by agent se2 to audience se3

Here we can see that se1 (what is suggested) is equivalent to f1 (the law), and we get a normal symmetrical lujvo. The final place structure is:

### Example 12.44.

> f1=se1 is a bill specifying f2 for community f3 under conditions f4 by suggester se2 to audience/lawgivers f5=se3

or, relabeling the places,

### Example 12.45.

> f1=st2 is a bill specifying f2 for community f3 under conditions f4 by suggester st1 to audience/lawgivers f5=st3

where the last place (st3) is probably some sort of legislature.

Abbreviated lujvo like _ti'ifla_ are more intuitive (for the lujvo-maker) than their more explicit counterparts like _[selti'ifla](glossary#valsi-seltihifla)_ (as well as shorter). They don't require the coiner to sit down and work out the precise relation between the seltau and the tertau: he or she can just rattle off a rafsi pair. But should the lujvo get to the stage where a place structure needs to be worked out, then the precise relation does need to be specified. And in that case, such abbreviated lujvo form a trap in lujvo place ordering, since they obscure the most straightforward relation between the seltau and tertau. To give our lujvo-making guidelines as wide an application as possible, and to encourage analyzing the seltau-tertau relation in lujvo, lujvo like _ti'ifla_ are given the place structure they would have with the appropriate SE added to the seltau.

Note that, with these lujvo, an interpretation requiring SE insertion is safe only if the alternatives are either implausible or unlikely to be needed as a lujvo. This may not always be the case, and Lojbanists should be aware of the risk of ambiguity.

## Eliding SE rafsi from tertau

Eliding SE rafsi from tertau gets us into much more trouble. To understand why, recall that lujvo, following their veljvo, describe some type of whatever their tertau describe. Thus, _posydji_ describes a type of _[djica](glossary#valsi-djica)_, _[gerzda](glossary#valsi-gerzda)_ describes a type of _[zdani](glossary#valsi-zdani)_, and so on. What is certain is that _[gerzda](glossary#valsi-gerzda)_ does not describe a _se zdani_- it is not a word that could be used to describe an inhabitant such as a dog.

Now consider how we would translate the word “blue-eyed”. Let's tentatively translate this word as _[blakanla](glossary#valsi-blakanla)_ (from _blanu kanla_, meaning “blue eye”). But immediately we are in trouble: we cannot say

### Example 12.46.

|            |       |               |
| ---------- | ----- | ------------- |
| la         | djak. | cu blakanla   |
| That-named | Jack  | is-a-blue-eye |

because Jack is not an eye, _[kanla](glossary#valsi-kanla)_, but someone with an eye, _se kanla_. At best we can say

### Example 12.47.

|            |       |    |                            |
| ---------- | ----- | -- | -------------------------- |
| la         | djak. | cu | se blakanla                |
| That-named | Jack  |    | is-the-bearer-of-blue-eyes |

But look now at the place structure of _[blakanla](glossary#valsi-blakanla)_: it is a symmetrical lujvo, so the place structure is:

### Example 12.48.

> bl1=k1 is a blue eye of bl2=k2

We end up being most interested in talking about the second place, not the first (we talk much more of people than of their eyes), so _[se](glossary#valsi-se)_ would almost always be required.

What is happening here is that we are translating the tertau wrongly, under the influence of English. The English suffix “-eyed” does not mean “eye”, but someone with an eye, which is _selkanla_.

Because we've got the wrong tertau (eliding a _[se](glossary#valsi-se)_ that really should be there), any attempt to accommodate the resulting lujvo into our guidelines for place structure is fitting a square peg in a round hole. Since they can be so misleading, lujvo with SE rafsi elided from the tertau should be avoided in favor of their more explicit counterparts: in this case, _[blaselkanla](glossary#valsi-blaselkanla)_.

## Eliding KE and KEhE rafsi from lujvo

People constructing lujvo usually want them to be as short as possible. To that end, they will discard any cmavo they regard as niceties. The first such cmavo to get thrown out are usually _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_, the cmavo used to structure and group tanru. We can usually get away with this, because the interpretation of the tertau with _[ke](glossary#valsi-ke)_ and _[ke'e](glossary#valsi-kehe)_ missing is less plausible than that with the cmavo inserted, or because the distinction isn't really important.

For example, in _[bakrecpa'o](glossary#valsi-bakrecpaho)_, meaning “beefsteak”, the veljvo is

### Example 12.49.

|       |        |       |         |       |
| ----- | ------ | ----- | ------- | ----- |
| \[ke] | bakni  | rectu | \[ke'e] | panlo |
| (     | bovine | meat  | )       | slice |

because of the usual Lojban left-grouping rule. But there doesn't seem to be much difference between that veljvo and

### Example 12.50.

|        |    |       |       |         |
| ------ | -- | ----- | ----- | ------- |
| bakni  | ke | rectu | panlo | \[ke'e] |
| bovine | (  | meat  | slice | )       |

On the other hand, the lujvo _[zernerkla](glossary#valsi-zernerkla)_, meaning “to sneak in”, almost certainly was formed from the veljvo

### Example 12.51.

|       |    |        |       |         |
| ----- | -- | ------ | ----- | ------- |
| zekri | ke | nenri  | klama | \[ke'e] |
| crime | (  | inside | go    | )       |

|                          |
| ------------------------ |
| to go within, criminally |

because the alternative,

### Example 12.52.

|       |       |        |         |       |
| ----- | ----- | ------ | ------- | ----- |
| \[ke] | zekri | nenri  | \[ke'e] | klama |
| (     | crime | inside | )       | go    |

doesn't make much sense. (To go to the inside of a crime? To go into a place where it is criminal to be inside – an interpretation almost identical with [Example 12.51](chapter12#example-random-id-aXrm "Example 12.51. ") anyway?)There are cases, however, where omitting a KE or KEhE rafsi can produce another lujvo, equally useful. For example, _xaskemcakcurnu_ means “oceanic shellfish”, and has the veljvo

### Example 12.53.

|       |         |    |       |       |   |
| ----- | ------- | -- | ----- | ----- | - |
| xamsi |         | ke | calku | curnu |   |
| ocean | type-of | (  | shell | worm  | ) |

(“worm” in Lojban refers to any invertebrate), but _xasycakcurnu_ has the veljvo

### Example 12.54.

|       |       |       |         |         |       |
| ----- | ----- | ----- | ------- | ------- | ----- |
| \[ke] | xamsi | calku | \[ke'e] |         | curnu |
| (     | ocean | shell | )       | type-of | worm  |

and might refer to the parasitic worms that infest clamshells.

Such misinterpretation is more likely than not in a lujvo starting with _sel-_ (from _[se](glossary#valsi-se)_), _nal-_ (from _[na'e](glossary#valsi-nahe)_) or _tol-_ (from _[to'e](glossary#valsi-tohe)_): the scope of the rafsi will likeliest be presumed to be as narrow as possible, since all of these cmavo normally bind only to the following brivla or _[ke'e](glossary#valsi-kehe)_ group. For that reason, if we want to modify an entire lujvo by putting _[se](glossary#valsi-se)_, _[na'e](glossary#valsi-nahe)_ or _[to'e](glossary#valsi-tohe)_ before it, it's better to leave the result as two words, or else to insert _[ke](glossary#valsi-ke)_, than to just stick the SE or NAhE rafsi on.

It is all right to replace the phrase _se klama_ with _[selkla](glossary#valsi-selkla)_, and the places of _[selkla](glossary#valsi-selkla)_ are exactly those of _se klama_. But consider the related lujvo _[dzukla](glossary#valsi-dzukla)_, meaning “to walk to somewhere”. It is a symmmetrical lujvo, derived from the veljvo _cadzu klama_ as follows:

### Example 12.55.

> _[cadzu](glossary#valsi-cadzu)_: c1 walks on surface c2 using limbs c3
> _[klama](glossary#valsi-klama)_: k1 goes to k2 from k3 via route k4 using k5
> _[dzukla](glossary#valsi-dzukla)_: c1=k1 walks to k2 from k3 via route k4 using limbs k5=c3 on surface c2

We can swap the k1 and k2 places using _se dzukla_, but we cannot directly make _se dzukla_ into _seldzukla_, which would represent the veljvo _selcadzu klama_ and plausibly mean something like “to go to a walking surface”. Instead, we would need _selkemdzukla_, with an explicit rafsi for _[ke](glossary#valsi-ke)_. Similarly, _nalbrablo_ (from _na'e barda bloti_) means “non-big boat”, whereas _na'e brablo_ means “other than a big boat”.

If the lujvo we want to modify with SE has a seltau already starting with a SE rafsi, we can take a shortcut. For instance, _[gekmau](glossary#valsi-gekmau)_ means “happier than”, while _selgekmau_ means “making people happier than, more enjoyable than, more of a 'se gleki' than”. If something is less enjoyable than something else, we can say it is _se selgekmau_.

But we can also say it is _selselgekmau_. Two _se se gleki_ means the same as just _[gleki](glossary#valsi-gleki)_), so there would be no good reason to have _selsel_ in a lujvo with that meaning. Instead, we can feel free to interpret _selsel-_ as _selkemsel-_. The rafsi combinations _terter-_, _velvel-_ and _xelxel-_ work in the same way.

Other SE combinations like _selter-_, although they might conceivably mean _se te_, more than likely should be interpreted in the same way, namely as _se ke te_, since there is no need to re-order places in the way that _se te_ provides. (See [Section 9.4](chapter09#section-SE "9.4. Conversion: SE").)## Abstract lujvo

The cmavo of NU can participate in the construction of lujvo of a particularly simple and well-patterned kind. Consider that old standard example, _[klama](glossary#valsi-klama)_:

### Example 12.56.

> k1 comes/goes to k2 from k3 via route k4 by means k5.

The selbri _nu klama \[kei]_ has only one place, the event-of-going, but the full five places exist implicitly between _[nu](glossary#valsi-nu)_ and _[kei](glossary#valsi-kei)_, since a full bridi with all sumti may be placed there. In a lujvo, there is no room for such inside places, and consequently the lujvo _[nunkla](glossary#valsi-nunkla)_ (_nun-_ is the rafsi for _[nu](glossary#valsi-nu)_), needs to have six places:

### Example 12.57.

> nu1 is the event of k1's coming/going to k2 from k3 via route k4 by means k5.

Here the first place of _nunklama_ is the first and only place of _[nu](glossary#valsi-nu)_, and the other five places have been pushed down by one to occupy the second through the sixth places. Full information on _[nu](glossary#valsi-nu)_, as well as the other abstractors mentioned in this section, is given in [Chapter 11](chapter11 "Chapter 11. Events, Qualities, Quantities, And Other Vague Words: On Lojban Abstraction").

For those abstractors which have a second place as well, the standard convention is to place this place after, rather than before, the places of the brivla being abstracted. The place structure of _nilkla_, the lujvo derived from _ni klama_, is the imposing:

### Example 12.58.

> ni1 is the amount of k1's coming/going to k2 from k3 via route k4 by means k5, measured on scale ni2.

It is not uncommon for abstractors to participate in the making of more complex lujvo as well. For example, _nunsoidji_, from the veljvo

### Example 12.59.

|          |                 |     |         |
| -------- | --------------- | --- | ------- |
| nu       | sonci           | kei | djica   |
| event-of | being-a-soldier |     | desirer |

has the place structure

### Example 12.60.

> d1 desires the event of (s1 being a soldier of army s2) for purpose d3

where the d2 place has disappeared altogether, being replaced by the places of the seltau. As shown in [Example 12.60](chapter12#example-random-id-8Nos "Example 12.60. "), the ordering follows this idea of replacement: the seltau places are inserted at the point where the omitted abstraction place exists in the tertau.

The lujvo _nunsoidji_ is quite different from the ordinary asymmetric lujvo _soidji_, a “soldier desirer”, whose place structure is just

### Example 12.61.

> d1 desires (a soldier of army s2) for purpose d3

A _nunsoidji_ might be someone who is about to enlist, whereas a _soidji_ might be a camp-follower.

One use of abstract lujvo is to eliminate the need for explicit _[kei](glossary#valsi-kei)_ in tanru: _nunkalri gasnu_ means much the same as _nu kalri kei gasnu_, but is shorter. In addition, many English words ending in _-hood_ are represented with _nun-_ lujvo, and other words ending in “-ness” or “-dom” are often representable with _kam-_ lujvo (_kam-_ is the rafsi for _[ka](glossary#valsi-ka)_); _[kambla](glossary#valsi-kambla)_ is “blueness”.

Even though the cmavo of NU are long-scope in nature, governing the whole following bridi, the NU rafsi should generally be used as short-scope modifiers, like the SE and NAhE rafsi discussed in [Section 12.9](chapter12#section-seltau-SE "12.9. Eliding SE rafsi from seltau").

There is also a rafsi for the cmavo _[jai](glossary#valsi-jai)_, namely _jax_, which allows sentences like

### Example 12.62.

|    |                    |         |     |          |      |        |
| -- | ------------------ | ------- | --- | -------- | ---- | ------ |
| mi | jai                | rinka   | le  | nu       | do   | morsi  |
| I  | am-associated-with | causing | the | event-of | your | death. |

|                     |
| ------------------- |
| I cause your death. |

explained in [Section 11.10](chapter11#section-sumti-raising "11.10. Lojban sumti raising"), to be rendered with lujvo:

### Example 12.63.

|    |                         |     |          |      |        |
| -- | ----------------------- | --- | -------- | ---- | ------ |
| mi | jaxri'a                 | le  | nu       | do   | morsi  |
| I  | am-part-of-the-cause-of | the | event-of | your | dying. |

In making a lujvo that contains _jax-_ for a selbri that contains _[jai](glossary#valsi-jai)_, the rule is to leave the _[fai](glossary#valsi-fai)_ place as a _[fai](glossary#valsi-fai)_ place of the lujvo; it does not participate in the regular lujvo place structure. (The use of _[fai](glossary#valsi-fai)_ is explained in [Section 9.12](chapter09#section-modal-jai "9.12. Modal conversion: JAI") and [Section 10.22](chapter10#section-jai "10.22. Conversion of sumti tcita: JAI").)

## Implicit-abstraction lujvo

Eliding NU rafsi involves the same restrictions as eliding SE rafsi, plus additional ones. In general, NU rafsi should not be elided from the tertau, since that changes the kind of thing the lujvo is talking about from an abstraction to a concrete sumti. However, they may be elided from the seltau if no reasonable ambiguity would result.

A major difference, however, between SE elision and NU elision is that the former is a rather sparse process, providing a few convenient shortenings. Eliding _[nu](glossary#valsi-nu)_, however, is extremely important in producing a class of lujvo called “implicit-abstraction lujvo”.

Let us make a detailed analysis of the lujvo _nunctikezgau_, meaning “to feed”. (If you think this lujvo is excessively longwinded, be patient.) The veljvo of _nunctikezgau_ is _nu citka kei gasnu_. The relevant place structures are:

### Example 12.64.

> _[nu](glossary#valsi-nu)_: n1 is an event
> _[citka](glossary#valsi-citka)_: c1 eats c2
> _[gasnu](glossary#valsi-gasnu)_: g1 does action/is the agent of event g2

In accordance with the procedure for analyzing three-part lujvo given in [Section 12.8](chapter12#section-n-part-lujvo "12.8. lujvo with more than two parts."), we will first create an intermediate lujvo, _[nuncti](glossary#valsi-nuncti)_, whose veljvo is _nu citka \[kei]_. By the rules given in [Section 12.12](chapter12#section-abstraction-lujvo "12.12. Abstract lujvo"), _[nuncti](glossary#valsi-nuncti)_ has the place structure

### Example 12.65.

> n1 is the event of c1 eating c2

Now we can transform the veljvo of _nunctikezgau_ into _nuncti gasnu_. The g2 place (what is brought about by the actor g1) obviously denotes the same thing as n1 (the event of eating). So we can eliminate g2 as redundant, leaving us with a tentative place structure of

### Example 12.66.

> g1 is the actor in the event n1=g2 of c1 eating c2

But it is also possible to omit the n1 place itself! The n1 place describes the event brought about; an event in Lojban is described as a bridi, by a selbri and its sumti; the selbri is already known (it's the seltau), and the sumti are also already known (they're in the lujvo place structure). So n1 would not give us any information we didn't already know. In fact, the n1=g2 place is dependent on c1 and c2 jointly – it does not depend on either c1 or c2 by itself. Being dependent and derived from the seltau, it is omissible. So the final place structure of _nunctikezgau_ is:

### Example 12.67.

> g1 is the actor in the event of c1 eating c2

There is one further step that can be taken. As we have already seen with _[balsoi](glossary#valsi-balsoi)_ in [Section 12.5](chapter12#section-symmetrical-asymmetrical "12.5. Symmetrical and asymmetrical lujvo"), the interpretation of lujvo is constrained by the semantics of gismu and of their sumti places. Now, any asymmetrical lujvo with _[gasnu](glossary#valsi-gasnu)_ as its tertau will involve an event abstraction either implicitly or explicitly, since that is how the g2 place of _[gasnu](glossary#valsi-gasnu)_ is defined.

Therefore, if we assume that _[nu](glossary#valsi-nu)_ is the type of abstraction one would expect to be a _se gasnu_, then the rafsi _nun_ and _kez_ in _nunctikezgau_ are only telling us what we would already have guessed – that the seltau of a _[gasnu](glossary#valsi-gasnu)_ lujvo is an event. If we drop these rafsi out, and use instead the shorter lujvo _[ctigau](glossary#valsi-ctigau)_, rejecting its symmetrical interpretation (“someone who both does and eats”; “an eating doer”), we can still deduce that the seltau refers to an event.(You can't “do an eater”/ _gasnu lo citka_, with the meaning of _[do](glossary#valsi-do)_ as “bring about an event”; so the seltau must refer to an event, _nu citka_. The English slang meanings of “do someone”, namely “socialize with someone” and “have sex with someone”, are not relevant to _[gasnu](glossary#valsi-gasnu)_.)So we can simply use _[ctigau](glossary#valsi-ctigau)_ with the same place structure as _nunctikezgau_:

### Example 12.68.

> agent g1 causes c1 to eat c2
> g1 feeds c2 to c1

This particular kind of asymmetrical lujvo, in which the seltau serves as the selbri of an abstraction which is a place of the tertau, is called an implicit-abstraction lujvo, because one deduces the presence of an abstraction which is unexpressed (implicit).

To give another example: the gismu _[basti](glossary#valsi-basti)_, whose place structure is

### Example 12.69.

> b1 replaces b2 in circumstances b3

can form the lujvo _[basygau](glossary#valsi-basygau)_, with the place structure:

### Example 12.70.

> g1 (agent) replaces b1 with b2 in circumstances b3

where both _[basti](glossary#valsi-basti)_ and _[basygau](glossary#valsi-basygau)_ are translated “replace” in English, but represent different relations: _[basti](glossary#valsi-basti)_ may be used with no mention of any agent doing the replacing.

In addition, _[gasnu](glossary#valsi-gasnu)_-based lujvo can be built from what we would consider nouns or adjectives in English. In Lojban, everything is a predicate, so adjectives, nouns and verbs are all treated in the same way. This is consistent with the use of similar causative affixes in other languages. For example, the gismu _[litki](glossary#valsi-litki)_, meaning “liquid”, with the place structure

### Example 12.71.

> l1 is a quantity of liquid of composition l2 under conditions l3

can give _likygau_, meaning “to liquefy”:

### Example 12.72.

> g1 (agent) causes l1 to be a quantity of liquid of composition l2 under conditions l3.

While _likygau_ correctly represents “causes to be a liquid”, a different lujvo based on _[galfi](glossary#valsi-galfi)_ (meaning “modify”) may be more appropriate for “causes to become a liquid”. On the other hand, _fetsygau_ is potentially confusing, because it could mean “agent in the event of something becoming female” (the implicit-abstraction interpretation) or simply “female agent” (the parallel interpretation), so using implicit-abstraction lujvo is always accompanied with some risk of being misunderstood.

Many other Lojban gismu have places for event abstractions, and therefore are good candidates for the tertau of an implicit-abstraction lujvo. For example, lujvo based on _[rinka](glossary#valsi-rinka)_, with its place structure

### Example 12.73.

> event r1 causes event r2 to occur

are closely related to those based on _[gasnu](glossary#valsi-gasnu)_. However, _[rinka](glossary#valsi-rinka)_ is less generally useful than _[gasnu](glossary#valsi-gasnu)_, because its r1 place is another event rather than a person: _lo rinka_ is a cause, not a causer. Thus the place structure of _likyri'a_, a lujvo analogous to _likygau_, is

### Example 12.74.

> event r1 causes l1 to be a quantity of liquid of composition l2 under conditions l3

and would be useful in translating sentences like “The heat of the sun liquefied the block of ice.”Implicit-abstraction lujvo are a powerful means in the language of rendering quite verbose bridi into succinct and manageable concepts, and increasing the expressive power of the language.

## Anomalous lujvo

Some lujvo that have been coined and actually employed in Lojban writing do not follow the guidelines expressed above, either because the places that are equivalent in the seltau and the tertau are in an unusual position, or because the seltau and tertau are related in a complex way, or both. An example of the first kind is _[jdaselsku](glossary#valsi-jdaselsku)_, meaning “prayer”, which was mentioned in [Section 12.7](chapter12#section-order-of-places "12.7. Ordering lujvo places."). The gismu places are:

### Example 12.75.

_[lijda](glossary#valsi-lijda)_: l1 is a religion with believers l2 and beliefs l3_[cusku](glossary#valsi-cusku)_: c1 expresses text c2 to audience c3 in medium c4and _[selsku](glossary#valsi-selsku)_, the tertau of _[jdaselsku](glossary#valsi-jdaselsku)_, has the place structure

### Example 12.76.

> s1 is a text expressed by s2 to audience s3 in medium s4

Now it is easy to see that the l2 and s2 places are equivalent: the believer in the religion (l2) is the one who expresses the prayer (s2). This is not one of the cases for which a place ordering rule has been given in [Section 12.7](chapter12#section-order-of-places "12.7. Ordering lujvo places.") or [Section 12.13](chapter12#section-implicit-abstraction "12.13. Implicit-abstraction lujvo"); therefore, for lack of a better rule, we put the tertau places first and the remaining seltau places after them, leading to the place structure:

### Example 12.77.

> s1 is a prayer expressed by s2=l2 to audience s3 in medium s4 pertaining to religion l1

The l3 place (the beliefs of the religion) is dependent on the l1 place (the religion) and so is omitted.

We could make this lujvo less messy by replacing it with _se seljdasku_, where _seljdasku_ is a normal symmetrical lujvo with place structure:

### Example 12.78.

> c1=l2 religiously expresses prayer c2 to audience c3 in medium s4 pertaining to religion l1

which, according to the rule expressed in [Section 12.9](chapter12#section-seltau-SE "12.9. Eliding SE rafsi from seltau"), can be further expressed as _selseljdasku_. However, there is no need for the ugly _selsel-_ prefix just to get the rules right: _[jdaselsku](glossary#valsi-jdaselsku)_ is a reasonable, if anomalous, lujvo.

However, there is a further problem with _[jdaselsku](glossary#valsi-jdaselsku)_, not resolvable by using _seljdasku_. No veljvo involving just the two gismu _[lijda](glossary#valsi-lijda)_ and _[cusku](glossary#valsi-cusku)_ can fully express the relationship implicit in prayer. A prayer is not just anything said by the adherents of a religion; nor is it even anything said by them acting as adherents of that religion. Rather, it is what they say under the authority of that religion, or using the religion as a medium, or following the rules associated with the religion, or something of the kind. So the veljvo is somewhat elliptical.

As a result, both _seljdasku_ and _[jdaselsku](glossary#valsi-jdaselsku)_ belong to the second class of anomalous lujvo: the veljvo doesn't really supply all that the lujvo requires.

Another example of this kind of anomalous lujvo, drawn from the tanru lists in [Section 5.14](chapter05#section-asymmetric-tanru "5.14. Some types of asymmetrical tanru"), is _lange'u_, meaning “sheepdog”. Clearly a sheepdog is not a dog which is a sheep (the symmetrical interpretation is wrong), nor a dog of the sheep breed (the asymmetrical interpretation is wrong). Indeed, there is simply no overlap in the places of _[lanme](glossary#valsi-lanme)_ and _[gerku](glossary#valsi-gerku)_ at all. Rather, the lujvo refers to a dog which controls sheep flocks, a _terlanme jitro gerku_, the lujvo from which is _terlantroge'u_ with place structure:

### Example 12.79.

> g1=j1 is a dog that controls sheep flock l3=j2 made up of sheep l1 in activity j3 of dog breed g2

based on the gismu place structures

### Example 12.80.

> _[lanme](glossary#valsi-lanme)_: l1 is a sheep of breed l2 belonging to flock l3
> _[gerku](glossary#valsi-gerku)_: g1 is a dog of breed g2
> _[jitro](glossary#valsi-jitro)_: j1 controls j2 in activity j3

Note that this lujvo is symmetrical between _[lantro](glossary#valsi-lantro)_ (sheep-controller) and _[gerku](glossary#valsi-gerku)_, but _[lantro](glossary#valsi-lantro)_ is itself an asymmetrical lujvo. The l2 place, the breed of sheep, is removed as dependent on l1. However, the lujvo _lange'u_ is both shorter than _terlantroge'u_ and sufficiently clear to warrant its use: its place structure, however, should be the same as that of the longer lujvo, for which _lange'u_ can be understood as an abbreviation.

Another example is _xanmi'e_, “to command by hand, to beckon”. The component place structures are:

### Example 12.81.

> _[xance](glossary#valsi-xance)_: xa1 is the hand of xa2
> _[minde](glossary#valsi-minde)_: m1 gives commands to m2 to cause m3 to happen

The relation between the seltau and tertau is close enough for there to be an overlap: xa2 (the person with the hand) is the same as m1 (the one who commands). But interpreting _xanmi'e_ as a symmetrical lujvo with an elided _sel-_ in the seltau, as if from _se xance minde_, misses the point: the real relation expressed by the lujvo is not just “one who commands and has a hand”, but “to command using the hand”. The concept of “using” suggests the gismu _[pilno](glossary#valsi-pilno)_, with place structure

### Example 12.82.

> p1 uses tool p2 for purpose p3

Some possible three-part veljvo are (depending on how strictly you want to constrain the veljvo)

### Example 12.83.

|       |       |       |         |         |           |
| ----- | ----- | ----- | ------- | ------- | --------- |
| \[ke] | xance | pilno | \[ke'e] |         | minde     |
| (     | hand  | user  | )       | type-of | commander |

### Example 12.84.

|       |           |       |         |         |       |
| ----- | --------- | ----- | ------- | ------- | ----- |
| \[ke] | minde     | xance | \[ke'e] |         | pilno |
| (     | commander | hand  | )       | type-of | user  |

or even

### Example 12.85.

|           |         |    |       |       |         |
| --------- | ------- | -- | ----- | ----- | ------- |
| minde     |         | ke | xance | pilno | \[ke'e] |
| commander | type-of | (  | hand  | user  | )       |

which lead to the three different lujvo _xanplimi'e_, _mi'erxanpli_, and _minkemxanpli_ respectively.

Does this make _xanmi'e_ wrong? By no means. But it does mean that there is a latent component to the meaning of _xanmi'e_, the gismu _[pilno](glossary#valsi-pilno)_, which is not explicit in the veljvo. And it also means that, for a place structure derivation that actually makes sense, rather than being ad-hoc, the Lojbanist should probably go through a derivation for _xancypliminde_ or one of the other possibilities that is analogous to the analysis of _terlantroge'u_ above, even if he or she decides to stick with a shorter, more convenient form like _xanmi'e_. In addition, of course, the possibilities of elliptical lujvo increase their potential ambiguity enormously – an unavoidable fact which should be borne in mind.

## Comparatives and superlatives

English has the concepts of “comparative adjectives” and “superlative adjectives” which can be formed from other adjectives, either by adding the suffixes “-er” and “-est” or by using the words “more” and “most”, respectively. The Lojbanic equivalents, which can be made from any brivla, are lujvo with the tertau _[zmadu](glossary#valsi-zmadu)_, _[mleca](glossary#valsi-mleca)_, _[zenba](glossary#valsi-zenba)_, _[jdika](glossary#valsi-jdika)_, and _[traji](glossary#valsi-traji)_. In order to make these lujvo regular and easy to make, certain special guidelines are imposed.

We will begin with lujvo based on _[zmadu](glossary#valsi-zmadu)_ and _[mleca](glossary#valsi-mleca)_, whose place structures are:

### Example 12.86.

> _[zmadu](glossary#valsi-zmadu)_: z1 is more than z2 in property z3 in quantity z4
> _[mleca](glossary#valsi-mleca)_: m1 is less than m2 in property m3 in quantity m4

For example, the concept “young” is expressed by the gismu _[citno](glossary#valsi-citno)_, with place structure

### Example 12.87.

> _[citno](glossary#valsi-citno)_: c1 is young

The comparative concept “younger” can be expressed by the lujvo _[citmau](glossary#valsi-citmau)_ (based on the veljvo _citno zmadu_, meaning “young more-than”).

### Example 12.88.

|    |                 |     |    |          |               |            |      |
| -- | --------------- | --- | -- | -------- | ------------- | ---------- | ---- |
| mi | citmau          | do  | lo | nanca    | be            | li         | xa   |
| I  | am-younger-than | you | by | one-year | multiplied-by | the-number | six. |

|                                  |
| -------------------------------- |
| I am six years younger than you. |

The place structure for _[citmau](glossary#valsi-citmau)_ is

### Example 12.89.

> z1=c1 is younger than z2=c1 by amount z4

Similarly, in Lojban you can say:

### Example 12.90.

|     |                     |    |    |          |               |            |      |
| --- | ------------------- | -- | -- | -------- | ------------- | ---------- | ---- |
| do  | citme'a             | mi | lo | nanca    | be            | li         | xa   |
| You | are-less-young-than | me | by | one-year | multiplied-by | the-number | six. |

|                                       |
| ------------------------------------- |
| You are six years less young than me. |

In English, “more” comparatives are easier to make and use than “less” comparatives, but in Lojban the two forms are equally easy.

Because of their much simpler place structure, lujvo ending in _-mau_ and _-me'a_ are in fact used much more frequently than _[zmadu](glossary#valsi-zmadu)_ and _[mleca](glossary#valsi-mleca)_ themselves as selbri. It is highly unlikely for such lujvo to be construed as anything other than implicit-abstraction lujvo. But there is another type of ambiguity relevant to these lujvo, and which has to do with what is being compared.

For example, does _nelcymau_ mean “X likes Y more than X likes Z”, or “X likes Y more than Z likes Y”? Does _klamau_ mean: “X goes to Y more than to Z”, “X goes to Y more than Z does”, “X goes to Y from Z more than from W”, or what?We answer this concern by putting regularity above any considerations of concept usefulness: by convention, the two things being compared always fit into the first place of the seltau. In that way, each of the different possible interpretations can be expressed by SE-converting the seltau, and making the required place the new first place. As a result, we get the following comparative lujvo place structures:

### Example 12.91.

> _nelcymau_: z1, more than z2, likes n2 by amount z4
> _selnelcymau_: z1, more than z2, is liked by n1 in amount z4
> _klamau_ : z1, more than z2, goes to k2 from k3 via k4 by means of k5
> _selklamau_: z1, more than z2, is gone to by k1 from k3 via k4 by means of k5
> _terklamau_: z1, more than z2, is an origin point from destination k2 for k1's going via k4 by means of k5

(See [Chapter 11](chapter11 "Chapter 11. Events, Qualities, Quantities, And Other Vague Words: On Lojban Abstraction") for the way in which this problem is resolved when lujvo aren't used.)

The ordering rule places the things being compared first, and the other seltau places following. Unfortunately the z4 place, which expresses by how much one entity exceeds the other, is displaced into a lujvo place whose number is different for each lujvo. For example, while _nelcymau_ has z4 as its fourth place, _klamau_ has it as its sixth place. In any sentence where a difficulty arises, this amount-place can be redundantly tagged with _[vemau](glossary#valsi-vemau)_ (for _[zmadu](glossary#valsi-zmadu)_) or _[veme'a](glossary#valsi-vemeha)_ (for _[mleca](glossary#valsi-mleca)_) to help make the speaker's intention clear.

It is important to realize that such comparative lujvo do not presuppose their seltau. Just as in English, saying someone is younger than someone else doesn't imply that they're young in the first place: an octogenarian, after all, is still younger than a nonagenarian. Rather, the 80-year-old has a greater _ni citno_ than the 90-year-old. Similarly, a 5-year-old is older than a 1-year-old, but is not considered “old” by most standards.

There are some comparative concepts which are in which the _se zmadu_ is difficult to specify. Typically, these involve comparisons implicitly made with a former state of affairs, where stating a z2 place explicitly would be problematic.

In such cases, it is best not to use _[zmadu](glossary#valsi-zmadu)_ and leave the comparison hanging, but to use instead the gismu _[zenba](glossary#valsi-zenba)_, meaning “increase” (and _[jdika](glossary#valsi-jdika)_, meaning “decrease”, in place of _[mleca](glossary#valsi-mleca)_). The gismu _[zenba](glossary#valsi-zenba)_ was included in the language precisely in order to capture those notions of increase which _[zmadu](glossary#valsi-zmadu)_ can't quite cope with; in addition, we don't have to waste a place in lujvo or tanru on something that we'd never fill in with a value anyway. So we can translate “I'm stronger now” not as

### Example 12.92.

|    |     |              |
| -- | --- | ------------ |
| mi | ca  | tsamau       |
| I  | now | am-stronger. |

which implies that I'm currently stronger than somebody else (the elided occupant of the second or z2 place), but as

### Example 12.93.

|    |    |         |
| -- | -- | ------- |
| mi | ca | tsaze'a |

|                         |
| ----------------------- |
| I increase in strength. |

Finally, lujvo with a tertau of _[traji](glossary#valsi-traji)_ are used to build superlatives. The place structure of _[traji](glossary#valsi-traji)_ is

### Example 12.94.

> t1 is superlative in property t2, being the t3 extremum (largest by default) of set t4

Consider the gismu _[xamgu](glossary#valsi-xamgu)_, whose place structure is:

### Example 12.95.

> xa1 is good for xa2 by standard xa3

The comparative form is _[xagmau](glossary#valsi-xagmau)_, corresponding to English “better”, with a place structure (by the rules given above) of

### Example 12.96.

> z1 is better than z2 for xa2 by standard xa3 in amount z4

We would expect the place structure of _[xagrai](glossary#valsi-xagrai)_, the superlative form, to somehow mirror that, given that comparatives and superlatives are comparable concepts, resulting in:

### Example 12.97.

> xa1=t1 is the best of the set t4 for xa2 by standard xa3.

The t2 place in _[traji](glossary#valsi-traji)_, normally filled by a property abstraction, is replaced by the seltau places, and the t3 place specifying the extremum of _[traji](glossary#valsi-traji)_ (whether the most or the least, that is) is presumed by default to be “the most”.

But the set against which the t1 place of _[traji](glossary#valsi-traji)_ is compared is not the t2 place (which would make the place structure of _[traji](glossary#valsi-traji)_ fully parallel to that of _[zmadu](glossary#valsi-zmadu)_), but rather the t4 place. Nevertheless, by a special exception to the rules of place ordering, the t4 place of _[traji](glossary#valsi-traji)_-based lujvo becomes the second place of the lujvo. Some examples:

### Example 12.98.

|    |         |    |        |      |         |
| -- | ------- | -- | ------ | ---- | ------- |
| la | djudis. | cu | citrai | lo'i | lobypli |

|                                         |
| --------------------------------------- |
| Judy is the youngest of all Lojbanists. |

### Example 12.99.

|    |            |    |        |      |          |
| -- | ---------- | -- | ------ | ---- | -------- |
| la | .ainctain. | cu | balrai | lo'i | skegunka |

|                                              |
| -------------------------------------------- |
| Einstein was the greatest of all scientists. |

## Notes on gismu place structures

Unlike the place structures of lujvo, the place structures of gismu were assigned in a far less systematic way through a detailed case-by-case analysis and repeated reviews with associated changes. (The gismu list is now baselined, so no further changes are contemplated.) Nevertheless, certain regularities were imposed both in the choice of places and in the ordering of places which may be helpful to the learner and the lujvo-maker, and which are therefore discussed here.

The choice of gismu places results from the varying outcome of four different pressures: brevity, convenience, metaphysical necessity, and regularity. (These are also to some extent the underlying factors in the lujvo place structures generated by the methods of this chapter.) The implications of each are roughly as follows:* Brevity tends to remove places: the fewer places a gismu has, the easier it is to learn, and the less specific it is. As mentioned in [Section 12.4](chapter12#section-selecting-places "12.4. Selecting places"), a brivla with fewer place structures is less specific, and generality is a virtue in gismu, because they must thoroughly blanket all of semantic space.

- Convenience tends to increase the number of places: if a concept can be expressed as a place of some existing gismu, there is no need to make another gismu, a lujvo or a fu'ivla for it.

- Metaphysical necessity can either increase or decrease places: it is a pressure tending to provide the “right number” of places. If something is part of the essential nature of a concept, then a place must be made for it; on the other hand, if instances of the concept need not have some property, then this pressure will tend to remove the place.

- Regularity is a pressure which can also either increase or decrease places. If a gismu has a given place, then gismu which are semantically related to it are likely to have the place also.

Here are some examples of gismu place structures, with a discussion of the pressures operating on them:

### Example 12.100.

> _[xekri](glossary#valsi-xekri)_: xe1 is black

Brevity was the most important goal here, reinforced by one interpretation of metaphysical necessity. There is no mention of color standards here, as many people have pointed out; like all color gismu, _[xekri](glossary#valsi-xekri)_ is explicitly subjective. Objective color standards can be brought in by an appropriate BAI tag such as _[ci'u](glossary#valsi-cihu)_ (“in system”; see [Section 9.6](chapter09#section-BAI "9.6. Modal tags: BAI")) or by making a lujvo.

### Example 12.101.

> _[jbena](glossary#valsi-jbena)_: j1 is born to j2 at time j3 and location j4

The gismu _[jbena](glossary#valsi-jbena)_ contains places for time and location, which few other gismu have: normally, the time and place at which something is done is supplied by a tense tag (see [Chapter 10](chapter10 "Chapter 10. Imaginary Journeys: The Lojban Space/Time Tense System")). However, providing these places makes _le te jbena_ a simple term for “birthday” and _le ve jbena_ for “birthplace”, so these places were provided despite their lack of metaphysical necessity.

### Example 12.102.

> _[rinka](glossary#valsi-rinka)_: event r1 is the cause of event r2

The place structure of _[rinka](glossary#valsi-rinka)_ does not have a place for the agent, the one who causes, as a result of the pressure toward metaphysical necessity. A cause-effect relationship does not have to include an agent: an event (such as snow melting in the mountains) may cause another event (such as the flooding of the Nile) without any human intervention or even knowledge.

Indeed, there is a general tendency to omit agent places from most gismu except for a few such as _[gasnu](glossary#valsi-gasnu)_ and _[zukte](glossary#valsi-zukte)_ which are then used as tertau in order to restore the agent place when needed: see [Section 12.13](chapter12#section-implicit-abstraction "12.13. Implicit-abstraction lujvo").

### Example 12.103.

> _[cinfo](glossary#valsi-cinfo)_ c1 is a lion of species/breed c2 The c2 place of _[cinfo](glossary#valsi-cinfo)_ is provided as a result of the pressure toward regularity. All animal and plant gismu have such an x2 place; although there is in fact only one species of lion, and breeds of lion, though they exist, aren't all that important in talking about lions. The species/breed place must exist for such diversified species as dogs, and for general terms like _[cinki](glossary#valsi-cinki)_ (insect), and are provided for all other animals and plants as a matter of regularity.

Less can be said about gismu place structure ordering, but some regularities are apparent. The places tend to appear in decreasing order of psychological saliency or importance. There is an implication within the place structure of _[klama](glossary#valsi-klama)_, for example, that _lo klama_ (the one going) will be talked about more often, and is thus more important, than _lo se klama_ (the destination), which is in turn more important than _lo xe klama_ (the means of transport).

Some specific tendencies (not really rules) can also be observed. For example, when there is an agent place, it tends to be the first place. Similarly, when a destination and an origin point are mentioned, the destination is always placed just before the origin point. Places such as “under conditions” and “by standard”, which often go unfilled, are moved to near the end of the place structure.

