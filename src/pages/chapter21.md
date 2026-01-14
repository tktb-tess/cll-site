---
layout: ../layouts/Layout.astro
title: 'Chapter 21. Formal Grammars'
---

![The picture for chapter 21](../assets/chapter21.gif)

## Table of Contents

## 21.1. EBNF Grammar of Lojban

Lojban Machine Grammar, EBNF Version, Final Baseline

This EBNF document is explicitly dedicated to the public domain by its author, The Logical Language Group, Inc. Contact that organization at: 2904 Beau Lane, Fairfax VA 22031 USA 703-385-0273 (intl: +1 703 385 0273)

Explanation of notation: All rules have the form:

name<sub>number</sub> = bnf-expression

which means that the grammatical construct “name” is defined by “bnf-expression”. The number cross-references this grammar with the rule numbers in the YACC grammar. The names are the same as those in the YACC grammar, except that subrules are labeled with A, B, C, ... in the YACC grammar and with 1, 2, 3, ... in this grammar. In addition, rule 971 is “simple\_tag” in the YACC grammar but “stag” in this grammar, because of its frequent appearance.

1. Names in lower case are grammatical constructs.
2. Names in UPPER CASE are selma'o (lexeme) names, and are terminals.
3. Concatenation is expressed by juxtaposition with no operator symbol.
4. | represents alternation (choice).
5. \[\] represents an optional element.
6. & represents and/or (“A & B” is the same as “A | B | A B”).
7. ... represents optional repetition of the construct to the left. Left-grouping is implied; right-grouping is shown by explicit self-referential recursion with no “...”
8. () serves to indicate the grouping of the other operators. Otherwise, “...” binds closer than &, which binds closer than |.
9. \# is shorthand for “\[free ...\]”, a construct which appears in many places.
10. // encloses an elidable terminator, which may be omitted (without change of meaning) if no grammatical ambiguity results.

<div class="font-mono">

