app.get('/getAvailableSlots', async (req, res) => {
  const { branch, date } = req.query;

  try {
    const availableSlots = await Slot.find({ branch, date, bookedAppointments: { $lt: 2 } });
    res.status(200).json(availableSlots);
  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ message: 'Error fetching available slots!' });
  }
});
