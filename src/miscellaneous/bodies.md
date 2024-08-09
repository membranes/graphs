---
layout: default
title: Listed Bodies
parent: Miscellaneous
nav_order: 2
external_css:
- https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs
custom_js:
- latex
---

# Listed Bodies
{: .no_toc }

<br>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## The Listed Bodies

The listed bodies that <a href="https://www.legislation.gov.uk/ssi/2015/347/contents/made" target="_blank">Climate Change (Scotland) Order 2015</a>, and its <a href="https://www.legislation.gov.uk/ssi/2020/281/contents/made" target="_blank">amendment</a>.  Include

* Ministers, The Parliament
* Holders of offices in the Scottish Administration which are non-ministerial offices
* Local Government
* National Health Service
* Educational Institutions
* Police
* Others

A plausible set of attributes in a table named `bodies` is

* body_name, e.g., Scottish Ambulance Service Board
* body_id, e.g., 3999131
* body_type_id, i.e., 6113 for National Health Service bodies [linked to table: body_types]

Each instance of the bodies should represent a distinct body.  In addition to the order's explicitly named bodies, ensure that the inventory of bodies includes

* Local Government Bodies
    * [32 local authorities](https://www.mygov.scot/organisations#scottish-local-authority),
    * [7 regional transport partnerships](https://www.transport.gov.scot/our-approach/strategy/regional-transport-partnerships/)
* Educational Institutions
* Others
    * Integration Joint Boards: REF. [9.2](https://www.legislation.gov.uk/asp/2014/9/section/9) of  [Public Bodies (Joint Working) (Scotland) Act 2014](https://www.legislation.gov.uk/asp/2014/9/contents)



## The Listed Bodies: Scotland's National Health Service

A body type may have its own classifications, e.g., Scotland's National Health Service organisations fall into one of the following health body classes

* Regional
* Special
* Public

Hence, a National Health Service `bodies` table might be expanded

* body_name, e.g., Scottish Ambulance Service Board
* body_id, e.g., 3999131
* body_type_id, i.e., 6113 for National Health Service bodies [linked to table: body_type]
* body_type_class_id, 2 for Special [linked to table: body_type_classes]

<br>
<br>

<br>
<br>
