set package: RowanCrooked9-Core
doit
(RowanSample9Class1
	subclass: 'RowanSample9Class2'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: RowanSample9_1
	options: #()
)
		category: nil;
		immediateInvariant.
true.
%

category: 'accessing'
classmethod: RowanSample9Class2
foo ^'foo'
%

category: 'accessing'
classmethod: RowanSample9ByteClass1
foo ^'foo'
%

category: 'accessing'
method: RowanSample9Class1
foo ^'foo'
%

category: 'tests'
method: RowanSample9TestCase
test6  self assert: RowanSample9ByteClass1 foo equals: 'foo'
%

category: 'tests'
method: RowanSample9TestCase
test7  self assert: RowanSample9Class1 new foo = 'foo'
%

category: 'tests'
method: RowanSample9TestCase
test8  self assert: RowanSample9Class2 new foo = 'foo'
%
