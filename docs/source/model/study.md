# Case Study

The Natural Language Learning world dispatches data; English.

<br>

## Structure Expectations for Modelling

Prior to tokenization, each word of a sentence/paragraph must be tagged.[^limits]

<br>

<table style="width: 80%; font-size: small">
    <colgroup>
        <col span="1" style="width: 11.0%;">
        <col span="1" style="width: 39.5%;">
        <col span="1" style="width: 23.5%;">
    </colgroup>
    <thead><tr style="text-align: left"><th>sentence<br>identifier</th><th>sentence</th><th>tags string</th></tr></thead>
        <tr>
          <td>1</td>
          <td>Thousands of demonstrators have marched through London to protest the war in Iraq and demand the withdrawal of British troops from that country.</td>
          <td>O,O,O,O,O,O,B-geo,O,O,O,O,O,B-geo,O,O,O,O,O,B-gpe,O,O,O,O,O</td>
        </tr>
        <tr>
          <td>10022</td>
          <td>North Korea says flooding caused by last week 's typhoon , Wipha , has destroyed 14,000 homes and 1,09,000 hectares of crops.</td>
          <td>B-geo,I-geo,O,O,O,O,O,O,O,O,O,B-per,O,O,O,O,O,O,O,O,O,O,O</td>
        </tr>
        <tr>
          <td>38694</td>
          <td>The Sri Lankan government has blamed the group for his assassination, a charge denied by the Tamil Tigers.</td>
          <td>O,B-org,I-org,O,O,O,O,O,O,O,O,O,O,O,O,O,O,B-org,I-org,O</td>
        </tr>
</table>

<br>
<br>

## Frequencies

<script src="../_static/js/pages/tags.js" type="text/javascript"></script>
<div id="container0003" style="height: 445px; width: 890px;  margin: 0 auto"></div>

<br>

These classes were deduced via agency interviews; they underpin the tag types design.

<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>

[^limits]: An architecture's, pre-trained model's, token limit and optimal hyperparameters affect the length of an instance's sentence/paragraph.
