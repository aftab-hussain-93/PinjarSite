export const apiUrl = process.env.NODE_ENV === "production" ? "https://api.krnpsangha.com/api/v1" :"http://localhost:3000/api/v1"
export const serverUrl = process.env.NODE_ENV === "production" ? "https://api.krnpsangha.com" : "http://localhost:3000"
export const reportsDir = process.env.NODE_ENV === "production" ? "https://api.krnpsangha.com/uploads/reports/" : "http://localhost:3000/uploads/reports/"
export const avatarDir = process.env.NODE_ENV === "production" ? "https://api.krnpsangha.com/uploads/images/avatar/" : "http://localhost:3000/uploads/images/avatar/"
