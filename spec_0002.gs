! Class Declarations
! Generated file, do not Edit

doit
(Object
	subclass: 'RowanSample9Class1'
	instVarNames: #( ivar1 )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: RowanSample9_1
	options: #()
)
		category: 'RowanSample9-Core';
		comment: 'I am an example class';
		immediateInvariant.
true.
%

doit
(TestCase
	subclass: 'RowanSample9TestCase'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: RowanSample9_1
	options: #()
)
		category: 'RowanSample9-Tests';
		comment: 'I test the example class';
		immediateInvariant.
true.
%

! Class implementation for 'RowanSample9Class1'

!		Instance methods for 'RowanSample9Class1'

category: 'accessing'
method: RowanSample9Class1
foo ^1
%

! Class implementation for 'RowanSample9TestCase'

!		Instance methods for 'RowanSample9TestCase'

category: 'tests'
method: RowanSample9TestCase
test  self assert: RowanSample9Class1 new foo = 1
%

category: 'tests'
method: RowanSample9TestCase
test2  self assert: RowanSample9Class1 bar = 'bar'
%

category: 'tests'
method: RowanSample9TestCase
testSymbolDicts
	self assert: ((Rowan image symbolDictNamed: 'RowanSample9_1') includesKey: 'RowanSample9Class1' asSymbol).
	self assert: ((Rowan image symbolDictNamed: 'RowanSample9_1') includesKey: 'RowanSample9TestCase' asSymbol).
%

! Class extensions for 'RowanSample9Class1'

!		Class methods for 'RowanSample9Class1'

category: '*rowansample9-extensions'
classmethod: RowanSample9Class1
bar ^'bar'
%

