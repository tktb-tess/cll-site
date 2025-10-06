---
layout: ../layouts/Layout.astro
title: 'Chapter 18. lojbau mekso: Mathematical Expressions in Lojban'
prev: chapter17
prevTitle: 'Prev: Chapter 17'
next: chapter19
nextTitle: 'Next: Chapter 19'
---

![The picture for chapter 18](../assets/chapter18.gif)

## Introductory

lojbau mekso (“Lojbanic mathematical-expression”) is the part of the Lojban language that is tailored for expressing statements of a mathematical character, or for adding numerical information to non-mathematical statements. Its formal design goals include:

1. representing all the different forms of expression used by mathematicians in their normal modes of writing, so that a reader can unambiguously read off mathematical text as written with minimal effort and expect a listener to understand it;

2. providing a vocabulary of commonly used mathematical terms which can readily be expanded to include newly coined words using the full resources of Lojban;

3. permitting the formulation, both in writing and in speech, of unambiguous mathematical text;

4. encompassing all forms of quantified expression found in natural languages, as well as encouraging greater precision in ordinary language situations than natural languages allow.

Goal 1 requires that mekso not be constrained to a single notation such as Polish notation or reverse Polish notation, but make provision for all forms, with the most commonly used forms the most easily used.

Goal 2 requires the provision of several conversion mechanisms, so that the boundary between mekso and full Lojban can be crossed from either side at many points.

Goal 3 is the most subtle. Written mathematical expression is culturally unambiguous, in the sense that mathematicians in all parts of the world understand the same written texts to have the same meanings. However, international mathematical notation does not prescribe unique forms. For example, the expression

### Example 18.1.

3 x + 2 y



