#use chai for assertions 
assert = chai.assert  
expect = chai.expect

describe 'Basic Database CRUD Operations', ->
	#Think of shelf as in a physical shelf. It holds and display ShelfItems (items we are voting for)
	describe 'Wrapper Class for Shelf Collections', -> 
		urlTag = 'myGuidTag'
		it 'should create and retrieve a new Shelf', ->
			test = Shelf.Create(urlTag)				#create a new shelf obj in db
			check = Shelf.Get(shelf)				#get same item from db 

			expect(check).to.have.property('urlTag')
			expect(check).to.have.property('items')
			expect(check).to.deep.equal(test);

		it 'should be able to add two items to shelf', ->
			error #to be filled up with expect cases
			
		it 'should be able to remove two item from shelf', ->
			error

		it 'should remove an existing shelf', ->
			Shelf.Delete(urlTag)
			check = Shelf.Get(urlTag)
			expect(check).to.not.exist


	describe 'Wrapper class for Item Collections', -> 
		it 'should create and retrieve a new Item', ->
			itemDescription = 'Macdonalds'
			itemYesCount = 0
			itemNoCount = 1

			test = Item.Create(itemDescription)

			expect(test).to.have.property('shelfTag')
			expect(test).to.have.property('description')
			expect(test).to.have.property('yesCount')
			expect(test).to.have.property('noCount')
			
			expect(test.description).to.equal(itemDescription)

		it 'should get and Set Yes counter', ->
			error

		it 'should get and Set No counter', ->
			error

		it 'should increase Yes & No counter', ->
			error

		it 'should decrease Yes & No counter', ->
			error


