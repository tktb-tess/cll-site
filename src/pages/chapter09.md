---
layout: ../layouts/Layout.astro
title: 'Chapter 9. To Boston Via The Road Go I, With An Excursion Into The Land Of Modals'
prev: /chapter08/
prevTitle: 'Prev: Chapter 8'
next: /chapter10/
nextTitle: 'Next: Chapter 10'
---

![The picture for chapter 9](../assets/chapter09.gif)

## Introductory

The basic type of Lojban sentence is the bridi: a claim by the speaker that certain objects are related in a certain way. The objects are expressed by Lojban grammatical forms called *[sumti](/glossary/#sumti)*; the relationship is expressed by the Lojban grammatical form called a *[selbri](/glossary/#selbri)*.

The sumti are not randomly associated with the selbri, but according to a systematic pattern known as the “place structure” of the selbri. This chapter describes the various ways in which the place structure of Lojban bridi is expressed and by which it can be manipulated. The place structure of a selbri is a sequence of empty slots into which the sumti associated with that selbri are placed. The sumti are said to occupy the places of the selbri.

For our present purposes, every selbri is assumed to have a well-known place structure. If the selbri is a brivla, the place structure can be looked up in a dictionary (or, if the brivla is a lujvo not in any dictionary, inferred from the principles of lujvo construction as explained in [Chapter 12](/chapter12/ "Chapter 12. Dog House And White House: Determining lujvo Place Structures")); if the selbri is a tanru, the place structure is the same as that of the final component in the tanru.

The stock example of a place structure is that of the gismu *[klama](/glossary/#klama)*:

> *[klama](/glossary/#klama)*&#x78;1 comes/goes to destination x2 from origin x3 via route x4 employing means of transport x5.

The “x1 ... x5” indicates that *[klama](/glossary/#klama)* is a five-place predicate, and show the natural order (as assigned by the language engineers) of those places: agent, destination, origin, route, means.

The place structures of brivla are not absolutely stable aspects of the language. The work done so far has attempted to establish a basic place structure on which all users can, at first, agree. In the light of actual experience with the individual selbri of the language, there will inevitably be some degree of change to the brivla place structures.

## Standard bridi form: *cu*

The following cmavo is discussed in this section:

|    |    |                           |
| -- | -- | ------------------------- |
| cu | CU | prefixed selbri separator |

The most usual way of constructing a bridi from a selbri such as *[klama](/glossary/#klama)* and an appropriate number of sumti is to place the sumti intended for the x1 place before the selbri, and all the other sumti in order after the selbri, thus:

##### Example 9.1.

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
| x1 | agent       | *[mi](/glossary/#mi)* |
| x2 | destination | *la bastn.*                  |
| x3 | origin      | *la .atlantas.*              |
| x4 | route       | *le dargu*                   |
| x5 | means       | *le karce*                   |

(Note: Many of the examples in the rest of this chapter will turn out to have the same meaning as [Example 9.1](/chapter09/#example-91 "Example 9.1. "); this fact will not be reiterated.)

This ordering, with the x1 place before the selbri and all other places in natural order after the selbri, is called “standard bridi form”, and is found in the bulk of Lojban bridi, whether used in main sentences or in subordinate clauses. However, many other forms are possible, such as:

##### Example 9.2.

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

##### Example 9.3.

|    |               |        |    |       |                 |            |
| -- | ------------- | ------ | -- | ----- | --------------- | ---------- |
| mi | la            | bastn. | cu | klama | la              | .atlantas. |
| I  | to-that-named | Boston |    | go    | from-that-named | Atlanta    |

|         |       |           |       |
| ------- | ----- | --------- | ----- |
| le      | dargu | le        | karce |
| via-the | road  | using-the | car.  |



All of the variant forms in this section and following sections can be used to place emphasis on the part or parts which have been moved out of their standard places. Thus, [Example 9.2](/chapter09/#example-92 "Example 9.2. ") places emphasis on the selbri (because it is at the end); [Example 9.3](/chapter09/#example-93 "Example 9.3. ") emphasizes *la bastn.*, because it has been moved before the selbri. Moving more than one component may dilute this emphasis. It is permitted, but no stylistic significance has yet been established for drastic reordering.

In all these examples, the cmavo *[cu](/glossary/#cu)* (belonging to selma'o CU) is used to separate the selbri from any preceding sumti. It is never absolutely necessary to use *[cu](/glossary/#cu)*. However, providing it helps the reader or listener to locate the selbri quickly, and may make it possible to place a complex sumti just before the selbri, allowing the speaker to omit elidable terminators, possibly a whole stream of them, that would otherwise be necessary.

The general rule, then, is that the selbri may occur anywhere in the bridi as long as the sumti maintain their order. The only exception (and it is an important one) is that if the selbri appears first, the x1 sumti is taken to have been omitted:

##### Example 9.4.

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



Here the x1 place is empty: the listener must guess from context who is going to Boston. In [Example 9.4](/chapter09/#example-94 "Example 9.4. "), *[klama](/glossary/#klama)* is glossed “a goer” rather than “go” because “Go” at the beginning of an English sentence would suggest a command: “Go to Boston!”. [Example 9.4](/chapter09/#example-94 "Example 9.4. ") is not a command, simply a normal statement with the x1 place unspecified, causing the emphasis to fall on the selbri *[klama](/glossary/#klama)*. Such a bridi, with empty x1, is called an “observative”, because it usually calls on the listener to observe something in the environment which would belong in the x1 place. The third translation above shows this observative nature. Sometimes it is the relationship itself which the listener is asked to observe.

(There is a way to both provide a sumti for the x1 place and put the selbri first in the bridi: see [Example 9.14](/chapter09/#example-914 "Example 9.14. ").)

Suppose the speaker desires to omit a place other than the x1 place? (Presumably it is obvious or, for one reason or another, not worth saying.) Places at the end may simply be dropped:

##### Example 9.5.

|    |       |    |        |    |            |
| -- | ----- | -- | ------ | -- | ---------- |
| mi | klama | la | bastn. | la | .atlantas. |

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| I go to-Boston from-Atlanta (via an unspecified route, using an unspecified means). |



[Example 9.5](/chapter09/#example-95 "Example 9.5. ") has empty x4 and x5 places: the speaker does not specify the route or the means of transport. However, simple omission will not work for a place when the places around it are to be specified: in

##### Example 9.6.

|    |       |               |        |                 |            |         |       |
| -- | ----- | ------------- | ------ | --------------- | ---------- | ------- | ----- |
| mi | klama | la            | bastn. | la              | .atlantas. | le      | karce |
| I  | go    | to-that-named | Boston | from-that-named | Atlanta    | via-the | car.  |



*le karce* occupies the x4 place, and therefore [Example 9.6](/chapter09/#example-96 "Example 9.6. ") means:

> I go to Boston from Atlanta, using the car as a route.

This is nonsense, since a car cannot be a route. What the speaker presumably meant is expressed by:

##### Example 9.7.

|    |       |               |        |                 |            |
| -- | ----- | ------------- | ------ | --------------- | ---------- |
| mi | klama | la            | bastn. | la              | .atlantas. |
| I  | go    | to-that-named | Boston | from-that-named | Atlanta    |

|                           |           |       |
| ------------------------- | --------- | ----- |
| zo'e                      | le        | karce |
| via-something-unspecified | using-the | car.  |



Here the sumti cmavo *[zo'e](/glossary/#zoe)* is used to explicitly fill the x4 place; *[zo'e](/glossary/#zoe)* means “the unspecified thing” and has the same meaning as leaving the place empty: the listener must infer the correct meaning from context.

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

In sentences like [Example 9.1](/chapter09/#example-91 "Example 9.1. "), it is easy to get lost and forget which sumti falls in which place, especially if the sumti are more complicated than simple names or descriptions. The place structure tags of selma'o FA may be used to help clarify place structures. The five cmavo *[fa](/glossary/#fa)*, *[fe](/glossary/#fe)*, *[fi](/glossary/#fi)*, *[fo](/glossary/#fo)*, and *[fu](/glossary/#fu)* may be inserted just before the sumti in the x1 to x5 places respectively:

##### Example 9.8.

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



In [Example 9.8](/chapter09/#example-98 "Example 9.8. "), the tag *[fu](/glossary/#fu)* before *le karce* clarifies that *le karce* occupies the x5 place of *[klama](/glossary/#klama)*. The use of *[fu](/glossary/#fu)* tells us nothing about the purpose or meaning of the x5 place; it simply says that *le karce* occupies it.

In [Example 9.8](/chapter09/#example-98 "Example 9.8. "), the tags are overkill; they serve only to make [Example 9.1](/chapter09/#example-91 "Example 9.1. ") even longer than it is. Here is a better illustration of the use of FA tags for clarification:

##### Example 9.9.

|     |    |       |     |      |       |    |     |      |       |
| --- | -- | ----- | --- | ---- | ----- | -- | --- | ---- | ----- |
| fa  | mi | klama | fe  | le   | zdani | be | mi  | be'o | poi   |
| x1= | I  | go    | x2= | (the | house | of | me) |      | which |

|          |     |     |            |           |
| -------- | --- | --- | ---------- | --------- |
| nurma    | vau | fi  | la         | nu,IORK.  |
| is-rural |     | x3= | that-named | New-York. |



In [Example 9.9](/chapter09/#example-99 "Example 9.9. "), the place structure of *[klama](/glossary/#klama)* is as follows:

|    |             |                                     |
| -- | ----------- | ----------------------------------- |
| x1 | agent       | *[mi](/glossary/#mi)*        |
| x2 | destination | *le zdani be mi be'o poi nurma vau* |
| x3 | origin      | *la nu,IORK.*                       |
| x4 | route       | (empty)                             |
| x5 | means       | (empty)                             |

The *[fi](/glossary/#fi)* tag serves to remind the hearer that what follows is in the x3 place of *[klama](/glossary/#klama)*; after listening to the complex sumti occupying the x2 place, it's easy to get lost.

Of course, once the sumti have been tagged, the order in which they are specified no longer carries the burden of distinguishing the places. Therefore, it is perfectly all right to scramble them into any order desired, and to move the selbri to anywhere in the bridi, even the beginning:

##### Example 9.10.

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



Note that no *[cu](/glossary/#cu)* is permitted before the selbri in [Example 9.10](/chapter09/#example-910 "Example 9.10. "), because *[cu](/glossary/#cu)* separates the selbri from any preceding sumti, and [Example 9.10](/chapter09/#example-910 "Example 9.10. ") has no such sumti.

##### Example 9.11.

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



[Example 9.11](/chapter09/#example-911 "Example 9.11. ") exhibits the reverse of the standard bridi form seen in [Example 9.1](/chapter09/#example-91 "Example 9.1. ") and [Example 9.8](/chapter09/#example-98 "Example 9.8. "), but still means exactly the same thing. If the FA tags were left out, however, producing:

##### Example 9.12.

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

Tagging places with FA cmavo makes it easy not only to reorder the places but also to omit undesirable ones, without any need for *[zo'e](/glossary/#zoe)* or special rules about the x1 place:

##### Example 9.13.

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



Here the x1 and x4 places are empty, and so no sumti are tagged with *[fa](/glossary/#fa)* or *[fo](/glossary/#fo)*; in addition, the x2 and x3 places appear in reverse order.

What if some sumti have FA tags and others do not? The rule is that after a FA-tagged sumti, any sumti following it occupy the places numerically succeeding it, subject to the proviso that an already-filled place is skipped:

##### Example 9.14.

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



In [Example 9.14](/chapter09/#example-914 "Example 9.14. "), the *[fa](/glossary/#fa)* causes *[mi](/glossary/#mi)* to occupy the x1 place, and then the following untagged sumti occupy in order the x2 through x5 places. This is the mechanism by which Lojban allows placing the selbri first while specifying a sumti for the x1 place.

Here is a more complex (and more confusing) example:

##### Example 9.15.

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



In [Example 9.15](/chapter09/#example-915 "Example 9.15. "), *[mi](/glossary/#mi)* occupies the x1 place because it is the first sumti in the sentence (and is before the selbri). The second sumti, *la .atlantas.*, occupies the x3 place by virtue of the tag *[fi](/glossary/#fi)*, and *le dargu* occupies the x4 place as a result of following *la .atlantas.*. Finally, *la bastn.* occupies the x2 place because of its tag *[fe](/glossary/#fe)*, and *le karce* skips over the already-occupied x3 and x4 places to land in the x5 place.

Such a convoluted use of tags should probably be avoided except when trying for a literal translation of some English (or other natural-language) sentence; the rules stated here are merely given so that some standard interpretation is possible.

It is grammatically permitted to tag more than one sumti with the same FA cmavo. The effect is that of making more than one claim:

##### Example 9.16.

|        |            |      |     |            |        |         |
| ------ | ---------- | ---- | --- | ---------- | ------ | ------- |
| \[fa\]  | la         | rik. | fa  | la         | djein. | klama   |
| \[x1=\] | that-named | Rick | x1= | that-named | Jane   | goes-to |

|        |     |       |     |     |       |     |     |        |
| ------ | --- | ----- | --- | --- | ----- | --- | --- | ------ |
| \[fe\]  | le  | skina | fe  | le  | zdani | fe  | le  | zarci  |
| \[x2=\] | the | movie | x2= | the | house | x2= | the | office |



may be taken to say that both Rick and Jane go to the movie, the house, and the office, merging six claims into one. More likely, however, it will simply confuse the listener. There are better ways, involving logical connectives (explained in [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System")), to say such things in Lojban. In fact, putting more than one sumti into a place is odd enough that it can only be done by explicit FA usage: this is the motivation for the proviso above, that already-occupied places are skipped. In this way, no sumti can be forced into a place already occupied unless it has an explicit FA cmavo tagging it.

The cmavo *[fi'a](/glossary/#fia)* also belongs to selma'o FA, and allows Lojban users to ask questions about place structures. A bridi containing *[fi'a](/glossary/#fia)* is a question, asking the listener to supply the appropriate other member of FA which will make the bridi a true statement:

##### Example 9.17.

|                |     |       |       |     |        |       |
| -------------- | --- | ----- | ----- | --- | ------ | ----- |
| fi'a           | do  | dunda | \[fe\] | le  | vi     | rozgu |
| \[what-place\]? | you | give  | x2=   | the | nearby | rose  |

|                                                          |
| -------------------------------------------------------- |
| In what way are you involved in the giving of this rose? |
| Are you the giver or the receiver of this rose?          |



In [Example 9.17](/chapter09/#example-917 "Example 9.17. "), the speaker uses the selbri *[dunda](/glossary/#dunda)*, whose place structure is:

> *[*dunda*](/glossary/#dunda)*&#x78;1 gives x2 to x3

The tagged sumti *fi'a do* indicates that the speaker wishes to know whether the sumti *[do](/glossary/#do)* falls in the x1 or the x3 place (the x2 place is already occupied by *le rozgu*). The listener can reply with a sentence consisting solely of a FA cmavo: *[fa](/glossary/#fa)* if the listener is the giver, *[fi](/glossary/#fi)* if he/she is the receiver.

I have inserted the tag *[fe](/glossary/#fe)* in brackets into [Example 9.17](/chapter09/#example-917 "Example 9.17. "), but it is actually not necessary, because *[fi'a](/glossary/#fia)* does not count as a numeric tag; therefore, *le vi rozgu* would necessarily be in the x2 place even if no tag were present, because it immediately follows the selbri.

There is also another member of FA, namely *[fai](/glossary/#fai)*, which is discussed in [Section 9.12](/chapter09/#modal-conversion-jai "9.12. Modal conversion: JAI").

## Conversion: SE

The following cmavo are discussed in this section:

|    |    |                      |
| -- | -- | -------------------- |
| se | SE | 2nd place conversion |
| te | SE | 3rd place conversion |
| ve | SE | 4th place conversion |
| xe | SE | 5th place conversion |

So far we have seen ways to move sumti around within a bridi, but the actual place structure of the selbri has always remained untouched. The conversion cmavo of selma'o SE are incorporated within the selbri itself, and produce a new selbri (called a converted selbri) with a different place structure. In particular, after the application of any SE cmavo, the number and purposes of the places remain the same, but two of them have been exchanged, the x1 place and another. Which place has been exchanged with x1 depends on the cmavo chosen. Thus, for example, when *[se](/glossary/#se)* is used, the x1 place is swapped with the x2 place.

Note that the cmavo of SE begin with consecutive consonants in alphabetical order. There is no “1st place conversion” cmavo, because exchanging the x1 place with itself is a pointless maneuver.

Here are the place structures of *se klama*:

> x1 is the destination of x2's going from x3 via x4 using x5

and *te klama*:

> x1 is the origin and x2 the destination of x3 going via x4 using x5

and *ve klama*:

> x1 is the route to x2 from x3 used by x4 going via x5

and *xe klama*:

> x1 is the means in going to x2 from x3 via x4 employed by x5

Note that the place structure numbers in each case continue to be listed in the usual order, x1 to x5.

Consider the following pair of examples:

##### Example 9.18.

|            |        |    |                    |        |
| ---------- | ------ | -- | ------------------ | ------ |
| la         | bastn. | cu | se klama           | mi     |
| That-named | Boston |    | is-the-destination | of-me. |

|                           |
| ------------------------- |
| Boston is my destination. |
| Boston is gone to by me.  |



##### Example 9.19.

|     |            |        |    |       |     |    |
| --- | ---------- | ------ | -- | ----- | --- | -- |
| fe  | la         | bastn. | cu | klama | fa  | mi |
| x2= | that-named | Boston |    | go    | x1= | I. |

|                 |
| --------------- |
| To Boston go I. |



[Example 9.18](/chapter09/#example-918 "Example 9.18. ") and [Example 9.19](/chapter09/#example-919 "Example 9.19. ") mean the same thing, in the sense that there is a relationship of going with the speaker as the agent and Boston as the destination (and with unspecified origin, route, and means). Structurally, however, they are quite different. [Example 9.18](/chapter09/#example-918 "Example 9.18. ") has *la bastn.* in the x1 place and *[mi](/glossary/#mi)* in the x2 place of the selbri *se klama*, and uses standard bridi order; [Example 9.19](/chapter09/#example-919 "Example 9.19. ") has *[mi](/glossary/#mi)* in the x1 place and *la bastn.* in the x2 place of the selbri *[klama](/glossary/#klama)*, and uses a non-standard order.

The most important use of conversion is in the construction of descriptions. A description is a sumti which begins with a cmavo of selma'o LA or LE, called the descriptor, and contains (in the simplest case) a selbri. We have already seen the descriptions *le dargu* and *le karce*. To this we could add:

##### Example 9.20.

|    |       |
| -- | ----- |
| le | klama |

|                             |
| --------------------------- |
| the go-er, the one who goes |



In every case, the description is about something which fits into the x1 place of the selbri. In order to get a description of a destination (that is, something fitting the x2 place of *[klama](/glossary/#klama)*), we must convert the selbri to *se klama*, whose x1 place is a destination. The result is

##### Example 9.21.

|    |    |       |
| -- | -- | ----- |
| le | se | klama |

|                                    |
| ---------------------------------- |
| the destination gone to by someone |



Likewise, we can create three more converted descriptions:

##### Example 9.22.

|    |    |       |
| -- | -- | ----- |
| le | te | klama |

|                               |
| ----------------------------- |
| the origin of someone's going |



##### Example 9.23.

|    |    |       |
| -- | -- | ----- |
| le | ve | klama |

|                              |
| ---------------------------- |
| the route of someone's going |



##### Example 9.24.

|    |    |       |
| -- | -- | ----- |
| le | xe | klama |

|                                 |
| ------------------------------- |
| the means by which someone goes |



[Example 9.23](/chapter09/#example-923 "Example 9.23. ") does not mean “the route” plain and simple: that is *le pluta*, using a different selbri. It means a route that is used by someone for an act of *[klama](/glossary/#klama)*; that is, a journey with origin and destination. A “road” on Mars, on which no one has traveled or is ever likely to, may be called *le pluta*, but it cannot be *le ve klama*, since there exists no one for whom it is *le ve klama be fo da* (the route taken in an actual journey by someone \[da\]).

When converting selbri that are more complex than a single brivla, it is important to realize that the scope of a SE cmavo is only the following brivla (or equivalent unit). In order to convert an entire tanru, it is necessary to enclose the tanru in *[ke'e](/glossary/#kee)* brackets:

##### Example 9.25.

|    |                   |    |       |       |         |            |
| -- | ----------------- | -- | ----- | ----- | ------- | ---------- |
| mi | se                | ke | blanu | zdani | \[ke'e\] | ti         |
| I  | \[2nd-conversion\] | (  | blue  | house | )       | this-thing |



The place structure of *blanu zdani* (blue house) is the same as that of *[zdani](/glossary/#zdani)*, by the rule given in [Section 9.1](/chapter09/#introductory "9.1. Introductory"). The place structure of *[zdani](/glossary/#zdani)* is:

> *[*zdani*](/glossary/#zdani)*&#x78;1 is a house/nest/lair/den for inhabitant x2

The place structure of *se ke blanu zdani \[ke'e\]* is therefore:

> x1 is the inhabitant of the blue house (etc.) x2

Consequently, [Example 9.25](/chapter09/#example-925 "Example 9.25. ") means:

> I am the inhabitant of the blue house which is this thing.

Conversion applied to only part of a tanru has subtler effects which are explained in [Section 5.11](/chapter05/#conversion-of-simple-selbri "5.11. Conversion of simple selbri").

It is grammatical to convert a selbri more than once with SE; later (inner) conversions are applied before earlier (outer) ones. For example, the place structure of *se te klama* is achieved by exchanging the x1 and x2 place o&#x66;*&#xNAN;*

*> x1 is the destination and x2 is the origin of x3 going via x4 using x5On the other hand, *te se klama* has a place structure derived from swapping the x1 and x3 places of *se klama*:> x1 is the origin of x2's going to x3 via x4 using x5which is quite different. However, multiple conversions like this are never necessary. Arbitrary scrambling of places can be achieved more easily and far more intelligibly with FA tags, and only a single conversion is ever needed in a description.(Although no one has made any real use of it, it is perhaps worth noting that compound conversions of the form *setese*, where the first and third cmavo are the same, effectively swap the two given places while leaving the others, including x1, alone: *setese* (or equivalently *tesete*) swap the x2 and x3 places, whereas *texete* (or *xetexe*) swap the x3 and x5 places.)*

*## Modal places: FIhO, FEhUThe following cmavo are discussed in this section:|      |      |                    |
| ---- | ---- | ------------------ |
| fi'o | FIhO | modal place prefix |
| fe'u | FEhU | modal terminator   |Sometimes the place structures engineered into Lojban are inadequate to meet the needs of actual speech. Consider the gismu *[viska](/glossary/#viska)*, whose place structure is:> *[*viska*](/glossary/#viska)*&#x78;1 sees x2 under conditions x3Seeing is a threefold relationship, involving an agent (le viska), an object of sight (le se viska), and an environment that makes seeing possible (le te viska). Seeing is done with one or more eyes, of course; in general, the eyes belong to the entity in the x1 place.Suppose, however, that you are blind in one eye and are talking to someone who doesn't know that. You might want to say, “I see you with the left eye.” There is no place in the place structure of *[viska](/glossary/#viska)* such as “with eye x4” or the like. Lojban allows you to solve the problem by adding a new place, changing the relationship:##### Example 9.26.|    |       |     |          |       |         |     |            |
| -- | ----- | --- | -------- | ----- | ------- | --- | ---------- |
| mi | viska | do  | fi'o     | kanla | \[fe'u\] | le  | zunle      |
| I  | see   | you | \[modal\] | eye:  |         | the | left-thing ||                              |
| ---------------------------- |
| I see you with the left eye. |The three-place relation *[viska](/glossary/#viska)* has now acquired a fourth place specifying the eye used for seeing. The combination of the cmavo *[fi'o](/glossary/#fio)* (of selma'o FIhO) followed by a selbri, in this case the gismu *[kanla](/glossary/#kanla)*, forms a tag which is prefixed to the sumti filling the new place, namely *le zunle*. The semantics of *fi'o kanla le zunle* is that *le zunle* fills the x1 place of *[kanla](/glossary/#kanla)*, whose place structure is> *[*kanla*](/glossary/#kanla)*&#x78;1 is an/the eye of body x2Thus *le zunle* is an eye. The x2 place of *[kanla](/glossary/#kanla)* is unspecified and must be inferred from the context. It is important to remember that even though *le zunle* is placed following *fi'o kanla*, semantically it belongs in the x1 place of *[kanla](/glossary/#kanla)*. The selbri may be terminated with *[fe'u](/glossary/#feu)* (of selma'o FEhU), an elidable terminator which is rarely required unless a non-logical connective follows the tag (omitting *[fe'u](/glossary/#feu)* in that case would make the connective affect the selbri).The term for such an added place is a “modal place”, as distinguished from the regular numbered places. (This use of the word “modal” is specific to the Loglan Project, and does not agree with the standard uses in either logic or linguistics, but is now too entrenched to change easily.) The *[fi'o](/glossary/#fio)* construction marking a modal place is called a “modal tag”, and the sumti which follows it a “modal sumti”; the purely Lojban terms *sumti tcita* and *seltcita sumti*, respectively, are also commonly used. Modal sumti may be placed anywhere within the bridi, in any order; they have no effect whatever on the rules for assigning unmarked bridi to numbered places, and they may not be marked with FA cmavo.Consider [Example 9.26](/chapter09/#example-926 "Example 9.26. ") again. Another way to view the situation is to consider the speaker's left eye as a tool, a tool for seeing. The relevant selbri then becomes *[pilno](/glossary/#pilno)*, whose place structure is> *[*pilno*](/glossary/#pilno)*&#x78;1 uses x2 as a tool for purpose x3and we can rewrite [Example 9.26](/chapter09/#example-926 "Example 9.26. ") as##### Example 9.27.|    |       |     |          |               |       |     |       |       |
| -- | ----- | --- | -------- | ------------- | ----- | --- | ----- | ----- |
| mi | viska | do  | fi'o     | se            | pilno | le  | zunle | kanla |
| I  | see   | you | \[modal\] | \[conversion\] | use:  | the | left  | eye.  ||                              |
| ---------------------------- |
| I see you using my left eye. |Here the selbri belonging to the modal is *se pilno*. The conversion of *[pilno](/glossary/#pilno)* is necessary in order to get the “tool” place into x1, since only x1 can be the modal sumti. The “tool user” place is the x2 of *se pilno* (because it is the x1 of *[pilno](/glossary/#pilno)*) and remains unspecified. The tag *fi'o pilno* would mean “with tool user”, leaving the tool unspecified.## Modal tags: BAIThere are certain selbri which seem particularly useful in constructing modal tags. In particular, *[pilno](/glossary/#pilno)* is one of them. The place structure of *[pilno](/glossary/#pilno)* is:> *[*pilno*](/glossary/#pilno)*&#x78;1 uses x2 as a tool for purpose x3and almost any selbri which represents an action may need to specify a tool. Having to say *fi'o se pilno* frequently would make many Lojban sentences unnecessarily verbose and clunky, so an abbreviation is provided in the language design: the compound cmavo *[sepi'o](/glossary/#sepio)*.Here *[se](/glossary/#se)* is used before a cmavo, namely *[pi'o](/glossary/#pio)*, rather than before a brivla. The meaning of this cmavo, which belongs to selma'o BAI, is exactly the same as that of *fi'o pilno fe'u*. Since what we want is a tag based on *se pilno* rather than *pilno-* the tool, not the tool user – the grammar allows a BAI cmavo to be converted using a SE cmavo. [Example 9.27](/chapter09/#example-927 "Example 9.27. ") may therefore be rewritten as:##### Example 9.28.|    |       |     |            |     |       |       |
| -- | ----- | --- | ---------- | --- | ----- | ----- |
| mi | viska | do  | sepi'o     | le  | zunle | kanla |
| I  | see   | you | with-tool: | the | left  | eye   ||                              |
| ---------------------------- |
| I see you using my left eye. |The compound cmavo *[sepi'o](/glossary/#sepio)* is much shorter than *fi'o se pilno \[fe'u\]* and can be thought of as a single word meaning “with-tool”. The modal tag *[pi'o](/glossary/#pio)*, with no *[se](/glossary/#se)*, similarly means “with-tool-user”, probably a less useful concept. Nevertheless, the parallelism with the place structure of *[pilno](/glossary/#pilno)* makes the additional syllable worthwhile.Some BAI cmavo make sense with as well as without a SE cmavo; for example, *[ka'a](/glossary/#kaa)*, the BAI corresponding to the gismu *[klama](/glossary/#klama)*, has five usable forms corresponding to the five places of *[klama](/glossary/#klama)* respectively:|                                      |                         |
| ------------------------------------ | ----------------------- |
| *[ka'a](/glossary/#kaa)*     | with-goer               |
| *[seka'a](/glossary/#sekaa)* | with-destination        |
| *[teka'a](/glossary/#tekaa)* | with-origin             |
| *[veka'a](/glossary/#vekaa)* | with-route              |
| *[xeka'a](/glossary/#xekaa)* | with-means-of-transport |Any of these tags may be used to provide modal places for bridi, as in the following examples:##### Example 9.29.|            |        |    |       |           |       |       |           |     |
| ---------- | ------ | -- | ----- | --------- | ----- | ----- | --------- | --- |
| la         | .eivn. | cu | vecnu | loi       | flira | cinta | ka'a      | mi  |
| That-named | Avon   |    | sells | a-mass-of | face  | paint | with-goer | me. ||                                                  |
| ------------------------------------------------ |
| I am a traveling cosmetics salesperson for Avon. |([Example 9.29](/chapter09/#example-929 "Example 9.29. ") may seem a bit strained, but it illustrates the way in which an existing selbri, *[vecnu](/glossary/#vecnu)* in this case, may have a place added to it which might otherwise seem utterly unrelated.)##### Example 9.30.|    |       |                  |            |           |
| -- | ----- | ---------------- | ---------- | --------- |
| mi | cadzu | seka'a           | la         | bratfyd.  |
| I  | walk  | with-destination | that-named | Bradford. ||                           |
| ------------------------- |
| I am walking to Bradford. |##### Example 9.31.|                           |             |            |          |
| ------------------------- | ----------- | ---------- | -------- |
| bloti                     | teka'a      | la         | nu,IORK. |
| \[Observative:\]-is-a-boat | with-origin | that-named | New-York ||                       |
| --------------------- |
| A boat from New York! |##### Example 9.32.|     |       |            |    |         |
| --- | ----- | ---------- | -- | ------- |
| do  | bajra | veka'a     | lo | djine   |
| You | run   | with-route | a  | circle. ||                             |
| --------------------------- |
| You are running in circles. |##### Example 9.33.|    |       |                         |     |           |
| -- | ----- | ----------------------- | --- | --------- |
| mi | citka | xeka'a                  | le  | vinji     |
| I  | eat   | with-means-of-transport | the | airplane. ||                        |
| ---------------------- |
| I eat in the airplane. |There are sixty-odd cmavo of selma'o BAI, based on selected gismu that seemed useful in a variety of settings. The list is somewhat biased toward English, because many of the cmavo were selected on the basis of corresponding English prepositions and preposition compounds such as “with”, “without”, and “by means of”. The BAI cmavo, however, are far more precise than English prepositions, because their meanings are fixed by the place structures of the corresponding gismu.All BAI cmavo have the form CV'V or CVV. Most of them are CV'V, where the C is the first consonant of the corresponding gismu and the two Vs are the two vowels of the gismu. The table in [Section 9.16](/chapter09/#cvv-cmavo-of-selmao-bai-with-irregular-forms "9.16. CV'V cmavo of selma'o BAI with irregular forms") shows the exceptions.There is one additional BAI cmavo that is not derived from a gismu: *[do'e](/glossary/#doe)*. This cmavo is used when an extra place is needed, but it seems useful to be vague about the semantic implications of the extra place:##### Example 9.34.|      |       |               |     |       |    |       |        |       |
| ---- | ----- | ------------- | --- | ----- | -- | ----- | ------ | ----- |
| lo   | nanmu | be do'e       | le  | berti | cu | klama | le     | tcadu |
| Some | man   | \[related-to\] | the | north |    | came  | to-the | city. ||                                      |
| ------------------------------------ |
| A man of the north came to the city. |Here *le berti* is provided as a modal place of the selbri *[nanmu](/glossary/#nanmu)*, but its exact significance is vague, and is paralleled in the colloquial translation by the vague English preposition “of”. [Example 9.34](/chapter09/#example-934 "Example 9.34. ") also illustrates a modal place bound into a selbri with *[be](/glossary/#be)*. This construction is useful when the selbri of a description requires a modal place; this and other uses of *[be](/glossary/#be)* are more fully explained in [Section 5.7](/chapter05/#linked-sumti-be-bei-beo "5.7. Linked sumti: be-bei-be'o").## Modal sentence connection: the causalsThe following cmavo are discussed in this section:|      |     |                                 |
| ---- | --- | ------------------------------- |
| ri'a | BAI | rinka modal: physical cause     |
| ki'u | BAI | krinu modal: justification      |
| mu'i | BAI | mukti modal: motivation         |
| ni'i | BAI | nibli modal: logical entailment |This section has two purposes. On the one hand, it explains the grammatical construct called “modal sentence connection”. On the other, it exemplifies some of the more useful BAI cmavo: the causals. (There are other BAI cmavo which have causal implications: *[ja'e](/glossary/#jae)* means “with result”, and so *[seja'e](/glossary/#sejae)* means “with cause of unspecified nature”; likewise, *[gau](/glossary/#gau)* means “with agent” and *[tezu'e](/glossary/#tezue)* means “with purpose”. These other modal cmavo will not be further discussed here, as my purpose is to explain modal sentence connection rather than Lojbanic views of causation.)There are four causal gismu in Lojban, distinguishing different versions of the relationships lumped in English as “causal”:|                                    |                                             |
| ---------------------------------- | ------------------------------------------- |
| *[rinka](/glossary/#rinka)* | event x1 physically causes event x2         |
| *[krinu](/glossary/#krinu)* | event x1 is the justification for event x2  |
| *[mukti](/glossary/#mukti)* | event x1 is the (human) motive for event x2 |
| *[nibli](/glossary/#nibli)* | event x1 logically entails event x2         |Each of these gismu has a related modal: *[ri'a](/glossary/#ria)*, *[ki'u](/glossary/#kiu)*, *[mu'i](/glossary/#mui)*, and *[ni'i](/glossary/#nii)* respectively. Using these gismu and these modals, we can create various causal sentences with different implications:##### Example 9.35.|     |       |    |       |                     |     |          |
| --- | ----- | -- | ----- | ------------------- | --- | -------- |
| le  | spati | cu | banro | ri'a                | le  | nu       |
| The | plant |    | grows | with-physical-cause | the | event-of ||     |       |       |    |     |        |
| --- | ----- | ----- | -- | --- | ------ |
| do  | djacu | dunda | fi | le  | spati  |
| you | water | give  | to | the | plant. ||                                       |
| ------------------------------------- |
| The plant grows because you water it. |##### Example 9.36.|    |       |       |     |       |          |
| -- | ----- | ----- | --- | ----- | -------- |
| la | djan. | cpacu | le  | pamoi | se jinga |
|    | John  | gets  | the | first | prize    ||                    |     |          |            |       |       |
| ------------------ | --- | -------- | ---------- | ----- | ----- |
| ki'u               | le  | nu       | la         | djan. | jinga |
| with-justification | the | event-of | that-named | John  | wins. ||                                          |
| ---------------------------------------- |
| John got the first prize because he won. |##### Example 9.37.|    |       |     |       |                 |
| -- | ----- | --- | ----- | --------------- |
| mi | lebna | le  | cukta | mu'i            |
| I  | took  | the | book  | with-motivation ||     |          |    |       |     |       |
| --- | -------- | -- | ----- | --- | ----- |
| le  | nu       | mi | viska | le  | cukta |
| the | event-of | I  | saw   | the | book. ||                                   |
| --------------------------------- |
| I took the book because I saw it. |##### Example 9.38.|    |           |       |        |                            |
| -- | --------- | ----- | ------ | -------------------------- |
| la | sokrates. | morsi | binxo  | ni'i                       |
|    | Socrates  | dead  | became | with-logical-justification ||     |          |            |           |           |
| --- | -------- | ---------- | --------- | --------- |
| le  | nu       | la         | sokrates. | remna     |
| the | event-of | that-named | Socrates  | is-human. ||                                          |
| ---------------------------------------- |
| Socrates died because Socrates is human. |In [Example 9.35](/chapter09/#example-935 "Example 9.35. ") through [Example 9.38](/chapter09/#example-938 "Example 9.38. "), the same English word “because” is used to translate all four modals, but the types of cause being expressed are quite different. Let us now focus on [Example 9.35](/chapter09/#example-935 "Example 9.35. "), and explore some variations on it.As written, [Example 9.35](/chapter09/#example-935 "Example 9.35. ") claims that the plant grows, but only refers to the event of watering it in an abstraction bridi (abstractions are explained in [Chapter 11](/chapter11/ "Chapter 11. Events, Qualities, Quantities, And Other Vague Words: On Lojban Abstraction")) without actually making a claim. If I express [Example 9.35](/chapter09/#example-935 "Example 9.35. "), I have said that the plant in fact grows, but I have not said that you actually water it, merely that there is a causal relationship between watering and growing. This is semantically asymmetrical. Suppose I wanted to claim that the plant was being watered, and only mention its growth as ancillary information? Then we could reverse the main bridi and the abstraction bridi, saying:##### Example 9.39.|     |       |       |    |     |       |
| --- | ----- | ----- | -- | --- | ----- |
| do  | djacu | dunda | fi | le  | spati |
| You | water | give  | to | the | plant ||                      |     |          |    |        |
| -------------------- | --- | -------- | -- | ------ |
| seri'a               | le  | nu       | ri | banro  |
| with-physical-effect | the | event-of | it | grows. ||                                           |
| ----------------------------------------- |
| You water the plant; therefore, it grows. |with the *[ri'a](/glossary/#ria)* changed to *[seri'a](/glossary/#seria)*. In addition, there are also symmetrical forms:##### Example 9.40.|     |          |      |       |       |    |     |        |    |
| --- | -------- | ---- | ----- | ----- | -- | --- | ------ | -- |
| le  | nu       | do   | djacu | dunda | fi | le  | spati  | cu |
| The | event-of | (you | water | give  | to | the | plant) |    ||        |     |          |      |       |    |         |
| ------ | --- | -------- | ---- | ----- | -- | ------- |
| rinka  | le  | nu       | le   | spati | cu | banro   |
| causes | the | event-of | (the | plant |    | grows). ||                                            |
| ------------------------------------------ |
| Your watering the plant causes its growth. |
| If you water the plant, then it grows.     |does not claim either event, but asserts only the causal relationship between them. So in [Example 9.40](/chapter09/#example-940 "Example 9.40. "), I am not saying that the plant grows nor that you have in fact watered it. The second colloquial translation shows a form of “if-then” in English quite distinct from the logical connective “if-then” explained in [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System").Suppose we wish to claim both events as well as their causal relationship? We can use one of two methods:##### Example 9.41.|     |       |    |        |          |     |
| --- | ----- | -- | ------ | -------- | --- |
| le  | spati | cu | banro  | .iri'abo | do  |
| The | plant |    | grows. | Because  | you ||       |       |    |     |        |
| ----- | ----- | -- | --- | ------ |
| djacu | dunda | fi | le  | spati  |
| water | give  | to | the | plant. ||                                       |
| ------------------------------------- |
| The plant grows because you water it. |##### Example 9.42.|     |       |       |    |     |        |
| --- | ----- | ----- | -- | --- | ------ |
| do  | djacu | dunda | fi | le  | spati  |
| You | water | give  | to | the | plant. ||            |     |       |    |        |
| ---------- | --- | ----- | -- | ------ |
| .iseri'abo | le  | spati | cu | banro  |
| Therefore  | the | plant |    | grows. ||                                           |
| ----------------------------------------- |
| You water the plant; therefore, it grows. |The compound cmavo *.iri'abo* and *.iseri'abo* serve to connect two bridi, as the initial *[i](/glossary/#i)* indicates. The final *[bo](/glossary/#bo)* is necessary to prevent the modal from “taking over” the following sumti. If the *[bo](/glossary/#bo)* were omitted from [Example 9.41](/chapter09/#example-941 "Example 9.41. ") we would have:##### Example 9.43.|     |       |    |        |    |            |      |
| --- | ----- | -- | ------ | -- | ---------- | ---- |
| le  | spati | cu | banro  | .i | ri'a       | do   |
| The | plant |    | grows. |    | Because-of | you, ||              |       |       |    |     |        |
| ------------ | ----- | ----- | -- | --- | ------ |
|              | djacu | dunda | fi | le  | spati  |
| \[something\] | water | gives | to | the | plant. ||                                                               |
| ------------------------------------------------------------- |
| The plant grows. Because of you, water is given to the plant. |Because *ri'a do* is a modal sumti in [Example 9.43](/chapter09/#example-943 "Example 9.43. "), there is no longer an explicit sumti in the x1 place of *djacu dunda*, and the translation must be changed.The effect of sentences like [Example 9.41](/chapter09/#example-941 "Example 9.41. ") and [Example 9.42](/chapter09/#example-942 "Example 9.42. ") is that the modal, *[ri'a](/glossary/#ria)* in this example, no longer modifies an explicit sumti. Instead, the sumti is implicit, the event given by a full bridi. Furthermore, there is a second implication: that the first bridi fills the x2 place of the gismu *[rinka](/glossary/#rinka)*; it specifies an event which is the effect. I am therefore claiming three things: that the plant grows, that you have watered it, and that there is a cause-and-effect relationship between the two.In principle, any modal tag can appear in a sentence connective of the type exemplified by [Example 9.41](/chapter09/#example-941 "Example 9.41. ") and [Example 9.42](/chapter09/#example-942 "Example 9.42. "). However, it makes little sense to use any modals which do not expect events or other abstractions to fill the places of the corresponding gismu. The sentence connective *.ibaubo* is perfectly grammatical, but it is hard to imagine any two sentences which could be connected by an “in-language” modal. This is because a sentence describes an event, and an event can be a cause or an effect, but not a language.## Other modal connectionsLike many Lojban grammatical constructions, sentence modal connection has both forethought and afterthought forms. (See [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System") for a more detailed discussion of Lojban connectives.) [Section 9.7](/chapter09/#modal-sentence-connection-the-causals "9.7. Modal sentence connection: the causals") exemplifies only afterthought modal connection, illustrated here by:##### Example 9.44.|    |       |             |       |
| -- | ----- | ----------- | ----- |
| mi | jgari | lei         | djacu |
| I  | grasp | the-mass-of | water ||                     |    |       |     |       |
| ------------------- | -- | ----- | --- | ----- |
| .iri'abo            | mi | jgari | le  | kabri |
| with-physical-cause | I  | grasp | the | cup.  ||                                                                   |
| ----------------------------------------------------------------- |
| Causing the mass of water to be grasped by me, I grasped the cup. |
| I grasp the water because I grasp the cup.                        |An afterthought connection is one that is signaled only by a cmavo (or a compound cmavo, in this case) between the two constructs being connected. Forethought connection uses a signal both before the first construct and between the two: the use of “both” and “and” in the first half of this sentence represents a forethought connection (though not a modal one).To make forethought modal sentence connections in Lojban, place the modal plus *[gi](/glossary/#gi)* before the first bridi, and *[gi](/glossary/#gi)* between the two. No *[i](/glossary/#i)* is used within the construct. The forethought equivalent of [Example 9.44](/chapter09/#example-944 "Example 9.44. ") is:##### Example 9.45.|                     |    |       |     |       |    |
| ------------------- | -- | ----- | --- | ----- | -- |
| ri'agi              | mi | jgari | le  | kabri | gi |
| With-physical-cause | I  | grasp | the | cup   | ,  ||    |       |             |        |
| -- | ----- | ----------- | ------ |
| mi | jgari | lei         | djacu  |
| I  | grasp | the-mass-of | water. ||                                             |
| ------------------------------------------- |
| Because I grasp the cup, I grasp the water. |Note that the cause, the x1 of *[rinka](/glossary/#rinka)* is now placed first. To keep the two bridi in the original order of [Example 9.44](/chapter09/#example-944 "Example 9.44. "), we could say:##### Example 9.46.|                      |    |       |             |       |    |
| -------------------- | -- | ----- | ----------- | ----- | -- |
| seri'agi             | mi | jgari | lei         | djacu | gi |
| With-physical-effect | I  | grasp | the-mass-of | water | ,  ||    |       |     |       |
| -- | ----- | --- | ----- |
| mi | jgari | le  | kabri |
| I  | grasp | the | cup.  |In English, the sentence “Therefore I grasp the water, I grasp the cup” is ungrammatical, because “therefore” is not grammatically equivalent to “because”. In Lojban, *seri'agi* can be used just like *ri'agi*.When the two bridi joined by a modal connection have one or more elements (selbri or sumti or both) in common, there are various condensed forms that can be used in place of full modal sentence connection with both bridi completely stated.When the bridi are the same except for a single sumti, as in [Example 9.44](/chapter09/#example-944 "Example 9.44. ") through [Example 9.46](/chapter09/#example-946 "Example 9.46. "), then a sumti modal connection may be employed:##### Example 9.47.|    |       |         |     |       |    |             |        |
| -- | ----- | ------- | --- | ----- | -- | ----------- | ------ |
| mi | jgari | ri'agi  | le  | kabri | gi | lei         | djacu  |
| I  | grasp | because | the | cup   | ,  | the-mass-of | water. |[Example 9.47](/chapter09/#example-947 "Example 9.47. ") means exactly the same as [Example 9.44](/chapter09/#example-944 "Example 9.44. ") through [Example 9.46](/chapter09/#example-946 "Example 9.46. "), but there is no idiomatic English translation that will distinguish it from them.If the two connected bridi are different in more than one sumti, then a termset may be employed. Termsets are explained more fully in [Section 14.11](/chapter14/#termset-logical-connection "14.11. Termset logical connection"), but are essentially a mechanism for creating connections between multiple sumti simultaneously.##### Example 9.48.|    |       |     |       |               |       |
| -- | ----- | --- | ----- | ------------- | ----- |
| mi | dunda | le  | cukta | la            | djan. |
| I  | gave  | the | book  | to-that-named | John. ||              |            |       |       |             |       |        |
| ------------ | ---------- | ----- | ----- | ----------- | ----- | ------ |
| .imu'ibo     | la         | djan. | dunda | lei         | jdini | mi     |
| Motivated-by | that-named | John  | gave  | the-mass-of | money | to-me. ||                                                         |
| ------------------------------------------------------- |
| I gave the book to John, because John gave money to me. |means the same as:##### Example 9.49.|          |         |            |       |             |        |    |    |
| -------- | ------- | ---------- | ----- | ----------- | ------ | -- | -- |
| nu'i     | mu'igi  | la         | djan. | lei         | jdini  | mi | gi |
| \[start\] | because | that-named | John, | the-mass-of | money, | me | ;  ||    |     |       |            |       |        |        |
| -- | --- | ----- | ---------- | ----- | ------ | ------ |
| mi | le  | cukta | la         | djan. | nu'u   | dunda  |
| I, | the | book, | that-named | John  | \[end\] | gives. |Here there are three sumti in each half of the termset, because the two bridi share only their selbri.There is no modal connection between selbri as such: bridi which differ only in the selbri can be modally connected using bridi-tail modal connection. The bridi-tail construct is more fully explained in [Section 14.9](/chapter14/#compound-bridi "14.9. Compound bridi"), but essentially it consists of a selbri with optional sumti following it. [Example 9.37](/chapter09/#example-937 "Example 9.37. ") is suitable for bridi-tail connection, and could be shortened to:##### Example 9.50.|    |         |       |     |       |    |       |     |       |
| -- | ------- | ----- | --- | ----- | -- | ----- | --- | ----- |
| mi | mu'igi  | viska | le  | cukta | gi | lebna | le  | cukta |
| I, | because | saw   | the | book, |    | took  | the | book. |Again, no straightforward English translation exists. It is even possible to shorten [Example 9.50](/chapter09/#example-950 "Example 9.50. ") further to:##### Example 9.51.|    |         |       |           |       |     |     |       |
| -- | ------- | ----- | --------- | ----- | --- | --- | ----- |
| mi | mu'igi  | viska | gi        | lebna | vau | le  | cukta |
| I  | because | saw,  | therefore | took, |     | the | book. |where *le cukta* is set off by the non-elidable *[vau](/glossary/#vau)* and is made to belong to both bridi-tails – see [Section 14.9](/chapter14/#compound-bridi "14.9. Compound bridi") for more explanations.Since this is a chapter on rearranging sumti, it is worth pointing out that [Example 9.51](/chapter09/#example-951 "Example 9.51. ") can be further rearranged to:##### Example 9.52.|    |     |       |         |       |           |       |
| -- | --- | ----- | ------- | ----- | --------- | ----- |
| mi | le  | cukta | mu'igi  | viska | gi        | lebna |
| I, | the | book, | because | saw,  | therefore | took. |which doesn't require the extra *[vau](/glossary/#vau)*; all sumti before a conjunction of bridi-tails are shared.Finally, mathematical operands can be modally connected.##### Example 9.53.|            |     |    |            |    |
| ---------- | --- | -- | ---------- | -- |
| li         | ny. | du | li         | vo |
| the-number | n   | =  | the-number | 4. ||             |            |     |    |            |    |      |    |
| ----------- | ---------- | --- | -- | ---------- | -- | ---- | -- |
| .ini'ibo    | li         | ny. | du | li         | re | su'i | re |
| Entailed-by | the-number | n   | =  | the-number | 2  | +    | 2. ||                          |
| ------------------------ |
| n = 4 because n = 2 + 2. |can be reduced to:##### Example 9.54.|            |     |    |            |
| ---------- | --- | -- | ---------- |
| li         | ny. | du | li         |
| the-number | n   | =  | the-number ||         |     |    |      |    |         |           |    |
| ------- | --- | -- | ---- | -- | ------- | --------- | -- |
| ni'igi  | vei | re | su'i | re | \[ve'o\] | gi        | vo |
| because | (   | 2  | +    | 2  | )       | therefore | 4. ||                            |
| -------------------------- |
| n is 2 + 2, and is thus 4. |The cmavo *[vei](/glossary/#vei)* and *[ve'o](/glossary/#veo)* represent mathematical parentheses, and are required so that *ni'igi* affects more than just the immediately following operand, namely the first *[re](/glossary/#re)*. (The right parenthesis, *[ve'o](/glossary/#veo)*, is an elidable terminator.) As usual, no English translation does [Example 9.54](/chapter09/#example-954 "Example 9.54. ") justice.Note: Due to restrictions on the Lojban parsing algorithm, it is not possible to form modal connectives using the *fi'o-*&#x70;lus-selbri form of modal. Only the predefined modals of selma'o BAI can be compounded as shown in [Section 9.7](/chapter09/#modal-sentence-connection-the-causals "9.7. Modal sentence connection: the causals") and [Section 9.8](/chapter09/#other-modal-connections "9.8. Other modal connections").## Modal selbriConsider the example:##### Example 9.55.|    |       |             |            |         |
| -- | ----- | ----------- | ---------- | ------- |
| mi | tavla | bau         | la         | lojban. |
| I  | speak | in-language | that-named | Lojban  ||                |             |            |        |
| -------------- | ----------- | ---------- | ------ |
| bai            | tu'a        | la         | frank. |
| with-compeller | some-act-by | that-named | Frank. ||                                               |
| --------------------------------------------- |
| I speak in Lojban, under compulsion by Frank. |[Example 9.55](/chapter09/#example-955 "Example 9.55. ") has two modal sumti, using the modals *[bau](/glossary/#bau)* and *[bai](/glossary/#bai)*. Suppose we wanted to specify the language explicitly but be vague about who's doing the compelling. We can simplify [Example 9.55](/chapter09/#example-955 "Example 9.55. ") to:##### Example 9.56.|    |       |             |            |         |                  |        |
| -- | ----- | ----------- | ---------- | ------- | ---------------- | ------ |
| mi | tavla | bau         | la         | lojban. | bai              | \[ku\]. |
| I  | speak | in-language | that-named | Lojban  | under-compulsion |        |In [Example 9.56](/chapter09/#example-956 "Example 9.56. "), the elidable terminator *[ku](/glossary/#ku)* has taken the place of the sumti which would normally follow *[bai](/glossary/#bai)*. Alternatively, we could specify the one who compels but keep the language vague:##### Example 9.57.|    |       |                  |       |
| -- | ----- | ---------------- | ----- |
| mi | tavla | bau              | \[ku\] |
| I  | speak | in-some-language |       ||                     |             |            |        |
| ------------------- | ----------- | ---------- | ------ |
| bai                 | tu'a        | la         | frank. |
| under-compulsion-by | some-act-by | that-named | Frank. |We are also free to move the modal-plus- *[ku](/glossary/#ku)* around the bridi:##### Example 9.58.|                  |       |                  |    |    |        |
| ---------------- | ----- | ---------------- | -- | -- | ------ |
| bau              | \[ku\] | bai              | ku | mi | tavla  |
| In-some-language |       | under-compulsion |    | I  | speak. |An alternative to using *[ku](/glossary/#ku)* is to place the modal cmavo right before the selbri, following the *[cu](/glossary/#cu)* which often appears there. When a modal is present, the *[cu](/glossary/#cu)* is almost never necessary.##### Example 9.59.|    |             |       |             |            |         |
| -- | ----------- | ----- | ----------- | ---------- | ------- |
| mi | bai         | tavla | bau         | la         | lojban. |
| I  | compelledly | speak | in-language | that-named | Lojban. |In this use, the modal is like a tanru modifier semantically, although grammatically it is quite distinct. [Example 9.59](/chapter09/#example-959 "Example 9.59. ") is very similar in meaning to:##### Example 9.60.|    |             |       |             |            |         |
| -- | ----------- | ----- | ----------- | ---------- | ------- |
| mi | se bapli    | tavla | bau         | la         | lojban. |
| I  | compelledly | speak | in-language | that-named | Lojban. |The *[se](/glossary/#se)* conversion is needed because *bapli tavla* would be a “compeller type of speaker” rather than a “compelled (by someone) type of speaker”, which is what a *bai tavla* is.If the modal preceding a selbri is constructed using *[fi'o](/glossary/#fio)*, then *[fe'u](/glossary/#feu)* is required to prevent the main selbri and the modal selbri from colliding:##### Example 9.61.|    |      |       |      |       |      |
| -- | ---- | ----- | ---- | ----- | ---- |
| mi | fi'o | kanla | fe'u | viska | do   |
| I  | with | eye   |      | see   | you. ||                           |
| ------------------------- |
| I see you with my eye(s). |There are two other uses of modals. A modal can be attached to a pair of bridi-tails that have already been connected by a logical, non-logical, or modal connection (see [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System") for more on logical and non-logical connections):##### Example 9.62.|    |                  |    |      |       |        |        |
| -- | ---------------- | -- | ---- | ----- | ------ | ------ |
| mi | bai              | ke | ge   | klama | le     | zarci  |
| I  | under-compulsion | (  | both | go    | to-the | market ||     |       |        |       |         |
| --- | ----- | ------ | ----- | ------- |
| gi  | cadzu | le     | bisli | \[ke'e\] |
| and | walk  | on-the | ice   | ).      ||                                                                |
| -------------------------------------------------------------- |
| Under compulsion, I both go to the market and walk on the ice. |Here the *[bai](/glossary/#bai)* is spread over both *klama le zarci* and *cadzu le bisli*, and the *ge ... gi* represents the logical connection “both-and” between the two.Similarly, a modal can be attached to multiple sentences that have been combined with *[tu'e](/glossary/#tue)* and *[tu'u](/glossary/#tuu)*, which are explained in more detail in [Section 19.2](/chapter19/#sentences-i "19.2. Sentences: I"):##### Example 9.63.|                  |          |    |       |        |         |
| ---------------- | -------- | -- | ----- | ------ | ------- |
| bai              | tu'e     | mi | klama | le     | zarci   |
| Under-compulsion | \[start\] | I  | go    | to-the | market. ||    |    |       |        |       |         |
| -- | -- | ----- | ------ | ----- | ------- |
| .i | mi | cadzu | le     | bisli | \[tu'u\] |
|    | I  | walk  | on-the | ice   | \[end\]. |means the same thing as [Example 9.62](/chapter09/#example-962 "Example 9.62. ").Note: Either BAI modals or *fi'o-*&#x70;lus-selbri modals may correctly be used in any of the constructions discussed in this section.## Modal relative phrases; ComparisonThe following cmavo are discussed in this section:|      |     |                             |
| ---- | --- | --------------------------- |
| pe   | GOI | restrictive relative phrase |
| ne   | GOI | incidental relative phrase  |
| mau  | BAI | zmadu modal                 |
| me'a | BAI | mleca modal                 |Relative phrases and clauses are explained in much more detail in [Chapter 8](/chapter08/ "Chapter 8. Relative Clauses, Which Make sumti Even More Complicated"). However, there is a construction which combines a modal with a relative phrase which is relevant to this chapter. Consider the following examples of relative clauses:##### Example 9.64.|     |               |       |                 |
| --- | ------------- | ----- | --------------- |
| la  | .apasionatas. | poi   | se cusku        |
| The | Appassionata  | which | is-expressed-by ||            |        |            |    |             |     |
| ---------- | ------ | ---------- | -- | ----------- | --- |
| la         | .artr. | rubnstain. | cu | se nelci    | mi  |
| that-named | Arthur | Rubinstein |    | is-liked-by | me. |##### Example 9.65.|     |               |       |               |
| --- | ------------- | ----- | ------------- |
| la  | .apasionatas. | noi   | se finti      |
| The | Appassionata, | which | is-created-by ||            |            |    |             |     |
| ---------- | ---------- | -- | ----------- | --- |
| la         | betovn.    | cu | se nelci    | mi  |
| that-named | Beethoven, |    | is-liked-by | me. |In [Example 9.64](/chapter09/#example-964 "Example 9.64. "), *la .apasionatas.* refers to a particular performance of the sonata, namely the one performed by Rubinstein. Therefore, the relative clause *poi se cusku* uses the cmavo *[poi](/glossary/#poi)* (of selma'o NOI) to restrict the meaning of *la .apasionatas* to the performance in question.In [Example 9.65](/chapter09/#example-965 "Example 9.65. "), however, *la .apasionatas.* refers to the sonata as a whole, and the information that it was composed by Beethoven is merely incidental. The cmavo *[noi](/glossary/#noi)* (also of selma'o NOI) expresses the incidental nature of this relationship.The cmavo *[pe](/glossary/#pe)* and *[ne](/glossary/#ne)* (of selma'o GOI) are roughly equivalent to *[poi](/glossary/#poi)* and *[noi](/glossary/#noi)* respectively, but are followed by sumti rather than full bridi. We can abbreviate [Example 9.64](/chapter09/#example-964 "Example 9.64. ") and [Example 9.65](/chapter09/#example-965 "Example 9.65. ") to:##### Example 9.66.|     |               |    |            |        |            |             |     |
| --- | ------------- | -- | ---------- | ------ | ---------- | ----------- | --- |
| la  | .apasionatas. | pe | la         | .artr. | rubnstain. | se nelci    | mi  |
| The | Appassionata  | of | that-named | Arthur | Rubinstein | is-liked-by | me. |##### Example 9.67.|     |               |             |            |            |             |     |
| --- | ------------- | ----------- | ---------- | ---------- | ----------- | --- |
| la  | .apasionatas. | ne          | la         | betovn.    | se nelci    | mi  |
| The | Appassionata, | which-is-of | that-named | Beethoven, | is-liked-by | me. |Here the precise selbri of the relative clauses is lost: all we can tell is that the Appassionata is connected in some way with Rubinstein (in [Example 9.66](/chapter09/#example-966 "Example 9.66. ")) and Beethoven (in [Example 9.67](/chapter09/#example-967 "Example 9.67. ")), and that the relationships are respectively restrictive and incidental.It happens that both *[cusku](/glossary/#cusku)* and *[finti](/glossary/#finti)* have BAI cmavo, namely *[cu'u](/glossary/#cuu)* and *[fi'e](/glossary/#fie)*. We can recast [Example 9.66](/chapter09/#example-966 "Example 9.66. ") and [Example 9.67](/chapter09/#example-967 "Example 9.67. ") as:##### Example 9.68.|     |              |              |
| --- | ------------ | ------------ |
| la  | .apasionatas | pe cu'u      |
| The | Appassionata | expressed-by ||            |        |            |    |             |     |
| ---------- | ------ | ---------- | -- | ----------- | --- |
| la         | .artr. | rubnstain. | cu | se nelci    | mi  |
| that-named | Arthur | Rubinstein |    | is-liked-by | me. |##### Example 9.69.|     |               |             |
| --- | ------------- | ----------- |
| la  | .apasionatas  | ne fi'e     |
| The | Appassionata, | invented-by ||            |            |    |             |     |
| ---------- | ---------- | -- | ----------- | --- |
| la         | betovn.    | cu | se nelci    | mi  |
| that-named | Beethoven, |    | is-liked-by | me. |[Example 9.68](/chapter09/#example-968 "Example 9.68. ") and [Example 9.69](/chapter09/#example-969 "Example 9.69. ") have the full semantic content of [Example 9.64](/chapter09/#example-964 "Example 9.64. ") and [Example 9.65](/chapter09/#example-965 "Example 9.65. ") respectively.Modal relative phrases are often used with the BAI cmavo *[mau](/glossary/#mau)* and *[me'a](/glossary/#mea)*, which are based on the comparative gismu *[zmadu](/glossary/#zmadu)* (more than) and *[mleca](/glossary/#mleca)* (less than) respectively. The place structures are:|                                    |                                                         |
| ---------------------------------- | ------------------------------------------------------- |
| *[zmadu](/glossary/#zmadu)* | x1 is more than x2 in property/quantity x3 by amount x4 |
| *[mleca](/glossary/#mleca)* | x1 is less than x2 in property/quantity x3 by amount x4 |Here are some examples:##### Example 9.70.|            |        |       |            |        |
| ---------- | ------ | ----- | ---------- | ------ |
| la         | frank. | nelci | la         | betis. |
| That-named | Frank  | likes | that-named | Betty, ||          |           |            |         |
| -------- | --------- | ---------- | ------- |
| ne       | semau     | la         | meiris. |
| which-is | more-than | that-named | Mary.   ||                                              |
| -------------------------------------------- |
| Frank likes Betty more than (he likes) Mary. |[Example 9.70](/chapter09/#example-970 "Example 9.70. ") requires that Frank likes Betty, but adds the information that his liking for Betty exceeds his liking for Mary. The modal appears in the form *[semau](/glossary/#semau)* because the x2 place of *[zmadu](/glossary/#zmadu)* is the basis for comparison: in this case, Frank's liking for Mary.##### Example 9.71.|            |        |       |            |         |
| ---------- | ------ | ----- | ---------- | ------- |
| la         | frank. | nelci | la         | meiris. |
| That-named | Frank  | likes | that-named | Mary,   ||          |           |            |        |
| -------- | --------- | ---------- | ------ |
| ne       | seme'a    | la         | betis. |
| which-is | less-than | that-named | Betty. ||                                              |
| -------------------------------------------- |
| Frank likes Mary less than (he likes) Betty. |Here we are told that Frank likes Mary less than he likes Betty; the information about the comparison is the same. It would be possible to rephrase [Example 9.70](/chapter09/#example-970 "Example 9.70. ") using *[me'a](/glossary/#mea)* rather than *[semau](/glossary/#semau)*, and [Example 9.71](/chapter09/#example-971 "Example 9.71. ") using *[mau](/glossary/#mau)* rather than *[seme'a](/glossary/#semea)*, but such usage would be unnecessarily confusing. Like many BAI cmavo, *[mau](/glossary/#mau)* and *[me'a](/glossary/#mea)* are more useful when converted with *[se](/glossary/#se)*.If the *[ne](/glossary/#ne)* were omitted in [Example 9.70](/chapter09/#example-970 "Example 9.70. ") and [Example 9.71](/chapter09/#example-971 "Example 9.71. "), the modal sumti (*la meiris.* and *la betis.* respectively) would become attached to the bridi as a whole, producing a very different translation. [Example 9.71](/chapter09/#example-971 "Example 9.71. ") would become:##### Example 9.72.|            |        |       |            |         |              |            |        |
| ---------- | ------ | ----- | ---------- | ------- | ------------ | ---------- | ------ |
| la         | frank. | nelci | la         | meiris. | seme'a       | la         | betis. |
| That-named | Frank  | likes | that-named | Mary    | is-less-than | that-named | Betty. ||                                         |
| --------------------------------------- |
| Frank's liking Mary is less than Betty. |which compares a liking with a person, and is therefore nonsense.Pure comparison, which states only the comparative information but says nothing about whether Frank actually likes either Mary or Betty (he may like neither, but dislike Betty less), would be expressed differently, as:##### Example 9.73.|     |             |            |         |
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
| liking | that-named | Mary.   |The mechanisms explained in this section are appropriate to many modals other than *[semau](/glossary/#semau)* and *[seme'a](/glossary/#semea)*. Some other modals that are often associated with relative phrases are: *[seba'i](/glossary/#sebai)* (“instead of”), *[ci'u](/glossary/#ciu)* (“on scale”), *[de'i](/glossary/#dei)* (“dated”), *[du'i](/glossary/#dui)* (“as much as”). Some BAI tags can be used equally well in relative phrases or attached to bridi; others seem useful only attached to bridi. But it is also possible that the usefulness of particular BAI modals is an English-speaker bias, and that speakers of other languages may find other BAIs useful in divergent ways.Note: The uses of modals discussed in this section are applicable both to BAI modals and to *fi'o-*&#x70;lus-selbri modals.## Mixed modal connectionIt is possible to mix logical connection (explained in [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System")) with modal connection, in a way that simultaneously asserts the logical connection and the modal relationship. Consider the sentences:##### Example 9.74.|    |       |      |      |    |       |            |        |
| -- | ----- | ---- | ---- | -- | ----- | ---------- | ------ |
| mi | nelci | do   | .ije | mi | nelci | la         | djein. |
| I  | like  | you. | And  | I  | like  | that-named | Jane.  |which is a logical connection, and##### Example 9.75.|    |       |      |              |    |       |            |        |
| -- | ----- | ---- | ------------ | -- | ----- | ---------- | ------ |
| mi | nelci | do   | .iki'ubo     | mi | nelci | la         | djein. |
| I  | like  | you. | Justified-by | I  | like  | that-named | Jane.  |The meanings of [Example 9.74](/chapter09/#example-974 "Example 9.74. ") and [Example 9.75](/chapter09/#example-975 "Example 9.75. ") can be simultaneously expressed by combining the two compound cmavo, thus:##### Example 9.76.|    |       |      |                  |    |       |            |        |
| -- | ----- | ---- | ---------------- | -- | ----- | ---------- | ------ |
| mi | nelci | do   | .ijeki'ubo       | mi | nelci | la         | djein. |
| I  | like  | you. | And-justified-by | I  | like  | that-named | Jane.  |Here the two sentences *mi nelci do* and *mi nelci la djein.* are simultaneously asserted, their logical connection is asserted, and their causal relationship is asserted. The logical connective *[je](/glossary/#je)* comes before the modal *[ki'u](/glossary/#kiu)* in all such mixed connections.Since *mi nelci do* and *mi nelci la djein.* differ only in the final sumti, we can transform [Example 9.76](/chapter09/#example-976 "Example 9.76. ") into a mixed sumti connection:##### Example 9.77.|    |       |     |             |            |        |
| -- | ----- | --- | ----------- | ---------- | ------ |
| mi | nelci | do  | .eki'ubo    | la         | djein. |
| I  | like  | you | and/because | that-named | Jane.  |Note that this connection is an afterthought one. Mixed connectives are always afterthought; forethought connectives must be either logical or modal.There are numerous other afterthought logical and non-logical connectives that can have modal information planted within them. For example, a bridi-tail connected version of [Example 9.77](/chapter09/#example-977 "Example 9.77. ") would be:##### Example 9.78.|    |       |     |             |       |            |        |
| -- | ----- | --- | ----------- | ----- | ---------- | ------ |
| mi | nelci | do  | gi'eki'ubo  | nelci | la         | djein. |
| I  | like  | you | and/because | like  | that-named | Jane.  |The following three complex examples all mean the same thing.##### Example 9.79.|    |       |     |       |
| -- | ----- | --- | ----- |
| mi | bevri | le  | dakli |
| I  | carry | the | sack. ||               |      |    |       |     |       |
| ------------- | ---- | -- | ----- | --- | ----- |
| .ijeseri'abo  | tu'e | mi | bevri | le  | gerku |
| And-\[effect\] | (    | I  | carry | the | dog.  ||                 |    |       |     |       |         |
| --------------- | -- | ----- | --- | ----- | ------- |
| .ijadu'ibo      | mi | bevri | le  | mlatu | \[tu'u\] |
| And/or-\[equal\] | I  | carry | the | cat.  | )       ||                                                                            |
| -------------------------------------------------------------------------- |
| I carry the sack. As a result I carry the dog or I carry the cat, equally. |##### Example 9.80.|    |       |     |       |
| -- | ----- | --- | ----- |
| mi | bevri | le  | dakli |
| I  | carry | the | sack  ||               |        |     |       |
| ------------- | ------ | --- | ----- |
| gi'eseri'ake  | bevri  | le  | gerku |
| and-\[effect\] | (carry | the | dog   ||                 |       |     |       |         |
| --------------- | ----- | --- | ----- | ------- |
| gi'adu'ibo      | bevri | le  | mlatu | \[ke'e\] |
| and/or-\[equal\] | carry | the | cat)  |         ||                                                                          |
| ------------------------------------------------------------------------ |
| I carry the sack and as a result carry the dog or carry the cat equally. |##### Example 9.81.|    |       |     |       |
| -- | ----- | --- | ----- |
| mi | bevri | le  | dakli |
| I  | carry | the | sack  ||               |      |       |
| ------------- | ---- | ----- |
| .eseri'ake    | le   | gerku |
| and-\[effect\] | (the | dog   ||                 |     |       |         |
| --------------- | --- | ----- | ------- |
| .adu'ibo        | le  | mlatu | \[ke'e\] |
| and/or-\[equal\] | the | cat)  |         ||                                                               |
| ------------------------------------------------------------- |
| I carry the sack, and as a result the cat or the dog equally. |In [Example 9.79](/chapter09/#example-979 "Example 9.79. "), the *[tu'u](/glossary/#tuu)* brackets are the equivalent of the *[ke'e](/glossary/#kee)* brackets in [Example 9.80](/chapter09/#example-980 "Example 9.80. ") and [Example 9.81](/chapter09/#example-981 "Example 9.81. "), because *[ke'e](/glossary/#kee)* cannot extend across more than one sentence. It would also be possible to change the *.ijeseri'abo* to *.ije seri'a*, which would show that the *[tu'u](/glossary/#tuu)* portion was an effect, but would not pin down the *mi bevri le dakli* portion as the cause. It is legal for a modal (or a tense; see [Chapter 10](/chapter10/ "Chapter 10. Imaginary Journeys: The Lojban Space/Time Tense System")) to modify the whole of a *[tu'u](/glossary/#tuu)* construct.Note: The uses of modals discussed in this section are applicable both to BAI modals and to *fi'o-*&#x70;lus-selbri modals.## Modal conversion: JAIThe following cmavo are discussed in this section:|     |     |                           |
| --- | --- | ------------------------- |
| jai | JAI | modal conversion          |
| fai | FA  | modal place structure tag |So far, conversion of numbered bridi places with SE and the addition of modal places with BAI have been two entirely separate operations. However, it is possible to convert a selbri in such a way that, rather than exchanging two numbered places, a modal place is made into a numbered place. For example,##### Example 9.82.|    |         |              |             |            |         |
| -- | ------- | ------------ | ----------- | ---------- | ------- |
| mi | cusku   |              | bau         | la         | lojban. |
| I  | express | \[something\] | in-language | that-named | Lojban. |has an explicit x1 place occupied by *[mi](/glossary/#mi)* and an explicit *[bau](/glossary/#bau)* place occupied by *la lojban.* To exchange these two, we use a modal conversion operator consisting of *[jai](/glossary/#jai)* (of selma'o JAI) followed by the modal cmavo. Thus, the modal conversion of [Example 9.82](/chapter09/#example-982 "Example 9.82. ") is:##### Example 9.83.|            |         |                               |         |     |
| ---------- | ------- | ----------------------------- | ------- | --- |
| la         | lojban. | jai bau cusku                 | fai     | mi  |
| That-named | Lojban  | is-the-language-of-expression | used-by | me. |In [Example 9.83](/chapter09/#example-983 "Example 9.83. "), the modal place *la lojban.* has become the x1 place of the new selbri *jai bau cusku*. What has happened to the old x1 place? There is no numbered place for it to move to, so it moves to a special “unnumbered place” marked by the tag *[fai](/glossary/#fai)* of selma'o FA.Note: For the purposes of place numbering, *[fai](/glossary/#fai)* behaves like *[fi'a](/glossary/#fia)*; it does not affect the numbering of the other places around it.Like SE conversions, JAI conversions are especially convenient in descriptions. We may refer to “the language of an expression” as *le jai bau cusku*, for example.In addition, it is grammatical to use *[jai](/glossary/#jai)* without a following modal. This usage is not related to modals, but is explained here for completeness. The effect of *[jai](/glossary/#jai)* by itself is to send the x1 place, which should be an abstraction, into the *[fai](/glossary/#fai)* position, and to raise one of the sumti from the abstract sub-bridi into the x1 place of the main bridi. This feature is discussed in more detail in [Section 11.10](/chapter11/#lojban-sumti-raising "11.10. Lojban sumti raising"). The following two examples mean the same thing:##### Example 9.84.|     |          |    |       |     |       |    |                 |
| --- | -------- | -- | ----- | --- | ----- | -- | --------------- |
| le  | nu       | mi | lebna | le  | cukta | cu | se krinu        |
| The | event-of | (I | take  | the | book) |    | is-justified-by ||     |          |    |       |     |        |
| --- | -------- | -- | ----- | --- | ------ |
| le  | nu       | mi | viska | le  | cukta  |
| the | event-of | (I | see   | the | book). ||                                                  |
| ------------------------------------------------ |
| My taking the book is justified by my seeing it. |##### Example 9.85.|    |                 |     |          |    |       |     |       |     |
| -- | --------------- | --- | -------- | -- | ----- | --- | ----- | --- |
| mi | jai se krinu    | le  | nu       | mi | viska | le  | cukta | kei |
| I  | am-justified-by | the | event-of | (I | see   | the | book) |     ||           |     |          |    |       |     |        |
| --------- | --- | -------- | -- | ----- | --- | ------ |
| \[fai     | le  | nu       | mi | lebna | le  | cukta\] |
| \[namely, | the | event-of | (I | take  | the | book)\] ||                                                       |
| ----------------------------------------------------- |
| I am justified in taking the book by seeing the book. |[Example 9.85](/chapter09/#example-985 "Example 9.85. "), with the bracketed part omitted, allows us to say that “I am justified” whereas in fact it is my action that is justified. This construction is vague, but useful in representing natural-language methods of expression.Note: The uses of modals discussed in this section are applicable both to BAI modals and to *fi'o-*&#x70;lus-selbri modals.## Modal negationNegation is explained in detail in [Chapter 15](/chapter15/ "Chapter 15. “No” Problems: On Lojban Negation"). There are two forms of negation in Lojban: contradictory and scalar negation. Contradictory negation expresses what is false, whereas scalar negation says that some alternative to what has been stated is true. A simple example is the difference between “John didn't go to Paris” (contradictory negation) and “John went to (somewhere) other than Paris” (scalar negation).Contradictory negation involving BAI cmavo is performed by appending *-nai* (of selma'o NAI) to the BAI. A common use of modals with *-nai* is to deny a causal relationship:##### Example 9.86.|    |       |    |         |    |    |    |       |    |
| -- | ----- | -- | ------- | -- | -- | -- | ----- | -- |
| mi | nelci | do | mu'inai | le | nu | do | nelci | mi ||                                          |
| ---------------------------------------- |
| I like you, but not because you like me. |[Example 9.86](/chapter09/#example-986 "Example 9.86. ") denies that the relationship between my liking you (which is asserted) and your liking me (which is not asserted) is one of motivation. Nothing is said about whether you like me or not, merely that that hypothetical liking is not the motivation for my liking you.Scalar negation is achieved by prefixing *[na'e](/glossary/#nae)* (of selma'o NAhE), or any of the other cmavo of NAhE, to the BAI cmavo.##### Example 9.87.|     |       |    |       |                         |     |          |
| --- | ----- | -- | ----- | ----------------------- | --- | -------- |
| le  | spati | cu | banro | na'emu'i                | le  | nu       |
| The | plant |    | grows | other-than-motivated-by | the | event-of ||     |       |       |    |     |        |
| --- | ----- | ----- | -- | --- | ------ |
| do  | djacu | dunda | fi | le  | spati  |
| you | water | give  | to | the | plant. |[Example 9.87](/chapter09/#example-987 "Example 9.87. ") says that the relationship between the plant's growth and your watering it is not one of motivation: the plant is not motivated to grow, as plants are not something which can have motivation as a rule. Implicitly, some other relationship between watering and growth exists, but [Example 9.87](/chapter09/#example-987 "Example 9.87. ") doesn't say what it is (presumably *[ri'a](/glossary/#ria)*).Note: Modals made with *[fi'o](/glossary/#fio)* plus a selbri cannot be negated directly. The selbri can itself be negated either with contradictory or with scalar negation, however.## Sticky modalsThe following cmavo is discussed in this section:|    |    |                 |
| -- | -- | --------------- |
| ki | KI | stickiness flag |Like tenses, modals can be made persistent from the bridi in which they appear to all following bridi. The effect of this “stickiness” is to make the modal, along with its following sumti, act as if it appeared in every successive bridi. Stickiness is put into effect by following the modal (but not any following sumti) with the cmavo *[ki](/glossary/#ki)* of selma'o KI. For example,##### Example 9.88.|    |       |             |            |         |              |
| -- | ----- | ----------- | ---------- | ------- | ------------ |
| mi | tavla | bau         | la         | lojban. | bai          |
| I  | speak | in-language | that-named | Lojban  | compelled-by ||    |                  |            |        |
| -- | ---------------- | ---------- | ------ |
| ki | tu'a             | la         | frank. |
|    | some-property-of | that-named | Frank. ||            |    |       |             |            |          |
| ---------- | -- | ----- | ----------- | ---------- | -------- |
| .ibabo     | mi | tavla | bau         | la         | gliban.  |
| Afterward, | I  | speak | in-language | that-named | English. |means the same as:##### Example 9.89.|    |       |             |            |         |              |
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
| some-property-of | that-named | Frank. |In [Example 9.88](/chapter09/#example-988 "Example 9.88. "), *[bai](/glossary/#bai)* is made sticky, and so Frank's compelling is made applicable to every following bridi. *[bau](/glossary/#bau)* is not sticky, and so the language may vary from bridi to bridi, and if not specified in a particular bridi, no assumption can safely be made about its value.To cancel stickiness, use the form *[ki](/glossary/#ki)* is used for both modals and tenses), use *[ki](/glossary/#ki)* by itself, either before the selbri or (in the form *ki ku*) anywhere in the bridi:##### Example 9.90.|    |    |       |
| -- | -- | ----- |
| mi | ki | tavla ||                                                        |
| ------------------------------------------------------ |
| I speak (no implication about language or compulsion). |Note: Modals made with *[fi'o](/glossary/#fio)*-plus-selbri cannot be made sticky. This is an unfortunate, but unavoidable, restriction.## Logical and non-logical connection of modalsLogical and non-logical connectives are explained in detail in [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System"). For the purposes of this chapter, it suffices to point out that a logical (or non-logical) connection between two bridi which differ only in a modal can be reduced to a single bridi with a connective between the modals. As a result, [Example 9.91](/chapter09/#example-991 "Example 9.91. ") and [Example 9.92](/chapter09/#example-992 "Example 9.92. ") mean the same thing:##### Example 9.91.|            |        |       |                  |     |        |
| ---------- | ------ | ----- | ---------------- | --- | ------ |
| la         | frank. | bajra | seka'a           | le  | zdani  |
| That-named | Frank  | runs  | with-destination | the | house. ||      |            |        |       |             |     |        |
| ---- | ---------- | ------ | ----- | ----------- | --- | ------ |
| .ije | la         | frank. | bajra | teka'a      | le  | zdani  |
| And  | that-named | Frank  | runs  | with-origin | the | house. ||                                                         |
| ------------------------------------------------------- |
| Frank runs to the house, and Frank runs from the house. |##### Example 9.92.|            |        |       |                  |
| ---------- | ------ | ----- | ---------------- |
| la         | frank. | bajra | seka'a           |
| That-named | Frank  | runs  | with-destination ||     |             |     |        |
| --- | ----------- | --- | ------ |
| je  | teka'a      | le  | zdani  |
| and | with-origin | the | house. ||                                   |
| --------------------------------- |
| Frank runs to and from the house. |Neither example implies whether a single act, or two acts, of running is referred to. To compel the sentence to refer to a single act of running, you can use the form:##### Example 9.93.|            |        |       |                  |     |       |
| ---------- | ------ | ----- | ---------------- | --- | ----- |
| la         | frank. | bajra | seka'a           | le  | zdani |
| That-named | Frank  | runs  | with-destination | the | house ||              |             |     |        |
| ------------ | ----------- | --- | ------ |
| ce'e         | teka'a      | le  | zdani  |
| \[joined-to\] | with-origin | the | house. |The cmavo *[ce'e](/glossary/#cee)* creates a termset containing two terms (termsets are explained in [Chapter 14](/chapter14/ "Chapter 14. If Wishes Were Horses: The Lojban Connective System") and [Chapter 16](/chapter16/ "Chapter 16. “Who Did You Pass On The Road? Nobody”: Lojban And Logic")). When a termset contains more than one modal tag derived from a single BAI, the convention is that the two tags are derived from a common event.*

*## CV'V cmavo of selma'o BAI with irregular forms*

*[do'e](/glossary/#doe)*, discussed in [Section 9.6](/chapter09/#modal-tags-bai "9.6. Modal tags: BAI")), are derived directly from selected gismu. Of these 64 cmavo, 36 are entirely regular and have the form CV'V, where C is the first consonant of the corresponding gismu, and the Vs are the two vowels of the gismu. The remaining BAI cmavo, which are irregular in one way or another, are listed in the table below. The table is divided into sub-tables according to the nature of the exception; some cmavo appear in more than one sub-table, and are so noted.

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
| va'u | xamgu  | CV'V cmavo can't begin with *x* |



## Complete table of BAI cmavo with rough English equivalents

The following table shows all the cmavo belonging to selma'o BAI, and has five columns. The first column is the cmavo itself; the second column is the gismu linked to it. The third column gives an English phrase which indicates the meaning of the cmavo; and the fourth column indicates its meaning when preceded by *[se](/glossary/#se)*.

For those cmavo with meaningful *[te](/glossary/#te)*, *[ve](/glossary/#ve)*, and even *[xe](/glossary/#xe)* conversions (depending on the number of places of the underlying gismu), the meanings of these are shown on one or two extra rows following the primary row for that cmavo.

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
| *[do'e](/glossary/#doe)* | -----                              | vaguely related to |                       |                              |                           |                   |
| du'i                             | dunli                              | as much as         | equal to              |                              |                           |                   |
| du'o                             | djuno                              | according to       | knowing facts         | knowing about                | under epistemology        |                   |
| fa'e                             | fatne                              | reverse of         | in reversal of        |                              |                           |                   |
| *[fau](/glossary/#fau)*   | *[fasnu](/glossary/#fasnu)* | in the event of    |                       |                              |                           |                   |
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
| *[ra'a](/glossary/#raa)* | *[srana](/glossary/#srana)* | pertained to by    | concerning            |                              |                           |                   |
| *[ra'i](/glossary/#rai)* | *[krasi](/glossary/#krasi)* | from source        | as an origin of       |                              |                           |                   |
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

The lujvo *[tamsmi](/glossary/#tamsmi)* on which *[tai](/glossary/#tai)* is based is derived from the tanru *tarmi simsa* and has the place structure:

> *[*tamsmi*](/glossary/#tamsmi)*&#x78;1 has form x2, similar in form to x3 in property/quality x4

This lujvo is employed because *[tarmi](/glossary/#tarmi)* does not have a place structure useful for the modal's purpose.