contains omitted multiplication operators, but there are other possible interpretations for the strings 3x and 2y than as mathematical multiplication. Therefore, the Lojban verbal (spoken and written) form of [Example 18.1](chapter18#example-random-id-dGcT "Example 18.1. ") must not omit the multiplication operators.

The remainder of this chapter explains (in as much detail as is currently possible) the mekso system. This chapter is by intention complete as regards mekso components, but only suggestive about uses of those components – as of now, there has been no really comprehensive use made of mekso facilities, and many matters must await the test of usage to be fully clarified.

## Lojban numbers

The following cmavo are discussed in this section:

|                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pa&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;1&#xA;&#xA;&#xA;&#xA;&#xA;re&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;2&#xA;&#xA;&#xA;&#xA;&#xA;ci&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;3&#xA;&#xA;&#xA;&#xA;&#xA;vo&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;4&#xA;&#xA;&#xA;&#xA;&#xA;mu&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;5 | xa&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;6&#xA;&#xA;&#xA;&#xA;&#xA;ze&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;7&#xA;&#xA;&#xA;&#xA;&#xA;bi&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;8&#xA;&#xA;&#xA;&#xA;&#xA;so&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;9&#xA;&#xA;&#xA;&#xA;&#xA;no&#xA;&#xA;&#x9;&#xA;&#xA;PA&#xA;&#xA;&#x9;&#xA;&#xA;0 |

The simplest kind of mekso are numbers, which are cmavo or compound cmavo. There are cmavo for each of the 10 decimal digits, and numbers greater than 9 are made by stringing together the cmavo. Some examples:

### Example 18.2.

|     |     |       |
| --- | --- | ----- |
| pa  | re  | ci    |
| one | two | three |
| 123 |     |       |

|                              |
| ---------------------------- |
| one hundred and twenty three |



### Example 18.3.

|     |      |
| --- | ---- |
| pa  | no   |
| one | zero |
| 10  |      |

|     |
| --- |
| ten |



### Example 18.4.

|            |     |       |      |      |     |       |       |      |      |
| ---------- | --- | ----- | ---- | ---- | --- | ----- | ----- | ---- | ---- |
| pa         | re  | ci    | vo   | mu   | xa  | ze    | bi    | so   | no   |
| one        | two | three | four | five | six | seven | eight | nine | zero |
| 1234567890 |     |       |      |      |     |       |       |      |      |

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| one billion, two hundred and thirty-four million, five hundred and sixty-seven thousand, eight hundred and ninety. |



Therefore, there are no separate cmavo for “ten”, “hundred”, etc.

There is a pattern to the digit cmavo (except for _[no](glossary#valsi-no)_, 0) which is worth explaining. The cmavo from 1 to 5 end in the vowels _a_, _e_, _i_, _o_, _u_ respectively; and the cmavo from 6 to 9 likewise end in the vowels _a_, _e_, _i_, and _o_ respectively. None of the digit cmavo begin with the same consonant, to make them easy to tell apart in noisy environments.

## Signs and numerical punctuation

The following cmavo are discussed in this section:

|      |    |                      |
| ---- | -- | -------------------- |
| ma'u | PA | positive sign        |
| ni'u | PA | negative sign        |
| pi   | PA | decimal point        |
| fi'u | PA | fraction slash       |
| ra'e | PA | repeating decimal    |
| ce'i | PA | percent sign         |
| ki'o | PA | comma between digits |

A number can be given an explicit sign by the use of _[ma'u](glossary#valsi-mahu)_ and _[ni'u](glossary#valsi-nihu)_, which are the positive and negative signs as distinct from the addition, subtraction, and negation operators. For example:

### Example 18.5.

|               |    |
| ------------- | -- |
| ni'u          | pa |
| negative-sign | 1  |
| -1            |    |



Grammatically, the signs are part of the number to which they are attached. It is also possible to use _[ma'u](glossary#valsi-mahu)_ and _[ni'u](glossary#valsi-nihu)_ by themselves as numbers; the meaning of these numbers is explained in [Section 18.8](chapter18#section-indefinite-numbers "18.8. Indefinite numbers").

Various numerical punctuation marks are likewise expressed by cmavo, as illustrated in the following examples:

### Example 18.6.

|        |       |     |      |     |      |
| ------ | ----- | --- | ---- | --- | ---- |
| ci     | pi    | pa  | vo   | pa  | mu   |
| three  | point | one | four | one | five |
| 3.1415 |       |     |      |     |      |



(In some cultures, a comma is used instead of a period in the symbolic version of [Example 18.6](chapter18#example-random-id-Ust4 "Example 18.6. "); _[pi](glossary#valsi-pi)_ is still the Lojban representation for the decimal point.)

### Example 18.7.

|     |          |       |
| --- | -------- | ----- |
| re  | fi'u     | ze    |
| two | fraction | seven |
| 2 7 |          |       |



[Example 18.7](chapter18#example-random-id-AeRL "Example 18.7. ") is the name of the number two-sevenths; it is not the same as “the result of 2 divided by 7” in Lojban, although numerically these two are equal. If the denominator of the fraction is present but the numerator is not, the numerator is taken to be 1, thus expressing the reciprocal of the following number:

### Example 18.8.

|          |       |
| -------- | ----- |
| fi'u     | ze    |
| fraction | seven |
| 1 7      |       |



### Example 18.9.

|                    |       |      |           |     |      |     |       |      |       |
| ------------------ | ----- | ---- | --------- | --- | ---- | --- | ----- | ---- | ----- |
| pi                 | ci    | mu   | ra'e      | pa  | vo   | re  | bi    | mu   | ze    |
| point              | three | five | repeating | one | four | two | eight | five | seven |
| .35142857142857... |       |      |           |     |      |     |       |      |       |



Note that the _[ra'e](glossary#valsi-rahe)_ marks unambiguously where the repeating portion “142857” begins.

### Example 18.10.

|       |      |         |
| ----- | ---- | ------- |
| ci    | mu   | ce'i    |
| three | five | percent |
| 35%   |      |         |



### Example 18.11.

|           |       |     |       |      |       |      |     |       |
| --------- | ----- | --- | ----- | ---- | ----- | ---- | --- | ----- |
| pa        | ki'o  | re  | ci    | vo   | ki'o  | mu   | xa  | ze    |
| one       | comma | two | three | four | comma | five | six | seven |
| 1,234,567 |       |     |       |      |       |      |     |       |



(In some cultures, spaces are used in the symbolic representation of [Example 18.11](chapter18#example-random-id-qhwM "Example 18.11. "); _[ki'o](glossary#valsi-kiho)_ is still the Lojban representation.)

It is also possible to have less than three digits between successive _[ki'o](glossary#valsi-kiho)_ s, in which case zeros are assumed to have been elided:

### Example 18.12.

|           |       |     |       |       |      |
| --------- | ----- | --- | ----- | ----- | ---- |
| pa        | ki'o  | re  | ci    | ki'o  | vo   |
| one       | comma | two | three | comma | four |
| 1,023,004 |       |     |       |       |      |



In the same way, _[ki'o](glossary#valsi-kiho)_ can be used after _[pi](glossary#valsi-pi)_ to divide fractions into groups of three:

### Example 18.13.

|       |       |     |     |
| ----- | ----- | --- | --- |
| pi    | ki'o  | re  | re  |
| point | comma | two | two |
| .022  |       |     |     |



### Example 18.14.

|            |     |       |     |     |       |     |
| ---------- | --- | ----- | --- | --- | ----- | --- |
| pi         | pa  | ki'o  | pa  | re  | ki'o  | pa  |
| point      | one | comma | one | two | comma | one |
| .001012001 |     |       |     |     |       |     |



## Special numbers

The following cmavo are discussed in this section:

|      |    |                                                            |
| ---- | -- | ---------------------------------------------------------- |
| ci'i | PA | infinity                                                   |
| ka'o | PA | imaginary i, sqrt(-1)                                      |
| pai  | PA | π, pi (approx 3.14159...)                                  |
| te'o | PA | exponential e (approx 2.71828...)                          |
| fi'u | PA | golden ratio, Φ, phi, (1 + sqrt(5))/2 (approx. 1.61803...) |

The last cmavo is the same as the fraction sign cmavo: a fraction sign with neither numerator nor denominator represents the golden ratio.

Numbers can have any of these digit, punctuation, and special-number cmavo of Sections 2, 3, and 4 in any combination:

### Example 18.15.

|      |      |
| ---- | ---- |
| ma'u | ci'i |
| +∞   |      |



### Example 18.16.

|    |      |    |
| -- | ---- | -- |
| ci | ka'o | re |

|                                             |
| ------------------------------------------- |
| 3i2 (a complex number equivalent to 3 + 2i) |



Note that _[ka'o](glossary#valsi-kaho)_ is both a special number (meaning “i”) and a number punctuation mark (separating the real and the imaginary parts of a complex number).

### Example 18.17.

|      |    |
| ---- | -- |
| ci'i | no |

|                             |
| --------------------------- |
| infinity zero               |
| ℵ0 (a transfinite cardinal) |



The special numbers _[pai](glossary#valsi-pai)_ and _[te'o](glossary#valsi-teho)_ are mathematically important, which is why they are given their own cmavo:

### Example 18.18.

|     |
| --- |
| pai |

|       |
| ----- |
| pi, π |



### Example 18.19.

|      |
| ---- |
| te'o |

|   |
| - |
| e |



However, many combinations are as yet undefined:

### Example 18.20.

|    |    |    |    |    |
| -- | -- | -- | -- | -- |
| pa | pi | re | pi | ci |

|       |
| ----- |
| 1.2.3 |



### Example 18.21.

|    |               |    |
| -- | ------------- | -- |
| pa | ni'u          | re |
| 1  | negative-sign | 2  |



[Example 18.21](chapter18#example-random-id-qHya "Example 18.21. ") is not “1 minus 2”, which is represented by a different cmavo sequence altogether. It is a single number which has not been assigned a meaning. There are many such numbers which have no well-defined meaning; they may be used for experimental purposes or for future expansion of the Lojban number system.

It is possible, of course, that some of these “oddities” do have a meaningful use in some restricted area of mathematics. A mathematician appropriating these structures for specialized use needs to consider whether some other branch of mathematics would use the structure differently.

More information on numbers may be found in [Section 18.8](chapter18#section-indefinite-numbers "18.8. Indefinite numbers") to [Section 18.12](chapter18#section-number-questions "18.12. Number questions").

## Simple infix expressions and equations

The following cmavo are discussed in this section:

|      |      |                     |
| ---- | ---- | ------------------- |
| du   | GOhA | equals              |
| su'i | VUhU | plus                |
| vu'u | VUhU | minus               |
| pi'i | VUhU | times               |
| te'a | VUhU | raised to the power |
| ny.  | BY   | letter “n”          |
| vei  | VEI  | left parenthesis    |
| ve'o | VEhO | right parenthesis   |

Let us begin at the beginning: one plus one equals two. In Lojban, that sentence translates to:

### Example 18.22.

|            |     |      |     |        |            |      |
| ---------- | --- | ---- | --- | ------ | ---------- | ---- |
| li         | pa  | su'i | pa  | du     | li         | re   |
| The-number | one | plus | one | equals | the-number | two. |
| 1 + 1 = 2  |     |      |     |        |            |      |



[Example 18.22](chapter18#example-random-id-CUeK "Example 18.22. "), a mekso sentence, is a regular Lojban bridi that exploits mekso features. _[du](glossary#valsi-du)_ is the predicate meaning “x1 is mathematically equal to x2”. It is a cmavo for conciseness, but it has the same grammatical uses as any brivla. Outside mathematical contexts, _[du](glossary#valsi-du)_ means “x1 is identical with x2” or “x1 is the same object as x2”.

The cmavo _[li](glossary#valsi-li)_ is the number article. It is required whenever a sentence talks about numbers as numbers, as opposed to using numbers to quantify things. For example:

### Example 18.23.

|    |    |       |
| -- | -- | ----- |
| le | ci | prenu |

|                   |
| ----------------- |
| the three persons |



requires no _[li](glossary#valsi-li)_ article, because the _[ci](glossary#valsi-ci)_ is being used to specify the number of _[prenu](glossary#valsi-prenu)_. However, the sentence

### Example 18.24.

|      |       |    |                 |            |        |
| ---- | ----- | -- | --------------- | ---------- | ------ |
| levi | sfani | cu | grake           | li         | ci     |
| This | fly   |    | masses-in-grams | the-number | three. |

|                                 |
| ------------------------------- |
| This fly has a mass of 3 grams. |



requires _[li](glossary#valsi-li)_ because _[ci](glossary#valsi-ci)_ is being used as a sumti. Note that this is the way in which measurements are stated in Lojban: all the predicates for units of length, mass, temperature, and so on have the measured object as the first place and a number as the second place. Using _[li](glossary#valsi-li)_ for _[le](glossary#valsi-le)_ in [Example 18.23](chapter18#example-random-id-nSU9 "Example 18.23. ") would produce

### Example 18.25.

|            |    |              |
| ---------- | -- | ------------ |
| li         | ci | prenu        |
| The-number | 3  | is-a-person. |



which is grammatical but nonsensical: numbers are not persons.

The cmavo _[su'i](glossary#valsi-suhi)_ belongs to selma'o VUhU, which is composed of mathematical operators, and means “addition”. As mentioned before, it is distinct from _[ma'u](glossary#valsi-mahu)_ which means the positive sign as an indication of a positive number:

### Example 18.26.

|            |               |     |      |
| ---------- | ------------- | --- | ---- |
| li         | ma'u          | pa  | su'i |
| The-number | positive-sign | one | plus |

|               |     |        |            |       |
| ------------- | --- | ------ | ---------- | ----- |
| ni'u          | pa  | du     | li         | no    |
| negative-sign | one | equals | the-number | zero. |
| +1 + -1 = 0   |     |        |            |       |



Of course, it is legal to have complex mekso on both sides of _[du](glossary#valsi-du)_:

### Example 18.27.

|               |      |      |     |        |            |       |      |        |
| ------------- | ---- | ---- | --- | ------ | ---------- | ----- | ---- | ------ |
| li            | mu   | su'i | pa  | du     | li         | ci    | su'i | ci     |
| The-number    | five | plus | one | equals | the-number | three | plus | three. |
| 5 + 1 = 3 + 3 |      |      |     |        |            |       |      |        |



Why don't we say _li mu su'i li pa_ rather than just _li mu su'i pa_? The answer is that VUhU operators connect mekso operands (numbers, in [Example 18.27](chapter18#example-random-id-d6bM "Example 18.27. ")), not general sumti. _[li](glossary#valsi-li)_ is used to make the entire mekso into a sumti, which then plays the roles applicable to other sumti: in [Example 18.27](chapter18#example-random-id-d6bM "Example 18.27. "), filling the places of a bridi

By default, Lojban mathematics is like simple calculator mathematics: there is no notion of “operator precedence”. Consider the following example, where _[pi'i](glossary#valsi-pihi)_ means “times”, the multiplication operator:

### Example 18.28.

|                |       |      |      |       |      |        |            |            |
| -------------- | ----- | ---- | ---- | ----- | ---- | ------ | ---------- | ---------- |
| li             | ci    | su'i | vo   | pi'i  | mu   | du     | li         | reci       |
| The-number     | three | plus | four | times | five | equals | the-number | two-three. |
| 3 + 4 × 5 = 23 |       |      |      |       |      |        |            |            |



Is the Lojban version of [Example 18.28](chapter18#example-random-id-7a2Q "Example 18.28. ") true? No! “3 + 4 × 5” is indeed 23, because the usual conventions of mathematics state that multiplication takes precedence over addition; that is, the multiplication “4 × 5” is done first, giving 20, and only then the addition “3 + 20”. But VUhU operators by default are done left to right, like other Lojban grouping, and so a truthful bridi would be:

### Example 18.29.

|                |       |      |      |       |      |        |            |             |
| -------------- | ----- | ---- | ---- | ----- | ---- | ------ | ---------- | ----------- |
| li             | ci    | su'i | vo   | pi'i  | mu   | du     | li         | cimu        |
| The-number     | three | plus | four | times | five | equals | the-number | three-five. |
| 3 + 4 × 5 = 35 |       |      |      |       |      |        |            |             |



Here we calculate 3 + 4 first, giving 7, and then calculate 7 × 5 second, leading to the result 35. While possessing the advantage of simplicity, this result violates the design goal of matching the standards of mathematics. What can be done?

There are three solutions, all of which will probably be used to some degree. The first solution is to ignore the problem. People will say _li ci su'i vo pi'i mu_ and mean 23 by it, because the notion that multiplication takes precedence over addition is too deeply ingrained to be eradicated by Lojban parsing, which totally ignores semantics. This convention essentially allows semantics to dominate syntax in this one area.

(Why not hard-wire the precedences into the grammar, as is done in computer programming languages? Essentially because there are too many operators, known and unknown, with levels of precedence that vary according to usage. The programming language 'C' has 13 levels of precedence, and its list of operators is not even extensible. For Lojban this approach is just not practical. In addition, hard-wired precedence could not be overridden in mathematical systems such as spreadsheets where the conventions are different.)

The second solution is to use explicit means to specify the precedence of operators. This approach is fully general, but clumsy, and will be explained in [Section 18.20](chapter18#section-explicit-operator-precedence "18.20. Explicit operator precedence").

The third solution is simple but not very general. When an operator is prefixed with the cmavo _[bi'e](glossary#valsi-bihe)_ (of selma'o BIhE), it becomes automatically of higher precedence than other operators not so prefixed. Thus,

### Example 18.30.

|                |       |      |      |       |      |        |            |            |      |
| -------------- | ----- | ---- | ---- | ----- | ---- | ------ | ---------- | ---------- | ---- |
| li             | ci    | su'i | vo   | bi'e  | pi'i | mu     | du         | li         | reci |
| The-number     | three | plus | four | times | five | equals | the-number | two-three. |      |
| 3 + 4 × 5 = 23 |       |      |      |       |      |        |            |            |      |



is a truthful Lojban bridi. If more than one operator has a _[bi'e](glossary#valsi-bihe)_ prefix, grouping is from the right; multiple _[bi'e](glossary#valsi-bihe)_ prefixes on a single operator are not allowed.

In addition, of course, Lojban has the mathematical parentheses _[vei](glossary#valsi-vei)_ and _[ve'o](glossary#valsi-veho)_, which can be used just like their written equivalents “(” and “)” to group expressions in any way desired:

### Example 18.31.

|            |     |     |      |     |      |       |     |     |      |     |         |
| ---------- | --- | --- | ---- | --- | ---- | ----- | --- | --- | ---- | --- | ------- |
| li         | vei | ny. | su'i | pa  | ve'o | pi'i  | vei | ny. | su'i | pa  | \[ve'o] |
| The-number | (   | `n` | plus | one | )    | times | (   | `n` | plus | one | )       |

|        |            |     |         |              |     |
| ------ | ---------- | --- | ------- | ------------ | --- |
| du     | li         | ny. | \[bi'e] | te'a         | re  |
| equals | the-number | n   |         | to-the-power | two |

|                          |     |      |       |     |      |    |
| ------------------------ | --- | ---- | ----- | --- | ---- | -- |
| su'i                     | re  | bi'e | pi'i  | ny. | su'i | pa |
| plus                     | two |      | times | `n` | plus | 1. |
| (n+1)(n+1) = n2 + 2n + 1 |     |      |       |     |      |    |



There are several new usages in [Example 18.31](chapter18#example-random-id-wfFV "Example 18.31. "): _[te'a](glossary#valsi-teha)_ means “raised to the power”, and we also see the use of the lerfu word _[ny](glossary#valsi-ny)_, representing the letter “n”. In mekso, letters stand for just what they do in ordinary mathematics: variables. The parser will accept a string of lerfu words (called a “lerfu string”) as the equivalent of a single lerfu word, in agreement with computer-science conventions; “abc” is a single variable, not the equivalent of “a × b × c”. (Of course, a local convention could state that the value of a variable like “abc”, with a multi-lerfu name, was equal to the values of the variables “a”, “b”, and “c” multiplied together.)

The explicit operator _[pi'i](glossary#valsi-pihi)_ is required in the Lojban verbal form whereas multiplication is implicit in the symbolic form. Note that _[ve'o](glossary#valsi-veho)_ (the right parenthesis) is an elidable terminator: the first use of it in [Example 18.31](chapter18#example-random-id-wfFV "Example 18.31. ") is required, but the second use (marked by square brackets) could be elided. Additionally, the first _[bi'e](glossary#valsi-bihe)_ (also marked by square brackets) is not necessary to get the proper grouping, but it is included here for symmetry with the other one.

## Forethought operators (Polish notation, functions)

The following cmavo are discussed in this section:

|      |      |                                 |
| ---- | ---- | ------------------------------- |
| boi  | BOI  | numeral/lerfu string terminator |
| va'a | VUhU | negation/additive inverse       |
| pe'o | PEhO | forethought flag                |
| ku'e | KUhE | forethought terminator          |
| ma'o | MAhO | convert operand to operator     |
| py.  | BY   | letter “p”                      |
| xy.  | BY   | letter “x”                      |
| zy.  | BY   | letter “z”                      |
| fy.  | BY   | letter “f”                      |

The infix form explained so far is reasonable for many purposes, but it is limited and rigid. It works smoothly only where all operators have exactly two operands, and where precedences can either be assumed from context or are limited to just two levels, with some help from parentheses.

But there are many operators which do not have two operands, or which have a variable number of operands. The preferred form of expression in such cases is the use of “forethought operators”, also known as Polish notation. In this style of writing mathematics, the operator comes first and the operands afterwards:

### Example 18.32.

|                |            |       |       |          |        |            |      |
| -------------- | ---------- | ----- | ----- | -------- | ------ | ---------- | ---- |
| li             | su'i       | paboi | reboi | ci\[boi] | du     | li         | xa   |
| The-number     | the-sum-of | one   | two   | three    | equals | the-number | six. |
| sum(1,2,3) = 6 |            |       |       |          |        |            |      |



Note that the normally elidable number terminator _[boi](glossary#valsi-boi)_ is required after _[pa](glossary#valsi-pa)_ and _[re](glossary#valsi-re)_ because otherwise the reading would be _pareci_= 123. It is not required after _[ci](glossary#valsi-ci)_ but is inserted here in brackets for the sake of symmetry. The only time _[boi](glossary#valsi-boi)_ is required is, as in [Example 18.32](chapter18#example-random-id-I0Bm "Example 18.32. "), when there are two consecutive numbers or lerfu strings.

Forethought mekso can use any number of operands, in [Example 18.32](chapter18#example-random-id-I0Bm "Example 18.32. "), three. How do we know how many operands there are in ambiguous circumstances? The usual Lojban solution is employed: an elidable terminator, namely _[ku'e](glossary#valsi-kuhe)_. Here is an example:

### Example 18.33.

|            |     |      |              |     |      |      |     |        |
| ---------- | --- | ---- | ------------ | --- | ---- | ---- | --- | ------ |
| li         | py. | su'i | va'a         | ny. | ku'e | su'i | zy  | du     |
| The-number | “p” | plus | negative-of( | “n” | )    | plus | “z” | equals |

|                |     |   |
| -------------- | --- | - |
| li             | xy. |   |
| the-number     | “x” | . |
| p + -n + z = x |     |   |



where we know that _[va'a](glossary#valsi-vaha)_ is a forethought operator because there is no operand preceding it.

_[va'a](glossary#valsi-vaha)_ is the numerical negation operator, of selma'o VUhU. In contrast, _[vu'u](glossary#valsi-vuhu)_ is not used for numerical negation, but only for subtraction, as it always has two or more operands. Do not confuse _[va'a](glossary#valsi-vaha)_ and _[vu'u](glossary#valsi-vuhu)_, which are operators, with _[ni'u](glossary#valsi-nihu)_, which is part of a number.

In [Example 18.33](chapter18#example-random-id-IxMG "Example 18.33. "), the operator _[va'a](glossary#valsi-vaha)_ and the terminator _[ku'e](glossary#valsi-kuhe)_ serve in effect as parentheses. (The regular parentheses _[vei](glossary#valsi-vei)_ and _[ve'o](glossary#valsi-veho)_ are NOT used for this purpose.) If the _[ku'e](glossary#valsi-kuhe)_ were omitted, the _su'i zy_ would be swallowed up by the _[va'a](glossary#valsi-vaha)_ forethought operator, which would then appear to have two operands, _[ny](glossary#valsi-ny)_ and _su'i zy._, where the latter is also a forethought expression.

Forethought mekso is also useful for matching standard functional notation. How do we represent “z = f(x)”? The answer is:

### Example 18.34.

|            |    |        |            |              |        |     |
| ---------- | -- | ------ | ---------- | ------------ | ------ | --- |
| li         | zy | du     | li         | ma'o         | fy.boi | xy. |
| The-number | z  | equals | the-number | the-operator | f      | x.  |
| z = f(x)   |    |        |            |              |        |     |



Again, no parentheses are used. The construct _ma'o fy.boi_ is the equivalent of an operator, and appears in forethought here (although it could also be used as a regular infix operator). In mathematics, letters sometimes mean functions and sometimes mean variables, with only the context to tell which. Lojban chooses to accept the variable interpretation as the default, and uses the special flag _[ma'o](glossary#valsi-maho)_ to mark a lerfu string as an operator. The cmavo _[xy.](glossary#valsi-xy)_ and _[zy.](glossary#valsi-zy)_ are variables, but _[fy.](glossary#valsi-fy)_ is an operator (a function) because _[ma'o](glossary#valsi-maho)_ marks it as such. The _[boi](glossary#valsi-boi)_ is required because otherwise the _[xy.](glossary#valsi-xy)_ would look like part of the operator name. (The use of _[ma'o](glossary#valsi-maho)_ can be generalized from lerfu strings to any mekso operand: see [Section 18.21](chapter18#section-miscellany "18.21. Miscellany").)

When using forethought mekso, the optional marker _[pe'o](glossary#valsi-peho)_ may be placed in front of the operator. This usage can help avoid confusion by providing clearly marked _[pe'o](glossary#valsi-peho)_ and _[ku'e](glossary#valsi-kuhe)_ pairs to delimit the operand list. [Example 18.32](chapter18#example-random-id-I0Bm "Example 18.32. ") to [Example 18.34](chapter18#example-random-id-VybU "Example 18.34. "), respectively, with explicit _[pe'o](glossary#valsi-peho)_ and _[ku'e](glossary#valsi-kuhe)_:

### Example 18.35.

li pe'o su'i paboi reboi ciboi ku'e du li xa



### Example 18.36.

li py. su'i pe'o va'a ny. ku'e su'i zy du li xy.



### Example 18.37.

li zy du li pe'o ma'o fy.boi xy. ku'e



Note: When using forethought mekso, be sure that the operands really are operands: they cannot contain regular infix expressions unless parenthesized with _[vei](glossary#valsi-vei)_ and _[ve'o](glossary#valsi-veho)_. An earlier version of the complex [Example 18.119](chapter18#example-random-id-k36J "Example 18.119. ") came to grief because I forgot this rule.

## Other useful selbri for mekso bridi

So far our examples have been isolated mekso (it is legal to have a bare mekso as a sentence in Lojban) and equation bridi involving _[du](glossary#valsi-du)_. What about inequalities such as “x < 5”? The answer is to use a bridi with an appropriate selbri, thus:

### Example 18.38.

|            |     |              |            |    |
| ---------- | --- | ------------ | ---------- | -- |
| li         | xy. | mleca        | li         | mu |
| The-number | x   | is-less-than | the-number | 5. |



Here is a partial list of selbri useful in mathematical bridi:

|                                              |                                                                                           |
| -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| _[du](glossary#valsi-du)_                 | x1 is identical to x2, x3, x4, ...                                                        |
| _[dunli](glossary#valsi-dunli)_           | x1 is equal/congruent to x2 in/on property/quality/dimension/quantity x3                  |
| _[mleca](glossary#valsi-mleca)_           | x1 is less than x2                                                                        |
| _[zmadu](glossary#valsi-zmadu)_           | x1 is greater than x2                                                                     |
| _[dubjavme'a](glossary#valsi-dubjavmeha)_ | x1 is less than or equal to x2 \[_[mleca](glossary#valsi-mleca)_, equal or less]       |
| _[dubjavmau](glossary#valsi-dubjavmau)_   | x1 is greater than or equal to x2 \[_[zmadu](glossary#valsi-zmadu)_, equal or greater] |
| _[tamdu'i](glossary#valsi-tamduhi)_       | x1 is similar to x2 \[_[dunli](glossary#valsi-dunli)_, shape-equal]                    |
| _turdu'i_                                    | x1 is isomorphic to x2 \[_[dunli](glossary#valsi-dunli)_, structure-equal]             |
| _[cmima](glossary#valsi-cmima)_           | x1 is a member of set x2                                                                  |
| _gripau_                                     | x1 is a subset of set x2 \[_[pagbu](glossary#valsi-pagbu)_, set-part]                  |
| _[na'ujbi](glossary#valsi-nahujbi)_       | x1 is approximately equal to x2 \[_[jibni](glossary#valsi-jibni)_, number-near]        |
| _terci'e_                                    | x1 is a component with function x2 of system x3                                           |

Note the difference between _[dunli](glossary#valsi-dunli)_ and _[du](glossary#valsi-du)_; _[dunli](glossary#valsi-dunli)_ has a third place that specifies the kind of equality that is meant. _[du](glossary#valsi-du)_ refers to actual identity, and can have any number of places:

### Example 18.39.

|           |                 |        |     |
| --------- | --------------- | ------ | --- |
| py.       | du              | xy.boi | zy. |
| “p”       | is-identical-to | “x”    | “z” |
| p = x = z |                 |        |     |



Lojban bridi can have only one predicate, so the _[du](glossary#valsi-du)_ is not repeated.

Any of these selbri may usefully be prefixed with _[na](glossary#valsi-na)_, the contradictory negation cmavo, to indicate that the relation is false:

### Example 18.40.

|            |    |      |    |        |          |            |    |
| ---------- | -- | ---- | -- | ------ | -------- | ---------- | -- |
| li         | re | su'i | re | na     | du       | li         | mu |
| the-number | 2  | +    | 2  | is-not | equal-to | the-number | 5. |
| 2 + 2 ≠ 5  |    |      |    |        |          |            |    |



As usual in Lojban, negated bridi say what is false, and do not say anything about what might be true.

## Indefinite numbers

The following cmavo are discussed in this section:

|        |       |                        |
| ------ | ----- | ---------------------- |
| ro     | PA    | all                    |
| so'a   | PA    | almost all             |
| so'e   | PA    | most                   |
| so'i   | PA    | many                   |
| so'o   | PA    | several                |
| so'u   | PA    | a few                  |
| no'o   | PA    | the typical number of  |
| da'a   | PA    | all but (one) of       |
| piro   | PA+PA | the whole of/all of    |
| piso'a | PA+PA | almost the whole of    |
| piso'e | PA+PA | most of                |
| piso'i | PA+PA | much of                |
| piso'o | PA+PA | a small part of        |
| piso'u | PA+PA | a tiny part of         |
| pino'o | PA+PA | the typical portion of |
| rau    | PA    | enough                 |
| du'e   | PA    | too many               |
| mo'a   | PA    | too few                |
| pirau  | PA+PA | enough of              |
| pidu'e | PA+PA | too much of            |
| pimo'a | PA+PA | too little of          |

Not all the cmavo of PA represent numbers in the usual mathematical sense. For example, the cmavo _[ro](glossary#valsi-ro)_ means “all” or “each”. This number does not have a definite value in the abstract: _li ro_ is undefined. But when used to count or quantify something, the parallel between _[ro](glossary#valsi-ro)_ and _[pa](glossary#valsi-pa)_ is clearer:

### Example 18.41.

|    |         |     |        |
| -- | ------- | --- | ------ |
| mi | catlu   | pa  | prenu  |
| I  | look-at | one | person |



### Example 18.42.

|    |         |     |         |
| -- | ------- | --- | ------- |
| mi | catlu   | ro  | prenu   |
| I  | look-at | all | persons |



[Example 18.41](chapter18#example-random-id-qI27 "Example 18.41. ") might be true, whereas [Example 18.42](chapter18#example-random-id-qI3P "Example 18.42. ") is almost certainly false.

The cmavo _[so'a](glossary#valsi-soha)_, _[so'e](glossary#valsi-sohe)_, _[so'i](glossary#valsi-sohi)_, _[so'o](glossary#valsi-soho)_, and _[so'u](glossary#valsi-sohu)_ represent a set of indefinite numbers less than _[ro](glossary#valsi-ro)_. As you go down an alphabetical list, the magnitude decreases:

### Example 18.43.

|    |         |            |         |
| -- | ------- | ---------- | ------- |
| mi | catlu   | so'a       | prenu   |
| I  | look-at | almost-all | persons |



### Example 18.44.

|    |         |      |         |
| -- | ------- | ---- | ------- |
| mi | catlu   | so'e | prenu   |
| I  | look-at | most | persons |



### Example 18.45.

|    |         |      |         |
| -- | ------- | ---- | ------- |
| mi | catlu   | so'i | prenu   |
| I  | look-at | many | persons |



### Example 18.46.

|    |         |         |         |
| -- | ------- | ------- | ------- |
| mi | catlu   | so'o    | prenu   |
| I  | look-at | several | persons |



### Example 18.47.

|    |         |       |         |
| -- | ------- | ----- | ------- |
| mi | catlu   | so'u  | prenu   |
| I  | look-at | a-few | persons |



The English equivalents are only rough: the cmavo provide space for up to five indefinite numbers between _[ro](glossary#valsi-ro)_ and _[no](glossary#valsi-no)_, with a built-in ordering. In particular, _[so'e](glossary#valsi-sohe)_ does not mean “most” in the sense of “a majority” or “more than half”.

Each of these numbers, plus _[ro](glossary#valsi-ro)_, may be prefixed with _[pi](glossary#valsi-pi)_ (the decimal point) in order to make a fractional form which represents part of a whole rather than some elements of a totality. _[piro](glossary#valsi-piro)_ therefore means “the whole of”:

### Example 18.48.

|    |       |              |             |       |
| -- | ----- | ------------ | ----------- | ----- |
| mi | citka | piro         | lei         | nanba |
| I  | eat   | the-whole-of | the-mass-of | bread |



Similarly, _[piso'a](glossary#valsi-pisoha)_ means “almost the whole of”; and so on down to _[piso'u](glossary#valsi-pisohu)_, “a tiny part of”. These numbers are particularly appropriate with masses, which are usually measured rather than counted, as [Example 18.48](chapter18#example-random-id-dwJI "Example 18.48. ") shows.

In addition to these cmavo, there is _[no'o](glossary#valsi-noho)_, meaning “the typical value”, and _pino'o_, meaning “the typical portion”: Sometimes _[no'o](glossary#valsi-noho)_ can be translated “the average value”, but the average in question is not, in general, a mathematical mean, median, or mode; these would be more appropriately represented by operators.

### Example 18.49.

|    |         |                     |         |
| -- | ------- | ------------------- | ------- |
| mi | catlu   | no'o                | prenu   |
| I  | look-at | a-typical-number-of | persons |



### Example 18.50.

|    |       |                     |             |        |
| -- | ----- | ------------------- | ----------- | ------ |
| mi | citka | pino'o              | lei         | nanba  |
| I  | eat   | a-typical-amount-of | the-mass-of | bread. |



[_da'a_](glossary#valsi-daha) is a related cmavo meaning “all but”:

### Example 18.51.

|    |         |         |     |         |
| -- | ------- | ------- | --- | ------- |
| mi | catlu   | da'a    | re  | prenu   |
| I  | look-at | all-but | two | persons |



### Example 18.52.

|    |         |         |       |         |
| -- | ------- | ------- | ----- | ------- |
| mi | catlu   | da'a    | so'u  | prenu   |
| I  | look-at | all-but | a-few | persons |



[Example 18.52](chapter18#example-random-id-qia0 "Example 18.52. ") is similar in meaning to [Example 18.43](chapter18#example-random-id-qi4a "Example 18.43. ").

If no number follows _[da'a](glossary#valsi-daha)_, then _[pa](glossary#valsi-pa)_ is assumed; _[da'a](glossary#valsi-daha)_ by itself means “all but one”, or in ordinal contexts “all but the last”:

### Example 18.53.

|     |       |      |       |             |       |
| --- | ----- | ---- | ----- | ----------- | ----- |
| ro  | ratcu | ka'e | citka | da'a        | ratcu |
| All | rats  | can  | eat   | all-but-one | rats. |

|                                  |
| -------------------------------- |
| All rats can eat all other rats. |



(The use of _[da'a](glossary#valsi-daha)_ means that [Example 18.53](chapter18#example-random-id-3z2U "Example 18.53. ") does not require that all rats can eat themselves, but does allow it. Each rat has one rat it cannot eat, but that one might be some rat other than itself. Context often dictates that “itself” is, indeed, the “other” rat.)

As mentioned in [Section 18.3](chapter18#section-signs-punctuation "18.3. Signs and numerical punctuation"), _[ma'u](glossary#valsi-mahu)_ and _[ni'u](glossary#valsi-nihu)_ are also legal numbers, and they mean “some positive number” and “some negative number” respectively.

### Example 18.54.

|            |    |      |    |    |    |                      |
| ---------- | -- | ---- | -- | -- | -- | -------------------- |
| li         | ci | vu'u | re | du | li | ma'u                 |
| the-number | 3  | −    | 2  | =  |    | some-positive-number |



### Example 18.55.

|            |    |      |    |    |    |                      |
| ---------- | -- | ---- | -- | -- | -- | -------------------- |
| li         | ci | vu'u | vo | du | li | ni'u                 |
| the-number | 3  | −    | 4  | =  |    | some-negative-number |



### Example 18.56.

|    |         |                      |                 |
| -- | ------- | -------------------- | --------------- |
| mi | ponse   | ma'u                 | rupnu           |
| I  | possess | a-positive-number-of | currency-units. |



All of the numbers discussed so far are objective, even if indefinite. If there are exactly six superpowers (_rairgugde_, “superlative-states”) in the world, then _ro rairgugde_ means the same as _xa rairgugde_. It is often useful, however, to express subjective indefinite values. The cmavo _[rau](glossary#valsi-rau)_ (enough), _[du'e](glossary#valsi-duhe)_ (too many), and _[mo'a](glossary#valsi-moha)_ (too few) are then appropriate:

### Example 18.57.

|    |         |        |                 |
| -- | ------- | ------ | --------------- |
| mi | ponse   | rau    | rupnu           |
| I  | possess | enough | currency-units. |



Like the _[so'a](glossary#valsi-soha)_-series, _[rau](glossary#valsi-rau)_, _[du'e](glossary#valsi-duhe)_, and _[mo'a](glossary#valsi-moha)_ can be preceded by _[pi](glossary#valsi-pi)_; for example, _pirau_ means “a sufficient part of.”

Another possibility is that of combining definite and indefinite numbers into a single number. This usage implies that the two kinds of numbers have the same value in the given context:

### Example 18.58.

|    |       |     |            |       |
| -- | ----- | --- | ---------- | ----- |
| mi | viska | le  | rore       | gerku |
| I  | saw   | the | all-of/two | dogs. |

|                  |
| ---------------- |
| I saw both dogs. |



### Example 18.59.

|    |               |            |          |
| -- | ------------- | ---------- | -------- |
| mi | speni         | so'ici     | prenu    |
| I  | am-married-to | many/three | persons. |

|                                                                       |
| --------------------------------------------------------------------- |
| I am married to three persons (which is “many” in the circumstances). |



[Example 18.59](chapter18#example-random-id-qIBi "Example 18.59. ") assumes a mostly monogamous culture by stating that three is “many”.

## Approximation and inexact numbers

The following cmavo are discussed in this section:

|      |    |               |
| ---- | -- | ------------- |
| ji'i | PA | approximately |
| su'e | PA | at most       |
| su'o | PA | at least      |
| me'i | PA | less than     |
| za'u | PA | more than     |

The cmavo _[ji'i](glossary#valsi-jihi)_ (of selma'o PA) is used in several ways to indicate approximate or rounded numbers. If it appears at the beginning of a number, the whole number is approximate:

### Example 18.60.

|               |      |      |
| ------------- | ---- | ---- |
| ji'i          | vo   | no   |
| approximation | four | zero |

|                  |
| ---------------- |
| approximately 40 |



If _[ji'i](glossary#valsi-jihi)_ appears in the middle of a number, all the digits following it are approximate:

### Example 18.61.

|      |      |               |      |      |
| ---- | ---- | ------------- | ---- | ---- |
| vo   | no   | ji'i          | mu   | no   |
| four | zero | approximation | five | zero |

|                                                                                   |
| --------------------------------------------------------------------------------- |
| roughly 4050 (where the “four thousand” is exact, but the “fifty” is approximate) |



If _[ma'u](glossary#valsi-mahu)_ or _[ni'u](glossary#valsi-nihu)_), which indicate truncation towards positive or negative infinity respectively.

### Example 18.62.

|     |       |       |     |               |
| --- | ----- | ----- | --- | ------------- |
| re  | pi    | ze    | re  | ji'i          |
| two | point | seven | two | approximation |

|                |
| -------------- |
| 2.72 (rounded) |



### Example 18.63.

|     |       |       |     |               |               |
| --- | ----- | ----- | --- | ------------- | ------------- |
| re  | pi    | ze    | re  | ji'i          | ma'u          |
| two | point | seven | two | approximation | positive-sign |

|                   |
| ----------------- |
| 2.72 (rounded up) |



### Example 18.64.

|     |       |       |     |               |               |
| --- | ----- | ----- | --- | ------------- | ------------- |
| re  | pi    | ze    | pa  | ji'i          | ni'u          |
| two | point | seven | one | approximation | negative-sign |

|                     |
| ------------------- |
| 2.71 (rounded down) |



[Example 18.62](chapter18#example-random-id-qIc5 "Example 18.62. ") through [Example 18.64](chapter18#example-random-id-qiDE "Example 18.64. ") are all approximations to _[te'o](glossary#valsi-teho)_ (exponential e). _[ji'i](glossary#valsi-jihi)_ can also appear by itself, in which case it means “approximately the typical value in this context”.

The four cmavo _[su'e](glossary#valsi-suhe)_, _[su'o](glossary#valsi-suho)_, _[me'i](glossary#valsi-mehi)_, and _[za'u](glossary#valsi-zahu)_, also of selma'o PA, express inexact numbers with upper or lower bounds:

### Example 18.65.

|    |         |         |     |         |
| -- | ------- | ------- | --- | ------- |
| mi | catlu   | su'e    | re  | prenu   |
| I  | look-at | at-most | two | persons |



### Example 18.66.

|    |         |          |     |         |
| -- | ------- | -------- | --- | ------- |
| mi | catlu   | su'o     | re  | prenu   |
| I  | look-at | at-least | two | persons |



### Example 18.67.

|    |         |           |     |         |
| -- | ------- | --------- | --- | ------- |
| mi | catlu   | me'i      | re  | prenu   |
| I  | look-at | less-than | two | persons |



### Example 18.68.

|    |         |           |     |         |
| -- | ------- | --------- | --- | ------- |
| mi | catlu   | za'u      | re  | prenu   |
| I  | look-at | more-than | two | persons |



Each of these is a subtly different claim: [Example 18.66](chapter18#example-random-id-qiE3 "Example 18.66. ") is true of two or any greater number, whereas [Example 18.68](chapter18#example-random-id-qIfM "Example 18.68. ") requires three persons or more. Likewise, [Example 18.65](chapter18#example-random-id-qidi "Example 18.65. ") refers to zero, one, or two; [Example 18.67](chapter18#example-random-id-qIe7 "Example 18.67. ") to zero or one. (Of course, when the context allows numbers other than non-negative integers, _me'i re_ can be any number less than 2, and likewise with the other cases.) The exact quantifier, “exactly 2, neither more nor less” is just _[re](glossary#valsi-re)_. Note that _su'ore_ is the exact Lojban equivalent of English plurals.

If no number follows one of these cmavo, _[pa](glossary#valsi-pa)_ is understood: therefore,

### Example 18.69.

|    |         |                 |        |
| -- | ------- | --------------- | ------ |
| mi | catlu   | su'o            | prenu  |
| I  | look-at | at-least-\[one] | person |



is a meaningful claim.

Like the numbers in [Section 18.8](chapter18#section-indefinite-numbers "18.8. Indefinite numbers"), all of these cmavo may be preceded by _[pi](glossary#valsi-pi)_ to make the corresponding quantifiers for part of a whole. For example, _[pisu'o](glossary#valsi-pisuho)_ means “at least some part of”. The quantifiers _[ro](glossary#valsi-ro)_, _[su'o](glossary#valsi-suho)_, _[piro](glossary#valsi-piro)_, and _[pisu'o](glossary#valsi-pisuho)_ are particularly important in Lojban, as they are implicitly used in the descriptions introduced by the cmavo of selma'o LA and LE, as explained in [Section 6.7](chapter06#section-quantified-descriptions "6.7. Quantified descriptions"). Descriptions in general are outside the scope of this chapter.

## Non-decimal and compound bases

The following cmavo are discussed in this section:

|      |      |                     |
| ---- | ---- | ------------------- |
| ju'u | VUhU | to the base         |
| dau  | PA   | hex digit A = 10    |
| fei  | PA   | hex digit B = 11    |
| gai  | PA   | hex digit C = 12    |
| jau  | PA   | hex digit D = 13    |
| rei  | PA   | hex digit E = 14    |
| vai  | PA   | hex digit F = 15    |
| pi'e | PA   | compound base point |

In normal contexts, Lojban assumes that all numbers are expressed in the decimal (base 10) system. However, other bases are possible, and may be appropriate in particular circumstances.

To specify a number in a particular base, the VUhU operator _[ju'u](glossary#valsi-juhu)_ is suitable:

### Example 18.70.

|            |          |      |    |        |            |      |    |
| ---------- | -------- | ---- | -- | ------ | ---------- | ---- | -- |
| li         | panopano | ju'u | re | du     | li         | pano |    |
| The-number | 1010     | base | 2  | equals | the-number | 1    | 0. |



Here, the final _pa no_ is assumed to be base 10, as usual; so is the base specification. (The base may also be changed permanently by a metalinguistic specification; no standard way of doing so has as yet been worked out.)

Lojban has digits for representing bases up to 16, because 16 is a base often used in computer applications. In English, it is customary to use the letters A-F as the base 16 digits equivalent to the numbers ten through fifteen. In Lojban, this ambiguity is avoided:

### Example 18.71.

|            |           |      |      |        |            |          |
| ---------- | --------- | ---- | ---- | ------ | ---------- | -------- |
| li         | daufeigai | ju'u | paxa | du     | li         | rezevobi |
| The-number | ABC       | base | 16   | equals | the-number | 2748.    |



### Example 18.72.

|            |           |      |      |        |            |          |
| ---------- | --------- | ---- | ---- | ------ | ---------- | -------- |
| li         | jaureivai | ju'u | paxa | du     | li         | cimuxaze |
| The-number | DEF       | base | 16   | equals | the-number | 3567.    |



Note the pattern in the cmavo: the diphthongs _[au](glossary#valsi-au)_, _[ei](glossary#valsi-ei)_, _[ai](glossary#valsi-ai)_ are used twice in the same order. The digits for A to D use consonants different from those used in the decimal digit cmavo; E and F unfortunately overlap 2 and 4 – there was simply not enough available cmavo space to make a full differentiation possible. The cmavo are also in alphabetical order.

The base point _[pi](glossary#valsi-pi)_ is used in non-decimal bases just as in base 10:

### Example 18.73.

|            |     |    |    |      |      |        |            |      |    |    |
| ---------- | --- | -- | -- | ---- | ---- | ------ | ---------- | ---- | -- | -- |
| li         | vai | pi | bi | ju'u | paxa | du     | li         | pamu | pi | mu |
| The-number | F   | .  | 8  | base | 16   | equals | the-number | 15   | .  | 5. |



Since _[ju'u](glossary#valsi-juhu)_ is an operator of selma'o VUhU, it is grammatical to use any operand as the left argument. Semantically, however, it is undefined to use anything but a numeral string on the left. The reason for making _[ju'u](glossary#valsi-juhu)_ an operator is to allow reference to a base which is not a constant.

There are some numerical values that require a “base” that varies from digit to digit. For example, times represented in hours, minutes, and seconds have, in effect, three “digits”: the first is base 24, the second and third are base 60. To express such numbers, the compound base separator _[pi'e](glossary#valsi-pihe)_ is used:

### Example 18.74.

|         |      |      |      |      |
| ------- | ---- | ---- | ---- | ---- |
| ci      | pi'e | rere | pi'e | vono |
| 3:22:40 |      |      |      |      |



Each digit sequence separated by instances of _[pi'e](glossary#valsi-pihe)_ is expressed in decimal notation, but the number as a whole is not decimal and can only be added and subtracted by special rules:

### Example 18.75.

|            |    |      |      |      |      |      |      |    |      |      |
| ---------- | -- | ---- | ---- | ---- | ---- | ---- | ---- | -- | ---- | ---- |
| li         | ci | pi'e | rere | pi'e | vono | su'i | pi'e | ci | pi'e | cici |
| The-number | 3  | :    | 22   | :    | 40   | plus | :    | 3  | :    | 33   |

|                            |            |    |      |      |      |      |
| -------------------------- | ---------- | -- | ---- | ---- | ---- | ---- |
| du                         | li         | ci | pi'e | rexa | pi'e | paci |
| equals                     | the-number | 3  | :    | 26   | :    | 13.  |
| 3:22:40 + 0:3:33 = 3:26:13 |            |    |      |      |      |      |



Of course, only context tells you that the first part of the numbers in [Example 18.74](chapter18#example-random-id-17HR "Example 18.74. ") and [Example 18.75](chapter18#example-random-id-iUYu "Example 18.75. ") is hours, the second minutes, and the third seconds.

The same mechanism using _[pi'e](glossary#valsi-pihe)_ can be used to express numbers which have a base larger than 16. For example, base-20 Mayan mathematics might use digits from _[no](glossary#valsi-no)_ to _[paso](glossary#valsi-paso)_, each separated by _[pi'e](glossary#valsi-pihe)_:

### Example 18.76.

|            |    |      |    |      |    |      |      |        |            |        |
| ---------- | -- | ---- | -- | ---- | -- | ---- | ---- | ------ | ---------- | ------ |
| li         | pa | pi'e | re | pi'e | ci | ju'u | reno | du     | li         | vovoci |
| the-number | 1  | ;    | 2  | ;    | 3  | base | 20   | equals | the-number | 443    |



Carefully note the difference between:

### Example 18.77.

|              |      |      |
| ------------ | ---- | ---- |
| pano         | ju'u | reno |
| the-digit-10 | base | 20   |



which is equal to ten, and:

### Example 18.78.

|     |      |    |      |      |
| --- | ---- | -- | ---- | ---- |
| pa  | pi'e | no | ju'u | reno |
| 1;0 | base | 20 |      |      |



which is equal to twenty.

Both _[pi](glossary#valsi-pi)_ and _[pi'e](glossary#valsi-pihe)_ can be used to express large-base fractions:

### Example 18.79.

|            |    |      |    |    |    |      |      |
| ---------- | -- | ---- | -- | -- | -- | ---- | ---- |
| li         | pa | pi'e | vo | pi | ze | ju'u | reno |
| The-number | 1  | ;    | 4  | .  | 7  | base | 20   |

|        |            |      |    |      |
| ------ | ---------- | ---- | -- | ---- |
| du     | li         | revo | pi | cimu |
| equals | the-number | 24   | .  | 35   |



[_pi'e_](glossary#valsi-pihe) is also used where the base of each digit is vague, as in the numbering of the examples in this chapter:

### Example 18.80.

|                |                       |                 |
| -------------- | --------------------- | --------------- |
| dei            | jufra                 | panopi'epapamoi |
| This-utterance | is-a-sentence-type-of | 10;11th-thing.  |

|                         |
| ----------------------- |
| This is Sentence 10.11. |



## Special mekso selbri

The following cmavo are discussed in this section:

|      |      |                        |
| ---- | ---- | ---------------------- |
| mei  | MOI  | cardinal selbri        |
| moi  | MOI  | ordinal selbri         |
| si'e | MOI  | portion selbri         |
| cu'o | MOI  | probability selbri     |
| va'e | MOI  | scale selbri           |
| me   | ME   | make sumti into selbri |
| me'u | MEhU | terminator for ME      |

Lojban possesses a special category of selbri which are based on mekso. The simplest kind of such selbri are made by suffixing a member of selma'o MOI to a number. There are five members of MOI, each of which serves to create number-based selbri with specific place structures.

The cmavo _[mei](glossary#valsi-mei)_ creates cardinal selbri. The basic place structure is:

> x1 is a mass formed from the set x2 of n members, one or more of which is/are x3

A cardinal selbri interrelates a set with a given number of members, the mass formed from that set, and the individuals which make the set up. The mass argument is placed first as a matter of convenience, not logical necessity.

Some examples:

### Example 18.81.

|                                 |    |       |    |                  |
| ------------------------------- | -- | ----- | -- | ---------------- |
| lei                             | mi | ratcu | cu | cimei            |
| Those-I-describe-as-the-mass-of | my | rats  |    | are-a-threesome. |

|                    |
| ------------------ |
| My rats are three. |
| I have three rats. |



Here, the mass of my rats is said to have three components; that is, I have three rats.

Another example, with one element this time:

### Example 18.82.

|    |     |                  |    |         |                |
| -- | --- | ---------------- | -- | ------- | -------------- |
| mi | poi | pamei            | cu | cusku   | dei            |
| I  | who | am-an-individual |    | express | this-sentence. |



In [Example 18.82](chapter18#example-random-id-1Pen "Example 18.82. "), _[mi](glossary#valsi-mi)_ refers to a mass, “the mass consisting of me”. Personal pronouns are vague between masses, sets, and individuals.

However, when the number expressed before _-mei_ is an objective indefinite number of the kind explained in [Section 18.8](chapter18#section-indefinite-numbers "18.8. Indefinite numbers"), a slightly different place structure is required:

> x1 is a mass formed from a set x2 of n members, one or more of which is/are x3, measured relative to the set x4.

An example:

### Example 18.83.

|             |       |       |        |     |       |
| ----------- | ----- | ----- | ------ | --- | ----- |
| lei         | ratcu | poi   | zvati  | le  | panka |
| The-mass-of | rats  | which | are-in | the | park  |

|    |                               |            |       |
| -- | ----------------------------- | ---------- | ----- |
| cu | so'umei                       | lo'i       | ratcu |
|    | are-a-fewsome-with-respect-to | the-set-of | rats. |

|                                                                    |
| ------------------------------------------------------------------ |
| The rats in the park are a small number of all the rats there are. |



In [Example 18.83](chapter18#example-random-id-GJsg "Example 18.83. "), the x2 and x3 places are vacant, and the x4 place is filled by _lo'i ratcu_, which (because no quantifiers are explicitly given) means “the whole of the set of all those things which are rats”, or simply “the set of all rats.”

### Example 18.84.

|            |       |           |       |     |       |    |      |           |
| ---------- | ----- | --------- | ----- | --- | ----- | -- | ---- | --------- |
| le'i       | ratcu | poi       | zvati | le  | panka | cu | se   | so'imei   |
| The-set-of | rats  | which-are | in    | the | park  |    | is-a | manysome. |

|                                  |
| -------------------------------- |
| There are many rats in the park. |



In [Example 18.84](chapter18#example-random-id-n52D "Example 18.84. "), the conversion cmavo _[se](glossary#valsi-se)_ swaps the x1 and the x2 places, so that the new x1 is the set. The x4 set is unspecified, so the implication is that the rats are “many” with respect to some unspecified comparison set.

More explanations about the interrelationship of sets, masses, and individuals can be found in [Section 6.3](chapter06#section-masses "6.3. Individuals and masses").

The cmavo _[moi](glossary#valsi-moi)_ creates ordinal selbri. The place structure is:

> x1 is the (n)th member of set x2 when ordered by rule x3

Some examples:

### Example 18.85.

|          |                 |      |                    |       |
| -------- | --------------- | ---- | ------------------ | ----- |
| ti       | pamoi           | le'i | mi                 | ratcu |
| This-one | is-the-first-of | the  | associated-with-me | rats. |

|                       |
| --------------------- |
| This is my first rat. |



### Example 18.86.

|      |                 |      |                    |       |
| ---- | --------------- | ---- | ------------------ | ----- |
| ta   | romoi           | le'i | mi                 | ratcu |
| That | is-the-allth-of | the  | associated-with-me | rats. |

|                      |
| -------------------- |
| That is my last rat. |



### Example 18.87.

|    |                 |     |                |          |
| -- | --------------- | --- | -------------- | -------- |
| mi | raumoi          | le  | velskina       | porsi    |
| I  | am-enough-th-in | the | movie-audience | sequence |

|                                   |
| --------------------------------- |
| I am enough-th in the movie line. |



[Example 18.87](chapter18#example-random-id-qIiA "Example 18.87. ") means, in the appropriate context, that my position in line is sufficiently far to the front that I will get a seat for the movie.

The cmavo _[si'e](glossary#valsi-sihe)_ creates portion selbri. The place structure is:

> x1 is an (n)th portion of mass x2

Some examples:

### Example 18.88.

|           |       |    |                             |     |    |       |       |
| --------- | ----- | -- | --------------------------- | --- | -- | ----- | ----- |
| levi      | sanmi | cu | fi'ucisi'e                  | lei | mi | djedi | cidja |
| This-here | meal  |    | is-a-slash-three-portion-of |     | my | day   | food. |

|                                          |
| ---------------------------------------- |
| This meal is one-third of my daily food. |



The cmavo _[cu'o](glossary#valsi-cuho)_ creates probability selbri. The place structure is:

> event x1 has probability (n) of occurring under conditions x2

The number must be between 0 and 1 inclusive. For example:

### Example 18.89.

|     |       |      |       |    |                        |    |                     |
| --- | ----- | ---- | ----- | -- | ---------------------- | -- | ------------------- |
| le  | nu    | lo   | sicni | cu | sedja'o                | cu | pimucu'o            |
| The | event | of-a | coin  |    | being-a-head-displayer |    | has-probability-.5. |



The cmavo _[va'e](glossary#valsi-vahe)_ creates a scale selbri. The place structure is:

> x1 is at scale position (n) on the scale x2

If the scale is granular rather than continuous, a form like _cifi'uxa_ (3/6) may be used; in this case, 3/6 is not the same as 1/2, because the third position on a scale of six positions is not the same as the first position on a scale of two positions. Here is an example:

### Example 18.90.

|           |       |    |                |       |
| --------- | ----- | -- | -------------- | ----- |
| levi      | rozgu | cu | sofi'upanova'e | xunre |
| This-here | rose  |    | is-8/10-scale  | red.  |

|                                                   |
| ------------------------------------------------- |
| This rose is 8 out of 10 on the scale of redness. |
| This rose is very red.                            |



When the quantifier preceding any MOI cmavo includes the subjective numbers _[rau](glossary#valsi-rau)_, _[du'e](glossary#valsi-duhe)_, or _[mo'a](glossary#valsi-moha)_ (enough, too many, too few) then an additional place is added for “by standard”. For example:

### Example 18.91.

|             |       |           |       |     |
| ----------- | ----- | --------- | ----- | --- |
| lei         | ratcu | poi       | zvati | le  |
| The-mass-of | rats  | which-are | in    | the |

|       |    |              |             |     |
| ----- | -- | ------------ | ----------- | --- |
| panka | cu | du'emei      | fo          | mi  |
| park  |    | are-too-many | by-standard | me. |

|                                             |
| ------------------------------------------- |
| There are too many rats in the park for me. |



The extra place (which for _-mei_ is the x4 place labeled by _[fo](glossary#valsi-fo)_) is provided rather than using a BAI tag such as _[ma'i](glossary#valsi-mahi)_ because a specification of the standard for judgment is essential to the meaning of subjective words like “enough”.

This place is not normally explicit when using one of the subjective numbers directly as a number. Therefore, _du'e ratcu_ means “too many rats” without specifying any standard.

It is also grammatical to substitute a lerfu string for a number:

### Example 18.92.

|      |           |            |                    |       |
| ---- | --------- | ---------- | ------------------ | ----- |
| ta   | ny.moi    | le'i       | mi                 | ratcu |
| That | is-nth-of | the-set-of | associated-with-me | rats. |

|                     |
| ------------------- |
| That is my nth rat. |



More complex mekso cannot be placed directly in front of MOI, due to the resulting grammatical ambiguities. Instead, a somewhat artificial form of expression is required.

The cmavo _[me](glossary#valsi-me)_ (of selma'o ME) has the function of making a sumti into a selbri. A whole _[me](glossary#valsi-me)_ construction can have a member of MOI added to the end to create a complex mekso selbri:

### Example 18.93.

|      |    |            |     |      |     |      |        |
| ---- | -- | ---------- | --- | ---- | --- | ---- | ------ |
| ta   | me | li         | ny. | su'i | pa  | me'u | moi    |
| That | is | the-number | n   | plus | one |      | -th-of |

|            |                    |       |
| ---------- | ------------------ | ----- |
| le'i       | mi                 | ratcu |
| the-set-of | associated-with-me | rats. |

|                          |
| ------------------------ |
| That is my (n+1)-th rat. |



Here the mekso _ny. su'i pa_ is made into a sumti (with _[li](glossary#valsi-li)_) and then changed into a mekso selbri with _[me](glossary#valsi-me)_ and _me'u moi_. The elidable terminator _[me'u](glossary#valsi-mehu)_ is required here in order to keep the _[pa](glossary#valsi-pa)_ and the _[moi](glossary#valsi-moi)_ separate; otherwise, the parser will combine them into the compound _[pamoi](glossary#valsi-pamoi)_ and reject the sentence as ungrammatical.

It is perfectly possible to use non-numerical sumti after _[me](glossary#valsi-me)_ and before a member of MOI, producing strange results indeed:

### Example 18.94.

|     |          |    |                                 |    |    |
| --- | -------- | -- | ------------------------------- | -- | -- |
| le  | nu       | mi | nolraitru                       | cu | me |
| The | event-of | me | being-a-nobly-superlative-ruler |    |    |

|                       |       |              |    |    |    |      |              |
| --------------------- | ----- | ------------ | -- | -- | -- | ---- | ------------ |
| le'e                  | snime | bolci        | be | vi | la | xel. | cu'o         |
| has-the-stereotypical | snow  | type-of-ball |    | at |    | Hell | probability. |

|                                                   |
| ------------------------------------------------- |
| I have a snowball's chance in Hell of being king. |



Note: the elidable terminator _[boi](glossary#valsi-boi)_ is not used between a number and a member of MOI. As a result, the _[me'u](glossary#valsi-mehu)_ in [Example 18.93](chapter18#example-random-id-xaYd "Example 18.93. ") could also be replaced by a _[boi](glossary#valsi-boi)_, which would serve the same function of preventing the _[pa](glossary#valsi-pa)_ and _[moi](glossary#valsi-moi)_ from joining into a compound.

## Number questions

The following cmavo is discussed in this section:

|    |    |                 |
| -- | -- | --------------- |
| xo | PA | number question |

The cmavo _[xo](glossary#valsi-xo)_, a member of selma'o PA, is used to ask questions whose answers are numbers. Like most Lojban question words, it fills the blank where the answer should go. (See [Section 19.5](chapter19#section-questions-and-answers "19.5. Questions and answers") for more on Lojban questions.)

### Example 18.95.

|            |    |      |    |        |            |       |
| ---------- | -- | ---- | -- | ------ | ---------- | ----- |
| li         | re | su'i | re | du     | li         | xo    |
| The-number | 2  | plus | 2  | equals | the-number | what? |

|                |
| -------------- |
| What is 2 + 2? |



### Example 18.96.

|     |                |        |    |       |      |
| --- | -------------- | ------ | -- | ----- | ---- |
| le  | xomoi          | prenu  | cu | darxi | do   |
| The | what-number-th | person |    | hit   | you? |

|                                                |
| ---------------------------------------------- |
| Which person \[as in a police lineup] hit you? |



[_xo_](glossary#valsi-xo) can also be combined with other digits to ask questions whose answers are already partly specified. This ability could be very useful in writing tests of elementary arithmetical knowledge:

### Example 18.97.

|            |      |       |    |        |            |        |
| ---------- | ---- | ----- | -- | ------ | ---------- | ------ |
| li         | remu | pi'i  | xa | du     | li         | paxono |
| The-number | 25   | times | 6  | equals | the-number | 1?0    |



to which the correct reply would be _[mu](glossary#valsi-mu)_, or 5. The ability to utter bare numbers as grammatical Lojban sentences is primarily intended for giving answers to _[xo](glossary#valsi-xo)_ questions. (Another use, obviously, is for counting off physical objects one by one.)

## Subscripts

The following cmavo is discussed in this section:

|    |    |           |
| -- | -- | --------- |
| xi | XI | subscript |

Subscripting is a general Lojban feature, not used only in mekso; there are many things that can logically be subscripted, and grammatically a subscript is a free modifier, usable almost anywhere. In particular, of course, mekso variables (lerfu strings) can be subscripted:

### Example 18.98.

|              |            |        |            |            |      |            |
| ------------ | ---------- | ------ | ---------- | ---------- | ---- | ---------- |
| li           | xy.boixici | du     | li         | xy.boixipa | su'i | xy.boixire |
| The-number   | x-sub-3    | equals | the-number | x-sub-1    | plus | x-sub-2.   |
| x3 = x1 + x2 |            |        |            |            |      |            |



Subscripts always begin with the flag _[xi](glossary#valsi-xi)_ (of selma'o XI). _[xi](glossary#valsi-xi)_ may be followed by a number, a lerfu string, or a general mekso expression in parentheses:

### Example 18.99.

|            |
| ---------- |
| xy.boixino |
| x0         |



### Example 18.100.

|             |
| ----------- |
| xy.boixiny. |
| xn          |



### Example 18.101.

|          |     |     |      |    |         |
| -------- | --- | --- | ---- | -- | ------- |
| xy.boixi | vei | ny. | su'i | pa | \[ve'o] |
| x(n+1)   |     |     |      |    |         |



Note that subscripts attached directly to lerfu words (variables) generally need a _[boi](glossary#valsi-boi)_ terminating the variable. Free modifiers, of which subscripts are one variety, generally require the explicit presence of an otherwise elidable terminator.

There is no standard way of handling superscripts (other than those used as exponents) or for subscripts or superscripts that come before the main expression. If necessary, further cmavo could be assigned to selma'o XI for these purposes.

The elidable terminator for a subscript is that for a general number or lerfu string, namely _[boi](glossary#valsi-boi)_. By convention, a subscript following another subscript is taken to be a sub-subscript:

### Example 18.102.

|        |    |        |    |    |
| ------ | -- | ------ | -- | -- |
| xy.boi | xi | by.boi | xi | vo |
| xb4    |    |        |    |    |



See [Example 18.123](chapter18#example-random-id-eMsd "Example 18.123. ") for the standard method of specifying multiple subscripts on a single object.

More information on the uses of subscripts may be found in [Section 19.6](chapter19#section-subscripts-general "19.6. Subscripts: XI").

## Infix operators revisited

The following cmavo are discussed in this section:

|      |      |                      |
| ---- | ---- | -------------------- |
| tu'o | PA   | null operand         |
| ge'a | VUhU | null operator        |
| gei  | VUhU | exponential notation |

The infix operators presented so far have always had exactly two operands, and for more or fewer operands forethought notation has been required. However, it is possible to use an operator in infix style even though it has more or fewer than two operands, through the use of a pair of tricks: the null operand _[tu'o](glossary#valsi-tuho)_ and the null operator _[ge'a](glossary#valsi-geha)_. The first is suitable when there are too few operands, the second when there are too many. For example, suppose we wanted to express the numerical negation operator _[va'a](glossary#valsi-vaha)_ in infix form. We would use:

### Example 18.103.

|            |        |                  |     |        |            |      |       |     |
| ---------- | ------ | ---------------- | --- | ------ | ---------- | ---- | ----- | --- |
| li         | tu'o   | va'a             | ny. | du     | li         | no   | vu'u  | ny. |
| The-number | (null) | additive-inverse | n   | equals | the-number | zero | minus | n.  |
| -n = 0 − n |        |                  |     |        |            |      |       |     |



The _[tu'o](glossary#valsi-tuho)_ fulfills the grammatical requirement for a left operand for the infix use of _[va'a](glossary#valsi-vaha)_, even though semantically none is needed or wanted.

Finding a suitable example of _[ge'a](glossary#valsi-geha)_ requires exhibiting a ternary operator, and ternary operators are not common. The operator _[gei](glossary#valsi-gei)_, however, has both a binary and a ternary use. As a binary operator, it provides a terse representation of scientific (also called “exponential”) notation. The first operand of _[gei](glossary#valsi-gei)_ is the exponent, and the second operand is the mantissa or fraction:

### Example 18.104.

|            |                             |        |
| ---------- | --------------------------- | ------ |
| li         | cinonoki'oki'o              | du     |
| The-number | three-zero-zero-comma-comma | equals |

|                       |       |            |        |
| --------------------- | ----- | ---------- | ------ |
| li                    | bi    | gei        | ci     |
| the-number            | eight | scientific | three. |
| 300,000,000 = 3 × 108 |       |            |        |



Why are the arguments to _[gei](glossary#valsi-gei)_ in reverse order from the conventional symbolic notation? So that _[gei](glossary#valsi-gei)_ can be used in forethought to allow easy specification of a large (or small) imprecise number:

### Example 18.105.

|              |          |
| ------------ | -------- |
| gei          | reno     |
| (scientific) | two-zero |
| 10 20        |          |



Note, however, that although 10 is far and away the most common exponent base, it is not the only possible one. The third operand of _[gei](glossary#valsi-gei)_, therefore, is the base, with 10 as the default value. Most computers internally store so-called “floating-point” numbers using 2 as the exponent base. (This has nothing to do with the fact that computers also represent all integers in base 2; the IBM 360 series used an exponent base of 16 for floating point, although each component of the number was expressed in base 2.) Here is a computer floating-point number with a value of 40:

### Example 18.106.

|               |          |    |            |
| ------------- | -------- | -- | ---------- |
| papano        | bi'eju'u | re | gei        |
| (one-one-zero | base     | 2) | scientific |

|                          |          |    |           |    |
| ------------------------ | -------- | -- | --------- | -- |
| pipanopano               | bi'eju'u | re | ge'a      | re |
| (point-one-zero-one-zero | base     | 2) | with-base | 2  |
| .10102 x 21102           |          |    |           |    |



## Vectors and matrices

The following cmavo are discussed in this section:

|      |      |                        |
| ---- | ---- | ---------------------- |
| jo'i | JOhI | start vector           |
| te'u | TEhU | end vector             |
| pi'a | VUhU | matrix row combiner    |
| sa'i | VUhU | matrix column combiner |

A mathematical vector is a list of numbers, and a mathematical matrix is a table of numbers. Lojban considers matrices to be built up out of vectors, which are in turn built up out of operands.

[_jo'i_](glossary#valsi-johi), the only cmavo of selma'o JOhI, is the vector indicator: it has a syntax reminiscent of a forethought operator, but has very high precedence. The components must be simple operands rather than full expressions (unless parenthesized). A vector can have any number of components; _[te'u](glossary#valsi-tehu)_ is the elidable terminator. An example:

### Example 18.107.

|            |       |       |       |      |      |       |         |       |
| ---------- | ----- | ----- | ----- | ---- | ---- | ----- | ------- | ----- |
| li         | jo'i  | paboi | reboi | te'u | su'i | jo'i  | ciboi   | voboi |
| The-number | array | (one, | two   | )    | plus | array | (three, | four) |

|                       |            |       |        |       |
| --------------------- | ---------- | ----- | ------ | ----- |
| du                    | li         | jo'i  | voboi  | xaboi |
| equals                | the-number | array | (four, | six). |
| (1,2) + (3,4) = (4,6) |            |       |        |       |



Vectors can be combined into matrices using either _[pi'a](glossary#valsi-piha)_, the matrix row operator, or _[sa'i](glossary#valsi-sahi)_, the matrix column operator. The first combines vectors representing rows of the matrix, and the second combines vectors representing columns of the matrix. Both of them allow any number of arguments: additional arguments are tacked on with the null operator _[ge'a](glossary#valsi-geha)_.

Therefore, the “magic square” matrix

|   |   |   |
| - | - | - |
| 8 | 1 | 6 |
| 3 | 5 | 7 |
| 4 | 9 | 2 |

can be represented either as:

### Example 18.108.

|            |       |       |    |            |            |       |       |     |
| ---------- | ----- | ----- | -- | ---------- | ---------- | ----- | ----- | --- |
| jo'i       | biboi | paboi | xa | pi'a       | jo'i       | ciboi | muboi | ze  |
| the-vector | (8    | 1     | 6) | matrix-row | the-vector | (3    | 5     | 7), |

|      |            |       |       |    |
| ---- | ---------- | ----- | ----- | -- |
| ge'a | jo'i       | voboi | soboi | re |
|      | the-vector | (4    | 9     | 2) |



or as

### Example 18.109.

|            |       |       |    |               |            |       |       |     |
| ---------- | ----- | ----- | -- | ------------- | ---------- | ----- | ----- | --- |
| jo'i       | biboi | ciboi | vo | sa'i          | jo'i       | paboi | muboi | so  |
| the-vector | (8    | 3     | 4) | matrix-column | the-vector | (1    | 5     | 9), |

|      |            |       |       |    |
| ---- | ---------- | ----- | ----- | -- |
| ge'a | jo'i       | xaboi | zeboi | re |
|      | the-vector | (6    | 7     | 2) |



The regular mekso operators can be applied to vectors and to matrices, since grammatically both of these are expressions. It is usually necessary to parenthesize matrices when used with operators in order to avoid incorrect groupings. There are no VUhU operators for the matrix operators of inner or outer products, but appropriate operators can be created using a suitable symbolic lerfu word or string prefixed by _[ma'o](glossary#valsi-maho)_.

Matrices of more than two dimensions can be built up using either _[pi'a](glossary#valsi-piha)_ or _[sa'i](glossary#valsi-sahi)_ with an appropriate subscript numbering the dimension. When subscripted, there is no difference between _[pi'a](glossary#valsi-piha)_ and _[sa'i](glossary#valsi-sahi)_.

## Reverse Polish notation

The following cmavo is discussed in this section:

|      |      |                     |
| ---- | ---- | ------------------- |
| fu'a | FUhA | reverse Polish flag |

So far, the Lojban notational conventions have mapped fairly familiar kinds of mathematical discourse. The use of forethought operators may have seemed odd when applied to “+”, but when applied to “f” they appear as the usual functional notation. Now comes a sharp break. Reverse Polish (RP) notation represents something completely different; even mathematicians don't use it much. (The only common uses of RP, in fact, are in some kinds of calculators and in the implementation of some programming languages.)

In RP notation, the operator follows the operands. (Polish notation, where the operator precedes its operands, is another name for forethought mekso of the kind explained in [Section 18.6](chapter18#section-forethought "18.6. Forethought operators (Polish notation, functions)").) The number of operands per operator is always fixed. No parentheses are required or permitted. In Lojban, RP notation is always explicitly marked by a _[fu'a](glossary#valsi-fuha)_ at the beginning of the expression; there is no terminator. Here is a simple example:

### Example 18.110.

|            |       |       |        |      |        |            |       |
| ---------- | ----- | ----- | ------ | ---- | ------ | ---------- | ----- |
| li         | fu'a  | reboi | ci     | su'i | du     | li         | mu    |
| the-number | (RP!) | two,  | three, | plus | equals | the-number | five. |



The operands are _[re](glossary#valsi-re)_ and _[ci](glossary#valsi-ci)_; the operator is _[su'i](glossary#valsi-suhi)_.

Here is a more complex example:

### Example 18.111.

|            |       |       |        |         |        |       |         |      |
| ---------- | ----- | ----- | ------ | ------- | ------ | ----- | ------- | ---- |
| li         | fu'a  | reboi | ci     | pi'i    | voboi  | mu    | pi'i    | su'i |
| the-number | (RP!) | (two, | three, | times), | (four, | five, | times), | plus |

|        |            |         |
| ------ | ---------- | ------- |
| du     | li         | rexa    |
| equals | the-number | two-six |



Here the operands of the first _[pi'i](glossary#valsi-pihi)_ are _[re](glossary#valsi-re)_ and _[ci](glossary#valsi-ci)_; the operands of the second _[pi'i](glossary#valsi-pihi)_ are _[vo](glossary#valsi-vo)_ and _[mu](glossary#valsi-mu)_ (with _[boi](glossary#valsi-boi)_ inserted where needed), and the operands of the _[su'i](glossary#valsi-suhi)_ are _reboi ci pi'i_, or 6, and _voboi mu pi'i_, or 20. As you can see, it is easy to get lost in the world of reverse Polish notation; on the other hand, it is especially easy for a mechanical listener (who has a deep mental stack and doesn't get lost) to comprehend.

The operands of an RP operator can be any legal mekso operand, including parenthesized mekso that can contain any valid syntax, whether more RP or something more conventional.

In Lojban, RP operators are always parsed with exactly two operands. What about operators which require only one operand, or more than two operands? The null operand _[tu'o](glossary#valsi-tuho)_ and the null operator _[ge'a](glossary#valsi-geha)_ provide a simple solution. A one-operand operator like _[va'a](glossary#valsi-vaha)_ always appears in a reverse Polish context as _tu'o va'a_. The _[tu'o](glossary#valsi-tuho)_ provides the second operand, which is semantically ignored but grammatically necessary. Likewise, the three-operand version of _[gei](glossary#valsi-gei)_ appears in reverse Polish as _ge'a gei_, where the _[ge'a](glossary#valsi-geha)_ effectively merges the 2nd and 3rd operands into a single operand. Here are some examples:

### Example 18.112.

|            |       |         |       |        |
| ---------- | ----- | ------- | ----- | ------ |
| li         | fu'a  | ciboi   | muboi | vu'u   |
| The-number | (RP!) | (three, | five, | minus) |

|            |            |       |       |       |              |
| ---------- | ---------- | ----- | ----- | ----- | ------------ |
| du         | li         | fu'a  | reboi | tu'o  | va'a         |
| equals     | the-number | (RP!) | two,  | null, | negative-of. |
| 3 − 5 = -2 |            |       |       |       |              |



### Example 18.113.

|            |                |        |
| ---------- | -------------- | ------ |
| li         | cinoki'oki'o   | du     |
| The-number | 30-comma-comma | equals |

|                         |       |       |       |         |           |                       |
| ----------------------- | ----- | ----- | ----- | ------- | --------- | --------------------- |
| li                      | fu'a  | biboi | ciboi | panoboi | ge'a      | gei                   |
| the-number              | (RP!) | 8,    | (3,   | 10,     | null-op), | exponential-notation. |
| 30,000,000 = 3 × 10 ^ 8 |       |       |       |         |           |                       |



## Logical and non-logical connectives within mekso

The following cmavo are discussed in this section:

|      |      |                                   |
| ---- | ---- | --------------------------------- |
| .abu | BY   | letter “a”                        |
| by   | BY   | letter “b”                        |
| cy   | BY   | letter “c”                        |
| fe'a | VUhU | nth root of (default square root) |
| lo'o | LOhO | terminator for LI                 |

As befits a logical language, Lojban has extensive provision for logical connectives within both operators and operands. Full details on logical and non-logical connectives are provided in [Chapter 14](chapter14 "Chapter 14. If Wishes Were Horses: The Lojban Connective System"). Operands are connected in afterthought with selma'o A and in forethought with selma'o GA, just like sumti. Operators are connected in afterthought with selma'o JA and in forethought with selma'o GUhA, just like tanru components. This parallelism is no accident.

In addition, A+BO and A+KE constructs are allowed for grouping logically connected operands, and _[ke'e](glossary#valsi-kehe)_ is allowed for grouping logically connected operators, although there are no analogues of tanru among the operators.

Despite the large number of rules required to support this feature, it is of relatively minor importance in the mekso scheme of things. [Example 18.114](chapter18#example-random-id-e9Xi "Example 18.114. ") exhibits afterthought logical connection between operands:

### Example 18.114.

|     |       |    |      |      |        |    |       |        |         |
| --- | ----- | -- | ---- | ---- | ------ | -- | ----- | ------ | ------- |
| vei | ci    | .a | vo   | ve'o | prenu  | cu | klama | le     | zarci   |
| (   | Three | or | four | )    | people |    | go    | to-the | market. |



[Example 18.115](chapter18#example-random-id-eiTM "Example 18.115. ") is equivalent in meaning, but uses forethought connection:

### Example 18.115.

|     |        |    |    |    |      |        |    |       |        |         |
| --- | ------ | -- | -- | -- | ---- | ------ | -- | ----- | ------ | ------- |
| vei | ga     | ci | gi | vo | ve'o | prenu  | cu | klama | le     | zarci   |
| (   | Either | 3  | or | 4  | )    | people |    | go    | to-the | market. |



Note that the mekso here are being used as quantifiers. Lojban requires that any mekso other than a simple number be enclosed in parentheses when used as a quantifier. This rule prevents ambiguities that do not exist when using _[li](glossary#valsi-li)_.

By the way, _[li](glossary#valsi-li)_ has an elidable terminator, _[lo'o](glossary#valsi-loho)_, which is needed when a _[li](glossary#valsi-li)_ sumti is followed by a logical connective that could seem to be within the mekso. For example:

### Example 18.116.

|            |     |      |     |        |
| ---------- | --- | ---- | --- | ------ |
| li         | re  | su'i | re  | du     |
| The-number | two | plus | two | equals |

|            |      |      |         |    |             |         |
| ---------- | ---- | ---- | ------- | -- | ----------- | ------- |
| li         | vo   | lo'o | .onai   | lo | nalseldjuno | namcu   |
| the-number | four |      | or-else | a  | non-known   | number. |



Omitting the _[lo'o](glossary#valsi-loho)_ would cause the parser to assume that another operand followed the _[.onai](glossary#valsi-onai)_ and reject _[lo](glossary#valsi-lo)_ as an invalid operand.

Simple examples of logical connection between operators are hard to come by. A contrived example is:

### Example 18.117.

|                          |     |      |     |       |     |        |            |       |
| ------------------------ | --- | ---- | --- | ----- | --- | ------ | ---------- | ----- |
| li                       | re  | su'i | je  | pi'i  | re  | du     | li         | vo    |
| The-number               | two | plus | and | times | two | equals | the-number | four. |
| 2 + 2 = 4 and 2 × 2 = 4. |     |      |     |       |     |        |            |       |



The forethought-connection form of [Example 18.117](chapter18#example-random-id-YoFg "Example 18.117. ") is:

### Example 18.118.

|                               |     |      |      |     |       |     |        |            |       |
| ----------------------------- | --- | ---- | ---- | --- | ----- | --- | ------ | ---------- | ----- |
| li                            | re  | ge   | su'i | gi  | pi'i  | re  | du     | li         | vo    |
| the-number                    | two | both | plus | and | times | two | equals | the-number | four. |
| Both 2 + 2 = 4 and 2 × 2 = 4. |     |      |      |     |       |     |        |            |       |



Here is a classic example of operand logical connection:

### Example 18.119.

|                |            |      |          |     |     |       |     |      |      |
| -------------- | ---------- | ---- | -------- | --- | --- | ----- | --- | ---- | ---- |
| go             | li         | .abu | bi'epi'i | vei | xy. | te'a  | re  | ve'o | su'i |
| If-and-only-if | the-number | “a”  | times    | (   | “x” | power | two | )    | plus |

|     |          |     |      |     |        |            |      |
| --- | -------- | --- | ---- | --- | ------ | ---------- | ---- |
| by. | bi'epi'i | xy. | su'i | cy. | du     | li         | no   |
| “b” | times    | “x” | plus | “c” | equals | the-number | zero |

|      |            |     |        |            |     |                  |     |      |
| ---- | ---------- | --- | ------ | ---------- | --- | ---------------- | --- | ---- |
| gi   | li         | xy. | du     | li         | vei | va'a             | by. | ku'e |
| then | the-number | x   | equals | the-number | \[  | the-negation-of( | b   | )    |

|      |    |       |             |
| ---- | -- | ----- | ----------- |
| su'i | ja | vu'u  | fe'a        |
| plus | or | minus | the-root-of |

|     |     |          |    |       |      |          |      |          |     |
| --- | --- | -------- | -- | ----- | ---- | -------- | ---- | -------- | --- |
| vei | by. | bi'ete'a | re | vu'u  | vo   | bi'epi'i | .abu | bi'epi'i | cy. |
| (   | “b” | power    | 2  | minus | four | times    | “a”  | times    | “c” |

|                                                          |         |      |            |     |          |      |
| -------------------------------------------------------- | ------- | ---- | ---------- | --- | -------- | ---- |
| ve'o                                                     | \[ku'e] | ve'o | fe'i       | re  | bi'epi'i | .abu |
| )                                                        |         | ]    | divided-by | two | times    | “a”  |
| Iff a x 2 + b x + c = 0 , then x = - b ± b 2 - 4 a c 2 a |         |      |            |     |          |      |



Note the mixture of styles in [Example 18.119](chapter18#example-random-id-k36J "Example 18.119. "): the negation of b and the square root are represented by forethought and most of the operator precedence by prefixed _[bi'e](glossary#valsi-bihe)_, but explicit parentheses had to be added to group the numerator properly. In addition, the square root parentheses cannot be removed here in favor of simple _[fe'a](glossary#valsi-feha)_ and _[ku'e](glossary#valsi-kuhe)_ bracketing, because infix operators are present in the operand. Getting [Example 18.119](chapter18#example-random-id-k36J "Example 18.119. ") to parse perfectly using the current parser took several tries: a more relaxed style would dispense with most of the _[bi'e](glossary#valsi-bihe)_ cmavo and just let the standard precedence rules be understood.

Non-logical connection with JOI and BIhI is also permitted between operands and between operators. One use for this construct is to connect operands with _[bi'o](glossary#valsi-biho)_ to create intervals:

### Example 18.120.

|            |      |             |         |             |     |
| ---------- | ---- | ----------- | ------- | ----------- | --- |
| li         | no   | ga'o        | bi'o    | ke'i        | pa  |
| the-number | zero | (inclusive) | from-to | (exclusive) | one |
| \[0,1)     |      |             |         |             |     |

|                                                                    |
| ------------------------------------------------------------------ |
| the numbers from zero to one, including zero but not including one |



Intervals defined by a midpoint and range rather than beginning and end points can be expressed by _[mi'i](glossary#valsi-mihi)_:

### Example 18.121.

|            |      |             |                     |             |      |
| ---------- | ---- | ----------- | ------------------- | ----------- | ---- |
| li         | pimu | ga'o        | mi'i                | ke'i        | pimu |
| the-number | 0.5  | (inclusive) | centered-with-range | (exclusive) | 0.5  |



which expresses the same interval as [Example 18.120](chapter18#example-random-id-Bzf6 "Example 18.120. "). Note that the _[ga'o](glossary#valsi-gaho)_ and _[ke'i](glossary#valsi-kehi)_ still refer to the endpoints, although these are now implied rather than expressed. Another way of expressing the same thing:

### Example 18.122.

|            |      |      |          |         |             |          |
| ---------- | ---- | ---- | -------- | ------- | ----------- | -------- |
| li         | pimu | su'i | ni'upimu | bi'o    | ke'i        | ma'upimu |
| the-number | 0.5  | plus | \[-0.5   | from-to | (exclusive) | +0.5]    |



Here we have the sum of a number and an interval, which produces another interval centered on the number. As [Example 18.122](chapter18#example-random-id-CEvD "Example 18.122. ") shows, non-logical (or logical) connection of operands has higher precedence than any mekso operator.

You can also combine two operands with _[ce'o](glossary#valsi-ceho)_, the sequence connective of selma'o JOI, to make a compound subscript:

### Example 18.123.

|      |     |     |     |          |     |         |
| ---- | --- | --- | --- | -------- | --- | ------- |
| xy.  | xi  | vei | by. | ce'o     | dy. | \[ve'o] |
| “x”  | sub | (   | “b” | sequence | “d” | )       |
| xb,d |     |     |     |          |     |         |



## Using Lojban resources within mekso

The following cmavo are discussed in this section:

|      |      |                          |
| ---- | ---- | ------------------------ |
| na'u | NAhU | selbri to operator       |
| ni'e | NIhE | selbri to operand        |
| mo'e | MOhE | sumti to operand         |
| te'u | TEhU | terminator for all three |

One of the mekso design goals requires the ability to make use of Lojban's vocabulary resources within mekso to extend the built-in cmavo for operands and operators. There are three relevant constructs: all three share the elidable terminator _[te'u](glossary#valsi-tehu)_ (which is also used to terminate vectors marked with _[jo'i](glossary#valsi-johi)_)

The cmavo _[na'u](glossary#valsi-nahu)_ makes a selbri into an operator. In general, the first place of the selbri specifies the result of the operator, and the other unfilled places specify the operands:

### Example 18.124.

|            |              |         |                 |
| ---------- | ------------ | ------- | --------------- |
| li         | na'u         | tanjo   | te'u            |
| The-number | the-operator | tangent | \[end-operator] |

|              |     |      |    |         |    |            |           |
| ------------ | --- | ---- | -- | ------- | -- | ---------- | --------- |
| vei          | pai | fe'i | re | \[ve'o] | du | li         | ci'i      |
| (            | π   | /    | 2  | )       | =  | the-number | infinity. |
| tan(π/2) = ∞ |     |      |    |         |    |            |           |



_[tanjo](glossary#valsi-tanjo)_ is the gismu for “x1 is the tangent of x2”, and the _[na'u](glossary#valsi-nahu)_ here makes it into an operator which is then used in forethought

The cmavo _[ni'e](glossary#valsi-nihe)_ makes a selbri into an operand. The x1 place of the selbri generally represents a number, and therefore is often a _[ni](glossary#valsi-ni)_ abstraction, since _[ni](glossary#valsi-ni)_ abstractions represent numbers. The _[ni'e](glossary#valsi-nihe)_ makes that number available as a mekso operand. A common application is to make equations relating pure dimensions:

### Example 18.125.

|            |      |             |        |         |
| ---------- | ---- | ----------- | ------ | ------- |
| li         | ni'e | ni          | clani  | \[te'u] |
| The-number |      | quantity-of | length |         |

|       |      |             |       |         |
| ----- | ---- | ----------- | ----- | ------- |
| pi'i  | ni'e | ni          | ganra | \[te'u] |
| times |      | quantity-of | width |         |

|       |      |             |       |      |
| ----- | ---- | ----------- | ----- | ---- |
| pi'i  | ni'e | ni          | condi | te'u |
| times |      | quantity-of | depth |      |

|                                 |            |      |             |         |
| ------------------------------- | ---------- | ---- | ----------- | ------- |
| du                              | li         | ni'e | ni          | canlu   |
| equals                          | the-number |      | quantity-of | volume. |
| Length × Width × Depth = Volume |            |      |             |         |



The cmavo _[mo'e](glossary#valsi-mohe)_ operates similarly to _[ni'e](glossary#valsi-nihe)_, but makes a sumti (rather than a selbri) into an operand. This construction is useful in stating equations involving dimensioned numbers:

### Example 18.126.

|            |      |     |       |      |      |     |         |
| ---------- | ---- | --- | ----- | ---- | ---- | --- | ------- |
| li         | mo'e | re  | ratcu | su'i | mo'e | re  | ractu   |
| The-number |      | two | rats  | plus |      | two | rabbits |

|                                 |            |      |      |          |
| ------------------------------- | ---------- | ---- | ---- | -------- |
| du                              | li         | mo'e | vo   | danlu    |
| equals                          | the-number |      | four | animals. |
| 2 rats + 2 rabbits = 4 animals. |            |      |      |          |



Another use is in constructing Lojbanic versions of so-called “folk quantifiers”, such as “a pride of lions”:

### Example 18.127.

|    |       |     |      |             |        |             |        |
| -- | ----- | --- | ---- | ----------- | ------ | ----------- | ------ |
| mi | viska | vei | mo'e | lo'e        | lanzu  | ve'o        | cinfo  |
| I  | see   | (   |      | the-typical | family | )-number-of | lions. |

|                         |
| ----------------------- |
| I see a pride of lions. |



## Other uses of mekso

The following cmavo are discussed in this section:

|      |      |                                |
| ---- | ---- | ------------------------------ |
| me'o | LI   | the mekso                      |
| nu'a | NUhA | operator to selbri             |
| mai  | MAI  | utterance ordinal              |
| mo'o | MAI  | higher order utterance ordinal |
| roi  | ROI  | quantified tense               |

So far we have seen mekso used as sumti (with _[li](glossary#valsi-li)_), as quantifiers (often parenthesized), and in MOI and ME-MOI selbri. There are a few other minor uses of mekso within Lojban.

The cmavo _[me'o](glossary#valsi-meho)_ has the same grammatical use as _[li](glossary#valsi-li)_ but slightly different semantics. _[li](glossary#valsi-li)_ means “the number which is the value of the mekso ...”, whereas _[me'o](glossary#valsi-meho)_ just means “the mekso ...” So it is true that:

### Example 18.128.

|            |     |      |     |        |            |       |
| ---------- | --- | ---- | --- | ------ | ---------- | ----- |
| li         | re  | su'i | re  | du     | li         | vo    |
| The-number | two | plus | two | equals | the-number | four. |
| 2 + 2 = 4  |     |      |     |        |            |       |



but false that:

### Example 18.129.

|           |     |      |     |        |           |       |
| --------- | --- | ---- | --- | ------ | --------- | ----- |
| me'o      | re  | su'i | re  | du     | me'o      | vo    |
| The-mekso | two | plus | two | equals | the-mekso | four. |

|             |
| ----------- |
| “2 + 2”=“4” |



since the expressions “2 + 2” and “4” are not the same. The relationship between _[li](glossary#valsi-li)_ and _[me'o](glossary#valsi-meho)_ is related to that between _la djan._, the person named John, and _zo .djan._, the name “John”

The cmavo _[nu'a](glossary#valsi-nuha)_ is the inverse of _[na'u](glossary#valsi-nahu)_, and allows a mekso operator to be used as a normal selbri, with the place structure:

> x1 is the result of applying (operator) to x2, x3, ...

for as many places as may be required. For example:

### Example 18.130.

|            |        |    |                 |             |            |        |
| ---------- | ------ | -- | --------------- | ----------- | ---------- | ------ |
| li         | ni'umu | cu | nu'a            | va'a        | li         | ma'umu |
| The-number | -5     |    | is-the-operator | negation-of | the-number | +5.    |



uses _[nu'a](glossary#valsi-nuha)_ to make the operator _[va'a](glossary#valsi-vaha)_ into a two-place bridi

Used together, _[nu'a](glossary#valsi-nuha)_ and _[na'u](glossary#valsi-nahu)_ make it possible to ask questions about mekso operators, even though there is no specific cmavo for an operator question, nor is it grammatical to utter an operator in isolation. Consider [Example 18.131](chapter18#example-random-id-qIKp "Example 18.131. "), to which [Example 18.132](chapter18#example-random-id-qILi "Example 18.132. ") is one correct answer:

### Example 18.131.

|            |     |                   |
| ---------- | --- | ----------------- |
| li         | re  | na'u              |
| The-number | two | applied-to-selbri |

|               |     |        |            |       |
| ------------- | --- | ------ | ---------- | ----- |
| mo            | re  | du     | li         | vo    |
| which-selbri? | two | equals | the-number | four. |
| 2 ? 2 = 4     |     |        |            |       |



### Example 18.132.

|      |      |
| ---- | ---- |
| nu'a | su'i |

|      |
| ---- |
| plus |



In [Example 18.131](chapter18#example-random-id-qIKp "Example 18.131. "), _na'u mo_ is an operator question, because _[mo](glossary#valsi-mo)_ is the selbri question cmavo and _[na'u](glossary#valsi-nahu)_ makes the selbri into an operator. [Example 18.132](chapter18#example-random-id-qILi "Example 18.132. ") makes the true answer _[su'i](glossary#valsi-suhi)_ into a selbri (which is a legal utterance) with the inverse cmavo _[nu'a](glossary#valsi-nuha)_. Mechanically speaking, inserting [Example 18.132](chapter18#example-random-id-qILi "Example 18.132. ") into [Example 18.131](chapter18#example-random-id-qIKp "Example 18.131. ") produces:

### Example 18.133.

|            |     |               |            |
| ---------- | --- | ------------- | ---------- |
| li         | re  | na'u          | nu'a       |
| The-number | two | (the-operator | the-selbri |

|       |     |        |            |       |
| ----- | --- | ------ | ---------- | ----- |
| su'i  | re  | du     | li         | vo    |
| plus) | two | equals | the-number | four. |



where the _na'u nu'a_ cancels out, leaving a truthful bridi

Numerical free modifiers, corresponding to English “firstly”, “secondly”, and so on, can be created by suffixing a member of selma'o MAI to a digit string or a lerfu string. (Digit strings are compound cmavo beginning with a cmavo of selma'o PA, and containing only cmavo of PA or BY; lerfu strings begin with a cmavo of selma'o BY, and likewise contain only PA or BY cmavo.) Here are some examples:

### Example 18.134.

|       |
| ----- |
| pamai |

|         |
| ------- |
| firstly |



### Example 18.135.

|       |
| ----- |
| remai |

|          |
| -------- |
| secondly |



### Example 18.136.

|        |
| ------ |
| romai  |
| all-ly |

|        |
| ------ |
| lastly |



### Example 18.137.

|        |
| ------ |
| ny.mai |

|        |
| ------ |
| nth-ly |



### Example 18.138.

|          |
| -------- |
| pasomo'o |

|                             |
| --------------------------- |
| nineteenthly (higher order) |
| Section 19                  |



The difference between _[mai](glossary#valsi-mai)_ and _[mo'o](glossary#valsi-moho)_ is that _[mo'o](glossary#valsi-moho)_ enumerates larger subdivisions of a text. Each _[mo'o](glossary#valsi-moho)_ subdivision can then be divided into pieces and internally numbered with _[mai](glossary#valsi-mai)_. If this chapter were translated into Lojban, each section would be numbered with _[mo'o](glossary#valsi-moho)_. (See [Section 19.7](chapter19#section-utterance-ordinals "19.7. Utterance ordinals: MAI") for more on these words.)

A numerical tense can be created by suffixing a digit string with _[roi](glossary#valsi-roi)_. This usage generates tenses corresponding to English “once”, “twice”, and so on. This topic belongs to a detailed discussion of Lojban tenses, and is explained further in [Section 10.9](chapter10#section-interval-properties "10.9. Interval properties: TAhE and roi").

Note: the elidable terminator _[boi](glossary#valsi-boi)_ is not used between a number and a member of MAI or ROI.

## Explicit operator precedence

As mentioned earlier, Lojban does provide a way for the precedences of operators to be explicitly declared, although current parsers do not understand these declarations.

The declaration is made in the form of a metalinguistic comment using _[ti'o](glossary#valsi-tiho)_, a member of selma'o SEI. _[sei](glossary#valsi-sei)_, the other member of SEI, is used to insert metalinguistic comments on a bridi which give information about the discourse which the bridi comprises. The format of a _[ti'o](glossary#valsi-tiho)_ declaration has not been formally established, but presumably would take the form of mentioning a mekso operator and then giving it either an absolute numerical precedence on some pre-established scale, or else specifying relative precedences between new operators and existing operators.

In future, we hope to create an improved machine parser that can understand declarations of the precedences of simple operators belonging to selma'o VUhU. Originally, all operators would have the same precedence. Declarations would have the effect of raising the specified cmavo of VUhU to higher precedence levels. Complex operators formed with _[na'u](glossary#valsi-nahu)_, _[ni'e](glossary#valsi-nihe)_, or _[ma'o](glossary#valsi-maho)_ would remain at the standard low precedence; declarations with respect to them are for future implementation efforts. It is probable that such a parser would have a set of “commonly assumed precedences” built into it (selectable by a special _[ti'o](glossary#valsi-tiho)_ declaration) that would match mathematical intuition: times higher than plus, and so on.

## Miscellany

A few other points:

[_se_](glossary#valsi-se) can be used to convert an operator as if it were a selbri, so that its arguments are exchanged. For example:

### Example 18.139.

|            |       |           |       |      |        |            |      |
| ---------- | ----- | --------- | ----- | ---- | ------ | ---------- | ---- |
| li         | ci    | se        | vu'u  | vo   | du     | li         | pa   |
| The-number | three | (inverse) | minus | four | equals | the-number | one. |

|                               |
| ----------------------------- |
| 3 subtracted from 4 equals 1. |



The other converters of selma'o SE can also be used on operators with more than two operands, and they can be compounded to create (probably unintelligible) operators as needed.

Members of selma'o NAhE are also legal on an operator to produce a scalar negation of it. The implication is that some other operator would apply to make the bridi true:

### Example 18.140.

|            |    |      |      |    |        |            |      |
| ---------- | -- | ---- | ---- | -- | ------ | ---------- | ---- |
| li         | ci | na'e | su'i | vo | du     | li         | pare |
| The-number | 3  | non- | plus | 4  | equals | the-number | 12.  |



### Example 18.141.

|            |    |              |       |    |        |            |    |
| ---------- | -- | ------------ | ----- | -- | ------ | ---------- | -- |
| li         | ci | to'e         | vu'u  | re | du     | li         | mu |
| The-number | 3  | opposite-of- | minus | 2  | equals | the-number | 5. |



The sense in which “plus” is the opposite of “minus” is not a mathematical but rather a linguistic one; negated operators are defined only loosely.

[_la'e_](glossary#valsi-lahe) and _[lu'e](glossary#valsi-luhe)_ can be used on operands with the usual semantics to get the referent of or a symbol for an operand. Likewise, a member of selma'o NAhE followed by _[bo](glossary#valsi-bo)_ serves to scalar-negate an operand, implying that some other operand would make the bridi true:

### Example 18.142.

|            |    |      |    |        |            |        |    |
| ---------- | -- | ---- | -- | ------ | ---------- | ------ | -- |
| li         | re | su'i | re | du     | li         | na'ebo | mu |
| The-number | 2  | plus | 2  | equals | the-number | non-   | 5. |

|                                 |
| ------------------------------- |
| 2 + 2 = something other than 5. |



The digits 0-9 have rafsi, and therefore can be used in making lujvo. Additionally, all the rafsi have CVC form and can stand alone or together as names:

### Example 18.143.

|             |         |     |        |            |          |         |          |
| ----------- | ------- | --- | ------ | ---------- | -------- | ------- | -------- |
| la          | zel.    | poi | gunta  | la         | tebes.   | pu      | nanmu    |
| Those-named | “Seven” | who | attack | that-named | “Thebes” | \[past] | are-men. |

|                                    |
| ---------------------------------- |
| The Seven Against Thebes were men. |



Of course, there is no guarantee that the name _zel._ is connected with the number rafsi: an alternative which cannot be misconstrued is:

### Example 18.144.

|                 |           |     |        |
| --------------- | --------- | --- | ------ |
| la              | zemei     | poi | gunta  |
| Those-named-the | Sevensome | who | attack |

|            |        |         |          |
| ---------- | ------ | ------- | -------- |
| la         | tebes. | pu      | nanmu    |
| that-named | Thebes | \[past] | are-men. |



Certain other members of PA also have assigned rafsi: _[so'a](glossary#valsi-soha)_, _[so'e](glossary#valsi-sohe)_, _[so'i](glossary#valsi-sohi)_, _[so'o](glossary#valsi-soho)_, _[so'u](glossary#valsi-sohu)_, _[da'a](glossary#valsi-daha)_, _[ro](glossary#valsi-ro)_, _[su'e](glossary#valsi-suhe)_, _[su'o](glossary#valsi-suho)_, _[pi](glossary#valsi-pi)_, and _[ce'i](glossary#valsi-cehi)_. Furthermore, although the cmavo _[fi'u](glossary#valsi-fihu)_ does not have a rafsi as such, it is closely related to the gismu _[frinu](glossary#valsi-frinu)_, meaning “fraction”; therefore, in a context of numeric rafsi, you can use any of the rafsi for _[frinu](glossary#valsi-frinu)_ to indicate a fraction slash.

A similar convention is used for the cmavo _[cu'o](glossary#valsi-cuho)_ of selma'o MOI, which is closely related to _[cunso](glossary#valsi-cunso)_ (probability); use a rafsi for _[cunso](glossary#valsi-cunso)_ in order to create lujvo based on _[cu'o](glossary#valsi-cuho)_. The cmavo _[mei](glossary#valsi-mei)_ and _[moi](glossary#valsi-moi)_ of MOI have their own rafsi, two each in fact: _mem_/ _mei_ and _mom_/ _moi_ respectively.

The grammar of mekso as described so far imposes a rigid distinction between operators and operands. Some flavors of mathematics (lambda calculus, algebra of functions) blur this distinction, and Lojban must have a method of doing the same. An operator can be changed into an operand with _ni'enu'a_, which transforms the operator into a matching selbri and then the selbri into an operand.

To change an operand into an operator, we use the cmavo _[ma'o](glossary#valsi-maho)_, already introduced as a means of changing a lerfu string such as _[fy.](glossary#valsi-fy)_ into an operator. In fact, _[ma'o](glossary#valsi-maho)_ can be followed by any mekso operand, using the elidable terminator _[te'u](glossary#valsi-tehu)_ if necessary.

There is a potential semantic ambiguity in _ma'o fy. \[te'u]_ if _[fy.](glossary#valsi-fy)_ is already in use as a variable: it comes to mean “the function whose value is always `f`”. However, mathematicians do not normally use the same lerfu words or strings as both functions and variables, so this case should not arise in practice.

## Four score and seven: a mekso problem

Abraham Lincoln's Gettysburg Address begins with the words “Four score and seven years ago”. This section exhibits several different ways of saying the number “four score and seven”. (A “score”, for those not familiar with the term, is 20; it is analogous to a “dozen” for 12.) The trivial way:

### Example 18.145.

|       |       |
| ----- | ----- |
| li    | bize  |
| eight | seven |
| 87    |       |



[Example 18.145](chapter18#example-random-id-DzMH "Example 18.145. ") is mathematically correct, but sacrifices the spirit of the English words, which are intended to be complex and formal.

### Example 18.146.

|            |      |       |        |      |       |
| ---------- | ---- | ----- | ------ | ---- | ----- |
| li         | vo   | pi'i  | reno   | su'i | ze    |
| the-number | four | times | twenty | plus | seven |
| 4 × 20 + 7 |      |       |        |      |       |



[Example 18.146](chapter18#example-random-id-HNyL "Example 18.146. ") is also mathematically correct, but still misses something. “Score” is not a word for 20 in the same way that “ten” is a word for 10: it contains the implication of 20 objects. The original may be taken as short for “Four score years and seven years ago”. Thinking of a score as a twentysome rather than as 20 leads to:

### Example 18.147.

|            |                 |       |             |
| ---------- | --------------- | ----- | ----------- |
| li         | mo'e            | voboi | renomei     |
| the-number | \[sumti-to-mex] | four  | twentysomes |

|                     |      |       |
| ------------------- | ---- | ----- |
| te'u                | su'i | ze    |
| \[end-sumti-to-mex] | plus | seven |



In [Example 18.147](chapter18#example-random-id-iwba "Example 18.147. "), _voboi renomei_ is a sumti signifying four things each of which are groups of twenty; the _[mo'e](glossary#valsi-mohe)_ and _[te'u](glossary#valsi-tehu)_ then make this sumti into a number in order to allow it to be the operand of _[su'i](glossary#valsi-suhi)_.

Another approach is to think of “score” as setting a representation base. There are remnants of base-20 arithmetic in some languages, notably French, in which 87 is “quatre-vingt-sept”, literally “four-twenties-seven”. (This fact makes the Gettysburg Address hard to translate into French!) If “score” is the representation base, then we have:

### Example 18.148.

|            |      |      |       |      |      |
| ---------- | ---- | ---- | ----- | ---- | ---- |
| li         | vo   | pi'e | ze    | ju'u | reno |
| the-number | four | ;    | seven | base | 20   |
| 4720       |      |      |       |      |      |



Overall, [Example 18.147](chapter18#example-random-id-iwba "Example 18.147. ") probably captures the flavor of the English best. [Example 18.145](chapter18#example-random-id-DzMH "Example 18.145. ") and [Example 18.146](chapter18#example-random-id-HNyL "Example 18.146. ") are too simple, and [Example 18.148](chapter18#example-random-id-2C3I "Example 18.148. ") is too tricky. Nevertheless, all four examples are good Lojban. Pedagogically, these examples illustrate the richness of lojbau mekso: anything that can be said at all, can probably be said in more than one way.

## mekso selma'o summary

Except as noted, each selma'o has only one cmavo.

|      |                                                                                                                                                     |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| BOI  | elidable terminator for numerals and lerfu strings                                                                                                  |
| BY   | lerfu for variables and functions (see [Section 17.11](chapter17#section-math "17.11. Mathematical uses of lerfu strings"))            |
| FUhA | reverse-Polish flag                                                                                                                                 |
| GOhA | includes _[du](glossary#valsi-du)_ (mathematical equality) and other non-mekso cmavo                                                             |
| JOhI | array flag                                                                                                                                          |
| KUhE | elidable terminator for forethought mekso                                                                                                           |
| LI   | mekso articles (_[me'o](glossary#valsi-meho)_)                                                                                                   |
| MAhO | make operand into operator                                                                                                                          |
| MOI  | creates mekso selbri (_[cu'o](glossary#valsi-cuho)_, see [Section 18.11](chapter18#section-mekso-selbri "18.11. Special mekso selbri")) |
| MOhE | make sumti into operand                                                                                                                             |
| NAhU | make selbri into operator                                                                                                                           |
| NIhE | make selbri into operand                                                                                                                            |
| NUhA | make operator into selbri                                                                                                                           |
| PA   | numbers (see [Section 18.25](chapter18#section-pa "18.25. Complete table of PA cmavo: digits, punctuation, and other numbers."))           |
| PEhO | optional forethought mekso marker                                                                                                                   |
| TEhU | elidable terminator for NAhU, NIhE, MOhE, MAhO, and JOhI                                                                                            |
| VEI  | left parenthesis                                                                                                                                    |
| VEhO | right parenthesis                                                                                                                                   |
| VUhU | operators (see [Section 18.24](chapter18#section-vuhu "18.24. Complete table of VUhU cmavo, with operand structures"))                     |
| XI   | subscript flag                                                                                                                                      |

## Complete table of VUhU cmavo, with operand structures

The operand structures specify what various operands (labeled a, b, c, ...) mean. The implied context is forethought, since only forethought operators can have a variable number of operands; however, the same rules apply to infix and RP uses of VUhU.

|      |                                      |                                                           |
| ---- | ------------------------------------ | --------------------------------------------------------- |
| su'i | plus                                 | (((a + b) + c) + ...)                                     |
| pi'i | times                                | (((a × b) × c) × ...)                                     |
| vu'u | minus                                | (((a − b) − c) − ...)                                     |
| fe'i | divided by                           | (((a / b) / c) / ...)                                     |
| ju'u | number base                          | numeral string `a` interpreted in the base `b`            |
| pa'i | ratio                                | the ratio of `a` to `b` a:b                               |
| fa'i | reciprocal of/multiplicative inverse | 1 / a                                                     |
| gei  | scientific notation                  | b × (c \[default 10] to the `a` power)                    |
| ge'a | null operator                        | (no operands)                                             |
| de'o | logarithm                            | log `a` to base `b` (default 10 or `e` as appropriate)    |
| te'a | to the power/exponential             | `a` to the `b` power                                      |
| fe'a | nth root of/inverse power            | bth root of a (default square root: b = 2)                |
| cu'a | absolute value/norm                  | \| a \|                                                   |
| ne'o | factorial                            | a!                                                        |
| pi'a | matrix row vector combiner           | (all operands are row vectors)                            |
| sa'i | matrix column vector combiner        | (all operands are column vectors)                         |
| ri'o | integral                             | integral of a with respect to b over range c              |
| sa'o | derivative                           | derivative of a with respect to b of degree c (default 1) |
| fu'u | non-specific operator                | (variable)                                                |
| si'i | sigma (Σ) summation                  | summation of a using variable b over range c              |
| va'a | negation of/additive inverse         | -a                                                        |
| re'a | matrix transpose/dual                | a\*                                                       |

## Complete table of PA cmavo: digits, punctuation, and other numbers.

- **Table 18.1. Decimal digits**

  |    |     |   |
  | -- | --- | - |
  | no | non | 0 |
  | pa | pav | 1 |
  | re | rel | 2 |
  | ci | cib | 3 |
  | vo | von | 4 |
  | mu | mum | 5 |
  | xa | xav | 6 |
  | ze | zel | 7 |
  | bi | biv | 8 |
  | so | soz | 9 |



- **Table 18.2. Hexadecimal digits**

  |     |      |
  | --- | ---- |
  | dau | A/10 |
  | fei | B/11 |
  | gai | C/12 |
  | jau | D/13 |
  | rei | E/14 |
  | vai | F/15 |



- **Table 18.3. Special numbers**

  |      |               |
  | ---- | ------------- |
  | pai  | π             |
  | ka'o | imaginary i   |
  | te'o | exponential e |
  | ci'i | infinity (∞)  |



- **Table 18.4. Number punctuation**

  |      |                                                                                                                                       |                         |
  | ---- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
  | pi   | piz                                                                                                                                   | decimal point           |
  | ce'i | cez                                                                                                                                   | percentage              |
  | fi'u | fi'u (from frinu; see [Section 18.20](chapter18#section-explicit-operator-precedence "18.20. Explicit operator precedence")) | fraction (not division) |
  | pi'e | mixed-base point                                                                                                                      |                         |
  | ma'u | plus sign (not addition)                                                                                                              |                         |
  | ni'u | minus sign (not subtraction)                                                                                                          |                         |
  | ki'o | thousands comma                                                                                                                       |                         |
  | ra'e | repeating-decimal indicator                                                                                                           |                         |
  | ji'i | approximation sign                                                                                                                    |                         |
  | ka'o | complex number separator                                                                                                              |                         |



- **Table 18.5. Indefinite numbers**

  |      |      |            |      |
  | ---- | ---- | ---------- | ---- |
  | ro   | all  | rol        |      |
  | so'a | soj  | almost all |      |
  | so'e | sop  | most       |      |
  | so'i | many | sor        | so'i |
  | so'o | sos  | several    |      |
  | so'u | sot  | few        |      |
  | da'a | daz  | all but    |      |



- **Table 18.6. Subjective numbers**

  |      |          |
  | ---- | -------- |
  | rau  | enough   |
  | du'e | too few  |
  | mo'a | too many |



- **Table 18.7. Miscellaneous**

  |      |                 |
  | ---- | --------------- |
  | xo   | number question |
  | tu'o | null operand    |



## Table of MOI cmavo, with associated rafsi and place structures

|     |     |     |
| --- | --- | --- |
| mei | mem | mei |

|                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- |
| x1 is a mass formed from a set x2 of n members, one or more of which is/are x3, \[measured relative to the set x4/by standard x4] |

|     |     |     |
| --- | --- | --- |
| moi | mom | moi |

|                                                                            |
| -------------------------------------------------------------------------- |
| x1 is the (n)th member of set x2 when ordered by rule x3 \[by standard x4] |

|      |   |
| ---- | - |
| si'e |   |

|                                                     |
| --------------------------------------------------- |
| x1 is an (n)th portion of mass x2 \[by standard x3] |

|      |                                                                                                                                                                             |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cu'o | cu'o (borrowed from _[cunso](glossary#valsi-cunso)_; see [Section 18.20](chapter18#section-explicit-operator-precedence "18.20. Explicit operator precedence")) |

|                                                                                 |
| ------------------------------------------------------------------------------- |
| event x1 has probability (n) of occurring under conditions x2 \[by standard x3] |

|      |   |
| ---- | - |
| va'e |   |

|                                                               |
| ------------------------------------------------------------- |
| x1 is at scale position (n) on the scale x2 \[by standard x3] |

