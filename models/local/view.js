const fs = require("node:fs/promises")
const {join} = require("node:path")

class viewModel{
	static async getResource({url}){
		try{
			let response = await fs.readFile(join(process.cwd(),"view",url))
			return response
		}
		catch{
			return false
		}
	}
}

module.exports={viewModel}