# RowanCrooked9

Collection of manually constructed test cases for [GemTalk/Rowan project](https://github.com/GemTalk/Rowan). 

These are disk structure inconsistencies that have been introduced by mistakes during `git merge` or by manual manipulation of the files and directories.

## Summary of Crooked Specs

### [spec_0001](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0001)
Test case for GemTalk/Rowan#828.

Manually modified package structure from [RowanSample9:spec_0014](https://github.com/dalehenrich/RowanSample9/tree/spec_0014) to duplicate an inconsistency introduced during a code merge. 

### [spec_0002](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0002)
Test case for GemTalk/Rowan#816.

Generated spec_0002.gs ignoring RowanSample9-Extension1 package (which duplicates method in RowanSampl9-Extensions).

Then using issue_816.solo script, load spec_0002.gs and then attempt to adopt the RowanSample9 project which reproduces GemTalk/Rowan#816