- text<sub id="bnf-0">0</sub> =

  \[NAI ...\] \[CMENE ... # | (indicators & free ...)\] \[joik-jek\] text-1

- text-1<sub id="bnf-2">2</sub> =

  \[(I \[jek | joik\] \[\[stag\] BO] #) ... | NIhO ... #] \[paragraphs\]

- paragraphs<sub id="bnf-4">4</sub> =

  paragraph \[NIhO ... # paragraphs\]

- paragraph<sub id="bnf-10">10</sub> =

  (statement | fragment) \[I # \[statement | fragment]\] ...

- statement<sub id="bnf-11">11</sub> =

  statement-1 | prenex statement

- statement-1<sub id="bnf-12">12</sub> =

  statement-2 \[I joik-jek \[statement-2]\] ...

- statement-2<sub id="bnf-13">13</sub> =

  statement-3 \[I \[jek | joik\] \[stag\] BO # \[statement-2]\]

- statement-3<sub id="bnf-14">14</sub> =

  sentence | \[tag\] TUhE # text-1 /TUhU#/

- fragment<sub id="bnf-20">20</sub> =

  ek # | gihek # | quantifier | NA # | terms /VAU#/ | prenex | relative-clauses | links | linkargs

- prenex<sub id="bnf-30">30</sub> =

  terms ZOhU #

- sentence<sub id="bnf-40">40</sub> =

  \[terms \[CU #]\] bridi-tail

- subsentence<sub id="bnf-41">41</sub> =

  sentence | prenex subsentence

- bridi-tail<sub id="bnf-50">50</sub> =

  bridi-tail-1 \[gihek \[stag\] KE # bridi-tail /KEhE#/ tail-terms]

- bridi-tail-1<sub id="bnf-51">51</sub> =

  bridi-tail-2 \[gihek # bridi-tail-2 tail-terms\] ...

- bridi-tail-2<sub id="bnf-52">52</sub> =

  bridi-tail-3 \[gihek \[stag\] BO # bridi-tail-2 tail-terms]

- bridi-tail-3<sub id="bnf-53">53</sub> =

  selbri tail-terms | gek-sentence

- gek-sentence<sub id="bnf-54">54</sub> =

  gek subsentence gik subsentence tail-terms | \[tag\] KE # gek-sentence /KEhE#/ | NA # gek-sentence

- tail-terms<sub id="bnf-71">71</sub> =

  \[terms\] /VAU#/

- terms<sub id="bnf-80">80</sub> =

  terms-1 ...

- terms-1<sub id="bnf-81">81</sub> =

  terms-2 \[PEhE # joik-jek terms-2\] ...

- terms-2<sub id="bnf-82">82</sub> =

  term \[CEhE # term\] ...

- term<sub id="bnf-83">83</sub> =

  sumti | (tag | FA #) (sumti | /KU#/) | termset | NA KU #

- termset<sub id="bnf-85">85</sub> =

  NUhI # gek terms /NUhU#/ gik terms /NUhU#/ | NUhI # terms /NUhU#/

- sumti<sub id="bnf-90">90</sub> =

  sumti-1 \[VUhO # relative-clauses\]

- sumti-1<sub id="bnf-91">91</sub> =

  sumti-2 \[(ek | joik) \[stag\] KE # sumti /KEhE#/]

- sumti-2<sub id="bnf-92">92</sub> =

  sumti-3 \[joik-ek sumti-3\] ...

- sumti-3<sub id="bnf-93">93</sub> =

  sumti-4 \[(ek | joik) \[stag\] BO # sumti-3]

- sumti-4<sub id="bnf-94">94</sub> =

  sumti-5 | gek sumti gik sumti-4

- sumti-5<sub id="bnf-95">95</sub> =

  \[quantifier\] sumti-6 \[relative-clauses\] | quantifier selbri /KU#/ \[relative-clauses\]

- sumti-6<sub id="bnf-97">97</sub> =

  (LAhE # | NAhE BO #) \[relative-clauses\] sumti /LUhU#/ | KOhA # | lerfu-string /BOI#/ | LA # \[relative-clauses\] CMENE ... # | (LA | LE) # sumti-tail /KU#/ | LI # mex /LOhO#/ | ZO any-word # | LU text /LIhU#/ | LOhU any-word ... LEhU # | ZOI any-word anything any-word #

- sumti-tail<sub id="bnf-111">111</sub> =

  \[sumti-6 \[relative-clauses]\] sumti-tail-1 | relative-clauses sumti-tail-1

- sumti-tail-1<sub id="bnf-112">112</sub> =

  \[quantifier\] selbri \[relative-clauses\] | quantifier sumti

- relative-clauses<sub id="bnf-121">121</sub> =

  relative-clause \[ZIhE # relative-clause\] ...

- relative-clause<sub id="bnf-122">122</sub> =

  GOI # term /GEhU#/ | NOI # subsentence /KUhO#/

- selbri<sub id="bnf-130">130</sub> =

  \[tag\] selbri-1

- selbri-1<sub id="bnf-131">131</sub> =

  selbri-2 | NA # selbri

- selbri-2<sub id="bnf-132">132</sub> =

  selbri-3 \[CO # selbri-2\]

- selbri-3<sub id="bnf-133">133</sub> =

  selbri-4 ...

- selbri-4<sub id="bnf-134">134</sub> =

  selbri-5 \[joik-jek selbri-5 | joik \[stag\] KE # selbri-3 /KEhE#/] ...

- selbri-5<sub id="bnf-135">135</sub> =

  selbri-6 \[(jek | joik) \[stag\] BO # selbri-5]

- selbri-6<sub id="bnf-136">136</sub> =

  tanru-unit \[BO # selbri-6\] | \[NAhE #\] guhek selbri gik selbri-6

- tanru-unit<sub id="bnf-150">150</sub> =

  tanru-unit-1 \[CEI # tanru-unit-1\] ...

- tanru-unit-1<sub id="bnf-151">151</sub> =

  tanru-unit-2 \[linkargs\]

- tanru-unit-2<sub id="bnf-152">152</sub> =

  BRIVLA # | GOhA \[RAhO\] # | KE # selbri-3 /KEhE#/ | ME # sumti /MEhU#/ \[MOI #\] | (number | lerfu-string) MOI # | NUhA # mex-operator | SE # tanru-unit-2 | JAI # \[tag\] tanru-unit-2 | any-word (ZEI any-word) ... | NAhE # tanru-unit-2 | NU \[NAI\] # \[joik-jek NU \[NAI\] #] ... subsentence /KEI#/

- linkargs<sub id="bnf-160">160</sub> =

  BE # term \[links\] /BEhO#/

- links<sub id="bnf-161">161</sub> =

  BEI # term \[links\]

- quantifier<sub id="bnf-300">300</sub> =

  number /BOI#/ | VEI # mex /VEhO#/

- mex<sub id="bnf-310">310</sub> =

  mex-1 \[operator mex-1\] ... | FUhA # rp-expression

- mex-1<sub id="bnf-311">311</sub> =

  mex-2 \[BIhE # operator mex-1\]

- mex-2<sub id="bnf-312">312</sub> =

  operand | \[PEhO #\] operator mex-2 ... /KUhE#/

- rp-expression<sub id="bnf-330">330</sub> =

  rp-operand rp-operand operator

- rp-operand<sub id="bnf-332">332</sub> =

  operand | rp-expression

- operator<sub id="bnf-370">370</sub> =

  operator-1 \[joik-jek operator-1 | joik \[stag\] KE # operator /KEhE#/] ...

- operator-1<sub id="bnf-371">371</sub> =

  operator-2 | guhek operator-1 gik operator-2 | operator-2 (jek | joik) \[stag\] BO # operator-1

- operator-2<sub id="bnf-372">372</sub> =

  mex-operator | KE # operator /KEhE#/

- mex-operator<sub id="bnf-374">374</sub> =

  SE # mex-operator | NAhE # mex-operator | MAhO # mex /TEhU#/ | NAhU # selbri /TEhU#/ | VUhU #

- operand<sub id="bnf-381">381</sub> =

  operand-1 \[(ek | joik) \[stag\] KE # operand /KEhE#/]

- operand-1<sub id="bnf-382">382</sub> =

  operand-2 \[joik-ek operand-2\] ...

- operand-2<sub id="bnf-383">383</sub> =

  operand-3 \[(ek | joik) \[stag\] BO # operand-2]

- operand-3<sub id="bnf-385">385</sub> =

  quantifier | lerfu-string /BOI#/ | NIhE # selbri /TEhU#/ | MOhE # sumti /TEhU#/ | JOhI # mex-2 ... /TEhU#/ | gek operand gik operand-3 | (LAhE # | NAhE BO #) operand /LUhU#/

- number<sub id="bnf-812">812</sub> =

  PA \[PA | lerfu-word\] ...

- lerfu-string<sub id="bnf-817">817</sub> =

  lerfu-word \[PA | lerfu-word\] ...

- lerfu-word<sub id="bnf-987">987</sub> =

  BY | any-word BU | LAU lerfu-word | TEI lerfu-string FOI

- ek<sub id="bnf-802">802</sub> =

  \[NA\] \[SE\] A \[NAI\]

- gihek<sub id="bnf-818">818</sub> =

  \[NA\] \[SE\] GIhA \[NAI\]

- jek<sub id="bnf-805">805</sub> =

  \[NA\] \[SE\] JA \[NAI\]

- joik<sub id="bnf-806">806</sub> =

  \[SE\] JOI \[NAI\] | interval | GAhO interval GAhO

- interval<sub id="bnf-932">932</sub> =

  \[SE\] BIhI \[NAI\]

- joik-ek<sub id="bnf-421">421</sub> =

  joik # | ek #

- joik-jek<sub id="bnf-422">422</sub> =

  joik # | jek #

- gek<sub id="bnf-807">807</sub> =

  \[SE\] GA \[NAI\] # | joik GI # | stag gik

- guhek<sub id="bnf-808">808</sub> =

  \[SE\] GUhA \[NAI\] #

- gik<sub id="bnf-816">816</sub> =

  GI \[NAI\] #

- tag<sub id="bnf-491">491</sub> =

  tense-modal \[joik-jek tense-modal\] ...

- stag<sub id="bnf-971">971</sub> =

  simple-tense-modal \[(jek | joik) simple-tense-modal\] ...

- tense-modal<sub id="bnf-815">815</sub> =

  simple-tense-modal # | FIhO # selbri /FEhU#/

- simple-tense-modal<sub id="bnf-972">972</sub> =

  \[NAhE\] \[SE\] BAI \[NAI\] \[KI\] | \[NAhE\] (time \[space\] | space \[time\]) & CAhA \[KI\] | KI | CUhE

- time<sub id="bnf-1030">1030</sub> =

  ZI & time-offset ... & ZEhA \[PU \[NAI]\] & interval-property ...

- time-offset<sub id="bnf-1033">1033</sub> =

  PU \[NAI\] \[ZI\]

- space<sub id="bnf-1040">1040</sub> =

  VA & space-offset ... & space-interval & (MOhI space-offset)

- space-offset<sub id="bnf-1045">1045</sub> =

  FAhA \[NAI\] \[VA\]

- space-interval<sub id="bnf-1046">1046</sub> =

  ((VEhA & VIhA) \[FAhA \[NAI]\]) & space-int-props

- space-int-props<sub id="bnf-1049">1049</sub> =

  (FEhE interval-property) ...

- interval-property<sub id="bnf-1051">1051</sub> =

  number ROI \[NAI\] | TAhE \[NAI\] | ZAhO \[NAI\]

- free<sub id="bnf-32">32</sub> =

  SEI # \[terms \[CU #]\] selbri /SEhU/ | SOI # sumti \[sumti\] /SEhU/ | vocative \[relative-clauses\] selbri \[relative-clauses\] /DOhU/ | vocative \[relative-clauses\] CMENE ... # \[relative-clauses\] /DOhU/ | vocative \[sumti\] /DOhU/ | (number | lerfu-string) MAI | TO text /TOI/ | XI # (number | lerfu-string) /BOI/ | XI # VEI # mex /VEhO/

- vocative<sub id="bnf-415">415</sub> =

  (COI \[NAI\]) ... & DOI

- indicators<sub id="bnf-411">411</sub> =

  \[FUhE\] indicator ...

- indicator<sub id="bnf-413">413</sub> =

  (UI | CAI) \[NAI\] | Y | DAhO | FUhO

The following rules are non-formal:

- word<sub id="bnf-1100">1100</sub> =

  \[BAhE\] any-word \[indicators\]

- any-word =

  “any single word (no compound cmavo)”

- anything =

  “any text at all, whether Lojban or not”

- null<sub id="bnf-1101">1101</sub> =

  any-word SI | utterance SA | text SU

FAhO is a universal terminator and signals the end of parsable input.

</div>

## 21.2. EBNF Cross-Reference

<div class="font-mono">

- A

  [BNF rule #802](/chapter21/#bnf-802)<sub>802</sub>

- BAI

  [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>

- BAhE

  [BNF rule #1100](/chapter21/#bnf-1100)<sub>1100</sub>

- BE

  [BNF rule #160](/chapter21/#bnf-160)<sub>160</sub>

- BEI

  [BNF rule #161](/chapter21/#bnf-161)<sub>161</sub>

- BEhO

  [BNF rule #160](/chapter21/#bnf-160)<sub>160</sub>

- BIhE

  [BNF rule #311](/chapter21/#bnf-311)<sub>311</sub>

- BIhI

  [BNF rule #932](/chapter21/#bnf-932)<sub>932</sub>

- BO

  [BNF rule #52](/chapter21/#bnf-52)<sub>52</sub>, [BNF rule #383](/chapter21/#bnf-383)<sub>383</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #135](/chapter21/#bnf-135)<sub>135</sub>, [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>, [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>, [BNF rule #93](/chapter21/#bnf-93)<sub>93</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- BOI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #300](/chapter21/#bnf-300)<sub>300</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- BRIVLA

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- BU

  [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>

- BY

  [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>

- CAI

  [BNF rule #413](/chapter21/#bnf-413)<sub>413</sub>

- CAhA

  [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>

- CEI

  [BNF rule #150](/chapter21/#bnf-150)<sub>150</sub>

- CEhE

  [BNF rule #82](/chapter21/#bnf-82)<sub>82</sub>

- CMENE

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #0](/chapter21/#bnf-0)<sub>0</sub>

- CO

  [BNF rule #132](/chapter21/#bnf-132)<sub>132</sub>

- COI

  [BNF rule #415](/chapter21/#bnf-415)<sub>415</sub>

- CU

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #40](/chapter21/#bnf-40)<sub>40</sub>

- CUhE

  [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>

- DAhO

  [BNF rule #413](/chapter21/#bnf-413)<sub>413</sub>

- DOI

  [BNF rule #415](/chapter21/#bnf-415)<sub>415</sub>

- DOhU

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- FA

  [BNF rule #83](/chapter21/#bnf-83)<sub>83</sub>

- FAhA

  [BNF rule #1046](/chapter21/#bnf-1046)<sub>1046</sub>, [BNF rule #1045](/chapter21/#bnf-1045)<sub>1045</sub>

- FEhE

  [BNF rule #1049](/chapter21/#bnf-1049)<sub>1049</sub>

- FEhU

  [BNF rule #815](/chapter21/#bnf-815)<sub>815</sub>

- FIhO

  [BNF rule #815](/chapter21/#bnf-815)<sub>815</sub>

- FOI

  [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>

- FUhA

  [BNF rule #310](/chapter21/#bnf-310)<sub>310</sub>

- FUhE

  [BNF rule #411](/chapter21/#bnf-411)<sub>411</sub>

- FUhO

  [BNF rule #413](/chapter21/#bnf-413)<sub>413</sub>

- GA

  [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>

- GAhO

  [BNF rule #806](/chapter21/#bnf-806)<sub>806</sub>

- GEhU

  [BNF rule #122](/chapter21/#bnf-122)<sub>122</sub>

- GI

  [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>, [BNF rule #816](/chapter21/#bnf-816)<sub>816</sub>

- GIhA

  [BNF rule #818](/chapter21/#bnf-818)<sub>818</sub>

- GOI

  [BNF rule #122](/chapter21/#bnf-122)<sub>122</sub>

- GOhA

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- GUhA

  [BNF rule #808](/chapter21/#bnf-808)<sub>808</sub>

- I

  [BNF rule #10](/chapter21/#bnf-10)<sub>10</sub>, [BNF rule #12](/chapter21/#bnf-12)<sub>12</sub>, [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- JA

  [BNF rule #805](/chapter21/#bnf-805)<sub>805</sub>

- JAI

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- JOI

  [BNF rule #806](/chapter21/#bnf-806)<sub>806</sub>

- JOhI

  [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>

- KE

  [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>, [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>, [BNF rule #372](/chapter21/#bnf-372)<sub>372</sub>, [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>, [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- KEI

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- KEhE

  [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>, [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>, [BNF rule #372](/chapter21/#bnf-372)<sub>372</sub>, [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>, [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- KI

  [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>

- KOhA

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- KU

  [BNF rule #95](/chapter21/#bnf-95)<sub>95</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #83](/chapter21/#bnf-83)<sub>83</sub>

- KUhE

  [BNF rule #312](/chapter21/#bnf-312)<sub>312</sub>

- KUhO

  [BNF rule #122](/chapter21/#bnf-122)<sub>122</sub>

- LA

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LAU

  [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>

- LAhE

  [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LE

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LEhU

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LI

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LIhU

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LOhO

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LOhU

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LU

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- LUhU

  [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- MAI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- MAhO

  [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>

- ME

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- MEhU

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- MOI

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- MOhE

  [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>

- MOhI

  [BNF rule #1040](/chapter21/#bnf-1040)<sub>1040</sub>

- NA

  [BNF rule #802](/chapter21/#bnf-802)<sub>802</sub>, [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #818](/chapter21/#bnf-818)<sub>818</sub>, [BNF rule #805](/chapter21/#bnf-805)<sub>805</sub>, [BNF rule #131](/chapter21/#bnf-131)<sub>131</sub>, [BNF rule #83](/chapter21/#bnf-83)<sub>83</sub>

- NAI

  [BNF rule #802](/chapter21/#bnf-802)<sub>802</sub>, [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>, [BNF rule #818](/chapter21/#bnf-818)<sub>818</sub>, [BNF rule #816](/chapter21/#bnf-816)<sub>816</sub>, [BNF rule #808](/chapter21/#bnf-808)<sub>808</sub>, [BNF rule #413](/chapter21/#bnf-413)<sub>413</sub>, [BNF rule #1051](/chapter21/#bnf-1051)<sub>1051</sub>, [BNF rule #932](/chapter21/#bnf-932)<sub>932</sub>, [BNF rule #805](/chapter21/#bnf-805)<sub>805</sub>, [BNF rule #806](/chapter21/#bnf-806)<sub>806</sub>, [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>, [BNF rule #1046](/chapter21/#bnf-1046)<sub>1046</sub>, [BNF rule #1045](/chapter21/#bnf-1045)<sub>1045</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>, [BNF rule #0](/chapter21/#bnf-0)<sub>0</sub>, [BNF rule #1033](/chapter21/#bnf-1033)<sub>1033</sub>, [BNF rule #1030](/chapter21/#bnf-1030)<sub>1030</sub>, [BNF rule #415](/chapter21/#bnf-415)<sub>415</sub>

- NAhE

  [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>, [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- NAhU

  [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>

- NIhE

  [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>

- NIhO

  [BNF rule #4](/chapter21/#bnf-4)<sub>4</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- NOI

  [BNF rule #122](/chapter21/#bnf-122)<sub>122</sub>

- NU

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- NUhA

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- NUhI

  [BNF rule #85](/chapter21/#bnf-85)<sub>85</sub>

- NUhU

  [BNF rule #85](/chapter21/#bnf-85)<sub>85</sub>

- PA

  [BNF rule #817](/chapter21/#bnf-817)<sub>817</sub>, [BNF rule #812](/chapter21/#bnf-812)<sub>812</sub>

- PEhE

  [BNF rule #81](/chapter21/#bnf-81)<sub>81</sub>

- PEhO

  [BNF rule #312](/chapter21/#bnf-312)<sub>312</sub>

- PU

  [BNF rule #1033](/chapter21/#bnf-1033)<sub>1033</sub>, [BNF rule #1030](/chapter21/#bnf-1030)<sub>1030</sub>

- RAhO

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- ROI

  [BNF rule #1051](/chapter21/#bnf-1051)<sub>1051</sub>

- SA

  [BNF rule #1101](/chapter21/#bnf-1101)<sub>1101</sub>

- SE

  [BNF rule #802](/chapter21/#bnf-802)<sub>802</sub>, [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>, [BNF rule #818](/chapter21/#bnf-818)<sub>818</sub>, [BNF rule #808](/chapter21/#bnf-808)<sub>808</sub>, [BNF rule #932](/chapter21/#bnf-932)<sub>932</sub>, [BNF rule #805](/chapter21/#bnf-805)<sub>805</sub>, [BNF rule #806](/chapter21/#bnf-806)<sub>806</sub>, [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>, [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- SEI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- SEhU

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- SI

  [BNF rule #1101](/chapter21/#bnf-1101)<sub>1101</sub>

- SOI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- SU

  [BNF rule #1101](/chapter21/#bnf-1101)<sub>1101</sub>

- TAhE

  [BNF rule #1051](/chapter21/#bnf-1051)<sub>1051</sub>

- TEI

  [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>

- TEhU

  [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>

- TO

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- TOI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- TUhE

  [BNF rule #14](/chapter21/#bnf-14)<sub>14</sub>

- TUhU

  [BNF rule #14](/chapter21/#bnf-14)<sub>14</sub>

- UI

  [BNF rule #413](/chapter21/#bnf-413)<sub>413</sub>

- VA

  [BNF rule #1045](/chapter21/#bnf-1045)<sub>1045</sub>, [BNF rule #1040](/chapter21/#bnf-1040)<sub>1040</sub>

- VAU

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #71](/chapter21/#bnf-71)<sub>71</sub>

- VEI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #300](/chapter21/#bnf-300)<sub>300</sub>

- VEhA

  [BNF rule #1046](/chapter21/#bnf-1046)<sub>1046</sub>

- VEhO

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #300](/chapter21/#bnf-300)<sub>300</sub>

- VIhA

  [BNF rule #1046](/chapter21/#bnf-1046)<sub>1046</sub>

- VUhO

  [BNF rule #90](/chapter21/#bnf-90)<sub>90</sub>

- VUhU

  [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>

- XI

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

- Y

  [BNF rule #413](/chapter21/#bnf-413)<sub>413</sub>

- ZAhO

  [BNF rule #1051](/chapter21/#bnf-1051)<sub>1051</sub>

- ZEI

  [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- ZEhA

  [BNF rule #1030](/chapter21/#bnf-1030)<sub>1030</sub>

- ZI

  [BNF rule #1033](/chapter21/#bnf-1033)<sub>1033</sub>, [BNF rule #1030](/chapter21/#bnf-1030)<sub>1030</sub>

- ZIhE

  [BNF rule #121](/chapter21/#bnf-121)<sub>121</sub>

- ZO

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- ZOI

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- ZOhU

  [BNF rule #30](/chapter21/#bnf-30)<sub>30</sub>

- any-word

  [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>, [BNF rule #1101](/chapter21/#bnf-1101)<sub>1101</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>, [BNF rule #1100](/chapter21/#bnf-1100)<sub>1100</sub>

- anything

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- bridi-tail

  [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>, [BNF rule #40](/chapter21/#bnf-40)<sub>40</sub>

- bridi-tail-1

  [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>

- bridi-tail-2

  [BNF rule #51](/chapter21/#bnf-51)<sub>51</sub>, [BNF rule #52](/chapter21/#bnf-52)<sub>52</sub>

- bridi-tail-3

  [BNF rule #52](/chapter21/#bnf-52)<sub>52</sub>

- ek

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #421](/chapter21/#bnf-421)<sub>421</sub>, [BNF rule #383](/chapter21/#bnf-383)<sub>383</sub>, [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>, [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>, [BNF rule #93](/chapter21/#bnf-93)<sub>93</sub>

- fragment

  [BNF rule #10](/chapter21/#bnf-10)<sub>10</sub>

- free

  [BNF rule #0](/chapter21/#bnf-0)<sub>0</sub>

- gek

  [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #94](/chapter21/#bnf-94)<sub>94</sub>, [BNF rule #85](/chapter21/#bnf-85)<sub>85</sub>

- gek-sentence

  [BNF rule #53](/chapter21/#bnf-53)<sub>53</sub>, [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>

- gihek

  [BNF rule #51](/chapter21/#bnf-51)<sub>51</sub>, [BNF rule #52](/chapter21/#bnf-52)<sub>52</sub>, [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>, [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>

- gik

  [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>, [BNF rule #94](/chapter21/#bnf-94)<sub>94</sub>, [BNF rule #85](/chapter21/#bnf-85)<sub>85</sub>

- guhek

  [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>

- indicator

  [BNF rule #411](/chapter21/#bnf-411)<sub>411</sub>

- indicators

  [BNF rule #0](/chapter21/#bnf-0)<sub>0</sub>, [BNF rule #1100](/chapter21/#bnf-1100)<sub>1100</sub>

- interval

  [BNF rule #806](/chapter21/#bnf-806)<sub>806</sub>

- interval-property

  [BNF rule #1049](/chapter21/#bnf-1049)<sub>1049</sub>, [BNF rule #1030](/chapter21/#bnf-1030)<sub>1030</sub>

- jek

  [BNF rule #422](/chapter21/#bnf-422)<sub>422</sub>, [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #135](/chapter21/#bnf-135)<sub>135</sub>, [BNF rule #971](/chapter21/#bnf-971)<sub>971</sub>, [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- joik

  [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>, [BNF rule #421](/chapter21/#bnf-421)<sub>421</sub>, [BNF rule #422](/chapter21/#bnf-422)<sub>422</sub>, [BNF rule #383](/chapter21/#bnf-383)<sub>383</sub>, [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>, [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>, [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #135](/chapter21/#bnf-135)<sub>135</sub>, [BNF rule #971](/chapter21/#bnf-971)<sub>971</sub>, [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>, [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>, [BNF rule #93](/chapter21/#bnf-93)<sub>93</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- joik-ek

  [BNF rule #382](/chapter21/#bnf-382)<sub>382</sub>, [BNF rule #92](/chapter21/#bnf-92)<sub>92</sub>

- joik-jek

  [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>, [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #12](/chapter21/#bnf-12)<sub>12</sub>, [BNF rule #491](/chapter21/#bnf-491)<sub>491</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>, [BNF rule #81](/chapter21/#bnf-81)<sub>81</sub>, [BNF rule #0](/chapter21/#bnf-0)<sub>0</sub>

- lerfu-string

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- lerfu-word

  [BNF rule #817](/chapter21/#bnf-817)<sub>817</sub>, [BNF rule #987](/chapter21/#bnf-987)<sub>987</sub>, [BNF rule #812](/chapter21/#bnf-812)<sub>812</sub>

- linkargs

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #151](/chapter21/#bnf-151)<sub>151</sub>

- links

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #160](/chapter21/#bnf-160)<sub>160</sub>, [BNF rule #161](/chapter21/#bnf-161)<sub>161</sub>

- mex

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>, [BNF rule #300](/chapter21/#bnf-300)<sub>300</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- mex-1

  [BNF rule #311](/chapter21/#bnf-311)<sub>311</sub>, [BNF rule #310](/chapter21/#bnf-310)<sub>310</sub>

- mex-2

  [BNF rule #311](/chapter21/#bnf-311)<sub>311</sub>, [BNF rule #312](/chapter21/#bnf-312)<sub>312</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>

- mex-operator

  [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>, [BNF rule #372](/chapter21/#bnf-372)<sub>372</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- number

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #1051](/chapter21/#bnf-1051)<sub>1051</sub>, [BNF rule #300](/chapter21/#bnf-300)<sub>300</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- operand

  [BNF rule #312](/chapter21/#bnf-312)<sub>312</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>, [BNF rule #332](/chapter21/#bnf-332)<sub>332</sub>

- operand-1

  [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>

- operand-2

  [BNF rule #382](/chapter21/#bnf-382)<sub>382</sub>, [BNF rule #383](/chapter21/#bnf-383)<sub>383</sub>

- operand-3

  [BNF rule #383](/chapter21/#bnf-383)<sub>383</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>

- operator

  [BNF rule #311](/chapter21/#bnf-311)<sub>311</sub>, [BNF rule #312](/chapter21/#bnf-312)<sub>312</sub>, [BNF rule #310](/chapter21/#bnf-310)<sub>310</sub>, [BNF rule #372](/chapter21/#bnf-372)<sub>372</sub>, [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>, [BNF rule #330](/chapter21/#bnf-330)<sub>330</sub>

- operator-1

  [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>

- operator-2

  [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>

- paragraph

  [BNF rule #4](/chapter21/#bnf-4)<sub>4</sub>

- paragraphs

  [BNF rule #4](/chapter21/#bnf-4)<sub>4</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- prenex

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #11](/chapter21/#bnf-11)<sub>11</sub>, [BNF rule #41](/chapter21/#bnf-41)<sub>41</sub>

- quantifier

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #95](/chapter21/#bnf-95)<sub>95</sub>, [BNF rule #112](/chapter21/#bnf-112)<sub>112</sub>

- relative-clause

  [BNF rule #121](/chapter21/#bnf-121)<sub>121</sub>

- relative-clauses

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #95](/chapter21/#bnf-95)<sub>95</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #112](/chapter21/#bnf-112)<sub>112</sub>, [BNF rule #111](/chapter21/#bnf-111)<sub>111</sub>, [BNF rule #90](/chapter21/#bnf-90)<sub>90</sub>

- rp-expression

  [BNF rule #310](/chapter21/#bnf-310)<sub>310</sub>, [BNF rule #332](/chapter21/#bnf-332)<sub>332</sub>

- rp-operand

  [BNF rule #330](/chapter21/#bnf-330)<sub>330</sub>

- selbri

  [BNF rule #53](/chapter21/#bnf-53)<sub>53</sub>, [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #374](/chapter21/#bnf-374)<sub>374</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #131](/chapter21/#bnf-131)<sub>131</sub>, [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>, [BNF rule #95](/chapter21/#bnf-95)<sub>95</sub>, [BNF rule #112](/chapter21/#bnf-112)<sub>112</sub>, [BNF rule #815](/chapter21/#bnf-815)<sub>815</sub>

- selbri-1

  [BNF rule #130](/chapter21/#bnf-130)<sub>130</sub>

- selbri-2

  [BNF rule #131](/chapter21/#bnf-131)<sub>131</sub>, [BNF rule #132](/chapter21/#bnf-132)<sub>132</sub>

- selbri-3

  [BNF rule #132](/chapter21/#bnf-132)<sub>132</sub>, [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- selbri-4

  [BNF rule #133](/chapter21/#bnf-133)<sub>133</sub>

- selbri-5

  [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #135](/chapter21/#bnf-135)<sub>135</sub>

- selbri-6

  [BNF rule #135](/chapter21/#bnf-135)<sub>135</sub>, [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>

- sentence

  [BNF rule #14](/chapter21/#bnf-14)<sub>14</sub>, [BNF rule #41](/chapter21/#bnf-41)<sub>41</sub>

- simple-tense-modal

  [BNF rule #971](/chapter21/#bnf-971)<sub>971</sub>, [BNF rule #815](/chapter21/#bnf-815)<sub>815</sub>

- space

  [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>

- space-int-props

  [BNF rule #1046](/chapter21/#bnf-1046)<sub>1046</sub>

- space-interval

  [BNF rule #1040](/chapter21/#bnf-1040)<sub>1040</sub>

- space-offset

  [BNF rule #1040](/chapter21/#bnf-1040)<sub>1040</sub>

- stag

  [BNF rule #52](/chapter21/#bnf-52)<sub>52</sub>, [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>, [BNF rule #807](/chapter21/#bnf-807)<sub>807</sub>, [BNF rule #383](/chapter21/#bnf-383)<sub>383</sub>, [BNF rule #381](/chapter21/#bnf-381)<sub>381</sub>, [BNF rule #371](/chapter21/#bnf-371)<sub>371</sub>, [BNF rule #370](/chapter21/#bnf-370)<sub>370</sub>, [BNF rule #134](/chapter21/#bnf-134)<sub>134</sub>, [BNF rule #135](/chapter21/#bnf-135)<sub>135</sub>, [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>, [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>, [BNF rule #93](/chapter21/#bnf-93)<sub>93</sub>, [BNF rule #2](/chapter21/#bnf-2)<sub>2</sub>

- statement

  [BNF rule #10](/chapter21/#bnf-10)<sub>10</sub>, [BNF rule #11](/chapter21/#bnf-11)<sub>11</sub>

- statement-1

  [BNF rule #11](/chapter21/#bnf-11)<sub>11</sub>

- statement-2

  [BNF rule #12](/chapter21/#bnf-12)<sub>12</sub>, [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>

- statement-3

  [BNF rule #13](/chapter21/#bnf-13)<sub>13</sub>

- subsentence

  [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #122](/chapter21/#bnf-122)<sub>122</sub>, [BNF rule #41](/chapter21/#bnf-41)<sub>41</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- sumti

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #385](/chapter21/#bnf-385)<sub>385</sub>, [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>, [BNF rule #94](/chapter21/#bnf-94)<sub>94</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>, [BNF rule #112](/chapter21/#bnf-112)<sub>112</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>, [BNF rule #83](/chapter21/#bnf-83)<sub>83</sub>

- sumti-1

  [BNF rule #90](/chapter21/#bnf-90)<sub>90</sub>

- sumti-2

  [BNF rule #91](/chapter21/#bnf-91)<sub>91</sub>

- sumti-3

  [BNF rule #92](/chapter21/#bnf-92)<sub>92</sub>, [BNF rule #93](/chapter21/#bnf-93)<sub>93</sub>

- sumti-4

  [BNF rule #93](/chapter21/#bnf-93)<sub>93</sub>, [BNF rule #94](/chapter21/#bnf-94)<sub>94</sub>

- sumti-5

  [BNF rule #94](/chapter21/#bnf-94)<sub>94</sub>

- sumti-6

  [BNF rule #95](/chapter21/#bnf-95)<sub>95</sub>, [BNF rule #111](/chapter21/#bnf-111)<sub>111</sub>

- sumti-tail

  [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- sumti-tail-1

  [BNF rule #111](/chapter21/#bnf-111)<sub>111</sub>

- tag

  [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>, [BNF rule #130](/chapter21/#bnf-130)<sub>130</sub>, [BNF rule #14](/chapter21/#bnf-14)<sub>14</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>, [BNF rule #83](/chapter21/#bnf-83)<sub>83</sub>

- tail-terms

  [BNF rule #51](/chapter21/#bnf-51)<sub>51</sub>, [BNF rule #52](/chapter21/#bnf-52)<sub>52</sub>, [BNF rule #53](/chapter21/#bnf-53)<sub>53</sub>, [BNF rule #50](/chapter21/#bnf-50)<sub>50</sub>, [BNF rule #54](/chapter21/#bnf-54)<sub>54</sub>

- tanru-unit

  [BNF rule #136](/chapter21/#bnf-136)<sub>136</sub>

- tanru-unit-1

  [BNF rule #150](/chapter21/#bnf-150)<sub>150</sub>

- tanru-unit-2

  [BNF rule #151](/chapter21/#bnf-151)<sub>151</sub>, [BNF rule #152](/chapter21/#bnf-152)<sub>152</sub>

- tense-modal

  [BNF rule #491](/chapter21/#bnf-491)<sub>491</sub>

- term

  [BNF rule #160](/chapter21/#bnf-160)<sub>160</sub>, [BNF rule #161](/chapter21/#bnf-161)<sub>161</sub>, [BNF rule #122](/chapter21/#bnf-122)<sub>122</sub>, [BNF rule #82](/chapter21/#bnf-82)<sub>82</sub>

- terms

  [BNF rule #20](/chapter21/#bnf-20)<sub>20</sub>, [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #30](/chapter21/#bnf-30)<sub>30</sub>, [BNF rule #40](/chapter21/#bnf-40)<sub>40</sub>, [BNF rule #71](/chapter21/#bnf-71)<sub>71</sub>, [BNF rule #85](/chapter21/#bnf-85)<sub>85</sub>

- terms-1

  [BNF rule #80](/chapter21/#bnf-80)<sub>80</sub>

- terms-2

  [BNF rule #81](/chapter21/#bnf-81)<sub>81</sub>

- termset

  [BNF rule #83](/chapter21/#bnf-83)<sub>83</sub>

- text

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>, [BNF rule #1101](/chapter21/#bnf-1101)<sub>1101</sub>, [BNF rule #97](/chapter21/#bnf-97)<sub>97</sub>

- text-1

  [BNF rule #14](/chapter21/#bnf-14)<sub>14</sub>, [BNF rule #0](/chapter21/#bnf-0)<sub>0</sub>

- time

  [BNF rule #972](/chapter21/#bnf-972)<sub>972</sub>

- time-offset

  [BNF rule #1030](/chapter21/#bnf-1030)<sub>1030</sub>

- utterance

  [BNF rule #1101](/chapter21/#bnf-1101)<sub>1101</sub>

- vocative

  [BNF rule #32](/chapter21/#bnf-32)<sub>32</sub>

</div>
