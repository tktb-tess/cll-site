---
layout: ../layouts/Layout.astro
title: 'Chapter 21. Formal Grammars'
prev: /chapter20
prevTitle: 'Prev: Chapter 20'
next: /glossary
nextTitle: 'Next: Lojban Word Glossary'
---

![The picture for chapter 21](../assets/chapter21.gif)

## EBNF Grammar of Lojban

Lojban Machine Grammar, EBNF Version, Final Baseline

This EBNF document is explicitly dedicated to the public domain by its author, The Logical Language Group, Inc. Contact that organization at: 2904 Beau Lane, Fairfax VA 22031 USA 703-385-0273 (intl: +1 703 385 0273)

Explanation of notation: All rules have the form:

name number= bnf-expression

which means that the grammatical construct “name” is defined by “bnf-expression”. The number cross-references this grammar with the rule numbers in the YACC grammar. The names are the same as those in the YACC grammar, except that subrules are labeled with A, B, C, ... in the YACC grammar and with 1, 2, 3, ... in this grammar. In addition, rule 971 is “simple\_tag” in the YACC grammar but “stag” in this grammar, because of its frequent appearance.

1. Names in lower case are grammatical constructs.

2. Names in UPPER CASE are selma'o (lexeme) names, and are terminals.

3. Concatenation is expressed by juxtaposition with no operator symbol.

4. \| represents alternation (choice).

5. \[] represents an optional element.

6. & represents and/or (“A & B” is the same as “A | B | A B”).

7. ... represents optional repetition of the construct to the left. Left-grouping is implied; right-grouping is shown by explicit self-referential recursion with no “...”

8. () serves to indicate the grouping of the other operators. Otherwise, “...” binds closer than &, which binds closer than |.

9. \# is shorthand for “\[free ...]”, a construct which appears in many places.

10. // encloses an elidable terminator, which may be omitted (without change of meaning) if no grammatical ambiguity results.

