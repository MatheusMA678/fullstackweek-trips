import { prisma } from '@/lib/prisma'
import React from 'react'

const getTrips = async () => {
  const trips = await prisma.trip.findMany()
  return trips
}

export async function Trips() {
  const trips = await getTrips()

  console.log({ trips })

  return (
    <div>
      {trips.length !== 0 ? (
        trips.map((trip, index) => {
          return (
            <div key={trip.id}>
              <span>Trip {index}</span>
            </div>
          )
        })
      ) : (
        <div>
          <span>Você não tem reservas.</span>
        </div>
      )}
    </div>
  )
}
