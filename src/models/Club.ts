import { Dancer } from "./Dancer"

export class Club {

    private floorDancers: Dancer[] = []
    private barCustomers: Dancer[] = []

    addFloorDancer(dancer: Dancer) {
        this.floorDancers.push(dancer)
    }

    addBarCustomer(customer: Dancer) {
        this.barCustomers.push(customer)
    }
}