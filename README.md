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

Then using issue_816.solo script, load spec_0002.gs and then attempt to adopt the RowanSample9 project which reproduces GemTalk/Rowan#816.

### [spec_0003](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0003)
Test case for GemTalk/Rowan#820. Part 1.

When generating packages from the extensions.gs, the class and method categories should be automatically adjusted to fit the package convention RowanHybrid, Monticello or Rowan.

### [spec_0004](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0004)
Test case for GemTalk/Rowan#820.Part 2.

### [spec_0005](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0005)
Test case for GemTalk/Rowan#896. Duplicate class definition error in a filetree repo

### [spec_0006](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0006)
Test case for GemTalk/Rowan#896. Duplicate method definition error in a tonel repo

### [spec_0007](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0007)
Test case for GemTalk/Rowan#896. Produces "Encountered an existing association for a new class RowanSample9V3Class1" for filetree.

Duplicate class definition error in a filetree repo

### [spec_0008](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0008)
Test case for GemTalk/Rowan#896. Duplicate class definition error in a tonel repo

### [spec_0009](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0009)
Test case for GemTalk/Rowan#896. Invalid class category error in a filetree repo

### [spec_0010](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0010)
Test case for GemTalk/Rowan#896. Start with spec_0007 and remove the extra package and add a duplicate class definition directory for filetree.

### [spec_0011](https://github.com/dalehenrich/RowanCrooked9/tree/spec_0011)
Test case for GemTalk/Rowan#920. Start with spec_0005 and manually edit to create case insensitive filename methods as written by GsDevKit filetree.