- text 0=

  \[NAI ...] \[CMENE ... # | (indicators & free ...)] \[joik-jek] text-1

- text-1 2=

  \[(I \[jek | joik] \[\[stag] BO] #) ... | NIhO ... #] \[paragraphs]

- paragraphs 4=

  paragraph \[NIhO ... # paragraphs]

- paragraph 10=

  (statement | fragment) \[I # \[statement | fragment]] ...

- statement 11=

  statement-1 | prenex statement

- statement-1 12=

  statement-2 \[I joik-jek \[statement-2]] ...

- statement-2 13=

  statement-3 \[I \[jek | joik] \[stag] BO # \[statement-2]]

- statement-3 14=

  sentence | \[tag] TUhE # text-1 /TUhU#/

- fragment 20=

  ek # | gihek # | quantifier | NA # | terms /VAU#/ | prenex | relative-clauses | links | linkargs

- prenex 30=

  terms ZOhU #

- sentence 40=

  \[terms \[CU #]] bridi-tail

- subsentence 41=

  sentence | prenex subsentence

- bridi-tail 50=

  bridi-tail-1 \[gihek \[stag] KE # bridi-tail /KEhE#/ tail-terms]

- bridi-tail-1 51=

  bridi-tail-2 \[gihek # bridi-tail-2 tail-terms] ...

- bridi-tail-2 52=

  bridi-tail-3 \[gihek \[stag] BO # bridi-tail-2 tail-terms]

- bridi-tail-3 53=

  selbri tail-terms | gek-sentence

- gek-sentence 54=

  gek subsentence gik subsentence tail-terms | \[tag] KE # gek-sentence /KEhE#/ | NA # gek-sentence

- tail-terms 71=

  \[terms] /VAU#/

- terms 80=

  terms-1 ...

- terms-1 81=

  terms-2 \[PEhE # joik-jek terms-2] ...

- terms-2 82=

  term \[CEhE # term] ...

- term 83=

  sumti | (tag | FA #) (sumti | /KU#/) | termset | NA KU #

- termset 85=

  NUhI # gek terms /NUhU#/ gik terms /NUhU#/ | NUhI # terms /NUhU#/

- sumti 90=

  sumti-1 \[VUhO # relative-clauses]

- sumti-1 91=

  sumti-2 \[(ek | joik) \[stag] KE # sumti /KEhE#/]

- sumti-2 92=

  sumti-3 \[joik-ek sumti-3] ...

- sumti-3 93=

  sumti-4 \[(ek | joik) \[stag] BO # sumti-3]

- sumti-4 94=

  sumti-5 | gek sumti gik sumti-4

- sumti-5 95=

  \[quantifier] sumti-6 \[relative-clauses] | quantifier selbri /KU#/ \[relative-clauses]

- sumti-6 97=

  (LAhE # | NAhE BO #) \[relative-clauses] sumti /LUhU#/ | KOhA # | lerfu-string /BOI#/ | LA # \[relative-clauses] CMENE ... # | (LA | LE) # sumti-tail /KU#/ | LI # mex /LOhO#/ | ZO any-word # | LU text /LIhU#/ | LOhU any-word ... LEhU # | ZOI any-word anything any-word #

- sumti-tail 111=

  \[sumti-6 \[relative-clauses]] sumti-tail-1 | relative-clauses sumti-tail-1

- sumti-tail-1 112=

  \[quantifier] selbri \[relative-clauses] | quantifier sumti

- relative-clauses 121=

  relative-clause \[ZIhE # relative-clause] ...

- relative-clause 122=

  GOI # term /GEhU#/ | NOI # subsentence /KUhO#/

- selbri 130=

  \[tag] selbri-1

- selbri-1 131=

  selbri-2 | NA # selbri

- selbri-2 132=

  selbri-3 \[CO # selbri-2]

- selbri-3 133=

  selbri-4 ...

- selbri-4 134=

  selbri-5 \[joik-jek selbri-5 | joik \[stag] KE # selbri-3 /KEhE#/] ...

- selbri-5 135=

  selbri-6 \[(jek | joik) \[stag] BO # selbri-5]

- selbri-6 136=

  tanru-unit \[BO # selbri-6] | \[NAhE #] guhek selbri gik selbri-6

- tanru-unit 150=

  tanru-unit-1 \[CEI # tanru-unit-1] ...

- tanru-unit-1 151=

  tanru-unit-2 \[linkargs]

- tanru-unit-2 152=

  BRIVLA # | GOhA \[RAhO] # | KE # selbri-3 /KEhE#/ | ME # sumti /MEhU#/ \[MOI #] | (number | lerfu-string) MOI # | NUhA # mex-operator | SE # tanru-unit-2 | JAI # \[tag] tanru-unit-2 | any-word (ZEI any-word) ... | NAhE # tanru-unit-2 | NU \[NAI] # \[joik-jek NU \[NAI] #] ... subsentence /KEI#/

- linkargs 160=

  BE # term \[links] /BEhO#/

- links 161=

  BEI # term \[links]

- quantifier 300=

  number /BOI#/ | VEI # mex /VEhO#/

- mex 310=

  mex-1 \[operator mex-1] ... | FUhA # rp-expression

- mex-1 311=

  mex-2 \[BIhE # operator mex-1]

- mex-2 312=

  operand | \[PEhO #] operator mex-2 ... /KUhE#/

- rp-expression 330=

  rp-operand rp-operand operator

- rp-operand 332=

  operand | rp-expression

- operator 370=

  operator-1 \[joik-jek operator-1 | joik \[stag] KE # operator /KEhE#/] ...

- operator-1 371=

  operator-2 | guhek operator-1 gik operator-2 | operator-2 (jek | joik) \[stag] BO # operator-1

- operator-2 372=

  mex-operator | KE # operator /KEhE#/

- mex-operator 374=

  SE # mex-operator | NAhE # mex-operator | MAhO # mex /TEhU#/ | NAhU # selbri /TEhU#/ | VUhU #

- operand 381=

  operand-1 \[(ek | joik) \[stag] KE # operand /KEhE#/]

- operand-1 382=

  operand-2 \[joik-ek operand-2] ...

- operand-2 383=

  operand-3 \[(ek | joik) \[stag] BO # operand-2]

- operand-3 385=

  quantifier | lerfu-string /BOI#/ | NIhE # selbri /TEhU#/ | MOhE # sumti /TEhU#/ | JOhI # mex-2 ... /TEhU#/ | gek operand gik operand-3 | (LAhE # | NAhE BO #) operand /LUhU#/

- number 812=

  PA \[PA | lerfu-word] ...

- lerfu-string 817=

  lerfu-word \[PA | lerfu-word] ...

- lerfu-word 987=

  BY | any-word BU | LAU lerfu-word | TEI lerfu-string FOI

- ek 802=

  \[NA] \[SE] A \[NAI]

- gihek 818=

  \[NA] \[SE] GIhA \[NAI]

- jek 805=

  \[NA] \[SE] JA \[NAI]

- joik 806=

  \[SE] JOI \[NAI] | interval | GAhO interval GAhO

- interval 932=

  \[SE] BIhI \[NAI]

- joik-ek 421=

  joik # | ek #

- joik-jek 422=

  joik # | jek #

- gek 807=

  \[SE] GA \[NAI] # | joik GI # | stag gik

- guhek 808=

  \[SE] GUhA \[NAI] #

- gik 816=

  GI \[NAI] #

- tag 491=

  tense-modal \[joik-jek tense-modal] ...

- stag 971=

  simple-tense-modal \[(jek | joik) simple-tense-modal] ...

- tense-modal 815=

  simple-tense-modal # | FIhO # selbri /FEhU#/

- simple-tense-modal 972=

  \[NAhE] \[SE] BAI \[NAI] \[KI] | \[NAhE] (time \[space] | space \[time]) & CAhA \[KI] | KI | CUhE

- time 1030=

  ZI & time-offset ... & ZEhA \[PU \[NAI]] & interval-property ...

- time-offset 1033=

  PU \[NAI] \[ZI]

- space 1040=

  VA & space-offset ... & space-interval & (MOhI space-offset)

- space-offset 1045=

  FAhA \[NAI] \[VA]

- space-interval 1046=

  ((VEhA & VIhA) \[FAhA \[NAI]]) & space-int-props

- space-int-props 1049=

  (FEhE interval-property) ...

- interval-property 1051=

  number ROI \[NAI] | TAhE \[NAI] | ZAhO \[NAI]

- free 32=

  SEI # \[terms \[CU #]] selbri /SEhU/ | SOI # sumti \[sumti] /SEhU/ | vocative \[relative-clauses] selbri \[relative-clauses] /DOhU/ | vocative \[relative-clauses] CMENE ... # \[relative-clauses] /DOhU/ | vocative \[sumti] /DOhU/ | (number | lerfu-string) MAI | TO text /TOI/ | XI # (number | lerfu-string) /BOI/ | XI # VEI # mex /VEhO/

- vocative 415=

  (COI \[NAI]) ... & DOI

- indicators 411=

  \[FUhE] indicator ...

- indicator 413=

  (UI | CAI) \[NAI] | Y | DAhO | FUhO

The following rules are non-formal:

- word 1100=

  \[BAhE] any-word \[indicators]

- any-word =

  “any single word (no compound cmavo)”

- anything =

  “any text at all, whether Lojban or not”

- null 1101=

  any-word SI | utterance SA | text SU

FAhO is a universal terminator and signals the end of parsable input.

## EBNF Cross-Reference

- A

  [BNF rule #802](chapter21#cll_bnf-802) 802

- BAI

  [BNF rule #972](chapter21#cll_bnf-972) 972

- BAhE

  [BNF rule #1100](chapter21#cll_bnf-1100) 1100

- BE

  [BNF rule #160](chapter21#cll_bnf-160) 160

- BEI

  [BNF rule #161](chapter21#cll_bnf-161) 161

- BEhO

  [BNF rule #160](chapter21#cll_bnf-160) 160

- BIhE

  [BNF rule #311](chapter21#cll_bnf-311) 311

- BIhI

  [BNF rule #932](chapter21#cll_bnf-932) 932

- BO

  [BNF rule #52](chapter21#cll_bnf-52)52, [BNF rule #383](chapter21#cll_bnf-383)383, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #135](chapter21#cll_bnf-135)135, [BNF rule #136](chapter21#cll_bnf-136)136, [BNF rule #13](chapter21#cll_bnf-13)13, [BNF rule #93](chapter21#cll_bnf-93)93, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #2](chapter21#cll_bnf-2)2

- BOI

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #300](chapter21#cll_bnf-300)300, [BNF rule #97](chapter21#cll_bnf-97)97

- BRIVLA

  [BNF rule #152](chapter21#cll_bnf-152) 152

- BU

  [BNF rule #987](chapter21#cll_bnf-987) 987

- BY

  [BNF rule #987](chapter21#cll_bnf-987) 987

- CAI

  [BNF rule #413](chapter21#cll_bnf-413) 413

- CAhA

  [BNF rule #972](chapter21#cll_bnf-972) 972

- CEI

  [BNF rule #150](chapter21#cll_bnf-150) 150

- CEhE

  [BNF rule #82](chapter21#cll_bnf-82) 82

- CMENE

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #0](chapter21#cll_bnf-0)0

- CO

  [BNF rule #132](chapter21#cll_bnf-132) 132

- COI

  [BNF rule #415](chapter21#cll_bnf-415) 415

- CU

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #40](chapter21#cll_bnf-40)40

- CUhE

  [BNF rule #972](chapter21#cll_bnf-972) 972

- DAhO

  [BNF rule #413](chapter21#cll_bnf-413) 413

- DOI

  [BNF rule #415](chapter21#cll_bnf-415) 415

- DOhU

  [BNF rule #32](chapter21#cll_bnf-32) 32

- FA

  [BNF rule #83](chapter21#cll_bnf-83) 83

- FAhA

  [BNF rule #1046](chapter21#cll_bnf-1046)1046, [BNF rule #1045](chapter21#cll_bnf-1045)1045

- FEhE

  [BNF rule #1049](chapter21#cll_bnf-1049) 1049

- FEhU

  [BNF rule #815](chapter21#cll_bnf-815) 815

- FIhO

  [BNF rule #815](chapter21#cll_bnf-815) 815

- FOI

  [BNF rule #987](chapter21#cll_bnf-987) 987

- FUhA

  [BNF rule #310](chapter21#cll_bnf-310) 310

- FUhE

  [BNF rule #411](chapter21#cll_bnf-411) 411

- FUhO

  [BNF rule #413](chapter21#cll_bnf-413) 413

- GA

  [BNF rule #807](chapter21#cll_bnf-807) 807

- GAhO

  [BNF rule #806](chapter21#cll_bnf-806) 806

- GEhU

  [BNF rule #122](chapter21#cll_bnf-122) 122

- GI

  [BNF rule #807](chapter21#cll_bnf-807)807, [BNF rule #816](chapter21#cll_bnf-816)816

- GIhA

  [BNF rule #818](chapter21#cll_bnf-818) 818

- GOI

  [BNF rule #122](chapter21#cll_bnf-122) 122

- GOhA

  [BNF rule #152](chapter21#cll_bnf-152) 152

- GUhA

  [BNF rule #808](chapter21#cll_bnf-808) 808

- I

  [BNF rule #10](chapter21#cll_bnf-10)10, [BNF rule #12](chapter21#cll_bnf-12)12, [BNF rule #13](chapter21#cll_bnf-13)13, [BNF rule #2](chapter21#cll_bnf-2)2

- JA

  [BNF rule #805](chapter21#cll_bnf-805) 805

- JAI

  [BNF rule #152](chapter21#cll_bnf-152) 152

- JOI

  [BNF rule #806](chapter21#cll_bnf-806) 806

- JOhI

  [BNF rule #385](chapter21#cll_bnf-385) 385

- KE

  [BNF rule #50](chapter21#cll_bnf-50)50, [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #381](chapter21#cll_bnf-381)381, [BNF rule #372](chapter21#cll_bnf-372)372, [BNF rule #370](chapter21#cll_bnf-370)370, [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #91](chapter21#cll_bnf-91)91, [BNF rule #152](chapter21#cll_bnf-152)152

- KEI

  [BNF rule #152](chapter21#cll_bnf-152) 152

- KEhE

  [BNF rule #50](chapter21#cll_bnf-50)50, [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #381](chapter21#cll_bnf-381)381, [BNF rule #372](chapter21#cll_bnf-372)372, [BNF rule #370](chapter21#cll_bnf-370)370, [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #91](chapter21#cll_bnf-91)91, [BNF rule #152](chapter21#cll_bnf-152)152

- KI

  [BNF rule #972](chapter21#cll_bnf-972) 972

- KOhA

  [BNF rule #97](chapter21#cll_bnf-97) 97

- KU

  [BNF rule #95](chapter21#cll_bnf-95)95, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #83](chapter21#cll_bnf-83)83

- KUhE

  [BNF rule #312](chapter21#cll_bnf-312) 312

- KUhO

  [BNF rule #122](chapter21#cll_bnf-122) 122

- LA

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LAU

  [BNF rule #987](chapter21#cll_bnf-987) 987

- LAhE

  [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #97](chapter21#cll_bnf-97)97

- LE

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LEhU

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LI

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LIhU

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LOhO

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LOhU

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LU

  [BNF rule #97](chapter21#cll_bnf-97) 97

- LUhU

  [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #97](chapter21#cll_bnf-97)97

- MAI

  [BNF rule #32](chapter21#cll_bnf-32) 32

- MAhO

  [BNF rule #374](chapter21#cll_bnf-374) 374

- ME

  [BNF rule #152](chapter21#cll_bnf-152) 152

- MEhU

  [BNF rule #152](chapter21#cll_bnf-152) 152

- MOI

  [BNF rule #152](chapter21#cll_bnf-152) 152

- MOhE

  [BNF rule #385](chapter21#cll_bnf-385) 385

- MOhI

  [BNF rule #1040](chapter21#cll_bnf-1040) 1040

- NA

  [BNF rule #802](chapter21#cll_bnf-802)802, [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #818](chapter21#cll_bnf-818)818, [BNF rule #805](chapter21#cll_bnf-805)805, [BNF rule #131](chapter21#cll_bnf-131)131, [BNF rule #83](chapter21#cll_bnf-83)83

- NAI

  [BNF rule #802](chapter21#cll_bnf-802)802, [BNF rule #807](chapter21#cll_bnf-807)807, [BNF rule #818](chapter21#cll_bnf-818)818, [BNF rule #816](chapter21#cll_bnf-816)816, [BNF rule #808](chapter21#cll_bnf-808)808, [BNF rule #413](chapter21#cll_bnf-413)413, [BNF rule #1051](chapter21#cll_bnf-1051)1051, [BNF rule #932](chapter21#cll_bnf-932)932, [BNF rule #805](chapter21#cll_bnf-805)805, [BNF rule #806](chapter21#cll_bnf-806)806, [BNF rule #972](chapter21#cll_bnf-972)972, [BNF rule #1046](chapter21#cll_bnf-1046)1046, [BNF rule #1045](chapter21#cll_bnf-1045)1045, [BNF rule #152](chapter21#cll_bnf-152)152, [BNF rule #0](chapter21#cll_bnf-0)0, [BNF rule #1033](chapter21#cll_bnf-1033)1033, [BNF rule #1030](chapter21#cll_bnf-1030)1030, [BNF rule #415](chapter21#cll_bnf-415)415

- NAhE

  [BNF rule #374](chapter21#cll_bnf-374)374, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #136](chapter21#cll_bnf-136)136, [BNF rule #972](chapter21#cll_bnf-972)972, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #152](chapter21#cll_bnf-152)152

- NAhU

  [BNF rule #374](chapter21#cll_bnf-374) 374

- NIhE

  [BNF rule #385](chapter21#cll_bnf-385) 385

- NIhO

  [BNF rule #4](chapter21#cll_bnf-4)4, [BNF rule #2](chapter21#cll_bnf-2)2

- NOI

  [BNF rule #122](chapter21#cll_bnf-122) 122

- NU

  [BNF rule #152](chapter21#cll_bnf-152) 152

- NUhA

  [BNF rule #152](chapter21#cll_bnf-152) 152

- NUhI

  [BNF rule #85](chapter21#cll_bnf-85) 85

- NUhU

  [BNF rule #85](chapter21#cll_bnf-85) 85

- PA

  [BNF rule #817](chapter21#cll_bnf-817)817, [BNF rule #812](chapter21#cll_bnf-812)812

- PEhE

  [BNF rule #81](chapter21#cll_bnf-81) 81

- PEhO

  [BNF rule #312](chapter21#cll_bnf-312) 312

- PU

  [BNF rule #1033](chapter21#cll_bnf-1033)1033, [BNF rule #1030](chapter21#cll_bnf-1030)1030

- RAhO

  [BNF rule #152](chapter21#cll_bnf-152) 152

- ROI

  [BNF rule #1051](chapter21#cll_bnf-1051) 1051

- SA

  [BNF rule #1101](chapter21#cll_bnf-1101) 1101

- SE

  [BNF rule #802](chapter21#cll_bnf-802)802, [BNF rule #807](chapter21#cll_bnf-807)807, [BNF rule #818](chapter21#cll_bnf-818)818, [BNF rule #808](chapter21#cll_bnf-808)808, [BNF rule #932](chapter21#cll_bnf-932)932, [BNF rule #805](chapter21#cll_bnf-805)805, [BNF rule #806](chapter21#cll_bnf-806)806, [BNF rule #374](chapter21#cll_bnf-374)374, [BNF rule #972](chapter21#cll_bnf-972)972, [BNF rule #152](chapter21#cll_bnf-152)152

- SEI

  [BNF rule #32](chapter21#cll_bnf-32) 32

- SEhU

  [BNF rule #32](chapter21#cll_bnf-32) 32

- SI

  [BNF rule #1101](chapter21#cll_bnf-1101) 1101

- SOI

  [BNF rule #32](chapter21#cll_bnf-32) 32

- SU

  [BNF rule #1101](chapter21#cll_bnf-1101) 1101

- TAhE

  [BNF rule #1051](chapter21#cll_bnf-1051) 1051

- TEI

  [BNF rule #987](chapter21#cll_bnf-987) 987

- TEhU

  [BNF rule #374](chapter21#cll_bnf-374)374, [BNF rule #385](chapter21#cll_bnf-385)385

- TO

  [BNF rule #32](chapter21#cll_bnf-32) 32

- TOI

  [BNF rule #32](chapter21#cll_bnf-32) 32

- TUhE

  [BNF rule #14](chapter21#cll_bnf-14) 14

- TUhU

  [BNF rule #14](chapter21#cll_bnf-14) 14

- UI

  [BNF rule #413](chapter21#cll_bnf-413) 413

- VA

  [BNF rule #1045](chapter21#cll_bnf-1045)1045, [BNF rule #1040](chapter21#cll_bnf-1040)1040

- VAU

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #71](chapter21#cll_bnf-71)71

- VEI

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #300](chapter21#cll_bnf-300)300

- VEhA

  [BNF rule #1046](chapter21#cll_bnf-1046) 1046

- VEhO

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #300](chapter21#cll_bnf-300)300

- VIhA

  [BNF rule #1046](chapter21#cll_bnf-1046) 1046

- VUhO

  [BNF rule #90](chapter21#cll_bnf-90) 90

- VUhU

  [BNF rule #374](chapter21#cll_bnf-374) 374

- XI

  [BNF rule #32](chapter21#cll_bnf-32) 32

- Y

  [BNF rule #413](chapter21#cll_bnf-413) 413

- ZAhO

  [BNF rule #1051](chapter21#cll_bnf-1051) 1051

- ZEI

  [BNF rule #152](chapter21#cll_bnf-152) 152

- ZEhA

  [BNF rule #1030](chapter21#cll_bnf-1030) 1030

- ZI

  [BNF rule #1033](chapter21#cll_bnf-1033)1033, [BNF rule #1030](chapter21#cll_bnf-1030)1030

- ZIhE

  [BNF rule #121](chapter21#cll_bnf-121) 121

- ZO

  [BNF rule #97](chapter21#cll_bnf-97) 97

- ZOI

  [BNF rule #97](chapter21#cll_bnf-97) 97

- ZOhU

  [BNF rule #30](chapter21#cll_bnf-30) 30

- any-word

  [BNF rule #987](chapter21#cll_bnf-987)987, [BNF rule #1101](chapter21#cll_bnf-1101)1101, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #152](chapter21#cll_bnf-152)152, [BNF rule #1100](chapter21#cll_bnf-1100)1100

- anything

  [BNF rule #97](chapter21#cll_bnf-97) 97

- bridi-tail

  [BNF rule #50](chapter21#cll_bnf-50)50, [BNF rule #40](chapter21#cll_bnf-40)40

- bridi-tail-1

  [BNF rule #50](chapter21#cll_bnf-50) 50

- bridi-tail-2

  [BNF rule #51](chapter21#cll_bnf-51)51, [BNF rule #52](chapter21#cll_bnf-52)52

- bridi-tail-3

  [BNF rule #52](chapter21#cll_bnf-52) 52

- ek

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #421](chapter21#cll_bnf-421)421, [BNF rule #383](chapter21#cll_bnf-383)383, [BNF rule #381](chapter21#cll_bnf-381)381, [BNF rule #91](chapter21#cll_bnf-91)91, [BNF rule #93](chapter21#cll_bnf-93)93

- fragment

  [BNF rule #10](chapter21#cll_bnf-10) 10

- free

  [BNF rule #0](chapter21#cll_bnf-0) 0

- gek

  [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #94](chapter21#cll_bnf-94)94, [BNF rule #85](chapter21#cll_bnf-85)85

- gek-sentence

  [BNF rule #53](chapter21#cll_bnf-53)53, [BNF rule #54](chapter21#cll_bnf-54)54

- gihek

  [BNF rule #51](chapter21#cll_bnf-51)51, [BNF rule #52](chapter21#cll_bnf-52)52, [BNF rule #50](chapter21#cll_bnf-50)50, [BNF rule #20](chapter21#cll_bnf-20)20

- gik

  [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #807](chapter21#cll_bnf-807)807, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #136](chapter21#cll_bnf-136)136, [BNF rule #94](chapter21#cll_bnf-94)94, [BNF rule #85](chapter21#cll_bnf-85)85

- guhek

  [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #136](chapter21#cll_bnf-136)136

- indicator

  [BNF rule #411](chapter21#cll_bnf-411) 411

- indicators

  [BNF rule #0](chapter21#cll_bnf-0)0, [BNF rule #1100](chapter21#cll_bnf-1100)1100

- interval

  [BNF rule #806](chapter21#cll_bnf-806) 806

- interval-property

  [BNF rule #1049](chapter21#cll_bnf-1049)1049, [BNF rule #1030](chapter21#cll_bnf-1030)1030

- jek

  [BNF rule #422](chapter21#cll_bnf-422)422, [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #135](chapter21#cll_bnf-135)135, [BNF rule #971](chapter21#cll_bnf-971)971, [BNF rule #13](chapter21#cll_bnf-13)13, [BNF rule #2](chapter21#cll_bnf-2)2

- joik

  [BNF rule #807](chapter21#cll_bnf-807)807, [BNF rule #421](chapter21#cll_bnf-421)421, [BNF rule #422](chapter21#cll_bnf-422)422, [BNF rule #383](chapter21#cll_bnf-383)383, [BNF rule #381](chapter21#cll_bnf-381)381, [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #370](chapter21#cll_bnf-370)370, [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #135](chapter21#cll_bnf-135)135, [BNF rule #971](chapter21#cll_bnf-971)971, [BNF rule #13](chapter21#cll_bnf-13)13, [BNF rule #91](chapter21#cll_bnf-91)91, [BNF rule #93](chapter21#cll_bnf-93)93, [BNF rule #2](chapter21#cll_bnf-2)2

- joik-ek

  [BNF rule #382](chapter21#cll_bnf-382)382, [BNF rule #92](chapter21#cll_bnf-92)92

- joik-jek

  [BNF rule #370](chapter21#cll_bnf-370)370, [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #12](chapter21#cll_bnf-12)12, [BNF rule #491](chapter21#cll_bnf-491)491, [BNF rule #152](chapter21#cll_bnf-152)152, [BNF rule #81](chapter21#cll_bnf-81)81, [BNF rule #0](chapter21#cll_bnf-0)0

- lerfu-string

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #987](chapter21#cll_bnf-987)987, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #152](chapter21#cll_bnf-152)152

- lerfu-word

  [BNF rule #817](chapter21#cll_bnf-817)817, [BNF rule #987](chapter21#cll_bnf-987)987, [BNF rule #812](chapter21#cll_bnf-812)812

- linkargs

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #151](chapter21#cll_bnf-151)151

- links

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #160](chapter21#cll_bnf-160)160, [BNF rule #161](chapter21#cll_bnf-161)161

- mex

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #374](chapter21#cll_bnf-374)374, [BNF rule #300](chapter21#cll_bnf-300)300, [BNF rule #97](chapter21#cll_bnf-97)97

- mex-1

  [BNF rule #311](chapter21#cll_bnf-311)311, [BNF rule #310](chapter21#cll_bnf-310)310

- mex-2

  [BNF rule #311](chapter21#cll_bnf-311)311, [BNF rule #312](chapter21#cll_bnf-312)312, [BNF rule #385](chapter21#cll_bnf-385)385

- mex-operator

  [BNF rule #374](chapter21#cll_bnf-374)374, [BNF rule #372](chapter21#cll_bnf-372)372, [BNF rule #152](chapter21#cll_bnf-152)152

- number

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #1051](chapter21#cll_bnf-1051)1051, [BNF rule #300](chapter21#cll_bnf-300)300, [BNF rule #152](chapter21#cll_bnf-152)152

- operand

  [BNF rule #312](chapter21#cll_bnf-312)312, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #381](chapter21#cll_bnf-381)381, [BNF rule #332](chapter21#cll_bnf-332)332

- operand-1

  [BNF rule #381](chapter21#cll_bnf-381) 381

- operand-2

  [BNF rule #382](chapter21#cll_bnf-382)382, [BNF rule #383](chapter21#cll_bnf-383)383

- operand-3

  [BNF rule #383](chapter21#cll_bnf-383)383, [BNF rule #385](chapter21#cll_bnf-385)385

- operator

  [BNF rule #311](chapter21#cll_bnf-311)311, [BNF rule #312](chapter21#cll_bnf-312)312, [BNF rule #310](chapter21#cll_bnf-310)310, [BNF rule #372](chapter21#cll_bnf-372)372, [BNF rule #370](chapter21#cll_bnf-370)370, [BNF rule #330](chapter21#cll_bnf-330)330

- operator-1

  [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #370](chapter21#cll_bnf-370)370

- operator-2

  [BNF rule #371](chapter21#cll_bnf-371) 371

- paragraph

  [BNF rule #4](chapter21#cll_bnf-4) 4

- paragraphs

  [BNF rule #4](chapter21#cll_bnf-4)4, [BNF rule #2](chapter21#cll_bnf-2)2

- prenex

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #11](chapter21#cll_bnf-11)11, [BNF rule #41](chapter21#cll_bnf-41)41

- quantifier

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #95](chapter21#cll_bnf-95)95, [BNF rule #112](chapter21#cll_bnf-112)112

- relative-clause

  [BNF rule #121](chapter21#cll_bnf-121) 121

- relative-clauses

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #95](chapter21#cll_bnf-95)95, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #112](chapter21#cll_bnf-112)112, [BNF rule #111](chapter21#cll_bnf-111)111, [BNF rule #90](chapter21#cll_bnf-90)90

- rp-expression

  [BNF rule #310](chapter21#cll_bnf-310)310, [BNF rule #332](chapter21#cll_bnf-332)332

- rp-operand

  [BNF rule #330](chapter21#cll_bnf-330) 330

- selbri

  [BNF rule #53](chapter21#cll_bnf-53)53, [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #374](chapter21#cll_bnf-374)374, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #131](chapter21#cll_bnf-131)131, [BNF rule #136](chapter21#cll_bnf-136)136, [BNF rule #95](chapter21#cll_bnf-95)95, [BNF rule #112](chapter21#cll_bnf-112)112, [BNF rule #815](chapter21#cll_bnf-815)815

- selbri-1

  [BNF rule #130](chapter21#cll_bnf-130) 130

- selbri-2

  [BNF rule #131](chapter21#cll_bnf-131)131, [BNF rule #132](chapter21#cll_bnf-132)132

- selbri-3

  [BNF rule #132](chapter21#cll_bnf-132)132, [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #152](chapter21#cll_bnf-152)152

- selbri-4

  [BNF rule #133](chapter21#cll_bnf-133) 133

- selbri-5

  [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #135](chapter21#cll_bnf-135)135

- selbri-6

  [BNF rule #135](chapter21#cll_bnf-135)135, [BNF rule #136](chapter21#cll_bnf-136)136

- sentence

  [BNF rule #14](chapter21#cll_bnf-14)14, [BNF rule #41](chapter21#cll_bnf-41)41

- simple-tense-modal

  [BNF rule #971](chapter21#cll_bnf-971)971, [BNF rule #815](chapter21#cll_bnf-815)815

- space

  [BNF rule #972](chapter21#cll_bnf-972) 972

- space-int-props

  [BNF rule #1046](chapter21#cll_bnf-1046) 1046

- space-interval

  [BNF rule #1040](chapter21#cll_bnf-1040) 1040

- space-offset

  [BNF rule #1040](chapter21#cll_bnf-1040) 1040

- stag

  [BNF rule #52](chapter21#cll_bnf-52)52, [BNF rule #50](chapter21#cll_bnf-50)50, [BNF rule #807](chapter21#cll_bnf-807)807, [BNF rule #383](chapter21#cll_bnf-383)383, [BNF rule #381](chapter21#cll_bnf-381)381, [BNF rule #371](chapter21#cll_bnf-371)371, [BNF rule #370](chapter21#cll_bnf-370)370, [BNF rule #134](chapter21#cll_bnf-134)134, [BNF rule #135](chapter21#cll_bnf-135)135, [BNF rule #13](chapter21#cll_bnf-13)13, [BNF rule #91](chapter21#cll_bnf-91)91, [BNF rule #93](chapter21#cll_bnf-93)93, [BNF rule #2](chapter21#cll_bnf-2)2

- statement

  [BNF rule #10](chapter21#cll_bnf-10)10, [BNF rule #11](chapter21#cll_bnf-11)11

- statement-1

  [BNF rule #11](chapter21#cll_bnf-11) 11

- statement-2

  [BNF rule #12](chapter21#cll_bnf-12)12, [BNF rule #13](chapter21#cll_bnf-13)13

- statement-3

  [BNF rule #13](chapter21#cll_bnf-13) 13

- subsentence

  [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #122](chapter21#cll_bnf-122)122, [BNF rule #41](chapter21#cll_bnf-41)41, [BNF rule #152](chapter21#cll_bnf-152)152

- sumti

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #385](chapter21#cll_bnf-385)385, [BNF rule #91](chapter21#cll_bnf-91)91, [BNF rule #94](chapter21#cll_bnf-94)94, [BNF rule #97](chapter21#cll_bnf-97)97, [BNF rule #112](chapter21#cll_bnf-112)112, [BNF rule #152](chapter21#cll_bnf-152)152, [BNF rule #83](chapter21#cll_bnf-83)83

- sumti-1

  [BNF rule #90](chapter21#cll_bnf-90) 90

- sumti-2

  [BNF rule #91](chapter21#cll_bnf-91) 91

- sumti-3

  [BNF rule #92](chapter21#cll_bnf-92)92, [BNF rule #93](chapter21#cll_bnf-93)93

- sumti-4

  [BNF rule #93](chapter21#cll_bnf-93)93, [BNF rule #94](chapter21#cll_bnf-94)94

- sumti-5

  [BNF rule #94](chapter21#cll_bnf-94) 94

- sumti-6

  [BNF rule #95](chapter21#cll_bnf-95)95, [BNF rule #111](chapter21#cll_bnf-111)111

- sumti-tail

  [BNF rule #97](chapter21#cll_bnf-97) 97

- sumti-tail-1

  [BNF rule #111](chapter21#cll_bnf-111) 111

- tag

  [BNF rule #54](chapter21#cll_bnf-54)54, [BNF rule #130](chapter21#cll_bnf-130)130, [BNF rule #14](chapter21#cll_bnf-14)14, [BNF rule #152](chapter21#cll_bnf-152)152, [BNF rule #83](chapter21#cll_bnf-83)83

- tail-terms

  [BNF rule #51](chapter21#cll_bnf-51)51, [BNF rule #52](chapter21#cll_bnf-52)52, [BNF rule #53](chapter21#cll_bnf-53)53, [BNF rule #50](chapter21#cll_bnf-50)50, [BNF rule #54](chapter21#cll_bnf-54)54

- tanru-unit

  [BNF rule #136](chapter21#cll_bnf-136) 136

- tanru-unit-1

  [BNF rule #150](chapter21#cll_bnf-150) 150

- tanru-unit-2

  [BNF rule #151](chapter21#cll_bnf-151)151, [BNF rule #152](chapter21#cll_bnf-152)152

- tense-modal

  [BNF rule #491](chapter21#cll_bnf-491) 491

- term

  [BNF rule #160](chapter21#cll_bnf-160)160, [BNF rule #161](chapter21#cll_bnf-161)161, [BNF rule #122](chapter21#cll_bnf-122)122, [BNF rule #82](chapter21#cll_bnf-82)82

- terms

  [BNF rule #20](chapter21#cll_bnf-20)20, [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #30](chapter21#cll_bnf-30)30, [BNF rule #40](chapter21#cll_bnf-40)40, [BNF rule #71](chapter21#cll_bnf-71)71, [BNF rule #85](chapter21#cll_bnf-85)85

- terms-1

  [BNF rule #80](chapter21#cll_bnf-80) 80

- terms-2

  [BNF rule #81](chapter21#cll_bnf-81) 81

- termset

  [BNF rule #83](chapter21#cll_bnf-83) 83

- text

  [BNF rule #32](chapter21#cll_bnf-32)32, [BNF rule #1101](chapter21#cll_bnf-1101)1101, [BNF rule #97](chapter21#cll_bnf-97)97

- text-1

  [BNF rule #14](chapter21#cll_bnf-14)14, [BNF rule #0](chapter21#cll_bnf-0)0

- time

  [BNF rule #972](chapter21#cll_bnf-972) 972

- time-offset

  [BNF rule #1030](chapter21#cll_bnf-1030) 1030

- utterance

  [BNF rule #1101](chapter21#cll_bnf-1101) 1101

- vocative

  [BNF rule #32](chapter21#cll_bnf-32) 32

