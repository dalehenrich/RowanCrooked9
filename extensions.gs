set package: RowanCrooked9-Core
doit
(RowanSample9V3Class1
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
classmethod: RowanSample9V3ByteClass1
foo ^'foo'
%

category: 'accessing'
method: RowanSample9V3Class1
foo ^'foo'
%

category: 'tests'
method: RowanSample9V3TestCase
test6  self assert: RowanSample9V3ByteClass1 foo equals: 'foo'
%

category: 'tests'
method: RowanSample9V3TestCase
test7  self assert: RowanSample9V3Class1 new foo = 'foo'
%

category: 'tests'
method: RowanSample9V3TestCase
test8  self assert: RowanSample9V3Class2 new foo = 'foo'
%
