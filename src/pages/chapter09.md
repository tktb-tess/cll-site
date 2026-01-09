---
layout: ../layouts/Layout.astro
title: 'Chapter 9. To Boston Via The Road Go I, With An Excursion Into The Land Of Modals'
prev: /chapter08
prevTitle: 'Prev: Chapter 8'
next: /chapter10
nextTitle: 'Next: Chapter 10'
---

![The picture for chapter 9](../assets/chapter09.gif)

## Introductory

The basic type of Lojban sentence is the bridi: a claim by the speaker that certain objects are related in a certain way. The objects are expressed by Lojban grammatical forms called _[sumti](glossary#valsi-sumti)_; the relationship is expressed by the Lojban grammatical form called a _[selbri](glossary#valsi-selbri)_.

The sumti are not randomly associated with the selbri, but according to a systematic pattern known as the “place structure” of the selbri. This chapter describes the various ways in which the place structure of Lojban bridi is expressed and by which it can be manipulated. The place structure of a selbri is a sequence of empty slots into which the sumti associated with that selbri are placed. The sumti are said to occupy the places of the selbri.

For our present purposes, every selbri is assumed to have a well-known place structure. If the selbri is a brivla, the place structure can be looked up in a dictionary (or, if the brivla is a lujvo not in any dictionary, inferred from the principles of lujvo construction as explained in [Chapter 12](chapter12 "Chapter 12. Dog House And White House: Determining lujvo Place Structures")); if the selbri is a tanru, the place structure is the same as that of the final component in the tanru.

The stock example of a place structure is that of the gismu _[klama](glossary#valsi-klama)_:

> _[klama](glossary#valsi-klama)_&#x78;1 comes/goes to destination x2 from origin x3 via route x4 employing means of transport x5.

The “x1 ... x5” indicates that _[klama](glossary#valsi-klama)_ is a five-place predicate, and show the natural order (as assigned by the language engineers) of those places: agent, destination, origin, route, means.

The place structures of brivla are not absolutely stable aspects of the language. The work done so far has attempted to establish a basic place structure on which all users can, at first, agree. In the light of actual experience with the individual selbri of the language, there will inevitably be some degree of change to the brivla place structures.

## Standard bridi form: _cu_

The following cmavo is discussed in this section:

|    |    |                           |
| -- | -- | ------------------------- |
| cu | CU | prefixed selbri separator |

The most usual way of constructing a bridi from a selbri such as _[klama](glossary#valsi-klama)_ and an appropriate number of sumti is to place the sumti intended for the x1 place before the selbri, and all the other sumti in order after the selbri, thus:

### Example 9.1.

|    |    |       |               |        |                 |            |
| -- | -- | ----- | ------------- | ------ | --------------- | ---------- |
| mi | cu | klama | la            | bastn. | la              | .atlantas. |
| I  |    | go    | to-that-named | Boston | from-that-named | Atlanta    |

|         |       |           |       |
| ------- | ----- | --------- | ----- |
| le      | dargu | le        | karce |
| via-the | road  | using-the | car.  |



Here the sumti are assigned to the places as follows:

|    |             |                              |
| -- | ----------- | ---------------------------- |
| x1 | agent       | _[mi](glossary#valsi-mi)_ |
| x2 | destination | _la bastn._                  |
| x3 | origin      | _la .atlantas._              |
| x4 | route       | _le dargu_                   |
| x5 | means       | _le karce_                   |

(Note: Many of the examples in the rest of this chapter will turn out to have the same meaning as [Example 9.1](chapter09#example-random-id-Ji94 "Example 9.1. "); this fact will not be reiterated.)

This ordering, with the x1 place before the selbri and all other places in natural order after the selbri, is called “standard bridi form”, and is found in the bulk of Lojban bridi, whether used in main sentences or in subordinate clauses. However, many other forms are possible, such as:

### Example 9.2.

|    |               |        |                 |            |
| -- | ------------- | ------ | --------------- | ---------- |
| mi | la            | bastn. | la              | .atlantas. |
| I, | to-that-named | Boston | from-that-named | Atlanta    |

|         |       |           |       |    |       |
| ------- | ----- | --------- | ----- | -- | ----- |
| le      | dargu | le        | karce | cu | klama |
| via-the | road  | using-the | car,  |    | go.   |



Here the selbri is at the end; all the sumti are placed before it. However, the same order is maintained.

Similarly, we may split up the sumti, putting some before the selbri and others after it:

### Example 9.3.

|    |               |        |    |       |                 |            |
| -- | ------------- | ------ | -- | ----- | --------------- | ---------- |
| mi | la            | bastn. | cu | klama | la              | .atlantas. |
| I  | to-that-named | Boston |    | go    | from-that-named | Atlanta    |

|         |       |           |       |
| ------- | ----- | --------- | ----- |
| le      | dargu | le        | karce |
| via-the | road  | using-the | car.  |



All of the variant forms in this section and following sections can be used to place emphasis on the part or parts which have been moved out of their standard places. Thus, [Example 9.2](chapter09#example-random-id-yLqT "Example 9.2. ") places emphasis on the selbri (because it is at the end); [Example 9.3](chapter09#example-random-id-vzNY "Example 9.3. ") emphasizes _la bastn._, because it has been moved before the selbri. Moving more than one component may dilute this emphasis. It is permitted, but no stylistic significance has yet been established for drastic reordering.

In all these examples, the cmavo _[cu](glossary#valsi-cu)_ (belonging to selma'o CU) is used to separate the selbri from any preceding sumti. It is never absolutely necessary to use _[cu](glossary#valsi-cu)_. However, providing it helps the reader or listener to locate the selbri quickly, and may make it possible to place a complex sumti just before the selbri, allowing the speaker to omit elidable terminators, possibly a whole stream of them, that would otherwise be necessary.

The general rule, then, is that the selbri may occur anywhere in the bridi as long as the sumti maintain their order. The only exception (and it is an important one) is that if the selbri appears first, the x1 sumti is taken to have been omitted:

### Example 9.4.

|        |               |           |
| ------ | ------------- | --------- |
| klama  | la            | bastn.    |
| A-goer | to-that-named | Boston    |
| Goes   |               | to-Boston |

|                 |              |
| --------------- | ------------ |
| la              | .atlantas.   |
| from-that-named | Atlanta      |
|                 | from-Atlanta |

|         |       |
| ------- | ----- |
| le      | dargu |
| via-the | road  |
| via-the | road  |

|           |       |
| --------- | ----- |
| le        | karce |
| using-the | car.  |
| using-the | car.  |

|                                                                 |
| --------------------------------------------------------------- |
| Look: a goer to Boston from Atlanta via the road using the car! |



Here the x1 place is empty: the listener must guess from context who is going to Boston. In [Example 9.4](chapter09#example-random-id-aQtM "Example 9.4. "), _[klama](glossary#valsi-klama)_ is glossed “a goer” rather than “go” because “Go” at the beginning of an English sentence would suggest a command: “Go to Boston!”. [Example 9.4](chapter09#example-random-id-aQtM "Example 9.4. ") is not a command, simply a normal statement with the x1 place unspecified, causing the emphasis to fall on the selbri _[klama](glossary#valsi-klama)_. Such a bridi, with empty x1, is called an “observative”, because it usually calls on the listener to observe something in the environment which would belong in the x1 place. The third translation above shows this observative nature. Sometimes it is the relationship itself which the listener is asked to observe.

(There is a way to both provide a sumti for the x1 place and put the selbri first in the bridi: see [Example 9.14](chapter09#example-random-id-oDES "Example 9.14. ").)

Suppose the speaker desires to omit a place other than the x1 place? (Presumably it is obvious or, for one reason or another, not worth saying.) Places at the end may simply be dropped:

### Example 9.5.

|    |       |    |        |    |            |
| -- | ----- | -- | ------ | -- | ---------- |
| mi | klama | la | bastn. | la | .atlantas. |

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| I go to-Boston from-Atlanta (via an unspecified route, using an unspecified means). |



[Example 9.5](chapter09#example-random-id-5Eqa "Example 9.5. ") has empty x4 and x5 places: the speaker does not specify the route or the means of transport. However, simple omission will not work for a place when the places around it are to be specified: in

### Example 9.6.

|    |       |               |        |                 |            |         |       |
| -- | ----- | ------------- | ------ | --------------- | ---------- | ------- | ----- |
| mi | klama | la            | bastn. | la              | .atlantas. | le      | karce |
| I  | go    | to-that-named | Boston | from-that-named | Atlanta    | via-the | car.  |



_le karce_ occupies the x4 place, and therefore [Example 9.6](chapter09#example-random-id-jh7T "Example 9.6. ") means:

> I go to Boston from Atlanta, using the car as a route.

This is nonsense, since a car cannot be a route. What the speaker presumably meant is expressed by:

### Example 9.7.

|    |       |               |        |                 |            |
| -- | ----- | ------------- | ------ | --------------- | ---------- |
| mi | klama | la            | bastn. | la              | .atlantas. |
| I  | go    | to-that-named | Boston | from-that-named | Atlanta    |

|                           |           |       |
| ------------------------- | --------- | ----- |
| zo'e                      | le        | karce |
| via-something-unspecified | using-the | car.  |



Here the sumti cmavo _[zo'e](glossary#valsi-zohe)_ is used to explicitly fill the x4 place; _[zo'e](glossary#valsi-zohe)_ means “the unspecified thing” and has the same meaning as leaving the place empty: the listener must infer the correct meaning from context.

## Tagging places: FA

The following cmavo are discussed in this section:

|      |    |                          |
| ---- | -- | ------------------------ |
| fa   | FA | tags x1 place            |
| fe   | FA | tags x2 place            |
| fi   | FA | tags x3 place            |
| fo   | FA | tags x4 place            |
| fu   | FA | tags x5 place            |
| fi'a | FA | place structure question |

In sentences like [Example 9.1](chapter09#example-random-id-Ji94 "Example 9.1. "), it is easy to get lost and forget which sumti falls in which place, especially if the sumti are more complicated than simple names or descriptions. The place structure tags of selma'o FA may be used to help clarify place structures. The five cmavo _[fa](glossary#valsi-fa)_, _[fe](glossary#valsi-fe)_, _[fi](glossary#valsi-fi)_, _[fo](glossary#valsi-fo)_, and _[fu](glossary#valsi-fu)_ may be inserted just before the sumti in the x1 to x5 places respectively:

### Example 9.8.

|     |    |    |       |     |            |        |     |            |            |
| --- | -- | -- | ----- | --- | ---------- | ------ | --- | ---------- | ---------- |
| fa  | mi | cu | klama | fe  | la         | bastn. | fi  | la         | .atlantas. |
| x1= | I  |    | go    | x2= | that-named | Boston | x3= | that-named | Atlanta    |

|     |     |       |     |     |       |
| --- | --- | ----- | --- | --- | ----- |
| fo  | le  | dargu | fu  | le  | karce |
| x4= | the | road  | x5= | the | car.  |

|                                                         |
| ------------------------------------------------------- |
| I go to Boston from Atlanta via the road using the car. |



In [Example 9.8](chapter09#example-random-id-yLop "Example 9.8. "), the tag _[fu](glossary#valsi-fu)_ before _le karce_ clarifies that _le karce_ occupies the x5 place of _[klama](glossary#valsi-klama)_. The use of _[fu](glossary#valsi-fu)_ tells us nothing about the purpose or meaning of the x5 place; it simply says that _le karce_ occupies it.

In [Example 9.8](chapter09#example-random-id-yLop "Example 9.8. "), the tags are overkill; they serve only to make [Example 9.1](chapter09#example-random-id-Ji94 "Example 9.1. ") even longer than it is. Here is a better illustration of the use of FA tags for clarification:

### Example 9.9.

|     |    |       |     |      |       |    |     |      |       |
| --- | -- | ----- | --- | ---- | ----- | -- | --- | ---- | ----- |
| fa  | mi | klama | fe  | le   | zdani | be | mi  | be'o | poi   |
| x1= | I  | go    | x2= | (the | house | of | me) |      | which |

|          |     |     |            |           |
| -------- | --- | --- | ---------- | --------- |
| nurma    | vau | fi  | la         | nu,IORK.  |
| is-rural |     | x3= | that-named | New-York. |



In [Example 9.9](chapter09#example-random-id-3CPJ "Example 9.9. "), the place structure of _[klama](glossary#valsi-klama)_ is as follows:

|    |             |                                     |
| -- | ----------- | ----------------------------------- |
| x1 | agent       | _[mi](glossary#valsi-mi)_        |
| x2 | destination | _le zdani be mi be'o poi nurma vau_ |
| x3 | origin      | _la nu,IORK._                       |
| x4 | route       | (empty)                             |
| x5 | means       | (empty)                             |

The _[fi](glossary#valsi-fi)_ tag serves to remind the hearer that what follows is in the x3 place of _[klama](glossary#valsi-klama)_; after listening to the complex sumti occupying the x2 place, it's easy to get lost.

Of course, once the sumti have been tagged, the order in which they are specified no longer carries the burden of distinguishing the places. Therefore, it is perfectly all right to scramble them into any order desired, and to move the selbri to anywhere in the bridi, even the beginning:

### Example 9.10.

|       |     |    |     |            |            |     |     |       |
| ----- | --- | -- | --- | ---------- | ---------- | --- | --- | ----- |
| klama | fa  | mi | fi  | la         | .atlantas. | fu  | le  | karce |
| go    | x1= | I  | x3= | that-named | Atlanta    | x5= | the | car   |

|     |            |        |     |     |       |
| --- | ---------- | ------ | --- | --- | ----- |
| fe  | la         | bastn. | fo  | le  | dargu |
| x2= | that-named | Boston | x4= | the | road. |

|                                                         |
| ------------------------------------------------------- |
| Go I from Atlanta using the car to Boston via the road. |



Note that no _[cu](glossary#valsi-cu)_ is permitted before the selbri in [Example 9.10](chapter09#example-random-id-YmN2 "Example 9.10. "), because _[cu](glossary#valsi-cu)_ separates the selbri from any preceding sumti, and [Example 9.10](chapter09#example-random-id-YmN2 "Example 9.10. ") has no such sumti.

### Example 9.11.

|     |     |       |     |     |       |     |            |            |
| --- | --- | ----- | --- | --- | ----- | --- | ---------- | ---------- |
| fu  | le  | karce | fo  | le  | dargu | fi  | la         | .atlantas. |
| x5= | the | car   | x4= | the | road  | x3= | that-named | Atlanta    |

|     |            |        |    |       |     |    |
| --- | ---------- | ------ | -- | ----- | --- | -- |
| fe  | la         | bastn. | cu | klama | fa  | mi |
| x2= | that-named | Boston |    | go    | x1= | I  |

|                                                           |
| --------------------------------------------------------- |
| Using the car, via the road, from Atlanta to Boston go I. |



[Example 9.11](chapter09#example-random-id-fG8R "Example 9.11. ") exhibits the reverse of the standard bridi form seen in [Example 9.1](chapter09#example-random-id-Ji94 "Example 9.1. ") and [Example 9.8](chapter09#example-random-id-yLop "Example 9.8. "), but still means exactly the same thing. If the FA tags were left out, however, producing:

### Example 9.12.

|     |       |        |       |                 |            |
| --- | ----- | ------ | ----- | --------------- | ---------- |
| le  | karce | le     | dargu | la              | .atlantas. |
| The | car   | to-the | road  | from-that-named | Atlanta    |

|                |        |    |       |           |
| -------------- | ------ | -- | ----- | --------- |
| la             | bastn. | cu | klama | mi        |
| via-that-named | Boston |    | goes  | using-me. |

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| The car goes to the road from Atlanta, with Boston as the route, using me as a means of transport. |



the meaning would be wholly changed, and in fact nonsensical.

Tagging places with FA cmavo makes it easy not only to reorder the places but also to omit undesirable ones, without any need for _[zo'e](glossary#valsi-zohe)_ or special rules about the x1 place:

### Example 9.13.

|        |     |            |            |     |            |        |
| ------ | --- | ---------- | ---------- | --- | ---------- | ------ |
| klama  | fi  | la         | .atlantas. | fe  | la         | bastn. |
| A-goer | x3= | that-named | Atlanta    | x2= | that-named | Boston |

|     |     |       |
| --- | --- | ----- |
| fu  | le  | karce |
| x5= | the | car.  |

|                                              |
| -------------------------------------------- |
| A goer from Atlanta to Boston using the car. |



Here the x1 and x4 places are empty, and so no sumti are tagged with _[fa](glossary#valsi-fa)_ or _[fo](glossary#valsi-fo)_; in addition, the x2 and x3 places appear in reverse order.

What if some sumti have FA tags and others do not? The rule is that after a FA-tagged sumti, any sumti following it occupy the places numerically succeeding it, subject to the proviso that an already-filled place is skipped:

### Example 9.14.

|       |     |    |               |        |               |            |
| ----- | --- | -- | ------------- | ------ | ------------- | ---------- |
| klama | fa  | mi | la            | bastn. | la            | .atlantas. |
| Go    | x1= | I  | x2=that-named | Boston | x3=that-named | Atlanta    |

|        |       |        |       |
| ------ | ----- | ------ | ----- |
| le     | dargu | le     | karce |
| x4=the | road  | x5=the | car.  |

|                                                         |
| ------------------------------------------------------- |
| Go I to Boston from Atlanta via the road using the car. |



In [Example 9.14](chapter09#example-random-id-oDES "Example 9.14. "), the _[fa](glossary#valsi-fa)_ causes _[mi](glossary#valsi-mi)_ to occupy the x1 place, and then the following untagged sumti occupy in order the x2 through x5 places. This is the mechanism by which Lojban allows placing the selbri first while specifying a sumti for the x1 place.

Here is a more complex (and more confusing) example:

### Example 9.15.

|    |       |     |            |            |     |       |
| -- | ----- | --- | ---------- | ---------- | --- | ----- |
| mi | klama | fi  | la         | .atlantas. | le  | dargu |
| I  | go    | x3= | that-named | Atlanta,   | the | road  |

|     |            |         |     |       |
| --- | ---------- | ------- | --- | ----- |
| fe  | la         | bastn.  | le  | karce |
| x2= | that-named | Boston, | the | car.  |

|                                                         |
| ------------------------------------------------------- |
| I go from Atlanta via the road to Boston using the car. |



In [Example 9.15](chapter09#example-random-id-q8is "Example 9.15. "), _[mi](glossary#valsi-mi)_ occupies the x1 place because it is the first sumti in the sentence (and is before the selbri). The second sumti, _la .atlantas._, occupies the x3 place by virtue of the tag _[fi](glossary#valsi-fi)_, and _le dargu_ occupies the x4 place as a result of following _la .atlantas._. Finally, _la bastn._ occupies the x2 place because of its tag _[fe](glossary#valsi-fe)_, and _le karce_ skips over the already-occupied x3 and x4 places to land in the x5 place.

Such a convoluted use of tags should probably be avoided except when trying for a literal translation of some English (or other natural-language) sentence; the rules stated here are merely given so that some standard interpretation is possible.

It is grammatically permitted to tag more than one sumti with the same FA cmavo. The effect is that of making more than one claim:

### Example 9.16.

|        |            |      |     |            |        |         |
| ------ | ---------- | ---- | --- | ---------- | ------ | ------- |
| \[fa]  | la         | rik. | fa  | la         | djein. | klama   |
| \[x1=] | that-named | Rick | x1= | that-named | Jane   | goes-to |

|        |     |       |     |     |       |     |     |        |
| ------ | --- | ----- | --- | --- | ----- | --- | --- | ------ |
| \[fe]  | le  | skina | fe  | le  | zdani | fe  | le  | zarci  |
| \[x2=] | the | movie | x2= | the | house | x2= | the | office |



may be taken to say that both Rick and Jane go to the movie, the house, and the office, merging six claims into one. More likely, however, it will simply confuse the listener. There are better ways, involving logical connectives (explained in [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System")), to say such things in Lojban. In fact, putting more than one sumti into a place is odd enough that it can only be done by explicit FA usage: this is the motivation for the proviso above, that already-occupied places are skipped. In this way, no sumti can be forced into a place already occupied unless it has an explicit FA cmavo tagging it.

The cmavo _[fi'a](glossary#valsi-fiha)_ also belongs to selma'o FA, and allows Lojban users to ask questions about place structures. A bridi containing _[fi'a](glossary#valsi-fiha)_ is a question, asking the listener to supply the appropriate other member of FA which will make the bridi a true statement:

### Example 9.17.

|                |     |       |       |     |        |       |
| -------------- | --- | ----- | ----- | --- | ------ | ----- |
| fi'a           | do  | dunda | \[fe] | le  | vi     | rozgu |
| \[what-place]? | you | give  | x2=   | the | nearby | rose  |

|                                                          |
| -------------------------------------------------------- |
| In what way are you involved in the giving of this rose? |
| Are you the giver or the receiver of this rose?          |



In [Example 9.17](chapter09#example-random-id-GnTu "Example 9.17. "), the speaker uses the selbri _[dunda](glossary#valsi-dunda)_, whose place structure is:

> _[_dunda_](glossary#valsi-dunda)_&#x78;1 gives x2 to x3

The tagged sumti _fi'a do_ indicates that the speaker wishes to know whether the sumti _[do](glossary#valsi-do)_ falls in the x1 or the x3 place (the x2 place is already occupied by _le rozgu_). The listener can reply with a sentence consisting solely of a FA cmavo: _[fa](glossary#valsi-fa)_ if the listener is the giver, _[fi](glossary#valsi-fi)_ if he/she is the receiver.

I have inserted the tag _[fe](glossary#valsi-fe)_ in brackets into [Example 9.17](chapter09#example-random-id-GnTu "Example 9.17. "), but it is actually not necessary, because _[fi'a](glossary#valsi-fiha)_ does not count as a numeric tag; therefore, _le vi rozgu_ would necessarily be in the x2 place even if no tag were present, because it immediately follows the selbri.

There is also another member of FA, namely _[fai](glossary#valsi-fai)_, which is discussed in [Section 9.12](chapter09#section-modal-jai "9.12. Modal conversion: JAI").

## Conversion: SE

The following cmavo are discussed in this section:

|    |    |                      |
| -- | -- | -------------------- |
| se | SE | 2nd place conversion |
| te | SE | 3rd place conversion |
| ve | SE | 4th place conversion |
| xe | SE | 5th place conversion |

So far we have seen ways to move sumti around within a bridi, but the actual place structure of the selbri has always remained untouched. The conversion cmavo of selma'o SE are incorporated within the selbri itself, and produce a new selbri (called a converted selbri) with a different place structure. In particular, after the application of any SE cmavo, the number and purposes of the places remain the same, but two of them have been exchanged, the x1 place and another. Which place has been exchanged with x1 depends on the cmavo chosen. Thus, for example, when _[se](glossary#valsi-se)_ is used, the x1 place is swapped with the x2 place.

Note that the cmavo of SE begin with consecutive consonants in alphabetical order. There is no “1st place conversion” cmavo, because exchanging the x1 place with itself is a pointless maneuver.

Here are the place structures of _se klama_:

> x1 is the destination of x2's going from x3 via x4 using x5

and _te klama_:

> x1 is the origin and x2 the destination of x3 going via x4 using x5

and _ve klama_:

> x1 is the route to x2 from x3 used by x4 going via x5

and _xe klama_:

> x1 is the means in going to x2 from x3 via x4 employed by x5

Note that the place structure numbers in each case continue to be listed in the usual order, x1 to x5.

Consider the following pair of examples:

### Example 9.18.

|            |        |    |                    |        |
| ---------- | ------ | -- | ------------------ | ------ |
| la         | bastn. | cu | se klama           | mi     |
| That-named | Boston |    | is-the-destination | of-me. |

|                           |
| ------------------------- |
| Boston is my destination. |
| Boston is gone to by me.  |



### Example 9.19.

|     |            |        |    |       |     |    |
| --- | ---------- | ------ | -- | ----- | --- | -- |
| fe  | la         | bastn. | cu | klama | fa  | mi |
| x2= | that-named | Boston |    | go    | x1= | I. |

|                 |
| --------------- |
| To Boston go I. |



[Example 9.18](chapter09#example-random-id-qmHh "Example 9.18. ") and [Example 9.19](chapter09#example-random-id-qMHH "Example 9.19. ") mean the same thing, in the sense that there is a relationship of going with the speaker as the agent and Boston as the destination (and with unspecified origin, route, and means). Structurally, however, they are quite different. [Example 9.18](chapter09#example-random-id-qmHh "Example 9.18. ") has _la bastn._ in the x1 place and _[mi](glossary#valsi-mi)_ in the x2 place of the selbri _se klama_, and uses standard bridi order; [Example 9.19](chapter09#example-random-id-qMHH "Example 9.19. ") has _[mi](glossary#valsi-mi)_ in the x1 place and _la bastn._ in the x2 place of the selbri _[klama](glossary#valsi-klama)_, and uses a non-standard order.

The most important use of conversion is in the construction of descriptions. A description is a sumti which begins with a cmavo of selma'o LA or LE, called the descriptor, and contains (in the simplest case) a selbri. We have already seen the descriptions _le dargu_ and _le karce_. To this we could add:

### Example 9.20.

|    |       |
| -- | ----- |
| le | klama |

|                             |
| --------------------------- |
| the go-er, the one who goes |



In every case, the description is about something which fits into the x1 place of the selbri. In order to get a description of a destination (that is, something fitting the x2 place of _[klama](glossary#valsi-klama)_), we must convert the selbri to _se klama_, whose x1 place is a destination. The result is

### Example 9.21.

|    |    |       |
| -- | -- | ----- |
| le | se | klama |

|                                    |
| ---------------------------------- |
| the destination gone to by someone |



Likewise, we can create three more converted descriptions:

### Example 9.22.

|    |    |       |
| -- | -- | ----- |
| le | te | klama |

|                               |
| ----------------------------- |
| the origin of someone's going |



### Example 9.23.

|    |    |       |
| -- | -- | ----- |
| le | ve | klama |

|                              |
| ---------------------------- |
| the route of someone's going |



### Example 9.24.

|    |    |       |
| -- | -- | ----- |
| le | xe | klama |

|                                 |
| ------------------------------- |
| the means by which someone goes |



[Example 9.23](chapter09#example-random-id-qMjE "Example 9.23. ") does not mean “the route” plain and simple: that is _le pluta_, using a different selbri. It means a route that is used by someone for an act of _[klama](glossary#valsi-klama)_; that is, a journey with origin and destination. A “road” on Mars, on which no one has traveled or is ever likely to, may be called _le pluta_, but it cannot be _le ve klama_, since there exists no one for whom it is _le ve klama be fo da_ (the route taken in an actual journey by someone \[da]).

When converting selbri that are more complex than a single brivla, it is important to realize that the scope of a SE cmavo is only the following brivla (or equivalent unit). In order to convert an entire tanru, it is necessary to enclose the tanru in _[ke'e](glossary#valsi-kehe)_ brackets:

### Example 9.25.

|    |                   |    |       |       |         |            |
| -- | ----------------- | -- | ----- | ----- | ------- | ---------- |
| mi | se                | ke | blanu | zdani | \[ke'e] | ti         |
| I  | \[2nd-conversion] | (  | blue  | house | )       | this-thing |



The place structure of _blanu zdani_ (blue house) is the same as that of _[zdani](glossary#valsi-zdani)_, by the rule given in [Section 9.1](chapter09#section-sumti-tcita-introduction "9.1. Introductory"). The place structure of _[zdani](glossary#valsi-zdani)_ is:

> _[_zdani_](glossary#valsi-zdani)_&#x78;1 is a house/nest/lair/den for inhabitant x2

The place structure of _se ke blanu zdani \[ke'e]_ is therefore:

> x1 is the inhabitant of the blue house (etc.) x2

Consequently, [Example 9.25](chapter09#example-random-id-wQbB "Example 9.25. ") means:

> I am the inhabitant of the blue house which is this thing.

Conversion applied to only part of a tanru has subtler effects which are explained in [Section 5.11](chapter05#section-place-conversion "5.11. Conversion of simple selbri").

It is grammatical to convert a selbri more than once with SE; later (inner) conversions are applied before earlier (outer) ones. For example, the place structure of _se te klama_ is achieved by exchanging the x1 and x2 place o&#x66;_&#xNAN;_

_> x1 is the destination and x2 is the origin of x3 going via x4 using x5On the other hand, _te se klama_ has a place structure derived from swapping the x1 and x3 places of _se klama_:> x1 is the origin of x2's going to x3 via x4 using x5which is quite different. However, multiple conversions like this are never necessary. Arbitrary scrambling of places can be achieved more easily and far more intelligibly with FA tags, and only a single conversion is ever needed in a description.(Although no one has made any real use of it, it is perhaps worth noting that compound conversions of the form _setese_, where the first and third cmavo are the same, effectively swap the two given places while leaving the others, including x1, alone: _setese_ (or equivalently _tesete_) swap the x2 and x3 places, whereas _texete_ (or _xetexe_) swap the x3 and x5 places.)_

_## Modal places: FIhO, FEhUThe following cmavo are discussed in this section:|      |      |                    |
| ---- | ---- | ------------------ |
| fi'o | FIhO | modal place prefix |
| fe'u | FEhU | modal terminator   |Sometimes the place structures engineered into Lojban are inadequate to meet the needs of actual speech. Consider the gismu _[viska](glossary#valsi-viska)_, whose place structure is:> _[_viska_](glossary#valsi-viska)_&#x78;1 sees x2 under conditions x3Seeing is a threefold relationship, involving an agent (le viska), an object of sight (le se viska), and an environment that makes seeing possible (le te viska). Seeing is done with one or more eyes, of course; in general, the eyes belong to the entity in the x1 place.Suppose, however, that you are blind in one eye and are talking to someone who doesn't know that. You might want to say, “I see you with the left eye.” There is no place in the place structure of _[viska](glossary#valsi-viska)_ such as “with eye x4” or the like. Lojban allows you to solve the problem by adding a new place, changing the relationship:### Example 9.26.|    |       |     |          |       |         |     |            |
| -- | ----- | --- | -------- | ----- | ------- | --- | ---------- |
| mi | viska | do  | fi'o     | kanla | \[fe'u] | le  | zunle      |
| I  | see   | you | \[modal] | eye:  |         | the | left-thing ||                              |
| ---------------------------- |
| I see you with the left eye. |The three-place relation _[viska](glossary#valsi-viska)_ has now acquired a fourth place specifying the eye used for seeing. The combination of the cmavo _[fi'o](glossary#valsi-fiho)_ (of selma'o FIhO) followed by a selbri, in this case the gismu _[kanla](glossary#valsi-kanla)_, forms a tag which is prefixed to the sumti filling the new place, namely _le zunle_. The semantics of _fi'o kanla le zunle_ is that _le zunle_ fills the x1 place of _[kanla](glossary#valsi-kanla)_, whose place structure is> _[_kanla_](glossary#valsi-kanla)_&#x78;1 is an/the eye of body x2Thus _le zunle_ is an eye. The x2 place of _[kanla](glossary#valsi-kanla)_ is unspecified and must be inferred from the context. It is important to remember that even though _le zunle_ is placed following _fi'o kanla_, semantically it belongs in the x1 place of _[kanla](glossary#valsi-kanla)_. The selbri may be terminated with _[fe'u](glossary#valsi-fehu)_ (of selma'o FEhU), an elidable terminator which is rarely required unless a non-logical connective follows the tag (omitting _[fe'u](glossary#valsi-fehu)_ in that case would make the connective affect the selbri).The term for such an added place is a “modal place”, as distinguished from the regular numbered places. (This use of the word “modal” is specific to the Loglan Project, and does not agree with the standard uses in either logic or linguistics, but is now too entrenched to change easily.) The _[fi'o](glossary#valsi-fiho)_ construction marking a modal place is called a “modal tag”, and the sumti which follows it a “modal sumti”; the purely Lojban terms _sumti tcita_ and _seltcita sumti_, respectively, are also commonly used. Modal sumti may be placed anywhere within the bridi, in any order; they have no effect whatever on the rules for assigning unmarked bridi to numbered places, and they may not be marked with FA cmavo.Consider [Example 9.26](chapter09#example-random-id-BSAc "Example 9.26. ") again. Another way to view the situation is to consider the speaker's left eye as a tool, a tool for seeing. The relevant selbri then becomes _[pilno](glossary#valsi-pilno)_, whose place structure is> _[_pilno_](glossary#valsi-pilno)_&#x78;1 uses x2 as a tool for purpose x3and we can rewrite [Example 9.26](chapter09#example-random-id-BSAc "Example 9.26. ") as### Example 9.27.|    |       |     |          |               |       |     |       |       |
| -- | ----- | --- | -------- | ------------- | ----- | --- | ----- | ----- |
| mi | viska | do  | fi'o     | se            | pilno | le  | zunle | kanla |
| I  | see   | you | \[modal] | \[conversion] | use:  | the | left  | eye.  ||                              |
| ---------------------------- |
| I see you using my left eye. |Here the selbri belonging to the modal is _se pilno_. The conversion of _[pilno](glossary#valsi-pilno)_ is necessary in order to get the “tool” place into x1, since only x1 can be the modal sumti. The “tool user” place is the x2 of _se pilno_ (because it is the x1 of _[pilno](glossary#valsi-pilno)_) and remains unspecified. The tag _fi'o pilno_ would mean “with tool user”, leaving the tool unspecified.## Modal tags: BAIThere are certain selbri which seem particularly useful in constructing modal tags. In particular, _[pilno](glossary#valsi-pilno)_ is one of them. The place structure of _[pilno](glossary#valsi-pilno)_ is:> _[_pilno_](glossary#valsi-pilno)_&#x78;1 uses x2 as a tool for purpose x3and almost any selbri which represents an action may need to specify a tool. Having to say _fi'o se pilno_ frequently would make many Lojban sentences unnecessarily verbose and clunky, so an abbreviation is provided in the language design: the compound cmavo _[sepi'o](glossary#valsi-sepiho)_.Here _[se](glossary#valsi-se)_ is used before a cmavo, namely _[pi'o](glossary#valsi-piho)_, rather than before a brivla. The meaning of this cmavo, which belongs to selma'o BAI, is exactly the same as that of _fi'o pilno fe'u_. Since what we want is a tag based on _se pilno_ rather than _pilno-_ the tool, not the tool user – the grammar allows a BAI cmavo to be converted using a SE cmavo. [Example 9.27](chapter09#example-random-id-Lu15 "Example 9.27. ") may therefore be rewritten as:### Example 9.28.|    |       |     |            |     |       |       |
| -- | ----- | --- | ---------- | --- | ----- | ----- |
| mi | viska | do  | sepi'o     | le  | zunle | kanla |
| I  | see   | you | with-tool: | the | left  | eye   ||                              |
| ---------------------------- |
| I see you using my left eye. |The compound cmavo _[sepi'o](glossary#valsi-sepiho)_ is much shorter than _fi'o se pilno \[fe'u]_ and can be thought of as a single word meaning “with-tool”. The modal tag _[pi'o](glossary#valsi-piho)_, with no _[se](glossary#valsi-se)_, similarly means “with-tool-user”, probably a less useful concept. Nevertheless, the parallelism with the place structure of _[pilno](glossary#valsi-pilno)_ makes the additional syllable worthwhile.Some BAI cmavo make sense with as well as without a SE cmavo; for example, _[ka'a](glossary#valsi-kaha)_, the BAI corresponding to the gismu _[klama](glossary#valsi-klama)_, has five usable forms corresponding to the five places of _[klama](glossary#valsi-klama)_ respectively:|                                      |                         |
| ------------------------------------ | ----------------------- |
| _[ka'a](glossary#valsi-kaha)_     | with-goer               |
| _[seka'a](glossary#valsi-sekaha)_ | with-destination        |
| _[teka'a](glossary#valsi-tekaha)_ | with-origin             |
| _[veka'a](glossary#valsi-vekaha)_ | with-route              |
| _[xeka'a](glossary#valsi-xekaha)_ | with-means-of-transport |Any of these tags may be used to provide modal places for bridi, as in the following examples:### Example 9.29.|            |        |    |       |           |       |       |           |     |
| ---------- | ------ | -- | ----- | --------- | ----- | ----- | --------- | --- |
| la         | .eivn. | cu | vecnu | loi       | flira | cinta | ka'a      | mi  |
| That-named | Avon   |    | sells | a-mass-of | face  | paint | with-goer | me. ||                                                  |
| ------------------------------------------------ |
| I am a traveling cosmetics salesperson for Avon. |([Example 9.29](chapter09#example-random-id-r0QA "Example 9.29. ") may seem a bit strained, but it illustrates the way in which an existing selbri, _[vecnu](glossary#valsi-vecnu)_ in this case, may have a place added to it which might otherwise seem utterly unrelated.)### Example 9.30.|    |       |                  |            |           |
| -- | ----- | ---------------- | ---------- | --------- |
| mi | cadzu | seka'a           | la         | bratfyd.  |
| I  | walk  | with-destination | that-named | Bradford. ||                           |
| ------------------------- |
| I am walking to Bradford. |### Example 9.31.|                           |             |            |          |
| ------------------------- | ----------- | ---------- | -------- |
| bloti                     | teka'a      | la         | nu,IORK. |
| \[Observative:]-is-a-boat | with-origin | that-named | New-York ||                       |
| --------------------- |
| A boat from New York! |### Example 9.32.|     |       |            |    |         |
| --- | ----- | ---------- | -- | ------- |
| do  | bajra | veka'a     | lo | djine   |
| You | run   | with-route | a  | circle. ||                             |
| --------------------------- |
| You are running in circles. |### Example 9.33.|    |       |                         |     |           |
| -- | ----- | ----------------------- | --- | --------- |
| mi | citka | xeka'a                  | le  | vinji     |
| I  | eat   | with-means-of-transport | the | airplane. ||                        |
| ---------------------- |
| I eat in the airplane. |There are sixty-odd cmavo of selma'o BAI, based on selected gismu that seemed useful in a variety of settings. The list is somewhat biased toward English, because many of the cmavo were selected on the basis of corresponding English prepositions and preposition compounds such as “with”, “without”, and “by means of”. The BAI cmavo, however, are far more precise than English prepositions, because their meanings are fixed by the place structures of the corresponding gismu.All BAI cmavo have the form CV'V or CVV. Most of them are CV'V, where the C is the first consonant of the corresponding gismu and the two Vs are the two vowels of the gismu. The table in [Section 9.16](chapter09#section-irregular-BAI "9.16. CV'V cmavo of selma'o BAI with irregular forms") shows the exceptions.There is one additional BAI cmavo that is not derived from a gismu: _[do'e](glossary#valsi-dohe)_. This cmavo is used when an extra place is needed, but it seems useful to be vague about the semantic implications of the extra place:### Example 9.34.|      |       |               |     |       |    |       |        |       |
| ---- | ----- | ------------- | --- | ----- | -- | ----- | ------ | ----- |
| lo   | nanmu | be do'e       | le  | berti | cu | klama | le     | tcadu |
| Some | man   | \[related-to] | the | north |    | came  | to-the | city. ||                                      |
| ------------------------------------ |
| A man of the north came to the city. |Here _le berti_ is provided as a modal place of the selbri _[nanmu](glossary#valsi-nanmu)_, but its exact significance is vague, and is paralleled in the colloquial translation by the vague English preposition “of”. [Example 9.34](chapter09#example-random-id-2vMd "Example 9.34. ") also illustrates a modal place bound into a selbri with _[be](glossary#valsi-be)_. This construction is useful when the selbri of a description requires a modal place; this and other uses of _[be](glossary#valsi-be)_ are more fully explained in [Section 5.7](chapter05#section-be-sumti "5.7. Linked sumti: be-bei-be'o").## Modal sentence connection: the causalsThe following cmavo are discussed in this section:|      |     |                                 |
| ---- | --- | ------------------------------- |
| ri'a | BAI | rinka modal: physical cause     |
| ki'u | BAI | krinu modal: justification      |
| mu'i | BAI | mukti modal: motivation         |
| ni'i | BAI | nibli modal: logical entailment |This section has two purposes. On the one hand, it explains the grammatical construct called “modal sentence connection”. On the other, it exemplifies some of the more useful BAI cmavo: the causals. (There are other BAI cmavo which have causal implications: _[ja'e](glossary#valsi-jahe)_ means “with result”, and so _[seja'e](glossary#valsi-sejahe)_ means “with cause of unspecified nature”; likewise, _[gau](glossary#valsi-gau)_ means “with agent” and _[tezu'e](glossary#valsi-tezuhe)_ means “with purpose”. These other modal cmavo will not be further discussed here, as my purpose is to explain modal sentence connection rather than Lojbanic views of causation.)There are four causal gismu in Lojban, distinguishing different versions of the relationships lumped in English as “causal”:|                                    |                                             |
| ---------------------------------- | ------------------------------------------- |
| _[rinka](glossary#valsi-rinka)_ | event x1 physically causes event x2         |
| _[krinu](glossary#valsi-krinu)_ | event x1 is the justification for event x2  |
| _[mukti](glossary#valsi-mukti)_ | event x1 is the (human) motive for event x2 |
| _[nibli](glossary#valsi-nibli)_ | event x1 logically entails event x2         |Each of these gismu has a related modal: _[ri'a](glossary#valsi-riha)_, _[ki'u](glossary#valsi-kihu)_, _[mu'i](glossary#valsi-muhi)_, and _[ni'i](glossary#valsi-nihi)_ respectively. Using these gismu and these modals, we can create various causal sentences with different implications:### Example 9.35.|     |       |    |       |                     |     |          |
| --- | ----- | -- | ----- | ------------------- | --- | -------- |
| le  | spati | cu | banro | ri'a                | le  | nu       |
| The | plant |    | grows | with-physical-cause | the | event-of ||     |       |       |    |     |        |
| --- | ----- | ----- | -- | --- | ------ |
| do  | djacu | dunda | fi | le  | spati  |
| you | water | give  | to | the | plant. ||                                       |
| ------------------------------------- |
| The plant grows because you water it. |### Example 9.36.|    |       |       |     |       |          |
| -- | ----- | ----- | --- | ----- | -------- |
| la | djan. | cpacu | le  | pamoi | se jinga |
|    | John  | gets  | the | first | prize    ||                    |     |          |            |       |       |
| ------------------ | --- | -------- | ---------- | ----- | ----- |
| ki'u               | le  | nu       | la         | djan. | jinga |
| with-justification | the | event-of | that-named | John  | wins. ||                                          |
| ---------------------------------------- |
| John got the first prize because he won. |### Example 9.37.|    |       |     |       |                 |
| -- | ----- | --- | ----- | --------------- |
| mi | lebna | le  | cukta | mu'i            |
| I  | took  | the | book  | with-motivation ||     |          |    |       |     |       |
| --- | -------- | -- | ----- | --- | ----- |
| le  | nu       | mi | viska | le  | cukta |
| the | event-of | I  | saw   | the | book. ||                                   |
| --------------------------------- |
| I took the book because I saw it. |### Example 9.38.|    |           |       |        |                            |
| -- | --------- | ----- | ------ | -------------------------- |
| la | sokrates. | morsi | binxo  | ni'i                       |
|    | Socrates  | dead  | became | with-logical-justification ||     |          |            |           |           |
| --- | -------- | ---------- | --------- | --------- |
| le  | nu       | la         | sokrates. | remna     |
| the | event-of | that-named | Socrates  | is-human. ||                                          |
| ---------------------------------------- |
| Socrates died because Socrates is human. |In [Example 9.35](chapter09#example-random-id-qmMz "Example 9.35. ") through [Example 9.38](chapter09#example-random-id-qMNc "Example 9.38. "), the same English word “because” is used to translate all four modals, but the types of cause being expressed are quite different. Let us now focus on [Example 9.35](chapter09#example-random-id-qmMz "Example 9.35. "), and explore some variations on it.As written, [Example 9.35](chapter09#example-random-id-qmMz "Example 9.35. ") claims that the plant grows, but only refers to the event of watering it in an abstraction bridi (abstractions are explained in [Chapter 11](chapter11 "Chapter 11. Events, Qualities, Quantities, And Other Vague Words: On Lojban Abstraction")) without actually making a claim. If I express [Example 9.35](chapter09#example-random-id-qmMz "Example 9.35. "), I have said that the plant in fact grows, but I have not said that you actually water it, merely that there is a causal relationship between watering and growing. This is semantically asymmetrical. Suppose I wanted to claim that the plant was being watered, and only mention its growth as ancillary information? Then we could reverse the main bridi and the abstraction bridi, saying:### Example 9.39.|     |       |       |    |     |       |
| --- | ----- | ----- | -- | --- | ----- |
| do  | djacu | dunda | fi | le  | spati |
| You | water | give  | to | the | plant ||                      |     |          |    |        |
| -------------------- | --- | -------- | -- | ------ |
| seri'a               | le  | nu       | ri | banro  |
| with-physical-effect | the | event-of | it | grows. ||                                           |
| ----------------------------------------- |
| You water the plant; therefore, it grows. |with the _[ri'a](glossary#valsi-riha)_ changed to _[seri'a](glossary#valsi-seriha)_. In addition, there are also symmetrical forms:### Example 9.40.|     |          |      |       |       |    |     |        |    |
| --- | -------- | ---- | ----- | ----- | -- | --- | ------ | -- |
| le  | nu       | do   | djacu | dunda | fi | le  | spati  | cu |
| The | event-of | (you | water | give  | to | the | plant) |    ||        |     |          |      |       |    |         |
| ------ | --- | -------- | ---- | ----- | -- | ------- |
| rinka  | le  | nu       | le   | spati | cu | banro   |
| causes | the | event-of | (the | plant |    | grows). ||                                            |
| ------------------------------------------ |
| Your watering the plant causes its growth. |
| If you water the plant, then it grows.     |does not claim either event, but asserts only the causal relationship between them. So in [Example 9.40](chapter09#example-random-id-1YHv "Example 9.40. "), I am not saying that the plant grows nor that you have in fact watered it. The second colloquial translation shows a form of “if-then” in English quite distinct from the logical connective “if-then” explained in [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System").Suppose we wish to claim both events as well as their causal relationship? We can use one of two methods:### Example 9.41.|     |       |    |        |          |     |
| --- | ----- | -- | ------ | -------- | --- |
| le  | spati | cu | banro  | .iri'abo | do  |
| The | plant |    | grows. | Because  | you ||       |       |    |     |        |
| ----- | ----- | -- | --- | ------ |
| djacu | dunda | fi | le  | spati  |
| water | give  | to | the | plant. ||                                       |
| ------------------------------------- |
| The plant grows because you water it. |### Example 9.42.|     |       |       |    |     |        |
| --- | ----- | ----- | -- | --- | ------ |
| do  | djacu | dunda | fi | le  | spati  |
| You | water | give  | to | the | plant. ||            |     |       |    |        |
| ---------- | --- | ----- | -- | ------ |
| .iseri'abo | le  | spati | cu | banro  |
| Therefore  | the | plant |    | grows. ||                                           |
| ----------------------------------------- |
| You water the plant; therefore, it grows. |The compound cmavo _.iri'abo_ and _.iseri'abo_ serve to connect two bridi, as the initial _[i](glossary#valsi-i)_ indicates. The final _[bo](glossary#valsi-bo)_ is necessary to prevent the modal from “taking over” the following sumti. If the _[bo](glossary#valsi-bo)_ were omitted from [Example 9.41](chapter09#example-random-id-qMnX "Example 9.41. ") we would have:### Example 9.43.|     |       |    |        |    |            |      |
| --- | ----- | -- | ------ | -- | ---------- | ---- |
| le  | spati | cu | banro  | .i | ri'a       | do   |
| The | plant |    | grows. |    | Because-of | you, ||              |       |       |    |     |        |
| ------------ | ----- | ----- | -- | --- | ------ |
|              | djacu | dunda | fi | le  | spati  |
| \[something] | water | gives | to | the | plant. ||                                                               |
| ------------------------------------------------------------- |
| The plant grows. Because of you, water is given to the plant. |Because _ri'a do_ is a modal sumti in [Example 9.43](chapter09#example-random-id-Wo6K "Example 9.43. "), there is no longer an explicit sumti in the x1 place of _djacu dunda_, and the translation must be changed.The effect of sentences like [Example 9.41](chapter09#example-random-id-qMnX "Example 9.41. ") and [Example 9.42](chapter09#example-random-id-qMPn "Example 9.42. ") is that the modal, _[ri'a](glossary#valsi-riha)_ in this example, no longer modifies an explicit sumti. Instead, the sumti is implicit, the event given by a full bridi. Furthermore, there is a second implication: that the first bridi fills the x2 place of the gismu _[rinka](glossary#valsi-rinka)_; it specifies an event which is the effect. I am therefore claiming three things: that the plant grows, that you have watered it, and that there is a cause-and-effect relationship between the two.In principle, any modal tag can appear in a sentence connective of the type exemplified by [Example 9.41](chapter09#example-random-id-qMnX "Example 9.41. ") and [Example 9.42](chapter09#example-random-id-qMPn "Example 9.42. "). However, it makes little sense to use any modals which do not expect events or other abstractions to fill the places of the corresponding gismu. The sentence connective _.ibaubo_ is perfectly grammatical, but it is hard to imagine any two sentences which could be connected by an “in-language” modal. This is because a sentence describes an event, and an event can be a cause or an effect, but not a language.## Other modal connectionsLike many Lojban grammatical constructions, sentence modal connection has both forethought and afterthought forms. (See [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System") for a more detailed discussion of Lojban connectives.) [Section 9.7](chapter09#section-causals "9.7. Modal sentence connection: the causals") exemplifies only afterthought modal connection, illustrated here by:### Example 9.44.|    |       |             |       |
| -- | ----- | ----------- | ----- |
| mi | jgari | lei         | djacu |
| I  | grasp | the-mass-of | water ||                     |    |       |     |       |
| ------------------- | -- | ----- | --- | ----- |
| .iri'abo            | mi | jgari | le  | kabri |
| with-physical-cause | I  | grasp | the | cup.  ||                                                                   |
| ----------------------------------------------------------------- |
| Causing the mass of water to be grasped by me, I grasped the cup. |
| I grasp the water because I grasp the cup.                        |An afterthought connection is one that is signaled only by a cmavo (or a compound cmavo, in this case) between the two constructs being connected. Forethought connection uses a signal both before the first construct and between the two: the use of “both” and “and” in the first half of this sentence represents a forethought connection (though not a modal one).To make forethought modal sentence connections in Lojban, place the modal plus _[gi](glossary#valsi-gi)_ before the first bridi, and _[gi](glossary#valsi-gi)_ between the two. No _[i](glossary#valsi-i)_ is used within the construct. The forethought equivalent of [Example 9.44](chapter09#example-random-id-2D4c "Example 9.44. ") is:### Example 9.45.|                     |    |       |     |       |    |
| ------------------- | -- | ----- | --- | ----- | -- |
| ri'agi              | mi | jgari | le  | kabri | gi |
| With-physical-cause | I  | grasp | the | cup   | ,  ||    |       |             |        |
| -- | ----- | ----------- | ------ |
| mi | jgari | lei         | djacu  |
| I  | grasp | the-mass-of | water. ||                                             |
| ------------------------------------------- |
| Because I grasp the cup, I grasp the water. |Note that the cause, the x1 of _[rinka](glossary#valsi-rinka)_ is now placed first. To keep the two bridi in the original order of [Example 9.44](chapter09#example-random-id-2D4c "Example 9.44. "), we could say:### Example 9.46.|                      |    |       |             |       |    |
| -------------------- | -- | ----- | ----------- | ----- | -- |
| seri'agi             | mi | jgari | lei         | djacu | gi |
| With-physical-effect | I  | grasp | the-mass-of | water | ,  ||    |       |     |       |
| -- | ----- | --- | ----- |
| mi | jgari | le  | kabri |
| I  | grasp | the | cup.  |In English, the sentence “Therefore I grasp the water, I grasp the cup” is ungrammatical, because “therefore” is not grammatically equivalent to “because”. In Lojban, _seri'agi_ can be used just like _ri'agi_.When the two bridi joined by a modal connection have one or more elements (selbri or sumti or both) in common, there are various condensed forms that can be used in place of full modal sentence connection with both bridi completely stated.When the bridi are the same except for a single sumti, as in [Example 9.44](chapter09#example-random-id-2D4c "Example 9.44. ") through [Example 9.46](chapter09#example-random-id-rQ77 "Example 9.46. "), then a sumti modal connection may be employed:### Example 9.47.|    |       |         |     |       |    |             |        |
| -- | ----- | ------- | --- | ----- | -- | ----------- | ------ |
| mi | jgari | ri'agi  | le  | kabri | gi | lei         | djacu  |
| I  | grasp | because | the | cup   | ,  | the-mass-of | water. |[Example 9.47](chapter09#example-random-id-o7FG "Example 9.47. ") means exactly the same as [Example 9.44](chapter09#example-random-id-2D4c "Example 9.44. ") through [Example 9.46](chapter09#example-random-id-rQ77 "Example 9.46. "), but there is no idiomatic English translation that will distinguish it from them.If the two connected bridi are different in more than one sumti, then a termset may be employed. Termsets are explained more fully in [Section 14.11](chapter14#section-termsets "14.11. Termset logical connection"), but are essentially a mechanism for creating connections between multiple sumti simultaneously.### Example 9.48.|    |       |     |       |               |       |
| -- | ----- | --- | ----- | ------------- | ----- |
| mi | dunda | le  | cukta | la            | djan. |
| I  | gave  | the | book  | to-that-named | John. ||              |            |       |       |             |       |        |
| ------------ | ---------- | ----- | ----- | ----------- | ----- | ------ |
| .imu'ibo     | la         | djan. | dunda | lei         | jdini | mi     |
| Motivated-by | that-named | John  | gave  | the-mass-of | money | to-me. ||                                                         |
| ------------------------------------------------------- |
| I gave the book to John, because John gave money to me. |means the same as:### Example 9.49.|          |         |            |       |             |        |    |    |
| -------- | ------- | ---------- | ----- | ----------- | ------ | -- | -- |
| nu'i     | mu'igi  | la         | djan. | lei         | jdini  | mi | gi |
| \[start] | because | that-named | John, | the-mass-of | money, | me | ;  ||    |     |       |            |       |        |        |
| -- | --- | ----- | ---------- | ----- | ------ | ------ |
| mi | le  | cukta | la         | djan. | nu'u   | dunda  |
| I, | the | book, | that-named | John  | \[end] | gives. |Here there are three sumti in each half of the termset, because the two bridi share only their selbri.There is no modal connection between selbri as such: bridi which differ only in the selbri can be modally connected using bridi-tail modal connection. The bridi-tail construct is more fully explained in [Section 14.9](chapter14#section-compound-bridi "14.9. Compound bridi"), but essentially it consists of a selbri with optional sumti following it. [Example 9.37](chapter09#example-random-id-qMN7 "Example 9.37. ") is suitable for bridi-tail connection, and could be shortened to:### Example 9.50.|    |         |       |     |       |    |       |     |       |
| -- | ------- | ----- | --- | ----- | -- | ----- | --- | ----- |
| mi | mu'igi  | viska | le  | cukta | gi | lebna | le  | cukta |
| I, | because | saw   | the | book, |    | took  | the | book. |Again, no straightforward English translation exists. It is even possible to shorten [Example 9.50](chapter09#example-random-id-Do9b "Example 9.50. ") further to:### Example 9.51.|    |         |       |           |       |     |     |       |
| -- | ------- | ----- | --------- | ----- | --- | --- | ----- |
| mi | mu'igi  | viska | gi        | lebna | vau | le  | cukta |
| I  | because | saw,  | therefore | took, |     | the | book. |where _le cukta_ is set off by the non-elidable _[vau](glossary#valsi-vau)_ and is made to belong to both bridi-tails – see [Section 14.9](chapter14#section-compound-bridi "14.9. Compound bridi") for more explanations.Since this is a chapter on rearranging sumti, it is worth pointing out that [Example 9.51](chapter09#example-random-id-YXps "Example 9.51. ") can be further rearranged to:### Example 9.52.|    |     |       |         |       |           |       |
| -- | --- | ----- | ------- | ----- | --------- | ----- |
| mi | le  | cukta | mu'igi  | viska | gi        | lebna |
| I, | the | book, | because | saw,  | therefore | took. |which doesn't require the extra _[vau](glossary#valsi-vau)_; all sumti before a conjunction of bridi-tails are shared.Finally, mathematical operands can be modally connected.### Example 9.53.|            |     |    |            |    |
| ---------- | --- | -- | ---------- | -- |
| li         | ny. | du | li         | vo |
| the-number | n   | =  | the-number | 4. ||             |            |     |    |            |    |      |    |
| ----------- | ---------- | --- | -- | ---------- | -- | ---- | -- |
| .ini'ibo    | li         | ny. | du | li         | re | su'i | re |
| Entailed-by | the-number | n   | =  | the-number | 2  | +    | 2. ||                          |
| ------------------------ |
| n = 4 because n = 2 + 2. |can be reduced to:### Example 9.54.|            |     |    |            |
| ---------- | --- | -- | ---------- |
| li         | ny. | du | li         |
| the-number | n   | =  | the-number ||         |     |    |      |    |         |           |    |
| ------- | --- | -- | ---- | -- | ------- | --------- | -- |
| ni'igi  | vei | re | su'i | re | \[ve'o] | gi        | vo |
| because | (   | 2  | +    | 2  | )       | therefore | 4. ||                            |
| -------------------------- |
| n is 2 + 2, and is thus 4. |The cmavo _[vei](glossary#valsi-vei)_ and _[ve'o](glossary#valsi-veho)_ represent mathematical parentheses, and are required so that _ni'igi_ affects more than just the immediately following operand, namely the first _[re](glossary#valsi-re)_. (The right parenthesis, _[ve'o](glossary#valsi-veho)_, is an elidable terminator.) As usual, no English translation does [Example 9.54](chapter09#example-random-id-Mfe4 "Example 9.54. ") justice.Note: Due to restrictions on the Lojban parsing algorithm, it is not possible to form modal connectives using the _fi'o-_&#x70;lus-selbri form of modal. Only the predefined modals of selma'o BAI can be compounded as shown in [Section 9.7](chapter09#section-causals "9.7. Modal sentence connection: the causals") and [Section 9.8](chapter09#section-modal-connectives "9.8. Other modal connections").## Modal selbriConsider the example:### Example 9.55.|    |       |             |            |         |
| -- | ----- | ----------- | ---------- | ------- |
| mi | tavla | bau         | la         | lojban. |
| I  | speak | in-language | that-named | Lojban  ||                |             |            |        |
| -------------- | ----------- | ---------- | ------ |
| bai            | tu'a        | la         | frank. |
| with-compeller | some-act-by | that-named | Frank. ||                                               |
| --------------------------------------------- |
| I speak in Lojban, under compulsion by Frank. |[Example 9.55](chapter09#example-random-id-bT4c "Example 9.55. ") has two modal sumti, using the modals _[bau](glossary#valsi-bau)_ and _[bai](glossary#valsi-bai)_. Suppose we wanted to specify the language explicitly but be vague about who's doing the compelling. We can simplify [Example 9.55](chapter09#example-random-id-bT4c "Example 9.55. ") to:### Example 9.56.|    |       |             |            |         |                  |        |
| -- | ----- | ----------- | ---------- | ------- | ---------------- | ------ |
| mi | tavla | bau         | la         | lojban. | bai              | \[ku]. |
| I  | speak | in-language | that-named | Lojban  | under-compulsion |        |In [Example 9.56](chapter09#example-random-id-dbSy "Example 9.56. "), the elidable terminator _[ku](glossary#valsi-ku)_ has taken the place of the sumti which would normally follow _[bai](glossary#valsi-bai)_. Alternatively, we could specify the one who compels but keep the language vague:### Example 9.57.|    |       |                  |       |
| -- | ----- | ---------------- | ----- |
| mi | tavla | bau              | \[ku] |
| I  | speak | in-some-language |       ||                     |             |            |        |
| ------------------- | ----------- | ---------- | ------ |
| bai                 | tu'a        | la         | frank. |
| under-compulsion-by | some-act-by | that-named | Frank. |We are also free to move the modal-plus- _[ku](glossary#valsi-ku)_ around the bridi:### Example 9.58.|                  |       |                  |    |    |        |
| ---------------- | ----- | ---------------- | -- | -- | ------ |
| bau              | \[ku] | bai              | ku | mi | tavla  |
| In-some-language |       | under-compulsion |    | I  | speak. |An alternative to using _[ku](glossary#valsi-ku)_ is to place the modal cmavo right before the selbri, following the _[cu](glossary#valsi-cu)_ which often appears there. When a modal is present, the _[cu](glossary#valsi-cu)_ is almost never necessary.### Example 9.59.|    |             |       |             |            |         |
| -- | ----------- | ----- | ----------- | ---------- | ------- |
| mi | bai         | tavla | bau         | la         | lojban. |
| I  | compelledly | speak | in-language | that-named | Lojban. |In this use, the modal is like a tanru modifier semantically, although grammatically it is quite distinct. [Example 9.59](chapter09#example-random-id-613h "Example 9.59. ") is very similar in meaning to:### Example 9.60.|    |             |       |             |            |         |
| -- | ----------- | ----- | ----------- | ---------- | ------- |
| mi | se bapli    | tavla | bau         | la         | lojban. |
| I  | compelledly | speak | in-language | that-named | Lojban. |The _[se](glossary#valsi-se)_ conversion is needed because _bapli tavla_ would be a “compeller type of speaker” rather than a “compelled (by someone) type of speaker”, which is what a _bai tavla_ is.If the modal preceding a selbri is constructed using _[fi'o](glossary#valsi-fiho)_, then _[fe'u](glossary#valsi-fehu)_ is required to prevent the main selbri and the modal selbri from colliding:### Example 9.61.|    |      |       |      |       |      |
| -- | ---- | ----- | ---- | ----- | ---- |
| mi | fi'o | kanla | fe'u | viska | do   |
| I  | with | eye   |      | see   | you. ||                           |
| ------------------------- |
| I see you with my eye(s). |There are two other uses of modals. A modal can be attached to a pair of bridi-tails that have already been connected by a logical, non-logical, or modal connection (see [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System") for more on logical and non-logical connections):### Example 9.62.|    |                  |    |      |       |        |        |
| -- | ---------------- | -- | ---- | ----- | ------ | ------ |
| mi | bai              | ke | ge   | klama | le     | zarci  |
| I  | under-compulsion | (  | both | go    | to-the | market ||     |       |        |       |         |
| --- | ----- | ------ | ----- | ------- |
| gi  | cadzu | le     | bisli | \[ke'e] |
| and | walk  | on-the | ice   | ).      ||                                                                |
| -------------------------------------------------------------- |
| Under compulsion, I both go to the market and walk on the ice. |Here the _[bai](glossary#valsi-bai)_ is spread over both _klama le zarci_ and _cadzu le bisli_, and the _ge ... gi_ represents the logical connection “both-and” between the two.Similarly, a modal can be attached to multiple sentences that have been combined with _[tu'e](glossary#valsi-tuhe)_ and _[tu'u](glossary#valsi-tuhu)_, which are explained in more detail in [Section 19.2](chapter19#section-i "19.2. Sentences: I"):### Example 9.63.|                  |          |    |       |        |         |
| ---------------- | -------- | -- | ----- | ------ | ------- |
| bai              | tu'e     | mi | klama | le     | zarci   |
| Under-compulsion | \[start] | I  | go    | to-the | market. ||    |    |       |        |       |         |
| -- | -- | ----- | ------ | ----- | ------- |
| .i | mi | cadzu | le     | bisli | \[tu'u] |
|    | I  | walk  | on-the | ice   | \[end]. |means the same thing as [Example 9.62](chapter09#example-random-id-vCzL "Example 9.62. ").Note: Either BAI modals or _fi'o-_&#x70;lus-selbri modals may correctly be used in any of the constructions discussed in this section.## Modal relative phrases; ComparisonThe following cmavo are discussed in this section:|      |     |                             |
| ---- | --- | --------------------------- |
| pe   | GOI | restrictive relative phrase |
| ne   | GOI | incidental relative phrase  |
| mau  | BAI | zmadu modal                 |
| me'a | BAI | mleca modal                 |Relative phrases and clauses are explained in much more detail in [Chapter 8](chapter08 "Chapter 8. Relative Clauses, Which Make sumti Even More Complicated"). However, there is a construction which combines a modal with a relative phrase which is relevant to this chapter. Consider the following examples of relative clauses:### Example 9.64.|     |               |       |                 |
| --- | ------------- | ----- | --------------- |
| la  | .apasionatas. | poi   | se cusku        |
| The | Appassionata  | which | is-expressed-by ||            |        |            |    |             |     |
| ---------- | ------ | ---------- | -- | ----------- | --- |
| la         | .artr. | rubnstain. | cu | se nelci    | mi  |
| that-named | Arthur | Rubinstein |    | is-liked-by | me. |### Example 9.65.|     |               |       |               |
| --- | ------------- | ----- | ------------- |
| la  | .apasionatas. | noi   | se finti      |
| The | Appassionata, | which | is-created-by ||            |            |    |             |     |
| ---------- | ---------- | -- | ----------- | --- |
| la         | betovn.    | cu | se nelci    | mi  |
| that-named | Beethoven, |    | is-liked-by | me. |In [Example 9.64](chapter09#example-random-id-qmPP "Example 9.64. "), _la .apasionatas._ refers to a particular performance of the sonata, namely the one performed by Rubinstein. Therefore, the relative clause _poi se cusku_ uses the cmavo _[poi](glossary#valsi-poi)_ (of selma'o NOI) to restrict the meaning of _la .apasionatas_ to the performance in question.In [Example 9.65](chapter09#example-random-id-qmPr "Example 9.65. "), however, _la .apasionatas._ refers to the sonata as a whole, and the information that it was composed by Beethoven is merely incidental. The cmavo _[noi](glossary#valsi-noi)_ (also of selma'o NOI) expresses the incidental nature of this relationship.The cmavo _[pe](glossary#valsi-pe)_ and _[ne](glossary#valsi-ne)_ (of selma'o GOI) are roughly equivalent to _[poi](glossary#valsi-poi)_ and _[noi](glossary#valsi-noi)_ respectively, but are followed by sumti rather than full bridi. We can abbreviate [Example 9.64](chapter09#example-random-id-qmPP "Example 9.64. ") and [Example 9.65](chapter09#example-random-id-qmPr "Example 9.65. ") to:### Example 9.66.|     |               |    |            |        |            |             |     |
| --- | ------------- | -- | ---------- | ------ | ---------- | ----------- | --- |
| la  | .apasionatas. | pe | la         | .artr. | rubnstain. | se nelci    | mi  |
| The | Appassionata  | of | that-named | Arthur | Rubinstein | is-liked-by | me. |### Example 9.67.|     |               |             |            |            |             |     |
| --- | ------------- | ----------- | ---------- | ---------- | ----------- | --- |
| la  | .apasionatas. | ne          | la         | betovn.    | se nelci    | mi  |
| The | Appassionata, | which-is-of | that-named | Beethoven, | is-liked-by | me. |Here the precise selbri of the relative clauses is lost: all we can tell is that the Appassionata is connected in some way with Rubinstein (in [Example 9.66](chapter09#example-random-id-qMq1 "Example 9.66. ")) and Beethoven (in [Example 9.67](chapter09#example-random-id-qMQ1 "Example 9.67. ")), and that the relationships are respectively restrictive and incidental.It happens that both _[cusku](glossary#valsi-cusku)_ and _[finti](glossary#valsi-finti)_ have BAI cmavo, namely _[cu'u](glossary#valsi-cuhu)_ and _[fi'e](glossary#valsi-fihe)_. We can recast [Example 9.66](chapter09#example-random-id-qMq1 "Example 9.66. ") and [Example 9.67](chapter09#example-random-id-qMQ1 "Example 9.67. ") as:### Example 9.68.|     |              |              |
| --- | ------------ | ------------ |
| la  | .apasionatas | pe cu'u      |
| The | Appassionata | expressed-by ||            |        |            |    |             |     |
| ---------- | ------ | ---------- | -- | ----------- | --- |
| la         | .artr. | rubnstain. | cu | se nelci    | mi  |
| that-named | Arthur | Rubinstein |    | is-liked-by | me. |### Example 9.69.|     |               |             |
| --- | ------------- | ----------- |
| la  | .apasionatas  | ne fi'e     |
| The | Appassionata, | invented-by ||            |            |    |             |     |
| ---------- | ---------- | -- | ----------- | --- |
| la         | betovn.    | cu | se nelci    | mi  |
| that-named | Beethoven, |    | is-liked-by | me. |[Example 9.68](chapter09#example-random-id-qMqF "Example 9.68. ") and [Example 9.69](chapter09#example-random-id-qmqy "Example 9.69. ") have the full semantic content of [Example 9.64](chapter09#example-random-id-qmPP "Example 9.64. ") and [Example 9.65](chapter09#example-random-id-qmPr "Example 9.65. ") respectively.Modal relative phrases are often used with the BAI cmavo _[mau](glossary#valsi-mau)_ and _[me'a](glossary#valsi-meha)_, which are based on the comparative gismu _[zmadu](glossary#valsi-zmadu)_ (more than) and _[mleca](glossary#valsi-mleca)_ (less than) respectively. The place structures are:|                                    |                                                         |
| ---------------------------------- | ------------------------------------------------------- |
| _[zmadu](glossary#valsi-zmadu)_ | x1 is more than x2 in property/quantity x3 by amount x4 |
| _[mleca](glossary#valsi-mleca)_ | x1 is less than x2 in property/quantity x3 by amount x4 |Here are some examples:### Example 9.70.|            |        |       |            |        |
| ---------- | ------ | ----- | ---------- | ------ |
| la         | frank. | nelci | la         | betis. |
| That-named | Frank  | likes | that-named | Betty, ||          |           |            |         |
| -------- | --------- | ---------- | ------- |
| ne       | semau     | la         | meiris. |
| which-is | more-than | that-named | Mary.   ||                                              |
| -------------------------------------------- |
| Frank likes Betty more than (he likes) Mary. |[Example 9.70](chapter09#example-random-id-Jr4V "Example 9.70. ") requires that Frank likes Betty, but adds the information that his liking for Betty exceeds his liking for Mary. The modal appears in the form _[semau](glossary#valsi-semau)_ because the x2 place of _[zmadu](glossary#valsi-zmadu)_ is the basis for comparison: in this case, Frank's liking for Mary.### Example 9.71.|            |        |       |            |         |
| ---------- | ------ | ----- | ---------- | ------- |
| la         | frank. | nelci | la         | meiris. |
| That-named | Frank  | likes | that-named | Mary,   ||          |           |            |        |
| -------- | --------- | ---------- | ------ |
| ne       | seme'a    | la         | betis. |
| which-is | less-than | that-named | Betty. ||                                              |
| -------------------------------------------- |
| Frank likes Mary less than (he likes) Betty. |Here we are told that Frank likes Mary less than he likes Betty; the information about the comparison is the same. It would be possible to rephrase [Example 9.70](chapter09#example-random-id-Jr4V "Example 9.70. ") using _[me'a](glossary#valsi-meha)_ rather than _[semau](glossary#valsi-semau)_, and [Example 9.71](chapter09#example-random-id-ecf1 "Example 9.71. ") using _[mau](glossary#valsi-mau)_ rather than _[seme'a](glossary#valsi-semeha)_, but such usage would be unnecessarily confusing. Like many BAI cmavo, _[mau](glossary#valsi-mau)_ and _[me'a](glossary#valsi-meha)_ are more useful when converted with _[se](glossary#valsi-se)_.If the _[ne](glossary#valsi-ne)_ were omitted in [Example 9.70](chapter09#example-random-id-Jr4V "Example 9.70. ") and [Example 9.71](chapter09#example-random-id-ecf1 "Example 9.71. "), the modal sumti (_la meiris._ and _la betis._ respectively) would become attached to the bridi as a whole, producing a very different translation. [Example 9.71](chapter09#example-random-id-ecf1 "Example 9.71. ") would become:### Example 9.72.|            |        |       |            |         |              |            |        |
| ---------- | ------ | ----- | ---------- | ------- | ------------ | ---------- | ------ |
| la         | frank. | nelci | la         | meiris. | seme'a       | la         | betis. |
| That-named | Frank  | likes | that-named | Mary    | is-less-than | that-named | Betty. ||                                         |
| --------------------------------------- |
| Frank's liking Mary is less than Betty. |which compares a liking with a person, and is therefore nonsense.Pure comparison, which states only the comparative information but says nothing about whether Frank actually likes either Mary or Betty (he may like neither, but dislike Betty less), would be expressed differently, as:### Example 9.73.|     |             |            |         |
| --- | ----------- | ---------- | ------- |
| le  | ni          | la         | frank.  |
| The | quantity-of | that-named | Frank's ||        |            |        |    |
| ------ | ---------- | ------ | -- |
| nelci  | la         | betis. | cu |
| liking | that-named | Betty  |    ||              |     |             |            |         |
| ------------ | --- | ----------- | ---------- | ------- |
| zmadu        | le  | ni          | la         | frank.  |
| is-more-than | the | quantity-of | that-named | Frank's ||        |            |         |
| ------ | ---------- | ------- |
| nelci  | la         | meiris. |
| liking | that-named | Mary.   |The mechanisms explained in this section are appropriate to many modals other than _[semau](glossary#valsi-semau)_ and _[seme'a](glossary#valsi-semeha)_. Some other modals that are often associated with relative phrases are: _[seba'i](glossary#valsi-sebahi)_ (“instead of”), _[ci'u](glossary#valsi-cihu)_ (“on scale”), _[de'i](glossary#valsi-dehi)_ (“dated”), _[du'i](glossary#valsi-duhi)_ (“as much as”). Some BAI tags can be used equally well in relative phrases or attached to bridi; others seem useful only attached to bridi. But it is also possible that the usefulness of particular BAI modals is an English-speaker bias, and that speakers of other languages may find other BAIs useful in divergent ways.Note: The uses of modals discussed in this section are applicable both to BAI modals and to _fi'o-_&#x70;lus-selbri modals.## Mixed modal connectionIt is possible to mix logical connection (explained in [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System")) with modal connection, in a way that simultaneously asserts the logical connection and the modal relationship. Consider the sentences:### Example 9.74.|    |       |      |      |    |       |            |        |
| -- | ----- | ---- | ---- | -- | ----- | ---------- | ------ |
| mi | nelci | do   | .ije | mi | nelci | la         | djein. |
| I  | like  | you. | And  | I  | like  | that-named | Jane.  |which is a logical connection, and### Example 9.75.|    |       |      |              |    |       |            |        |
| -- | ----- | ---- | ------------ | -- | ----- | ---------- | ------ |
| mi | nelci | do   | .iki'ubo     | mi | nelci | la         | djein. |
| I  | like  | you. | Justified-by | I  | like  | that-named | Jane.  |The meanings of [Example 9.74](chapter09#example-random-id-4qz4 "Example 9.74. ") and [Example 9.75](chapter09#example-random-id-6EE5 "Example 9.75. ") can be simultaneously expressed by combining the two compound cmavo, thus:### Example 9.76.|    |       |      |                  |    |       |            |        |
| -- | ----- | ---- | ---------------- | -- | ----- | ---------- | ------ |
| mi | nelci | do   | .ijeki'ubo       | mi | nelci | la         | djein. |
| I  | like  | you. | And-justified-by | I  | like  | that-named | Jane.  |Here the two sentences _mi nelci do_ and _mi nelci la djein._ are simultaneously asserted, their logical connection is asserted, and their causal relationship is asserted. The logical connective _[je](glossary#valsi-je)_ comes before the modal _[ki'u](glossary#valsi-kihu)_ in all such mixed connections.Since _mi nelci do_ and _mi nelci la djein._ differ only in the final sumti, we can transform [Example 9.76](chapter09#example-random-id-W3Le "Example 9.76. ") into a mixed sumti connection:### Example 9.77.|    |       |     |             |            |        |
| -- | ----- | --- | ----------- | ---------- | ------ |
| mi | nelci | do  | .eki'ubo    | la         | djein. |
| I  | like  | you | and/because | that-named | Jane.  |Note that this connection is an afterthought one. Mixed connectives are always afterthought; forethought connectives must be either logical or modal.There are numerous other afterthought logical and non-logical connectives that can have modal information planted within them. For example, a bridi-tail connected version of [Example 9.77](chapter09#example-random-id-gE1z "Example 9.77. ") would be:### Example 9.78.|    |       |     |             |       |            |        |
| -- | ----- | --- | ----------- | ----- | ---------- | ------ |
| mi | nelci | do  | gi'eki'ubo  | nelci | la         | djein. |
| I  | like  | you | and/because | like  | that-named | Jane.  |The following three complex examples all mean the same thing.### Example 9.79.|    |       |     |       |
| -- | ----- | --- | ----- |
| mi | bevri | le  | dakli |
| I  | carry | the | sack. ||               |      |    |       |     |       |
| ------------- | ---- | -- | ----- | --- | ----- |
| .ijeseri'abo  | tu'e | mi | bevri | le  | gerku |
| And-\[effect] | (    | I  | carry | the | dog.  ||                 |    |       |     |       |         |
| --------------- | -- | ----- | --- | ----- | ------- |
| .ijadu'ibo      | mi | bevri | le  | mlatu | \[tu'u] |
| And/or-\[equal] | I  | carry | the | cat.  | )       ||                                                                            |
| -------------------------------------------------------------------------- |
| I carry the sack. As a result I carry the dog or I carry the cat, equally. |### Example 9.80.|    |       |     |       |
| -- | ----- | --- | ----- |
| mi | bevri | le  | dakli |
| I  | carry | the | sack  ||               |        |     |       |
| ------------- | ------ | --- | ----- |
| gi'eseri'ake  | bevri  | le  | gerku |
| and-\[effect] | (carry | the | dog   ||                 |       |     |       |         |
| --------------- | ----- | --- | ----- | ------- |
| gi'adu'ibo      | bevri | le  | mlatu | \[ke'e] |
| and/or-\[equal] | carry | the | cat)  |         ||                                                                          |
| ------------------------------------------------------------------------ |
| I carry the sack and as a result carry the dog or carry the cat equally. |### Example 9.81.|    |       |     |       |
| -- | ----- | --- | ----- |
| mi | bevri | le  | dakli |
| I  | carry | the | sack  ||               |      |       |
| ------------- | ---- | ----- |
| .eseri'ake    | le   | gerku |
| and-\[effect] | (the | dog   ||                 |     |       |         |
| --------------- | --- | ----- | ------- |
| .adu'ibo        | le  | mlatu | \[ke'e] |
| and/or-\[equal] | the | cat)  |         ||                                                               |
| ------------------------------------------------------------- |
| I carry the sack, and as a result the cat or the dog equally. |In [Example 9.79](chapter09#example-random-id-qMRB "Example 9.79. "), the _[tu'u](glossary#valsi-tuhu)_ brackets are the equivalent of the _[ke'e](glossary#valsi-kehe)_ brackets in [Example 9.80](chapter09#example-random-id-qmRL "Example 9.80. ") and [Example 9.81](chapter09#example-random-id-qMSb "Example 9.81. "), because _[ke'e](glossary#valsi-kehe)_ cannot extend across more than one sentence. It would also be possible to change the _.ijeseri'abo_ to _.ije seri'a_, which would show that the _[tu'u](glossary#valsi-tuhu)_ portion was an effect, but would not pin down the _mi bevri le dakli_ portion as the cause. It is legal for a modal (or a tense; see [Chapter 10](chapter10 "Chapter 10. Imaginary Journeys: The Lojban Space/Time Tense System")) to modify the whole of a _[tu'u](glossary#valsi-tuhu)_ construct.Note: The uses of modals discussed in this section are applicable both to BAI modals and to _fi'o-_&#x70;lus-selbri modals.## Modal conversion: JAIThe following cmavo are discussed in this section:|     |     |                           |
| --- | --- | ------------------------- |
| jai | JAI | modal conversion          |
| fai | FA  | modal place structure tag |So far, conversion of numbered bridi places with SE and the addition of modal places with BAI have been two entirely separate operations. However, it is possible to convert a selbri in such a way that, rather than exchanging two numbered places, a modal place is made into a numbered place. For example,### Example 9.82.|    |         |              |             |            |         |
| -- | ------- | ------------ | ----------- | ---------- | ------- |
| mi | cusku   |              | bau         | la         | lojban. |
| I  | express | \[something] | in-language | that-named | Lojban. |has an explicit x1 place occupied by _[mi](glossary#valsi-mi)_ and an explicit _[bau](glossary#valsi-bau)_ place occupied by _la lojban._ To exchange these two, we use a modal conversion operator consisting of _[jai](glossary#valsi-jai)_ (of selma'o JAI) followed by the modal cmavo. Thus, the modal conversion of [Example 9.82](chapter09#example-random-id-KMMX "Example 9.82. ") is:### Example 9.83.|            |         |                               |         |     |
| ---------- | ------- | ----------------------------- | ------- | --- |
| la         | lojban. | jai bau cusku                 | fai     | mi  |
| That-named | Lojban  | is-the-language-of-expression | used-by | me. |In [Example 9.83](chapter09#example-random-id-KjyW "Example 9.83. "), the modal place _la lojban._ has become the x1 place of the new selbri _jai bau cusku_. What has happened to the old x1 place? There is no numbered place for it to move to, so it moves to a special “unnumbered place” marked by the tag _[fai](glossary#valsi-fai)_ of selma'o FA.Note: For the purposes of place numbering, _[fai](glossary#valsi-fai)_ behaves like _[fi'a](glossary#valsi-fiha)_; it does not affect the numbering of the other places around it.Like SE conversions, JAI conversions are especially convenient in descriptions. We may refer to “the language of an expression” as _le jai bau cusku_, for example.In addition, it is grammatical to use _[jai](glossary#valsi-jai)_ without a following modal. This usage is not related to modals, but is explained here for completeness. The effect of _[jai](glossary#valsi-jai)_ by itself is to send the x1 place, which should be an abstraction, into the _[fai](glossary#valsi-fai)_ position, and to raise one of the sumti from the abstract sub-bridi into the x1 place of the main bridi. This feature is discussed in more detail in [Section 11.10](chapter11#section-sumti-raising "11.10. Lojban sumti raising"). The following two examples mean the same thing:### Example 9.84.|     |          |    |       |     |       |    |                 |
| --- | -------- | -- | ----- | --- | ----- | -- | --------------- |
| le  | nu       | mi | lebna | le  | cukta | cu | se krinu        |
| The | event-of | (I | take  | the | book) |    | is-justified-by ||     |          |    |       |     |        |
| --- | -------- | -- | ----- | --- | ------ |
| le  | nu       | mi | viska | le  | cukta  |
| the | event-of | (I | see   | the | book). ||                                                  |
| ------------------------------------------------ |
| My taking the book is justified by my seeing it. |### Example 9.85.|    |                 |     |          |    |       |     |       |     |
| -- | --------------- | --- | -------- | -- | ----- | --- | ----- | --- |
| mi | jai se krinu    | le  | nu       | mi | viska | le  | cukta | kei |
| I  | am-justified-by | the | event-of | (I | see   | the | book) |     ||           |     |          |    |       |     |        |
| --------- | --- | -------- | -- | ----- | --- | ------ |
| \[fai     | le  | nu       | mi | lebna | le  | cukta] |
| \[namely, | the | event-of | (I | take  | the | book)] ||                                                       |
| ----------------------------------------------------- |
| I am justified in taking the book by seeing the book. |[Example 9.85](chapter09#example-random-id-qMse "Example 9.85. "), with the bracketed part omitted, allows us to say that “I am justified” whereas in fact it is my action that is justified. This construction is vague, but useful in representing natural-language methods of expression.Note: The uses of modals discussed in this section are applicable both to BAI modals and to _fi'o-_&#x70;lus-selbri modals.## Modal negationNegation is explained in detail in [Chapter 15](chapter15 "Chapter 15. “No” Problems: On Lojban Negation"). There are two forms of negation in Lojban: contradictory and scalar negation. Contradictory negation expresses what is false, whereas scalar negation says that some alternative to what has been stated is true. A simple example is the difference between “John didn't go to Paris” (contradictory negation) and “John went to (somewhere) other than Paris” (scalar negation).Contradictory negation involving BAI cmavo is performed by appending _-nai_ (of selma'o NAI) to the BAI. A common use of modals with _-nai_ is to deny a causal relationship:### Example 9.86.|    |       |    |         |    |    |    |       |    |
| -- | ----- | -- | ------- | -- | -- | -- | ----- | -- |
| mi | nelci | do | mu'inai | le | nu | do | nelci | mi ||                                          |
| ---------------------------------------- |
| I like you, but not because you like me. |[Example 9.86](chapter09#example-random-id-ej84 "Example 9.86. ") denies that the relationship between my liking you (which is asserted) and your liking me (which is not asserted) is one of motivation. Nothing is said about whether you like me or not, merely that that hypothetical liking is not the motivation for my liking you.Scalar negation is achieved by prefixing _[na'e](glossary#valsi-nahe)_ (of selma'o NAhE), or any of the other cmavo of NAhE, to the BAI cmavo.### Example 9.87.|     |       |    |       |                         |     |          |
| --- | ----- | -- | ----- | ----------------------- | --- | -------- |
| le  | spati | cu | banro | na'emu'i                | le  | nu       |
| The | plant |    | grows | other-than-motivated-by | the | event-of ||     |       |       |    |     |        |
| --- | ----- | ----- | -- | --- | ------ |
| do  | djacu | dunda | fi | le  | spati  |
| you | water | give  | to | the | plant. |[Example 9.87](chapter09#example-random-id-9WC5 "Example 9.87. ") says that the relationship between the plant's growth and your watering it is not one of motivation: the plant is not motivated to grow, as plants are not something which can have motivation as a rule. Implicitly, some other relationship between watering and growth exists, but [Example 9.87](chapter09#example-random-id-9WC5 "Example 9.87. ") doesn't say what it is (presumably _[ri'a](glossary#valsi-riha)_).Note: Modals made with _[fi'o](glossary#valsi-fiho)_ plus a selbri cannot be negated directly. The selbri can itself be negated either with contradictory or with scalar negation, however.## Sticky modalsThe following cmavo is discussed in this section:|    |    |                 |
| -- | -- | --------------- |
| ki | KI | stickiness flag |Like tenses, modals can be made persistent from the bridi in which they appear to all following bridi. The effect of this “stickiness” is to make the modal, along with its following sumti, act as if it appeared in every successive bridi. Stickiness is put into effect by following the modal (but not any following sumti) with the cmavo _[ki](glossary#valsi-ki)_ of selma'o KI. For example,### Example 9.88.|    |       |             |            |         |              |
| -- | ----- | ----------- | ---------- | ------- | ------------ |
| mi | tavla | bau         | la         | lojban. | bai          |
| I  | speak | in-language | that-named | Lojban  | compelled-by ||    |                  |            |        |
| -- | ---------------- | ---------- | ------ |
| ki | tu'a             | la         | frank. |
|    | some-property-of | that-named | Frank. ||            |    |       |             |            |          |
| ---------- | -- | ----- | ----------- | ---------- | -------- |
| .ibabo     | mi | tavla | bau         | la         | gliban.  |
| Afterward, | I  | speak | in-language | that-named | English. |means the same as:### Example 9.89.|    |       |             |            |         |              |
| -- | ----- | ----------- | ---------- | ------- | ------------ |
| mi | tavla | bau         | la         | lojban. | bai          |
| I  | speak | in-language | that-named | Lojban  | compelled-by ||                  |            |        |
| ---------------- | ---------- | ------ |
| tu'a             | la         | frank. |
| some-property-of | that-named | Frank. ||            |    |       |             |            |         |              |
| ---------- | -- | ----- | ----------- | ---------- | ------- | ------------ |
| .ibabo     | mi | tavla | bau         | la         | gliban. | bai          |
| Afterward, | I  | speak | in-language | that-named | English | compelled-by ||                  |            |        |
| ---------------- | ---------- | ------ |
| tu'a             | la         | frank. |
| some-property-of | that-named | Frank. |In [Example 9.88](chapter09#example-random-id-1UGf "Example 9.88. "), _[bai](glossary#valsi-bai)_ is made sticky, and so Frank's compelling is made applicable to every following bridi. _[bau](glossary#valsi-bau)_ is not sticky, and so the language may vary from bridi to bridi, and if not specified in a particular bridi, no assumption can safely be made about its value.To cancel stickiness, use the form _[ki](glossary#valsi-ki)_ is used for both modals and tenses), use _[ki](glossary#valsi-ki)_ by itself, either before the selbri or (in the form _ki ku_) anywhere in the bridi:### Example 9.90.|    |    |       |
| -- | -- | ----- |
| mi | ki | tavla ||                                                        |
| ------------------------------------------------------ |
| I speak (no implication about language or compulsion). |Note: Modals made with _[fi'o](glossary#valsi-fiho)_-plus-selbri cannot be made sticky. This is an unfortunate, but unavoidable, restriction.## Logical and non-logical connection of modalsLogical and non-logical connectives are explained in detail in [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System"). For the purposes of this chapter, it suffices to point out that a logical (or non-logical) connection between two bridi which differ only in a modal can be reduced to a single bridi with a connective between the modals. As a result, [Example 9.91](chapter09#example-random-id-qMsx "Example 9.91. ") and [Example 9.92](chapter09#example-random-id-qMte "Example 9.92. ") mean the same thing:### Example 9.91.|            |        |       |                  |     |        |
| ---------- | ------ | ----- | ---------------- | --- | ------ |
| la         | frank. | bajra | seka'a           | le  | zdani  |
| That-named | Frank  | runs  | with-destination | the | house. ||      |            |        |       |             |     |        |
| ---- | ---------- | ------ | ----- | ----------- | --- | ------ |
| .ije | la         | frank. | bajra | teka'a      | le  | zdani  |
| And  | that-named | Frank  | runs  | with-origin | the | house. ||                                                         |
| ------------------------------------------------------- |
| Frank runs to the house, and Frank runs from the house. |### Example 9.92.|            |        |       |                  |
| ---------- | ------ | ----- | ---------------- |
| la         | frank. | bajra | seka'a           |
| That-named | Frank  | runs  | with-destination ||     |             |     |        |
| --- | ----------- | --- | ------ |
| je  | teka'a      | le  | zdani  |
| and | with-origin | the | house. ||                                   |
| --------------------------------- |
| Frank runs to and from the house. |Neither example implies whether a single act, or two acts, of running is referred to. To compel the sentence to refer to a single act of running, you can use the form:### Example 9.93.|            |        |       |                  |     |       |
| ---------- | ------ | ----- | ---------------- | --- | ----- |
| la         | frank. | bajra | seka'a           | le  | zdani |
| That-named | Frank  | runs  | with-destination | the | house ||              |             |     |        |
| ------------ | ----------- | --- | ------ |
| ce'e         | teka'a      | le  | zdani  |
| \[joined-to] | with-origin | the | house. |The cmavo _[ce'e](glossary#valsi-cehe)_ creates a termset containing two terms (termsets are explained in [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System") and [Chapter 16](chapter16 "Chapter 16. “Who Did You Pass On The Road? Nobody”: Lojban And Logic")). When a termset contains more than one modal tag derived from a single BAI, the convention is that the two tags are derived from a common event._

_## CV'V cmavo of selma'o BAI with irregular forms_

_[do'e](glossary#valsi-dohe)_, discussed in [Section 9.6](chapter09#section-BAI "9.6. Modal tags: BAI")), are derived directly from selected gismu. Of these 64 cmavo, 36 are entirely regular and have the form CV'V, where C is the first consonant of the corresponding gismu, and the Vs are the two vowels of the gismu. The remaining BAI cmavo, which are irregular in one way or another, are listed in the table below. The table is divided into sub-tables according to the nature of the exception; some cmavo appear in more than one sub-table, and are so noted.

**Table 9.1. Monosyllables of the form CVV**

| cmavo | gismu  | comments                    |
| ----- | ------ | --------------------------- |
| bai   | bapli  |                             |
| bau   | bangu  |                             |
| cau   | claxu  |                             |
| fau   | fasnu  |                             |
| gau   | gasnu  |                             |
| kai   | ckaji  | uses 2nd consonant of gismu |
| mau   | zmadu  | uses 2nd consonant of gismu |
| koi   | korbi  |                             |
| rai   | traji  | uses 2nd consonant of gismu |
| sau   | sarcu  |                             |
| tai   | tamsmi | based on lujvo, not gismu   |
| zau   | zanru  |                             |



**Table 9.2. Second consonant of the gismu as the C: (the gismu is always of the form CCVCV)**

|      |       |                             |
| ---- | ----- | --------------------------- |
| ga'a | zgana |                             |
| kai  | ckaji | has CVV form (monosyllable) |
| ki'i | ckini |                             |
| la'u | klani | has irregular 2nd V         |
| le'a | klesi | has irregular 2nd V         |
| mau  | zmadu | has CVV form (monosyllable) |
| me'e | cmene |                             |
| ra'a | srana |                             |
| ra'i | krasi |                             |
| rai  | traji | has CVV form (monosyllable) |
| ti'i | stidi |                             |
| tu'i | stuzi |                             |



**Table 9.3. Irregular 2nd V**

|      |       |                             |
| ---- | ----- | --------------------------- |
| fi'e | finti |                             |
| la'u | klani | uses 2nd consonant of gismu |
| le'a | klesi | uses 2nd consonant of gismu |
| ma'e | marji |                             |
| mu'u | mupli |                             |
| ti'u | tcika |                             |
| va'o | vanbi |                             |



**Table 9.4. Special cases**

|      |        |                                 |
| ---- | ------ | ------------------------------- |
| ri'i | lifri  | uses 3rd consonant of gismu     |
| tai  | tamsmi | based on lujvo, not gismu       |
| va'u | xamgu  | CV'V cmavo can't begin with _x_ |



## Complete table of BAI cmavo with rough English equivalents

The following table shows all the cmavo belonging to selma'o BAI, and has five columns. The first column is the cmavo itself; the second column is the gismu linked to it. The third column gives an English phrase which indicates the meaning of the cmavo; and the fourth column indicates its meaning when preceded by _[se](glossary#valsi-se)_.

For those cmavo with meaningful _[te](glossary#valsi-te)_, _[ve](glossary#valsi-ve)_, and even _[xe](glossary#valsi-xe)_ conversions (depending on the number of places of the underlying gismu), the meanings of these are shown on one or two extra rows following the primary row for that cmavo.

It should be emphasized that the place structures of the gismu control the meanings of the BAI cmavo. The English phrases shown here are only suggestive, and are often too broad or too narrow to correctly specify what the acceptable range of uses for the modal tag are.

|                                  |                                    |                    |                       |                              |                           |                   |
| -------------------------------- | ---------------------------------- | ------------------ | --------------------- | ---------------------------- | ------------------------- | ----------------- |
| ba'i                             | basti                              | replaced by        | instead of            |                              |                           |                   |
| bai                              | bapli                              | compelled by       | compelling            |                              |                           |                   |
| bau                              | bangu                              | in language        | in language of        |                              |                           |                   |
| be'i                             | benji                              | sent by            | transmitting          | sent to                      | with transmit origin      | transmitted via   |
| ca'i                             | catni                              | by authority of    | with authority over   |                              |                           |                   |
| cau                              | claxu                              | lacked by          | without               |                              |                           |                   |
| ci'e                             | ciste                              | in system          | with system function  | of system components         |                           |                   |
| ci'o                             | cinmo                              | felt by            | feeling emotion       |                              |                           |                   |
| ci'u                             | ckilu                              | on the scale       | on scale measuring    |                              |                           |                   |
| cu'u                             | cusku                              | as said by         | expressing            | as told to                   | expressed in medium       |                   |
| de'i                             | detri                              | dated              | on the same date as   |                              |                           |                   |
| di'o                             | diklo                              | at the locus of    | at specific locus     |                              |                           |                   |
| _[do'e](glossary#valsi-dohe)_ | -----                              | vaguely related to |                       |                              |                           |                   |
| du'i                             | dunli                              | as much as         | equal to              |                              |                           |                   |
| du'o                             | djuno                              | according to       | knowing facts         | knowing about                | under epistemology        |                   |
| fa'e                             | fatne                              | reverse of         | in reversal of        |                              |                           |                   |
| _[fau](glossary#valsi-fau)_   | _[fasnu](glossary#valsi-fasnu)_ | in the event of    |                       |                              |                           |                   |
| fi'e                             | finti                              | created by         | creating work         | created for purpose          |                           |                   |
| ga'a                             | zgana                              | to observer        | observing             | observed by means            | observed under conditions |                   |
| gau                              | gasnu                              | with agent         | as agent in doing     |                              |                           |                   |
| ja'e                             | jalge                              | resulting in       | results because of    |                              |                           |                   |
| ja'i                             | javni                              | by rule            | by rule prescribing   |                              |                           |                   |
| ji'e                             | jimte                              | up to limit        | as a limit of         |                              |                           |                   |
| ji'o                             | jitro                              | under direction    | controlling           |                              |                           |                   |
| ji'u                             | jicmu                              | based on           | supporting            |                              |                           |                   |
| ka'a                             | klama                              | gone to by         | with destination      | with origin                  | via route                 | by transport mode |
| ka'i                             | krati                              | represented by     | on behalf of          |                              |                           |                   |
| kai                              | ckaji                              | characterizing     | with property         |                              |                           |                   |
| ki'i                             | ckini                              | as relation of     | related to            | with relation                |                           |                   |
| ki'u                             | krinu                              | justified by       | with justified result |                              |                           |                   |
| koi                              | korbi                              | bounded by         | as boundary of        | bordering                    |                           |                   |
| ku'u                             | kulnu                              | in culture         | in culture of         |                              |                           |                   |
| la'u                             | klani                              | as quantity of     | in quantity           |                              |                           |                   |
| le'a                             | klesi                              | in category        | as category of        | defined by quality           |                           |                   |
| li'e                             | lidne                              | led by             | leading               |                              |                           |                   |
| ma'e                             | marji                              | of material        | made from material    | in material form of          |                           |                   |
| ma'i                             | manri                              | in reference frame | as a standard of      |                              |                           |                   |
| mau                              | zmadu                              | exceeded by        | more than             |                              |                           |                   |
| me'a                             | mleca                              | undercut by        | less than             |                              |                           |                   |
| me'e                             | cmene                              | with name          | as a name for         |                              |                           |                   |
| mu'i                             | mukti                              | motivated by       | motive therefore      |                              |                           |                   |
| mu'u                             | mupli                              | exemplified by     | as an example of      |                              |                           |                   |
| ni'i                             | nibli                              | entailed by        | entails               |                              |                           |                   |
| pa'a                             | panra                              | in addition to     | similar to            | similar in pattern           | similar by standard       |                   |
| pa'u                             | pagbu                              | with component     | as a part of          |                              |                           |                   |
| pi'o                             | pilno                              | used by            | using tool            |                              |                           |                   |
| po'i                             | porsi                              | in the sequence    | sequenced by rule     |                              |                           |                   |
| pu'a                             | pluka                              | pleased by         | in order to please    |                              |                           |                   |
| pu'e                             | pruce                              | by process         | processing from       | processing into              | passing through stages    |                   |
| _[ra'a](glossary#valsi-raha)_ | _[srana](glossary#valsi-srana)_ | pertained to by    | concerning            |                              |                           |                   |
| _[ra'i](glossary#valsi-rahi)_ | _[krasi](glossary#valsi-krasi)_ | from source        | as an origin of       |                              |                           |                   |
| rai                              | traji                              | with superlative   | superlative in        | at extreme                   | superlative among         |                   |
| ri'a                             | rinka                              | caused by          | causing               |                              |                           |                   |
| ri'i                             | lifri                              | experienced by     | experiencing          |                              |                           |                   |
| sau                              | sarcu                              | requiring          | necessarily for       | necessarily under conditions |                           |                   |
| si'u                             | sidju                              | aided by           | assisting in          |                              |                           |                   |
| ta'i                             | tadji                              | by method          | as a method for       |                              |                           |                   |
| tai                              | tamsmi                             | as a form of       | in form               | in form similar to           |                           |                   |
| ti'i                             | stidi                              | suggested by       | suggesting            | suggested to                 |                           |                   |
| ti'u                             | tcika                              | with time          | at the time of        |                              |                           |                   |
| tu'i                             | stuzi                              | with site          | as location of        |                              |                           |                   |
| va'o                             | vanbi                              | under conditions   | as conditions for     |                              |                           |                   |
| va'u                             | xamgu                              | benefiting from    | with beneficiary      |                              |                           |                   |
| zau                              | zanru                              | approved by        | approving             |                              |                           |                   |
| zu'e                             | zukte                              | with actor         | with means to goal    | with goal                    |                           |                   |

The lujvo _[tamsmi](glossary#valsi-tamsmi)_ on which _[tai](glossary#valsi-tai)_ is based is derived from the tanru _tarmi simsa_ and has the place structure:

> _[_tamsmi_](glossary#valsi-tamsmi)_&#x78;1 has form x2, similar in form to x3 in property/quality x4

This lujvo is employed because _[tarmi](glossary#valsi-tarmi)_ does not have a place structure useful for the modal's purpose.

