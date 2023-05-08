class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.name = "ValidationError"
    }
}

class FileParsingError extends Error {
    constructor(message) {
      super(message)
      this.name = "FileParsingError"
    }
}

const main = () => {
    try {
        //throw new Error("I am broken.")
        //throw new ValidationError('Firstname is required.')
        throw new FileParsingError('Missing id for input file.')
    }
    catch (Err) { // Other languages support catching the type of the exception.
        if (Err instanceof ValidationError) {
            console.log(Err)
        }
        if (Err instanceof FileParsingError) {
            console.log(Err)
        }
        if (Err instanceof Error) {
           console.log("Here")
        }
    }
}

main()
    

