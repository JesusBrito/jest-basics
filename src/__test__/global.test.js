const text = "Hello World";
const fruits = ["Apple", "Banana", "Orange"];
describe("Basic tests", () => {
    test('Should be a string', () => {
        expect(text).toMatch(/World/);
    });

    test('Check if array of fruits have a Banana', () => {
        expect(fruits).toContain("Banana");
    })

    test("Number it´s biggest than other", () => {
        expect(11).toBeGreaterThan(10);
    })

    test('Check if it´s true', () => {
      expect(true).toBeTruthy();
    });
    
    const reverseString = (str, callback) => {
        if (typeof str === 'string') {
            callback(str.split('').reverse().join(''));
        }
    }

    test("Test a callback", () => {
        reverseString("Hola", (str) => {
            expect(str).toBe("aloH");
        })
    })

    const reverseString2 = str => {
        if (typeof str === 'string') {
            return new Promise((resolve, reject) => {
                if(!str){
                    reject(Error("String is empty"));
                }
                resolve(str.split('').reverse().join(''));
            })
        }
    }
   

    test("Test a promise", () => {
        reverseString2("Hola").then(string =>{
            expect(string).toBe("aloH");
        })
    })


    test("Test async/await", async () => {
        const string = await reverseString2("Hola");
        expect(string).toBe("aloH");
    })
    /*
    afterEach(() => console.log("After each teast"))
    afterAll(() => console.log("After all teast"))
    beforeEach(() => console.log("Before each teast"))
    beforeAll(() => console.log("Before all teast"));
    */
})